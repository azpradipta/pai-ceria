import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './style.css';
import { useAppStore } from './stores/appStore';
import { sounds } from './utils/soundEffects.js';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app');

// Handle PWA BeforeInstallPrompt
const store = useAppStore();
sounds.onStatus = ({ ready, error }) => { store.audioReady = ready; store.audioError = error; };
sounds.setEnabled(store.soundEnabled);
sounds.setVolume(store.soundVolume);
sounds.setMusicEnabled(store.musicEnabled);

// A normal mouse, touch, or keyboard click starts audio with browser permission.
document.addEventListener('click', event => {
  const control = event.target instanceof Element ? event.target.closest('button, a, summary, select') : null;
  if (!control || control.disabled || control.getAttribute('aria-disabled') === 'true' || !store.soundEnabled) return;
  if (control.closest('[data-sound="off"]')) return;
  if (control.dataset.sound === 'custom') { void sounds.unlock(); return; }
  void sounds.playClick();
}, { capture: true });
document.addEventListener('visibilitychange', () => sounds.setPageVisible(!document.hidden));
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  store.setPwaPrompt(e);
});

