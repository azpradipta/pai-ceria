import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAppStore } from '../stores/appStore';
import { getAllBabsForKelas, getMateriByKelasAndBab } from '../data/paiData';

export function useCurriculumNavigation() {
  const route = useRoute();
  const router = useRouter();
  const store = useAppStore();
  const currentMode = computed(() => store.curriculumMode);
  function selectCurriculum(mode) {
    if (!['cp-lama', 'cp-baru'].includes(mode)) return;
    const chapter = getMateriByKelasAndBab(Number(route.params.kelas), route.params.babId);
    const target = chapter && getAllBabsForKelas(Number(route.params.kelas), 0, mode).find(item => item.bab === chapter.bab);
    if (target) return router.push({ name: route.name === 'game-player' ? 'game-player' : 'bab-detail', params: { kelas: route.params.kelas, babId: target.id } });
    if (route.name === 'kelas') return router.push({ name: 'kelas', params: route.params, query: { cp: mode } });
    store.setCurriculumMode(mode);
  }
  function classLocation(kelas) {
    return { name: 'kelas', params: { kelas }, query: { cp: currentMode.value } };
  }
  return { currentMode, selectCurriculum, classLocation };
}
