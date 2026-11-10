import { defineStore } from 'pinia';
import { getSavedProgress, saveProgress, getTeacherNotes, saveTeacherNote } from '../data/paiData';
import { sounds } from '../utils/soundEffects';

export const useAppStore = defineStore('appStore', {
  state: () => {
    const saved = getSavedProgress();
    return {
      selectedKelas: 1, // 1, 5, or 6
      selectedSemester: 0, // 0 = Semua, 1 = Sem 1, 2 = Sem 2
      curriculumMode: 'cp-baru', // 'cp-baru' or 'cp-lama'
      searchQuery: '',
      selectedElemen: 'Semua', // 'Semua', 'Al-Qur\'an dan Hadis', 'Akidah', 'Akhlak', 'Fikih', 'Sejarah Peradaban Islam'
      isPresentationMode: false, // Layar Mengajar Guru (font ekstra besar)
      soundEnabled: true,
      stars: saved.stars || 0,
      completedGames: saved.completedGames || {},
      readChapters: saved.readChapters || {},
      teacherNotes: getTeacherNotes(),
      pwaPrompt: null,
      showPwaBanner: false,
    };
  },

  getters: {
    totalStars: (state) => state.stars,
    isGameCompleted: (state) => (gameId) => !!state.completedGames[gameId],
    isChapterRead: (state) => (babId) => !!state.readChapters[babId],
    getNoteForBab: (state) => (babId) => state.teacherNotes[babId]?.text || '',
  },

  actions: {
    setKelas(kelas) {
      this.selectedKelas = Number(kelas);
      sounds.playClick();
    },

    setCurriculumMode(mode) {
      this.curriculumMode = mode;
      sounds.playClick();
    },

    setSemester(sem) {
      this.selectedSemester = sem;
      sounds.playClick();
    },

    setElemen(el) {
      this.selectedElemen = el;
      sounds.playClick();
    },

    togglePresentationMode() {
      this.isPresentationMode = !this.isPresentationMode;
      sounds.playClick();
    },

    toggleSound() {
      this.soundEnabled = !this.soundEnabled;
      sounds.muted = !this.soundEnabled;
    },

    addStar(amount = 1) {
      this.stars += amount;
      this.syncProgress();
      if (this.soundEnabled) {
        sounds.playStar();
      }
    },

    markGameCompleted(gameId, score = 100) {
      this.completedGames[gameId] = {
        completedAt: new Date().toISOString(),
        score
      };
      this.addStar(5);
      this.syncProgress();
    },

    markChapterAsRead(babId) {
      if (!this.readChapters[babId]) {
        this.readChapters[babId] = true;
        this.addStar(2);
        this.syncProgress();
      }
    },

    saveNote(babId, text) {
      saveTeacherNote(babId, text);
      this.teacherNotes[babId] = {
        text,
        updatedAt: new Date().toISOString()
      };
    },

    syncProgress() {
      saveProgress({
        stars: this.stars,
        completedGames: this.completedGames,
        readChapters: this.readChapters
      });
    },

    setPwaPrompt(prompt) {
      this.pwaPrompt = prompt;
      this.showPwaBanner = true;
    },

    async triggerInstallPwa() {
      if (!this.pwaPrompt) return;
      this.pwaPrompt.prompt();
      const { outcome } = await this.pwaPrompt.userChoice;
      if (outcome === 'accepted') {
        this.showPwaBanner = false;
        this.pwaPrompt = null;
      }
    }
  }
});

