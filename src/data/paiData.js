import { kelas1Data } from './kelas1Data.js';
import { kelas5Data } from './kelas5Data.js';
import { kelas6Data } from './kelas6Data.js';
import { perbandinganCP } from './kurikulumInfo.js';
import { enrichChapter } from './enrichChapter.js';

const originalKelasData = {
  1: kelas1Data,
  5: kelas5Data,
  6: kelas6Data,
};

export const allKelasData = Object.fromEntries(Object.entries(originalKelasData).map(([kelas, data]) => [kelas, {
  ...data,
  ...Object.fromEntries([['cpLama', 'cp-lama'], ['cpBaru', 'cp-baru']].map(([key, mode]) => [key, {
    deskripsi: mode === 'cp-lama'
      ? `Materi kelas ${kelas} mengikuti urutan buku siswa PDF, dilengkapi penjelasan, aktivitas, dan latihan pemahaman.`
      : `Materi kelas ${kelas} dikembangkan mengikuti lingkup dokumen perubahan CP fase ${Number(kelas) === 1 ? 'A' : 'C'}, dengan praktik dan latihan pendamping.`,
    semester1: data[key].semester1.map(chapter => enrichChapter(chapter, Number(kelas), mode)),
    semester2: data[key].semester2.map(chapter => enrichChapter(chapter, Number(kelas), mode)),
  }]))
}]));

export { perbandinganCP };

export function getAllBabsForKelas(kelas, semester = 0, mode = 'cp-baru') {
  const data = allKelasData[kelas];
  if (!data) return [];

  const curObj = (mode === 'cp-lama') ? data.cpLama : data.cpBaru;
  if (!curObj) return [];

  if (semester === 1) return curObj.semester1 || [];
  if (semester === 2) return curObj.semester2 || [];
  return [...(curObj.semester1 || []), ...(curObj.semester2 || [])];
}

export function getMateriByKelasAndBab(kelas, babId) {
  if (typeof babId !== 'string') return null;
  const parsed = babId.match(/^k(1|5|6)-(lama|baru)-bab-(10|[1-9])$/);
  if (!parsed || Number(parsed[1]) !== Number(kelas)) return null;
  const mode = parsed[2] === 'lama' ? 'cp-lama' : 'cp-baru';
  const chapter = getAllBabsForKelas(kelas, 0, mode).find(item => item.id === babId);
  return chapter ? { ...chapter, mode } : null;
}
const STORAGE_KEY_PROGRESS = 'pai_ceria_student_progress_v1';
export function getSavedProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY_PROGRESS)) || {};
    return { completedGames: saved.completedGames && typeof saved.completedGames === 'object' ? saved.completedGames : {},
      readChapters: saved.readChapters && typeof saved.readChapters === 'object' ? saved.readChapters : {} };
  } catch { return { completedGames: {}, readChapters: {} }; }
}
export function saveProgress(progress) {
  try { localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress)); } catch { /* Learning remains available when storage is unavailable. */ }
}
