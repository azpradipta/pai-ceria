"""Browser regression checks. Run a Vite server first; requires Python playwright."""
import json
import os
import subprocess
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright, expect

ROOT = Path(__file__).resolve().parents[1]
BASE = sys.argv[1] if len(sys.argv) > 1 else 'http://127.0.0.1:5173'
script = "import { getAllBabsForKelas } from './src/data/paiData.js'; console.log(JSON.stringify([1,5,6].flatMap(k=>['cp-lama','cp-baru'].flatMap(m=>getAllBabsForKelas(k,0,m).map(b=>({...b,kelas:k,mode:m}))))))"
chapters = json.loads(subprocess.check_output(['node', '--input-type=module', '-e', script], cwd=ROOT).decode('utf-8'))
errors = []

with sync_playwright() as p:
    executable = os.environ.get('PLAYWRIGHT_CHROMIUM_EXECUTABLE')
    browser = p.chromium.launch(headless=True, **({'executable_path': executable} if executable else {}))
    context = browser.new_context(viewport={'width': 1365, 'height': 900}, reduced_motion='reduce')
    page = context.new_page()
    page.on('pageerror', lambda error: errors.append(str(error)))

    # Exact reported bug: fresh visit to old URL, then select CP Baru.
    page.goto(BASE + '/kelas/6/bab/k6-lama-bab-10')
    expect(page.get_by_role('button', name='CP Lama (Buku)', exact=True)).to_have_attribute('aria-pressed', 'true')
    page.get_by_role('button', name='CP Baru', exact=True).click()
    expect(page).to_have_url(BASE + '/kelas/6/bab/k6-baru-bab-10')
    expect(page.get_by_role('heading', level=1)).to_contain_text('Kisah Keteladanan')
    page.reload()
    expect(page.get_by_role('button', name='CP Baru', exact=True)).to_have_attribute('aria-pressed', 'true')
    page.get_by_role('button', name='CP Lama (Buku)', exact=True).click()
    expect(page).to_have_url(BASE + '/kelas/6/bab/k6-lama-bab-10')
    page.go_back()
    expect(page.get_by_role('button', name='CP Baru', exact=True)).to_have_attribute('aria-pressed', 'true')
    page.go_forward()
    expect(page.get_by_role('button', name='CP Lama (Buku)', exact=True)).to_have_attribute('aria-pressed', 'true')
    print('PASS: reported navigation, refresh, back, forward', flush=True)

    # Every chapter and game loads, and switching works on both kinds of route.
    for chapter in chapters:
        path = f"/kelas/{chapter['kelas']}/bab/{chapter['id']}"
        page.goto(BASE + path)
        expect(page.get_by_role('heading', level=1)).to_have_text(chapter['judul'])
        expect(page.get_by_role('heading', name='Ayo praktikkan', exact=True)).to_be_visible()
        expect(page.get_by_role('heading', name='Rujukan bab ini', exact=True)).to_be_visible()
        target = 'cp-baru' if chapter['mode'] == 'cp-lama' else 'cp-lama'
        target_id = chapter['id'].replace('-lama-', '-baru-') if target == 'cp-baru' else chapter['id'].replace('-baru-', '-lama-')
        page.get_by_role('button', name='CP Baru' if target == 'cp-baru' else 'CP Lama (Buku)', exact=True).click()
        expect(page).to_have_url(BASE + f"/kelas/{chapter['kelas']}/bab/{target_id}")
        page.goto(BASE + path + '/game')
        expect(page.get_by_role('heading', level=1)).to_have_text(chapter['game']['nama'])
        page.get_by_role('button', name='CP Baru' if target == 'cp-baru' else 'CP Lama (Buku)', exact=True).click()
        expect(page).to_have_url(BASE + f"/kelas/{chapter['kelas']}/bab/{target_id}/game")
    print('PASS: all 60 chapters, 60 games, and both curriculum switches', flush=True)

    # Complete a quiz, an ordering game, and a matching game through real controls.
    for chapter_id in ['k6-baru-bab-10', 'k1-baru-bab-2', 'k5-baru-bab-2']:
        chapter = next(c for c in chapters if c['id'] == chapter_id)
        page.goto(BASE + f"/kelas/{chapter['kelas']}/bab/{chapter_id}/game")
        game = chapter['game']
        if game['tipe'] == 'order':
            # Wrong choice must not progress or score.
            page.get_by_role('button', name=game['steps'][1]['label'], exact=True).click()
            expect(page.get_by_role('status')).to_contain_text('Belum sesuai')
            for step in game['steps']:
                page.get_by_role('button', name=step['label'], exact=True).click()
            page.get_by_role('button', name='Lanjut latihan pemahaman →', exact=True).click()
        if game['tipe'] == 'memory-card':
            pairs = {}
            for card in game['cards']:
                pairs.setdefault(card['pairId'], []).append(card['id'])
            for first, second in pairs.values():
                page.get_by_role('button', name=f'Buka kartu {first}', exact=True).click()
                page.get_by_role('button', name=f'Buka kartu {second}', exact=True).click()
                page.wait_for_timeout(700)
            page.get_by_role('button', name='Lanjut latihan pemahaman →', exact=True).click()
        for q in game['questions']:
            label = f"{chr(65 + q['benar'])}." + q['opsi'][q['benar']]
            page.get_by_role('button', name=label, exact=True).click()
            page.get_by_role('button', name='Lihat hasil latihan' if q is game['questions'][-1] else 'Lanjut ke soal berikutnya →', exact=True).click()
        expect(page.get_by_text('100 / 100', exact=True)).to_be_visible()
        saved = page.evaluate("JSON.parse(localStorage.getItem('pai_ceria_student_progress_v1'))")
        assert saved['completedGames'][game['id']]['score'] == 100
        assert 'stars' not in saved
    print('PASS: quiz, ordering, memory, score, local progress', flush=True)

    for kelas in [1,5,6]:
        page.goto(BASE + f'/kelas/{kelas}?cp=cp-lama')
        expect(page.get_by_role('button', name='CP Lama (Buku)', exact=True)).to_have_attribute('aria-pressed', 'true')
        page.get_by_role('button', name='CP Baru', exact=True).click()
        expect(page).to_have_url(BASE + f'/kelas/{kelas}?cp=cp-baru')
        page.reload()
        expect(page.get_by_role('button', name='CP Baru', exact=True)).to_have_attribute('aria-pressed', 'true')
        search = page.get_by_role('searchbox', name='Cari materi atau bab')
        search.fill('tidak-ada-materi-ini')
        expect(page.get_by_text('Tidak ada materi yang sesuai', exact=True)).to_be_visible()
        page.get_by_role('button', name='Reset Filter', exact=True).click()
        expect(page.get_by_role('link', name='Buka Materi Lengkap →')).to_have_count(10)

    for path in ['/kelas/2', '/kelas/6/bab/k5-lama-bab-10', '/kelas/6/bab/k6-lama-bab-99', '/catatan-guru', '/tidak-ada']:
        page.goto(BASE + path)
        expect(page.get_by_role('heading', level=1)).to_have_text('Mari kembali belajar.')

    # Responsive overflow and stale UI checks.
    for width in [360,390,768,1365]:
        page.set_viewport_size({'width': width, 'height': 900})
        for path in ['/', '/kelas/6?cp=cp-baru', '/kelas/6/bab/k6-baru-bab-2', '/perubahan-cp']:
            page.goto(BASE + path)
            expect(page.get_by_role('heading', level=1)).to_be_visible()
            assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth'), (width, path)
            text = page.locator('body').inner_text()
            for removed in ['Catatan Ibu', 'Mode Layar Mengajar', 'Bintang Prestasi', 'Penjelasan Teknis Deploy']:
                assert removed not in text
    assert not errors, errors
    print('PASS: class filters, invalid URLs, removed features, mobile/tablet/desktop, no runtime errors', flush=True)
    browser.close()
