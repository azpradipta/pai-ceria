import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './style.css';
import { useAppStore } from './stores/appStore';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app');

// Handle PWA BeforeInstallPrompt
const store = useAppStore();
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  store.setPwaPrompt(e);
});

