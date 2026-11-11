import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useAppStore } from '../stores/appStore';
import { getMateriByKelasAndBab } from '../data/paiData';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/kelas/:kelas(1|5|6)', name: 'kelas', component: () => import('../views/KelasView.vue'), props: true },
    { path: '/kelas/:kelas(1|5|6)/bab/:babId', name: 'bab-detail', component: () => import('../views/BabDetailView.vue'), props: true },
    { path: '/kelas/:kelas(1|5|6)/bab/:babId/game', name: 'game-player', component: () => import('../views/GamePlayerView.vue'), props: true },
    { path: '/perubahan-cp', name: 'perubahan-cp', component: () => import('../views/PerubahanCpView.vue') },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFoundView.vue') },
  ],
  scrollBehavior(to, from, savedPosition) { return savedPosition || { top: 0 }; },
});
router.beforeEach(to => {
  if (to.params.babId && !getMateriByKelasAndBab(Number(to.params.kelas), to.params.babId)) {
    return { name: 'not-found', params: { pathMatch: to.path.slice(1).split('/') }, replace: true };
  }
  if (to.name === 'kelas' && !['cp-lama', 'cp-baru'].includes(to.query.cp)) {
    return { ...to, query: { cp: useAppStore().curriculumMode }, replace: true };
  }
});
router.afterEach(to => {
  const store = useAppStore();
  if (to.params.kelas) store.setKelas(to.params.kelas);
  const chapter = getMateriByKelasAndBab(Number(to.params.kelas), to.params.babId);
  if (chapter) store.setCurriculumMode(chapter.mode);
  else if (to.query.cp) store.setCurriculumMode(to.query.cp);
  document.title = `${chapter?.judul || (to.name === 'kelas' ? 'Materi Kelas ' + to.params.kelas : to.name === 'perubahan-cp' ? 'Panduan Kurikulum' : to.name === 'not-found' ? 'Halaman Tidak Ditemukan' : 'Belajar PAI Kelas 1, 5, dan 6')} | PAI Ceria`;
});
export default router;
