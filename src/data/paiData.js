import { kelas1Data } from './kelas1Data';
import { kelas5Data } from './kelas5Data';
import { kelas6Data } from './kelas6Data';
import { perbandinganCP } from './kurikulumInfo';

export const allKelasData = {
  1: kelas1Data,
  5: kelas5Data,
  6: kelas6Data,
};

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

export function getMateriByKelasAndBab(kelas, babId, mode = 'cp-baru') {
  const data = allKelasData[kelas];
  if (!data) return null;

  // Search first in target curriculum mode
  const targetCur = (mode === 'cp-lama') ? data.cpLama : data.cpBaru;
  if (targetCur) {
    const all = [...(targetCur.semester1 || []), ...(targetCur.semester2 || [])];
    const match = all.find(b => b.id === babId);
    if (match) return { ...match, mode };
  }

  // Fallback search in opposite mode if user switched mode while on detail page
  const otherMode = (mode === 'cp-lama') ? 'cp-baru' : 'cp-lama';
  const otherCur = (otherMode === 'cp-lama') ? data.cpLama : data.cpBaru;
  if (otherCur) {
    const allOther = [...(otherCur.semester1 || []), ...(otherCur.semester2 || [])];
    const matchOther = allOther.find(b => b.id === babId);
    if (matchOther) return { ...matchOther, mode: otherMode };
  }

  // If still not matched, check if babId contains a bab number and match by bab number
  const babNumberMatch = babId?.match(/bab[^\d]*(\d+)/i);
  if (babNumberMatch) {
    const bNum = Number(babNumberMatch[1]);
    const curList = getAllBabsForKelas(kelas, 0, mode);
    const byNum = curList.find(b => b.bab === bNum);
    if (byNum) return { ...byNum, mode };
  }

  return null;
}

// LocalStorage helpers
const STORAGE_KEY_PROGRESS = 'pai_ceria_student_progress_v1';
const STORAGE_KEY_NOTES = 'pai_ceria_teacher_notes_v1';

export function getSavedProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PROGRESS);
    return raw ? JSON.parse(raw) : { stars: 0, completedGames: {}, readChapters: {} };
  } catch (e) {
    return { stars: 0, completedGames: {}, readChapters: {} };
  }
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress to localStorage', e);
  }
}

export function getTeacherNotes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_NOTES);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

export function saveTeacherNote(babId, noteText) {
  try {
    const notes = getTeacherNotes();
    notes[babId] = {
      text: noteText,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY_NOTES, JSON.stringify(notes));
    return true;
  } catch (e) {
    console.error('Failed to save teacher note', e);
    return false;
  }
}
