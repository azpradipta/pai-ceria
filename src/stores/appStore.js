import { defineStore } from 'pinia';
import { getSavedProgress, saveProgress } from '../data/paiData';
import { sounds } from '../utils/soundEffects';
import { getAudioPreferences, saveAudioPreferences } from '../utils/audioPreferences.js';
import { speechReader } from '../utils/speechReader.js';
export const useAppStore = defineStore('appStore', {
  state: () => {
    const saved = getSavedProgress();
    const audio = getAudioPreferences();
    return { selectedKelas: 1, curriculumMode: 'cp-baru', soundEnabled: audio.enabled,
      musicEnabled: audio.music, soundVolume: audio.volume, audioReady: false, audioError: '',
      completedGames: saved.completedGames, readChapters: saved.readChapters,
      pwaPrompt: null, showPwaBanner: false };
  },
  getters: {
    isGameCompleted: state => gameId => !!state.completedGames[gameId],
    isChapterRead: state => babId => !!state.readChapters[babId],
  },
  actions: {
    setKelas(kelas) { this.selectedKelas = Number(kelas); },
    setCurriculumMode(mode) { if (['cp-baru', 'cp-lama'].includes(mode)) this.curriculumMode = mode; },
    syncAudioPreferences() {
      saveAudioPreferences({ enabled: this.soundEnabled, music: this.musicEnabled, volume: this.soundVolume });
    },
    enableSound() {
      this.soundEnabled = true;
      if (this.soundVolume === 0) this.setSoundVolume(0.45);
      sounds.setEnabled(true);
      this.syncAudioPreferences();
    },
    activateSound() {
      this.enableSound();
      return sounds.playWelcome();
    },
    toggleSound() {
      if (!this.soundEnabled) return this.activateSound();
      this.soundEnabled = false;
      sounds.setEnabled(false);
      speechReader.stop();
      this.syncAudioPreferences();
    },
    setMusicEnabled(enabled) {
      this.musicEnabled = enabled;
      if (enabled) this.enableSound();
      sounds.setMusicEnabled(enabled);
      if (enabled) void sounds.unlock();
      this.syncAudioPreferences();
    },
    setSoundVolume(volume) {
      if (!Number.isFinite(volume)) return;
      this.soundVolume = Math.min(1, Math.max(0, volume));
      sounds.setVolume(this.soundVolume);
      if (this.soundVolume === 0) speechReader.stop();
      this.syncAudioPreferences();
    },
    markGameCompleted(gameId, score = 0) {
      this.completedGames[gameId] = { completedAt: new Date().toISOString(), score }; this.syncProgress();
    },
    markChapterAsRead(babId) { this.readChapters[babId] = true; this.syncProgress(); },
    syncProgress() { saveProgress({ completedGames: this.completedGames, readChapters: this.readChapters }); },
    setPwaPrompt(prompt) { this.pwaPrompt = prompt; this.showPwaBanner = true; },
    async triggerInstallPwa() {
      if (!this.pwaPrompt) return;
      await this.pwaPrompt.prompt(); await this.pwaPrompt.userChoice;
      this.showPwaBanner = false; this.pwaPrompt = null;
    },
  },
});
