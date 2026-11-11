<template>
  <div v-if="babData" class="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
    <div class="flex flex-wrap justify-between items-center gap-3 text-xs font-bold"><router-link :to="{ name: 'bab-detail', params: { kelas, babId } }" class="text-emerald-700">← Kembali ke materi bab {{ babData.bab }}</router-link><span class="rounded-full px-3 py-2 bg-purple-50 text-purple-800">{{ currentMode === 'cp-baru' ? 'CP Baru' : 'CP Lama' }} · Kelas {{ kelas }}</span></div>
    <header class="bg-gradient-to-br from-emerald-900 to-teal-800 text-white rounded-3xl p-7 sm:p-9 space-y-3"><p class="text-xs font-bold text-amber-200 uppercase tracking-widest">ARENA LATIHAN · BAB {{ babData.bab }}</p><h1 class="text-2xl sm:text-3xl font-black">{{ game.nama }}</h1><p class="text-sm text-emerald-100 leading-relaxed">{{ game.petunjuk }}</p></header>
    <section class="rounded-3xl bg-white border border-slate-200 p-5 sm:p-8 space-y-6">
      <template v-if="phase === 'memory'">
        <div class="flex justify-between items-center gap-3"><h2 class="font-black text-slate-900">Pasangkan nama dan arti</h2><p class="text-xs font-bold text-emerald-700">{{ matched.length }} / {{ game.cards.length / 2 }} pasangan</p></div>
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3"><button v-for="card in cards" :key="card.id" data-sound="custom" @click="flip(card)" :disabled="card.matched || flipped.includes(card.id) || locked" :aria-label="card.matched || flipped.includes(card.id) ? card.label : 'Buka kartu ' + card.id" class="min-h-28 p-4 rounded-2xl border-2 text-sm font-bold transition-colors" :class="card.matched ? 'bg-emerald-100 border-emerald-400 text-emerald-950' : flipped.includes(card.id) ? 'bg-amber-50 border-amber-300 text-slate-900' : 'bg-slate-50 border-slate-200 text-emerald-800 hover:bg-emerald-50'"><span v-if="card.matched || flipped.includes(card.id)">{{ card.label }}</span><span v-else class="text-2xl" aria-hidden="true">?</span></button></div>
      </template>
      <template v-else-if="phase === 'order'">
        <h2 class="font-black text-slate-900">Pilih urutan berikutnya</h2><p class="text-sm text-slate-500">Sudah tersusun {{ assembled.length }} dari {{ game.steps.length }} langkah.</p>
        <ol v-if="assembled.length" class="space-y-2"><li v-for="(step, i) in assembled" :key="step.order" class="bg-emerald-50 border border-emerald-200 p-3 rounded-xl text-sm text-emerald-900"><strong>{{ i + 1 }}.</strong> {{ step.label }}</li></ol>
        <div class="grid sm:grid-cols-2 gap-3"><button v-for="step in pool" :key="step.order" data-sound="custom" @click="pickStep(step)" class="p-4 bg-slate-50 hover:bg-emerald-50 border-2 border-slate-200 hover:border-emerald-400 rounded-2xl text-sm font-bold text-left text-slate-700">{{ step.label }}</button></div>
      </template>
      <template v-else-if="phase === 'special-complete'"><div class="text-center py-8 space-y-5"><CheckCircle2 class="w-14 h-14 mx-auto text-emerald-600" /><h2 class="text-2xl font-black">Tantangan selesai!</h2><p class="text-sm text-slate-500">Lanjutkan latihan untuk memeriksa pemahaman materi bab ini.</p><button @click="phase = 'quiz'" class="px-6 py-3 bg-emerald-800 text-white font-bold rounded-xl">Lanjut latihan pemahaman →</button></div></template>
      <template v-else-if="phase === 'quiz' && currentQuestion">
        <div class="flex justify-between text-xs font-bold text-slate-500"><span>Soal {{ index + 1 }} dari {{ game.questions.length }}</span><span>Benar {{ correctCount }}</span></div>
        <progress :value="index" :max="game.questions.length" class="w-full h-2 accent-emerald-600" aria-label="Kemajuan latihan"></progress>
        <h2 class="bg-emerald-50 p-6 rounded-2xl font-black text-lg sm:text-2xl text-slate-900 leading-relaxed">{{ currentQuestion.tanya }}</h2>
        <div class="grid sm:grid-cols-2 gap-3"><button v-for="(option, optionIndex) in currentQuestion.opsi" :key="optionIndex" data-sound="custom" @click="answer(optionIndex)" :disabled="selected !== null" class="p-4 rounded-2xl border-2 text-left text-sm font-bold transition-colors" :class="optionClass(optionIndex)"><span class="mr-2 opacity-60">{{ String.fromCharCode(65 + optionIndex) }}.</span>{{ option }}<span v-if="selected !== null && optionIndex === currentQuestion.benar" class="ml-2">✓</span></button></div>
        <div v-if="selected !== null" class="rounded-2xl p-5 space-y-3" :class="selected === currentQuestion.benar ? 'bg-emerald-50 text-emerald-950' : 'bg-amber-50 text-amber-950'" role="status"><h3 class="font-black text-sm">{{ selected === currentQuestion.benar ? 'Tepat! Mari pahami alasannya.' : 'Belum tepat. Pelajari penjelasannya, ya.' }}</h3><p class="text-sm leading-relaxed">{{ currentQuestion.alasan }}</p><button @click="nextQuestion" class="px-5 py-2.5 bg-emerald-800 text-white rounded-xl text-sm font-bold">{{ index === game.questions.length - 1 ? 'Lihat hasil latihan' : 'Lanjut ke soal berikutnya →' }}</button></div>
      </template>
      <template v-else-if="phase === 'finished'"><div class="text-center py-6 space-y-6"><CheckCircle2 class="w-16 h-16 text-emerald-600 mx-auto" /><h2 class="text-2xl sm:text-3xl font-black text-slate-900">Alhamdulillah, latihan selesai.</h2><p class="text-slate-600 text-sm">{{ correctCount }} dari {{ game.questions.length }} jawaban benar.</p><div class="inline-block rounded-2xl px-8 py-4 bg-emerald-50 border border-emerald-200"><p class="text-xs font-bold text-emerald-700">NILAI PEMAHAMAN</p><p class="text-4xl font-black text-emerald-900 mt-2">{{ score }}<span class="text-base text-emerald-600"> / 100</span></p></div><p class="text-sm text-slate-500 max-w-md mx-auto">{{ score === 100 ? 'Pemahamanmu baik. Coba terapkan pelajarannya dalam aktivitas sehari-hari.' : 'Baca kembali pembahasan dan materi yang belum dipahami, lalu coba lagi.' }}</p><div class="flex flex-wrap justify-center gap-3"><button @click="restart" class="px-5 py-3 rounded-xl bg-slate-100 font-bold text-sm">Ulangi latihan</button><router-link :to="{ name: 'bab-detail', params: { kelas, babId } }" class="px-5 py-3 rounded-xl bg-emerald-800 text-white font-bold text-sm">Baca kembali materi</router-link><router-link :to="classLocation(kelas)" class="px-5 py-3 rounded-xl border border-emerald-200 text-emerald-800 font-bold text-sm">Pilih bab lain</router-link></div></div></template>
      <p v-if="feedback" role="status" class="p-4 rounded-xl bg-amber-50 text-amber-950 text-sm font-bold">{{ feedback }}</p>
    </section>
  </div>
</template>
<script setup>
import { computed, onBeforeUnmount, ref } from 'vue';
import { CheckCircle2 } from 'lucide-vue-next';
import confetti from 'canvas-confetti';
import { useAppStore } from '../stores/appStore';
import { useCurriculumNavigation } from '../composables/useCurriculumNavigation';
import { getMateriByKelasAndBab } from '../data/paiData';
import { sounds } from '../utils/soundEffects';
const props = defineProps({ kelas: { type: [String, Number], required: true }, babId: { type: String, required: true } });
const store = useAppStore();
const { currentMode, classLocation } = useCurriculumNavigation();
const babData = computed(() => getMateriByKelasAndBab(Number(props.kelas), props.babId));
const game = computed(() => babData.value.game);
const phase = ref('quiz');
const index = ref(0);
const selected = ref(null);
const correctCount = ref(0);
const feedback = ref('');
const cards = ref([]);
const flipped = ref([]);
const matched = ref([]);
const locked = ref(false);
const pool = ref([]);
const assembled = ref([]);
const timers = new Set();
const currentQuestion = computed(() => game.value.questions[index.value]);
const score = computed(() => Math.round(correctCount.value / game.value.questions.length * 100));
function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; }
  return result;
}
function later(callback, delay) { const id = setTimeout(() => { timers.delete(id); callback(); }, delay); timers.add(id); }
function clearTimers() { timers.forEach(clearTimeout); timers.clear(); }
function restart() {
  clearTimers(); index.value = 0; selected.value = null; correctCount.value = 0; feedback.value = '';
  flipped.value = []; matched.value = []; locked.value = false; assembled.value = [];
  cards.value = shuffle((game.value.cards || []).map(card => ({ ...card, matched: false })));
  pool.value = shuffle(game.value.steps || []);
  phase.value = game.value.tipe === 'memory-card' ? 'memory' : game.value.tipe === 'order' ? 'order' : 'quiz';
}
function answer(choice) {
  if (selected.value !== null) return;
  selected.value = choice;
  if (choice === currentQuestion.value.benar) { correctCount.value++; sounds.playCorrect(); } else sounds.playWrong();
}
function optionClass(option) {
  if (selected.value === null) return 'bg-slate-50 border-slate-200 text-slate-800 hover:border-emerald-400';
  if (option === currentQuestion.value.benar) return 'bg-emerald-50 border-emerald-500 text-emerald-900';
  if (option === selected.value) return 'bg-amber-50 border-amber-400 text-amber-900';
  return 'bg-slate-50 border-slate-200 text-slate-500';
}
function nextQuestion() {
  if (selected.value === null) return;
  if (index.value < game.value.questions.length - 1) { index.value++; selected.value = null; return; }
  phase.value = 'finished';
  store.markGameCompleted(game.value.id, score.value);
  if (score.value >= 70) {
    sounds.playSuccessFanfare();
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) confetti({ particleCount: 60, spread: 65, origin: { y: 0.65 }, disableForReducedMotion: true });
  }
}
function flip(card) {
  if (locked.value || card.matched || flipped.value.includes(card.id)) return;
  sounds.playClick(); flipped.value.push(card.id);
  if (flipped.value.length < 2) return;
  locked.value = true;
  const [a,b] = flipped.value.map(id => cards.value.find(c => c.id === id));
  later(() => {
    if (a.pairId === b.pairId) { a.matched = true; b.matched = true; matched.value.push(a.pairId); sounds.playCorrect(); }
    else sounds.playWrong();
    flipped.value = []; locked.value = false;
    if (matched.value.length === game.value.cards.length / 2) phase.value = 'special-complete';
  }, 650);
}
function pickStep(step) {
  if (step.order !== assembled.value.length + 1) { feedback.value = 'Belum sesuai. Ingat kembali langkah yang dilakukan sebelum ini, lalu coba lagi.'; sounds.playWrong(); return; }
  feedback.value = ''; sounds.playCorrect(); assembled.value.push(step); pool.value = pool.value.filter(s => s.order !== step.order);
  if (!pool.value.length) phase.value = 'special-complete';
}
restart();
onBeforeUnmount(clearTimers);
</script>
