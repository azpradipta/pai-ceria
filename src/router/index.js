import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import KelasView from '../views/KelasView.vue';
import BabDetailView from '../views/BabDetailView.vue';
import GamePlayerView from '../views/GamePlayerView.vue';
import PerubahanCpView from '../views/PerubahanCpView.vue';
import TeacherNotesView from '../views/TeacherNotesView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/kelas/:kelas',
    name: 'kelas',
    component: KelasView,
    props: true
  },
  {
    path: '/kelas/:kelas/bab/:babId',
    name: 'bab-detail',
    component: BabDetailView,
    props: true
  },
  {
    path: '/kelas/:kelas/bab/:babId/game',
    name: 'game-player',
    component: GamePlayerView,
    props: true
  },
  {
    path: '/perubahan-cp',
    name: 'perubahan-cp',
    component: PerubahanCpView
  },
  {
    path: '/catatan-guru',
    name: 'catatan-guru',
    component: TeacherNotesView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;

