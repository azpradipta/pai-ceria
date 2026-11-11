import { mkdir, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { getAllBabsForKelas } from '../src/data/paiData.js';

const output = resolve(process.argv[2] || 'generated/materi-pai.json');
const chapters = [1, 5, 6].flatMap(kelas => ['cp-lama', 'cp-baru'].flatMap(mode =>
  getAllBabsForKelas(kelas, 0, mode).map(chapter => ({ kelas, mode, ...chapter }))));
const pack = {
  judul: 'Materi Pendamping PAI Ceria',
  keterangan: 'Materi dikembangkan dari buku PDF dan lingkup DOCX yang disertakan. Contoh, aktivitas, dan soal merupakan pengembangan pembelajaran.',
  jumlahBab: chapters.length,
  bab: chapters,
};
await mkdir(dirname(output), { recursive: true });
await writeFile(output, JSON.stringify(pack, null, 2) + '\n', 'utf8');
console.log(`Materi ${chapters.length} versi bab diekspor ke ${output}`);
