"""Production-specific mobile and offline checks. Run pnpm build and pnpm preview first."""
import json
import os
import subprocess
import sys
from pathlib import Path
from playwright.sync_api import sync_playwright, expect

root = Path(__file__).resolve().parents[1]
base = sys.argv[1] if len(sys.argv) > 1 else 'http://127.0.0.1:4173'
script = "import {getAllBabsForKelas} from './src/data/paiData.js'; const chapters = [1,5,6].flatMap(k=>['cp-lama','cp-baru'].flatMap(m=>getAllBabsForKelas(k,0,m).map(b=>({kelas:k,id:b.id})))); console.log(JSON.stringify(chapters));"
chapters = json.loads(subprocess.check_output(['node', '--input-type=module', '-e', script], cwd=root).decode('utf-8'))
with sync_playwright() as p:
    executable = os.environ.get('PLAYWRIGHT_CHROMIUM_EXECUTABLE')
    browser = p.chromium.launch(headless=True, **({'executable_path': executable} if executable else {}))
    context = browser.new_context(viewport={'width':360,'height':850}, reduced_motion='reduce')
    page = context.new_page()
    errors = []
    page.on('pageerror', lambda error: errors.append(str(error)))
    for chapter in chapters:
        path = f"{base}/kelas/{chapter['kelas']}/bab/{chapter['id']}"
        response = page.goto(path)
        assert response.status == 200, path
        expect(page.get_by_role('heading',level=1)).to_be_visible()
        assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth'), path
    print('PASS: production deep links and all 60 chapter layouts at 360px', flush=True)
    page.goto(base + '/')
    page.evaluate('navigator.serviceWorker.ready.then(() => true)')
    page.reload()
    page.wait_for_function('navigator.serviceWorker.controller !== null')
    context.set_offline(True)
    page.goto(base + '/kelas/6/bab/k6-baru-bab-9')
    expect(page.get_by_role('heading',level=1)).to_contain_text('Wakaf')
    page.get_by_role('button',name='CP Lama (Buku)',exact=True).click()
    expect(page).to_have_url(base + '/kelas/6/bab/k6-lama-bab-9')
    expect(page.get_by_role('heading',level=1)).to_have_text('Mengamalkan Puasa Sunah')
    assert not errors, errors
    print('PASS: production offline navigation and curriculum switching', flush=True)
    browser.close()
