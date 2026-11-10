<template>
  <div v-if="babData && babData.game" class="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
    
    <!-- Game Header Navigation -->
    <div class="flex items-center justify-between">
      <router-link :to="`/kelas/${kelas}/bab/${babId}`" class="text-xs sm:text-sm font-bold text-slate-500 hover:text-emerald-700 flex items-center gap-1">
        <span>←</span>
        <span>Kembali ke Materi Bab {{ babData.bab }}</span>
      </router-link>

      <div class="flex items-center gap-2">
        <span class="px-3 py-1 rounded-full text-xs font-black bg-purple-100 text-purple-800 border border-purple-200">
          🎮 Arena Game PAI
        </span>
        <span class="px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800 border border-amber-200">
          ⭐ Skor: {{ currentScore }}
        </span>
      </div>
    </div>

    <!-- Game Title Banner -->
    <div class="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
      <div class="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="space-y-2 text-center sm:text-left">
          <div class="text-xs font-black text-amber-300 uppercase tracking-widest">
            Game Edukatif Bab {{ babData.bab }} • Kelas {{ kelas }}
          </div>
          <h1 class="text-2xl sm:text-3xl font-black">{{ babData.game.nama }}</h1>
          <p class="text-xs sm:text-sm text-purple-200 max-w-xl">
            {{ babData.game.petunjuk }}
          </p>
        </div>

        <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-4xl shrink-0 shadow-inner">
          🎮
        </div>
      </div>
    </div>

    <!-- Active Game Content Box -->
    <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
      
      <!-- ================= 1. MULTIPLE CHOICE / CHALLENGE / HIJAIYAH POP ================= -->
      <div v-if="gameQuestions.length > 0 && !isFinished" class="space-y-6">
        
        <!-- Progress Bar -->
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Tantangan {{ currentQIndex + 1 }} dari {{ gameQuestions.length }}</span>
            <span>Skor Sementara: {{ currentScore }} Poin</span>
          </div>
          <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div
              class="bg-purple-600 h-full rounded-full transition-all duration-300"
              :style="{ width: `${((currentQIndex + 1) / gameQuestions.length) * 100}%` }"
            ></div>
          </div>
        </div>

        <!-- Question Text -->
        <div class="bg-purple-50/70 border border-purple-100 rounded-3xl p-6 text-center space-y-3">
          <span class="text-xs font-black uppercase tracking-wider text-purple-700">Pertanyaan Soal</span>
          <h3 class="text-lg sm:text-2xl font-black text-slate-900 leading-snug">
            {{ currentQuestion.pertanyaan || currentQuestion.tanya || currentQuestion.kata || currentQuestion.potonganAyat || currentQuestion.kejadian || currentQuestion.momen || currentQuestion.situasi || currentQuestion.kasus || currentQuestion.misi }}
          </h3>
          <p v-if="currentQuestion.potonganAyat" class="text-xs text-slate-500">
            {{ currentQuestion.tanya }}
          </p>
        </div>

        <!-- Options Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <button
            v-for="(opsi, oIdx) in currentOptions"
            :key="oIdx"
            @click="selectOption(opsi, oIdx)"
            :disabled="answered"
            class="p-4 rounded-2xl border-2 font-bold text-sm sm:text-base text-left transition-all duration-200 flex items-center justify-between"
            :class="getOptionClass(opsi, oIdx)"
          >
            <span>{{ typeof opsi === 'object' ? opsi.teks : opsi }}</span>
            <span v-if="answered && isOptionCorrect(opsi, oIdx)" class="text-emerald-600 text-lg">✓</span>
            <span v-else-if="answered && selectedOptionIdx === oIdx && !isOptionCorrect(opsi, oIdx)" class="text-rose-600 text-lg">✕</span>
          </button>
        </div>

        <!-- Feedback & Explanation after click -->
        <div v-if="answered" class="p-4 rounded-2xl space-y-2 animate-fade-in" :class="isCurrentCorrect ? 'bg-emerald-50 border border-emerald-200 text-emerald-950' : 'bg-rose-50 border border-rose-200 text-rose-950'">
          <div class="flex items-center gap-2 font-black text-sm">
            <span>{{ isCurrentCorrect ? '🎉 Hebat! Jawaban Benar!' : '💡 Belum Tepat, Semangat Belajar!' }}</span>
          </div>
          <p class="text-xs sm:text-sm font-medium">
            {{ currentQuestion.penjelasan || currentQuestion.alasan || currentQuestion.ulasan || currentQuestion.hikmah || currentQuestion.catatan || 'Terus berlatih ya!' }}
          </p>
        </div>

        <!-- Next Button -->
        <div v-if="answered" class="flex justify-end pt-2">
          <button
            @click="nextQuestion"
            class="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-black text-sm shadow-md transition-all active:scale-95"
          >
            {{ currentQIndex < gameQuestions.length - 1 ? 'Lanjut ke Soal Berikutnya →' : 'Lihat Hasil Akhir 🏆' }}
          </button>
        </div>

      </div>

      <!-- ================= 2. FLIP MEMORY CARD GAME (FOR ASMAUL HUSNA) ================= -->
      <div v-else-if="babData.game.tipe === 'memory-card' && !isFinished" class="space-y-6">
        <div class="flex items-center justify-between text-xs font-bold text-slate-500">
          <span>Temukan semua pasangan kartu nama & arti!</span>
          <span>Cocok: {{ matchedPairs.length }} / {{ totalMemoryPairs }} Pasang</span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
          <button
            v-for="card in memoryCards"
            :key="card.id"
            @click="flipCard(card)"
            class="h-28 sm:h-32 rounded-2xl border-2 font-black text-xs sm:text-sm p-3 flex items-center justify-center text-center transition-all duration-300 shadow-sm"
            :class="getMemoryCardClass(card)"
          >
            <span v-if="isCardFlipped(card) || card.matched" class="animate-pulse-slow">
              {{ card.label }}
            </span>
            <span v-else class="text-3xl text-purple-300">
              ❓
            </span>
          </button>
        </div>
      </div>

      <!-- ================= 3. ORDER / STEP BUILDER GAME (RUKUN / WUDHU) ================= -->
      <div v-else-if="(babData.game.tipe === 'wudhu-step-builder' || babData.game.tipe === 'rukun-sorter' || babData.game.tipe === 'rukun-islam-pilar' || babData.game.tipe === 'connect-letters' || babData.game.tipe === 'timeline-journey') && !isFinished" class="space-y-6">
        
        <div class="flex items-center justify-between text-xs font-bold text-slate-500">
          <span>Pilih urutan berikutnya yang tepat:</span>
          <span>Langkah {{ currentStepOrder + 1 }} dari {{ stepItems.length }}</span>
        </div>

        <!-- Assembled Steps Preview -->
        <div class="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <div class="text-xs font-black text-slate-400 uppercase tracking-wider">Urutan Terpasang:</div>
          <div v-if="assembledSteps.length === 0" class="text-xs italic text-slate-400">
            Belum ada langkah yang dipilih. Klik langkah pertama di bawah!
          </div>
          <div
            v-for="(s, idx) in assembledSteps"
            :key="idx"
            class="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs sm:text-sm font-bold animate-fade-in"
          >
            <span class="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">
              {{ idx + 1 }}
            </span>
            <span>{{ s.nama || s.teks || s.deskripsi }}</span>
          </div>
        </div>

        <!-- Available Choice Pool -->
        <div class="space-y-2">
          <div class="text-xs font-bold text-slate-500">Pilih Langkah Berikutnya:</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              v-for="item in availableStepPool"
              :key="item.key"
              @click="pickStep(item)"
              class="p-3.5 rounded-2xl bg-white border-2 border-purple-200 hover:border-purple-500 text-slate-800 text-xs sm:text-sm font-bold text-left shadow-sm transition-all active:scale-95 hover:bg-purple-50"
            >
              {{ item.nama || item.teks || item.deskripsi }}
            </button>
          </div>
        </div>

      </div>

      <!-- ================= 4. SORTING / BASKET CLASSIFIER (HALAL EXPRESS / FASTING / TAKDIR) ================= -->
      <div v-else-if="(babData.game.tipe === 'halal-express' || babData.game.tipe === 'fasting-category-sorter' || babData.game.tipe === 'takdir-sorter' || babData.game.tipe === 'tafkhim-tarqiq-sorter' || babData.game.tipe === 'waqf-simulator' || babData.game.tipe === 'zis-distributor' || babData.game.tipe === 'caliph-history-match' || babData.game.tipe === 'companion-duel' || babData.game.tipe === 'neighbor-dilemma') && !isFinished" class="space-y-6">
        
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Item {{ currentSorterIdx + 1 }} dari {{ sorterItems.length }}</span>
            <span>Skor: {{ currentScore }} Poin</span>
          </div>
          <div class="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              class="bg-purple-600 h-full rounded-full transition-all"
              :style="{ width: `${((currentSorterIdx + 1) / sorterItems.length) * 100}%` }"
            ></div>
          </div>
        </div>

        <!-- Current Item Card -->
        <div class="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-3xl p-6 sm:p-8 text-center space-y-3 shadow-sm">
          <div class="text-4xl sm:text-5xl animate-float">
            {{ currentSorterItem?.icon || '📦' }}
          </div>
          <h3 class="text-xl sm:text-2xl font-black text-slate-900">
            {{ currentSorterItem?.nama || currentSorterItem?.lafal || currentSorterItem?.peristiwa || currentSorterItem?.barang || currentSorterItem?.prestasi || currentSorterItem?.momen || currentSorterItem?.kasus }}
          </h3>
          <p v-if="currentSorterItem?.asnaf" class="text-xs text-slate-500">
            {{ currentSorterItem.asnaf }}
          </p>
        </div>

        <!-- Sorter Category Options -->
        <div class="grid grid-cols-2 gap-4">
          <button
            v-for="(cat, cIdx) in sorterCategories"
            :key="cIdx"
            @click="sortItemToCategory(cat)"
            class="p-5 rounded-2xl border-2 font-black text-sm sm:text-base text-center transition-all shadow-sm active:scale-95"
            :class="cIdx === 0 ? 'bg-emerald-50 hover:bg-emerald-100 border-emerald-400 text-emerald-900' : 'bg-rose-50 hover:bg-rose-100 border-rose-400 text-rose-900'"
          >
            {{ cat }}
          </button>
        </div>

        <div v-if="sorterFeedback" class="p-4 rounded-2xl text-xs sm:text-sm font-bold text-center" :class="sorterFeedback.correct ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'">
          {{ sorterFeedback.text }}
        </div>

      </div>

      <!-- ================= 5. VICTORY / GAME FINISHED MODAL ================= -->
      <div v-if="isFinished" class="text-center py-8 space-y-6 animate-fade-in">
        <div class="w-28 h-28 mx-auto">
          <IslamicIllustration name="trophy" className="w-28 h-28 animate-bounce" />
        </div>

        <div class="space-y-2">
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900">
            Alhamdulillah! Kamu Berhasil! 🎉
          </h2>
          <p class="text-sm text-slate-600 max-w-md mx-auto">
            Selamat telah menuntaskan tantangan game edukatif <strong>"{{ babData.game.nama }}"</strong> dengan sangat gemilang!
          </p>
        </div>

        <div class="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-amber-100 border-2 border-amber-300 text-amber-950 font-black text-lg shadow-sm">
          <span>⭐ Hadiah: +5 Bintang Prestasi</span>
          <span>|</span>
          <span>Total Skor: {{ currentScore }}</span>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-3 pt-4">
          <button
            @click="restartGame"
            class="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-sm transition-all"
          >
            Main Ulang ↺
          </button>

          <router-link
            :to="`/kelas/${kelas}/bab/${babId}`"
            class="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition-all"
          >
            Kembali ke Materi Bab →
          </router-link>

          <router-link
            :to="`/kelas/${kelas}`"
            class="px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-sm shadow-md transition-all"
          >
            Pilih Bab Lain 📚
          </router-link>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import confetti from 'canvas-confetti';
import { useAppStore } from '../stores/appStore';
import { getMateriByKelasAndBab } from '../data/paiData';
import { sounds } from '../utils/soundEffects';
import IslamicIllustration from '../components/IslamicIllustration.vue';

const props = defineProps({
  kelas: {
    type: [String, Number],
    required: true
  },
  babId: {
    type: String,
    required: true
  }
});

const store = useAppStore();

const currentScore = ref(0);
const isFinished = ref(false);

// Question / Challenge states
const currentQIndex = ref(0);
const selectedOptionIdx = ref(null);
const answered = ref(false);
const isCurrentCorrect = ref(false);

// Memory card states
const memoryCards = ref([]);
const flippedCardIds = ref([]);
const matchedPairs = ref([]);

// Step builder states
const assembledSteps = ref([]);
const currentStepOrder = ref(0);
const availableStepPool = ref([]);

// Sorter states
const currentSorterIdx = ref(0);
const sorterFeedback = ref(null);

const babData = computed(() => {
  return getMateriByKelasAndBab(Number(props.kelas), props.babId);
});

// Normalizing questions list from game data
const gameQuestions = computed(() => {
  if (!babData.value?.game) return [];
  const g = babData.value.game;
  return g.levels || g.soalList || g.questions || g.pertanyaanTambahan || g.stages || g.situasi || g.skenario || g.items || [];
});

const currentQuestion = computed(() => {
  return gameQuestions.value[currentQIndex.value] || {};
});

const currentOptions = computed(() => {
  const q = currentQuestion.value;
  return q.opsi || q.pilihan || q.jawaban || [];
});

const isOptionCorrect = (opsi, idx) => {
  const q = currentQuestion.value;
  if (typeof opsi === 'object' && 'benar' in opsi) {
    return opsi.benar === true;
  }
  if ('kunci' in q) {
    if (typeof q.kunci === 'number') return q.kunci === idx;
    return q.kunci === opsi;
  }
  if ('benar' in q) {
    if (typeof q.benar === 'number') return q.benar === idx;
    return q.benar === opsi;
  }
  if ('jawaban' in q && typeof q.jawaban === 'string') {
    return q.jawaban === opsi;
  }
  if ('jawabanBenar' in q) {
    return q.jawabanBenar === opsi;
  }
  if ('pilihanBenar' in q) {
    return q.pilihanBenar === opsi;
  }
  return false;
};

const getOptionClass = (opsi, idx) => {
  if (!answered.value) {
    return 'bg-slate-50 hover:bg-purple-50 border-slate-200 hover:border-purple-400 text-slate-800 cursor-pointer';
  }
  if (isOptionCorrect(opsi, idx)) {
    return 'bg-emerald-100 border-emerald-500 text-emerald-950 font-black';
  }
  if (selectedOptionIdx.value === idx && !isOptionCorrect(opsi, idx)) {
    return 'bg-rose-100 border-rose-500 text-rose-950 font-bold';
  }
  return 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
};

const selectOption = (opsi, idx) => {
  if (answered.value) return;
  answered.value = true;
  selectedOptionIdx.value = idx;
  
  const correct = isOptionCorrect(opsi, idx);
  isCurrentCorrect.value = correct;

  if (correct) {
    currentScore.value += 20;
    sounds.playCorrect();
  } else {
    sounds.playWrong();
  }
};

const nextQuestion = () => {
  answered.value = false;
  selectedOptionIdx.value = null;
  if (currentQIndex.value < gameQuestions.value.length - 1) {
    currentQIndex.value++;
  } else {
    finishGame();
  }
};

// ================= Memory Card Logic =================
const totalMemoryPairs = computed(() => {
  return (babData.value?.game?.cards?.length || 0) / 2;
});

const isCardFlipped = (card) => {
  return flippedCardIds.value.includes(card.id);
};

const getMemoryCardClass = (card) => {
  if (card.matched) {
    return 'bg-emerald-100 border-emerald-400 text-emerald-950 shadow-sm';
  }
  if (isCardFlipped(card)) {
    return 'bg-purple-100 border-purple-500 text-purple-950 shadow-md';
  }
  return 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-400 cursor-pointer';
};

const flipCard = (card) => {
  if (card.matched || isCardFlipped(card) || flippedCardIds.value.length >= 2) return;
  sounds.playClick();
  flippedCardIds.value.push(card.id);

  if (flippedCardIds.value.length === 2) {
    const card1 = memoryCards.value.find(c => c.id === flippedCardIds.value[0]);
    const card2 = memoryCards.value.find(c => c.id === flippedCardIds.value[1]);

    if (card1 && card2 && card1.pairId === card2.pairId) {
      // Match found!
      setTimeout(() => {
        card1.matched = true;
        card2.matched = true;
        matchedPairs.value.push(card1.pairId);
        flippedCardIds.value = [];
        currentScore.value += 25;
        sounds.playCorrect();

        if (matchedPairs.value.length >= totalMemoryPairs.value) {
          finishGame();
        }
      }, 500);
    } else {
      // Mismatch
      setTimeout(() => {
        sounds.playWrong();
        flippedCardIds.value = [];
      }, 900);
    }
  }
};

// ================= Step Builder Logic =================
const stepItems = computed(() => {
  const g = babData.value?.game;
  return g?.steps || g?.itemsUrut || g?.pilars || g?.gerbong || g?.tahapanUrut || [];
});

const pickStep = (item) => {
  const expectedOrder = currentStepOrder.value + 1;
  const itemOrder = item.step || item.urutan || item.urut || item.no;

  if (itemOrder === expectedOrder) {
    // Correct step
    assembledSteps.value.push(item);
    availableStepPool.value = availableStepPool.value.filter(s => s.key !== item.key);
    currentStepOrder.value++;
    currentScore.value += 20;
    sounds.playCorrect();

    if (assembledSteps.value.length >= stepItems.value.length) {
      finishGame();
    }
  } else {
    sounds.playWrong();
    alert('Kurang tepat! Coba pilih urutan yang seharusnya dilakukan sebelum ini.');
  }
};

// ================= Sorter Basket Logic =================
const sorterItems = computed(() => {
  const g = babData.value?.game;
  return g?.items || g?.kataList || g?.penerimaList || g?.scenarios || [];
});

const currentSorterItem = computed(() => {
  return sorterItems.value[currentSorterIdx.value] || {};
});

const sorterCategories = computed(() => {
  const g = babData.value?.game;
  if (g?.tipe === 'halal-express') return ['Halal Thayyib 🥗', 'Haram / Bahaya 🚫'];
  if (g?.tipe === 'fasting-category-sorter') return ['Puasa Wajib', 'Puasa Sunah'];
  if (g?.tipe === 'takdir-sorter') return ['Takdir Mubram (Pasti)', 'Takdir Mu\'allaq (Ikhtiar)'];
  if (g?.tipe === 'tafkhim-tarqiq-sorter') return ['Tafkhim (Tebal)', 'Tarqiq (Tipis)'];
  if (g?.tipe === 'waqf-simulator') return ['Sah sebagai Wakaf', 'Bukan Wakaf'];
  if (g?.tipe === 'zis-distributor') return ['Mustahiq Zakat', 'Bukan Mustahiq'];
  if (g?.tipe === 'caliph-history-match') return ['Abu Bakar aṣ-Ṣiddīq', 'Umar bin Khaṭṭāb'];
  if (g?.tipe === 'companion-duel') return ['Uṡmān bin ‘Affān', '‘Alī bin Abī Ṭālib'];
  return ['Benar', 'Salah'];
});

const sortItemToCategory = (cat) => {
  const item = currentSorterItem.value;
  let correct = false;

  if (item.tipe && cat.includes(item.tipe)) correct = true;
  else if (item.kategori && cat.includes(item.kategori)) correct = true;
  else if (item.jenis && cat.includes(item.jenis)) correct = true;
  else if (item.status && cat.includes(item.status)) correct = true;
  else if (item.khalifah && cat.includes(item.khalifah)) correct = true;
  else if (item.isGhunnah !== undefined) {
    correct = item.isGhunnah ? cat.includes('Ghunnah') || cat.includes('Benar') : !cat.includes('Ghunnah');
  } else if (item.bolehZakat !== undefined) {
    correct = item.bolehZakat ? cat.includes('Mustahiq') : cat.includes('Bukan');
  }

  if (correct) {
    currentScore.value += 20;
    sounds.playCorrect();
    sorterFeedback.value = { correct: true, text: `✓ Tepat sekali! ${item.alasan || item.penjelasan || ''}` };
  } else {
    sounds.playWrong();
    sorterFeedback.value = { correct: false, text: `✕ Kurang tepat! ${item.alasan || item.penjelasan || ''}` };
  }

  setTimeout(() => {
    sorterFeedback.value = null;
    if (currentSorterIdx.value < sorterItems.value.length - 1) {
      currentSorterIdx.value++;
    } else {
      finishGame();
    }
  }, 1200);
};

// ================= Finish & Confetti Celebration =================
const finishGame = () => {
  isFinished.value = true;
  store.markGameCompleted(babData.value.game.id, currentScore.value);
  sounds.playSuccessFanfare();

  // Trigger cheerful confetti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
};

const restartGame = () => {
  currentScore.value = 0;
  isFinished.value = false;
  currentQIndex.value = 0;
  answered.value = false;
  selectedOptionIdx.value = null;
  matchedPairs.value = [];
  flippedCardIds.value = [];
  assembledSteps.value = [];
  currentStepOrder.value = 0;
  currentSorterIdx.value = 0;
  initGameSpecifics();
};

const initGameSpecifics = () => {
  const g = babData.value?.game;
  if (!g) return;

  // Initialize Memory Cards
  if (g.cards) {
    memoryCards.value = g.cards
      .map(c => ({ ...c, matched: false }))
      .sort(() => Math.random() - 0.5);
  }

  // Initialize Step Builder Pool (shuffled)
  if (stepItems.value.length > 0) {
    availableStepPool.value = stepItems.value
      .map((item, idx) => ({ ...item, key: idx }))
      .sort(() => Math.random() - 0.5);
  }
};

onMounted(() => {
  initGameSpecifics();
});
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

