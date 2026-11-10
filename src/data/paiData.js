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

export function getMateriByKelasAndBab(kelas, babId) {
  const data = allKelasData[kelas];
  if (!data) return null;
  const allBabs = [...data.semester1, ...data.semester2];
  return allBabs.find(b => b.id === babId) || null;
}

export function getAllBabsForKelas(kelas, semester = null) {
  const data = allKelasData[kelas];
  if (!data) return [];
  if (semester === 1) return data.semester1;
  if (semester === 2) return data.semester2;
  return [...data.semester1, ...data.semester2];
}

// LocalStorage helpers for Teacher notes & Gamification stars
const STORAGE_KEY_PROGRESS = 'pai_ceria_student_progress_v1';
const STORAGE_KEY_NOTES = 'pai_ceria_teacher_notes_v1';
const STORAGE_KEY_PREFS = 'pai_ceria_app_prefs_v1';

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

