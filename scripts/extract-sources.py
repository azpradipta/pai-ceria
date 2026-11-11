"""Extract supplied books and DOCX tables; flag scanned pages for visual/OCR review."""
import hashlib
import json
import sys
from pathlib import Path
import fitz
from docx import Document

root = Path(__file__).resolve().parents[1]
output = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else root / '.tools' / 'sources'
output.mkdir(parents=True, exist_ok=True)
manifest = []
for source in sorted(root.glob('*.pdf')):
    document = fitz.open(source)
    pages = [{'pdfPage': i + 1, 'text': page.get_text()} for i, page in enumerate(document)]
    empty = [page['pdfPage'] for page in pages if not page['text'].strip()]
    item = {'file': source.name, 'sha256': hashlib.sha256(source.read_bytes()).hexdigest(), 'pages': len(pages), 'pagesWithoutText': empty}
    (output / (source.stem + '.json')).write_text(json.dumps(pages, ensure_ascii=False, indent=2), encoding='utf-8')
    print(f'{source.name}: {len(pages)} halaman, {len(empty)} tanpa teks; periksa visual/OCR jika kosong.')
    manifest.append(item)
for source in sorted(root.glob('*.docx')):
    document = Document(source)
    item = {'file': source.name, 'sha256': hashlib.sha256(source.read_bytes()).hexdigest(),
            'paragraphs': [p.text for p in document.paragraphs if p.text.strip()],
            'tables': [[[cell.text for cell in row.cells] for row in table.rows] for table in document.tables]}
    (output / (source.stem + '.json')).write_text(json.dumps(item, ensure_ascii=False, indent=2), encoding='utf-8')
    manifest.append({'file': source.name, 'sha256': item['sha256'], 'tables': len(item['tables'])})
    print(f'{source.name}: {len(item["tables"])} tabel diekstrak.')
(output / 'manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf-8')
