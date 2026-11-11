"""Audio regression: actual audio graph output, global controls, narration, and mobile logo."""
import os
import sys
import json
import subprocess
from pathlib import Path
from playwright.sync_api import sync_playwright, expect

base = sys.argv[1] if len(sys.argv) > 1 else 'http://127.0.0.1:5173'
with sync_playwright() as p:
    executable = os.environ.get('PLAYWRIGHT_CHROMIUM_EXECUTABLE')
    browser = p.chromium.launch(headless=True, **({'executable_path': executable} if executable else {}))
    context = browser.new_context(viewport={'width':1365,'height':900})
    context.add_init_script('''
      window.audioProbe = { oscillators: 0, energy: 0 };
      const NativeContext = window.AudioContext || window.webkitAudioContext;
      class TrackedContext extends NativeContext {
        constructor(...args) {
          super(...args);
          const analyser = this.createAnalyser();
          analyser.fftSize = 256;
          const originalConnect = AudioNode.prototype.connect;
          const ctx = this;
          AudioNode.prototype.connect = function(target, ...args) {
            if (this.context === ctx && target === ctx.destination && this !== analyser) {
              originalConnect.call(this, analyser);
            }
            return originalConnect.call(this, target, ...args);
          };
          const samples = new Float32Array(analyser.fftSize);
          setInterval(() => { analyser.getFloatTimeDomainData(samples); window.audioProbe.energy = Math.max(window.audioProbe.energy, ...samples.map(Math.abs)); }, 8);
        }
        createOscillator() { window.audioProbe.oscillators++; return super.createOscillator(); }
      }
      window.AudioContext = TrackedContext;
    ''')
    page = context.new_page()
    page.goto(base + '/kelas/6?cp=cp-baru')
    page.get_by_role('button', name='CP Lama (Buku)', exact=True).click()
    page.wait_for_timeout(300)
    probe = page.evaluate('window.audioProbe')
    print('Navigation sound:', probe, flush=True)
    assert probe['oscillators'] > 0, 'Navigation must play a sound when effects are enabled'
    assert probe['energy'] > 0.0001, 'The audio graph must produce a non-silent signal'
    print('PASS: navigation produces sound', flush=True)

    page.get_by_role('button', name='Pengaturan suara', exact=True).click()
    page.get_by_role('switch', name='Musik belajar', exact=True).click()
    count = page.evaluate('window.audioProbe.oscillators')
    page.wait_for_timeout(1400)
    assert page.evaluate('window.audioProbe.oscillators') > count
    expect(page.get_by_role('switch', name='Musik belajar', exact=True)).to_be_checked()
    page.get_by_role('slider', name='Volume suara').fill('20')
    prefs = page.evaluate("JSON.parse(localStorage.getItem('pai_ceria_audio_v1'))")
    assert prefs == {'enabled': True, 'music': True, 'volume': 0.2}
    page.get_by_role('switch', name='Suara aplikasi', exact=True).click()
    expect(page.get_by_role('switch', name='Musik belajar', exact=True)).not_to_be_checked()
    page.get_by_role('button', name='Tutup pengaturan suara', exact=True).click()
    page.wait_for_timeout(200)
    page.evaluate('window.audioProbe.energy = 0')
    muted_count = page.evaluate('window.audioProbe.oscillators')
    page.get_by_role('button', name='CP Baru', exact=True).click()
    page.wait_for_timeout(1200)
    assert page.evaluate('window.audioProbe.oscillators') == muted_count
    assert page.evaluate('window.audioProbe.energy') < 0.0001
    page.reload()
    page.get_by_role('button', name='Pengaturan suara', exact=True).click()
    expect(page.get_by_role('switch', name='Suara aplikasi', exact=True)).not_to_be_checked()
    expect(page.get_by_role('slider', name='Volume suara')).to_have_value('20')
    page.get_by_role('button', name='Coba suara', exact=True).click()
    expect(page.get_by_role('switch', name='Suara aplikasi', exact=True)).to_be_checked()
    print('PASS: music playback, mute silence, volume, preferences, and reactivation', flush=True)

    page.get_by_role('switch', name='Musik belajar', exact=True).click()
    page.get_by_role('button', name='Tutup pengaturan suara', exact=True).click()
    page.goto(base + '/kelas/6/bab/k6-baru-bab-10/game')
    script = "import {getMateriByKelasAndBab} from './src/data/paiData.js'; console.log(JSON.stringify(getMateriByKelasAndBab(6,'k6-baru-bab-10').game.questions[0]));"
    question = json.loads(subprocess.check_output(['node','--input-type=module','-e',script], cwd=Path(__file__).resolve().parents[1]).decode('utf-8'))
    before_answer = page.evaluate('window.audioProbe.oscillators')
    label = f"{chr(65 + question['benar'])}." + question['opsi'][question['benar']]
    page.get_by_role('button', name=label, exact=True).click()
    expect(page.get_by_role('heading', name='Tepat! Mari pahami alasannya.', exact=True)).to_be_visible()
    page.wait_for_timeout(200)
    assert page.evaluate('window.audioProbe.oscillators') - before_answer == 3
    print('PASS: real game answers play feedback without duplicate click sounds', flush=True)

    # Speech output depends on OS voices. Exercise voice selection and lifecycle with a device stub.
    page.add_init_script('''
      window.speechProbe = { calls: [], cancelled: 0 };
      window.SpeechSynthesisUtterance = class { constructor(text) { this.text = text; } };
      Object.defineProperty(window, 'speechSynthesis', { configurable: true, value: {
        getVoices: () => [{lang:'en-US'}, {lang:'id-ID', name:'Indonesia'}],
        cancel() { window.speechProbe.cancelled++; },
        resume() {},
        speak(utterance) { window.speechProbe.calls.push(utterance); utterance.onstart(); }
      }});
    ''')
    page.goto(base + '/kelas/6/bab/k6-baru-bab-10')
    page.get_by_role('button', name='Dengarkan pengantar', exact=True).click()
    expect(page.get_by_role('button', name='Berhenti membaca', exact=True)).to_have_count(1)
    assert page.evaluate('window.speechProbe.calls[0].voice.lang') == 'id-ID'
    page.get_by_role('button', name='Dengarkan penjelasan', exact=True).first.click()
    expect(page.get_by_role('button', name='Berhenti membaca', exact=True)).to_have_count(1)
    assert page.evaluate('window.speechProbe.calls.length') == 2
    page.get_by_role('button', name='Pengaturan suara', exact=True).click()
    page.get_by_role('switch', name='Suara aplikasi', exact=True).click()
    expect(page.get_by_role('button', name='Berhenti membaca', exact=True)).to_have_count(0)
    page.get_by_role('button', name='Tutup pengaturan suara', exact=True).click()
    page.evaluate("() => { window.speechSynthesis.speak = utterance => utterance.onerror({error: 'voice-unavailable'}); }")
    page.get_by_role('button', name='Dengarkan pengantar', exact=True).click()
    expect(page.get_by_role('status')).to_contain_text('Suara pembaca belum bisa diputar')
    expect(page.get_by_role('button', name='Dengarkan pengantar', exact=True)).to_be_visible()
    print('PASS: narration selects Indonesian, replaces previous speech, stops on mute, and reports unavailable voices', flush=True)

    for width in [320, 360, 390, 768, 1024, 1365]:
        page.set_viewport_size({'width':width, 'height':900})
        for path in ['/', '/kelas/6/bab/k6-baru-bab-10']:
            page.goto(base + path)
            expect(page.get_by_role('heading', level=1)).to_be_visible()
            assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth'), (width, path)
            image = page.get_by_role('link', name='PAI Ceria, beranda', exact=True).locator('img')
            assert image.evaluate('image => image.complete && image.naturalWidth > 0')
            page.get_by_role('button', name='Pengaturan suara', exact=True).click()
            expect(page.get_by_role('region', name='Pengaturan suara belajar', exact=True)).to_be_visible()
            assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth'), (width, 'sound panel')
            page.keyboard.press('Escape')
            expect(page.get_by_role('button', name='Pengaturan suara', exact=True)).to_be_focused()
    print('PASS: SVG logo and audio controls at 320–1365px', flush=True)
    browser.close()
