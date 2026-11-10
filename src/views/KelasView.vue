<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
    
    <!-- Header of Grade -->
    <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <router-link to="/" class="text-xs font-bold text-slate-400 hover:text-emerald-700">
            ← Kembali ke Beranda
          </router-link>
          <span class="text-slate-300">•</span>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-100 text-emerald-800">
            {{ kelasInfo?.namaFase || `Kelas ${kelas}` }}
          </span>
        </div>

        <h1 class="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
          <span>Pendidikan Agama Islam Kelas {{ kelas }} SD</span>
          <span class="text-2xl">{{ kelasIcon }}</span>
        </h1>

        <p class="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
          {{ kelasInfo?.deskripsi }}
        </p>
      </div>

      <!-- Quick switcher for Grade 1, 5, 6 -->
      <div class="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200 self-start md:self-auto">
        <button
          v-for="k in [1, 5, 6]"
          :key="k"
          @click="switchKelas(k)"
          class="px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all"
          :class="Number(kelas) === k ? 'bg-emerald-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'"
        >
          Kelas {{ k }}
        </button>
      </div>
    </div>

    <!-- Filter & Search Toolbar -->
    <div class="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
      
      <!-- Semester Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
        <button
          @click="activeSemester = 0"
          class="px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all"
          :class="activeSemester === 0 ? 'bg-slate-900 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
        >
          Semua Semester (10 Bab)
        </button>

        <button
          @click="activeSemester = 1"
          class="px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all"
          :class="activeSemester === 1 ? 'bg-emerald-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
        >
          Semester 1 (Bab 1 - 5)
        </button>

        <button
          @click="activeSemester = 2"
          class="px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all"
          :class="activeSemester === 2 ? 'bg-teal-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
        >
          Semester 2 (Bab 6 - 10)
        </button>
      </div>

      <!-- Search and Element Filter -->
      <div class="flex flex-wrap items-center gap-2">
        <!-- Element dropdown -->
        <select
          v-model="activeElemen"
          class="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="Semua">Semua Elemen PAI</option>
          <option value="Al-Qur'an dan Hadis">Al-Qur'an & Hadis</option>
          <option value="Akidah">Akidah</option>
          <option value="Akhlak">Akhlak</option>
          <option value="Fikih">Fikih</option>
          <option value="Sejarah Peradaban Islam">Sejarah Peradaban Islam (Tarikh)</option>
        </select>

        <!-- Search input -->
        <div class="relative flex-1 sm:w-48">
          <input
            v-model="searchKeyword"
            type="text"
            placeholder="Cari materi / bab..."
            class="w-full pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <span class="absolute left-2.5 top-2.5 text-xs text-slate-400">🔍</span>
        </div>
      </div>

    </div>

    <!-- Active Curriculum Banner -->
    <div
      class="rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
      :class="store.curriculumMode === 'cp-baru' ? 'bg-emerald-50 border border-emerald-200 text-emerald-900' : 'bg-amber-50 border border-amber-200 text-amber-900'"
    >
      <div class="flex items-center gap-2.5">
        <span class="text-xl">{{ store.curriculumMode === 'cp-baru' ? '✨' : '📖' }}</span>
        <div>
          <span class="font-black uppercase tracking-wide">
            Menampilkan: {{ store.curriculumMode === 'cp-baru' ? 'Revisi CP Baru (CP 020/2026)' : 'Sumber Buku Siswa (CP Lama 046/2025)' }}
          </span>
          <p class="text-slate-600 mt-0.5">
            {{ store.curriculumMode === 'cp-baru' ? 'Judul dan fokus materi telah diselaraskan dengan dokumen perubahan Word yang dilampirkan.' : 'Judul dan susunan bab mengikuti cetakan buku teks siswa Kemdikbud.' }}
          </p>
        </div>
      </div>

      <button
        @click="store.setCurriculumMode(store.curriculumMode === 'cp-baru' ? 'cp-lama' : 'cp-baru')"
        class="self-start sm:self-auto px-3 py-1.5 rounded-xl font-bold bg-white shadow-sm border border-slate-300 hover:bg-slate-50 transition-colors"
      >
        Beralih ke {{ store.curriculumMode === 'cp-baru' ? 'CP Lama' : 'CP Baru' }}
      </button>
    </div>

    <!-- Chapter Grid Cards -->
    <div v-if="filteredChapters.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div
        v-for="b in filteredChapters"
        :key="b.id"
        class="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md border border-slate-200 transition-all flex flex-col justify-between group"
      >
        <div class="space-y-4">
          
          <!-- Top Row: Bab Badge & Element -->
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <span class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center">
                {{ b.bab }}
              </span>
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider" :class="getElemenBadgeClass(b.elemen)">
                {{ b.elemen }}
              </span>
            </div>

            <!-- Read & Game Completion Badges -->
            <div class="flex items-center gap-1.5 text-xs">
              <span v-if="store.isChapterRead(b.id)" class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold" title="Materi sudah dipelajari">
                ✓ Dibaca
              </span>
              <span v-if="store.isGameCompleted(b.game.id)" class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-bold" title="Game sudah dimainkan">
                ⭐ Game Selesai
              </span>
            </div>
          </div>

          <!-- Title -->
          <div>
            <h3 class="text-xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
              Bab {{ b.bab }}: {{ store.curriculumMode === 'cp-baru' ? (b.judulCPBaru || b.judul) : b.judul }}
            </h3>
            <div v-if="store.curriculumMode === 'cp-baru' && b.judulCPBaru !== b.judul" class="text-[11px] text-amber-700 font-semibold mt-1">
              (Buku Siswa: "{{ b.judul }}")
            </div>
          </div>

          <!-- Highlight of Competency / Focus -->
          <div class="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs space-y-1">
            <div class="font-bold text-slate-500">Fokus Capaian Pembelajaran:</div>
            <div class="font-semibold text-slate-800">
              {{ store.curriculumMode === 'cp-baru' ? b.cpBaru?.fokus : b.cpLama?.fokus }}
            </div>
          </div>

          <!-- Learning Objectives (Tujuan) Preview -->
          <div class="space-y-1.5 text-xs">
            <span class="font-bold text-slate-500">Tujuan Pembelajaran:</span>
            <ul class="space-y-1 text-slate-600 pl-4 list-disc">
              <li v-for="(t, idx) in b.tujuan.slice(0, 2)" :key="idx">
                {{ t }}
              </li>
              <li v-if="b.tujuan.length > 2" class="text-slate-400 font-medium">
                +{{ b.tujuan.length - 2 }} tujuan lainnya...
              </li>
            </ul>
          </div>

          <!-- Game preview teaser -->
          <div class="flex items-center gap-2 p-2.5 rounded-xl bg-purple-50 text-purple-900 border border-purple-100 text-xs">
            <span class="text-lg">🎮</span>
            <div>
              <span class="font-extrabold">Game: {{ b.game.nama }}</span>
              <p class="text-[11px] text-purple-700 line-clamp-1">{{ b.game.petunjuk }}</p>
            </div>
          </div>

        </div>

        <!-- Action Buttons -->
        <div class="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <router-link
            :to="`/kelas/${kelas}/bab/${b.id}`"
            class="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm text-center shadow-sm hover:shadow transition-all"
          >
            Buka Materi Lengkap →
          </router-link>

          <router-link
            :to="`/kelas/${kelas}/bab/${b.id}/game`"
            class="py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs sm:text-sm text-center shadow-sm hover:shadow transition-all flex items-center gap-1.5"
            title="Langsung Main Game Edukatif"
          >
            <span>🎮</span>
            <span class="hidden sm:inline">Main</span> Game
          </router-link>
        </div>

      </div>

    </div>

    <!-- Empty search fallback -->
    <div v-else class="bg-white rounded-3xl p-12 text-center space-y-3 border border-slate-200">
      <div class="text-4xl">🔍</div>
      <h3 class="text-lg font-bold text-slate-800">Tidak ada materi yang sesuai</h3>
      <p class="text-xs text-slate-500">Coba ubah kata kunci pencarian atau reset filter semester/elemen.</p>
      <button
        @click="resetFilter"
        class="px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold"
      >
        Reset Filter
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '../stores/appStore';
import { allKelasData } from '../data/paiData';

const props = defineProps({
  kelas: {
    type: [String, Number],
    required: true
  }
});

const store = useAppStore();
const router = useRouter();

const activeSemester = ref(0);
const activeElemen = ref('Semua');
const searchKeyword = ref('');

const kelasNum = computed(() => Number(props.kelas));
const kelasInfo = computed(() => allKelasData[kelasNum.value]);

const kelasIcon = computed(() => {
  if (kelasNum.value === 1) return '🌱';
  if (kelasNum.value === 5) return '🌿';
  return '🌳';
});

const switchKelas = (k) => {
  store.setKelas(k);
  router.push(`/kelas/${k}`);
};

const resetFilter = () => {
  activeSemester.value = 0;
  activeElemen.value = 'Semua';
  searchKeyword.value = '';
};

const getElemenBadgeClass = (el) => {
  switch (el) {
    case "Al-Qur'an dan Hadis":
      return 'bg-emerald-100 text-emerald-800 border border-emerald-200';
    case 'Akidah':
      return 'bg-amber-100 text-amber-800 border border-amber-200';
    case 'Akhlak':
      return 'bg-cyan-100 text-cyan-800 border border-cyan-200';
    case 'Fikih':
      return 'bg-indigo-100 text-indigo-800 border border-indigo-200';
    case 'Sejarah Peradaban Islam':
      return 'bg-rose-100 text-rose-800 border border-rose-200';
    default:
      return 'bg-slate-100 text-slate-800 border border-slate-200';
  }
};

const filteredChapters = computed(() => {
  if (!kelasInfo.value) return [];
  
  let list = [];
  if (activeSemester.value === 0) {
    list = [...kelasInfo.value.semester1, ...kelasInfo.value.semester2];
  } else if (activeSemester.value === 1) {
    list = [...kelasInfo.value.semester1];
  } else {
    list = [...kelasInfo.value.semester2];
  }

  if (activeElemen.value !== 'Semua') {
    list = list.filter(b => b.elemen === activeElemen.value);
  }

  if (searchKeyword.value.trim() !== '') {
    const kw = searchKeyword.value.toLowerCase();
    list = list.filter(b => 
      b.judul.toLowerCase().includes(kw) ||
      (b.judulCPBaru && b.judulCPBaru.toLowerCase().includes(kw)) ||
      b.materi?.pengantar?.toLowerCase().includes(kw) ||
      b.game?.nama?.toLowerCase().includes(kw)
    );
  }

  return list;
});
</script>

