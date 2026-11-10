<template>
  <header class="sticky top-0 z-40 bg-gradient-to-r from-emerald-800 via-teal-800 to-emerald-900 text-white shadow-lg border-b border-emerald-600/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        
        <!-- Brand & Logo -->
        <router-link to="/" class="flex items-center gap-3 group focus:outline-none">
          <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-md flex items-center justify-center transform group-hover:scale-105 transition-transform">
            <span class="text-2xl">🕌</span>
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="font-extrabold text-xl sm:text-2xl tracking-tight text-white">PAI <span class="text-amber-400">Ceria</span></span>
              <span class="hidden sm:inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-wider bg-emerald-700/80 text-emerald-200 rounded-full border border-emerald-500/30">
                SD Kls 1, 5, 6
              </span>
            </div>
            <p class="text-[11px] text-emerald-200 hidden md:block">Sahabat Mengajar Ibu Guru PAI • Kurikulum Merdeka</p>
          </div>
        </router-link>

        <!-- Grade Selector Pills (Desktop & Tablet) -->
        <div class="hidden lg:flex items-center bg-emerald-950/60 p-1 rounded-2xl border border-emerald-600/40">
          <button
            v-for="k in [1, 5, 6]"
            :key="k"
            @click="selectKelas(k)"
            class="px-4 py-1.5 rounded-xl text-sm font-extrabold transition-all duration-200"
            :class="store.selectedKelas === k ? 'bg-amber-400 text-slate-900 shadow-sm scale-105' : 'text-emerald-100 hover:text-white hover:bg-emerald-800/60'"
          >
            Kelas {{ k }}
          </button>
        </div>

        <!-- Curriculum Switcher Toggle -->
        <div class="flex items-center bg-emerald-950/70 p-1 rounded-full border border-emerald-500/40 shadow-inner">
          <button
            @click="store.setCurriculumMode('cp-baru')"
            class="px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5"
            :class="store.curriculumMode === 'cp-baru' ? 'bg-emerald-500 text-white shadow-md' : 'text-emerald-300 hover:text-white'"
            title="Kurikulum disesuaikan dengan dokumen perubahan CP 020/2026"
          >
            <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span>CP Baru</span>
          </button>

          <button
            @click="store.setCurriculumMode('cp-lama')"
            class="px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold transition-all"
            :class="store.curriculumMode === 'cp-lama' ? 'bg-amber-500 text-slate-950 font-black shadow-md' : 'text-emerald-300 hover:text-white'"
            title="Sesuai materi buku siswa Kemdikbud cetak"
          >
            CP Lama (Buku)
          </button>
        </div>

        <!-- Right Side Utility Controls -->
        <div class="flex items-center gap-2">
          
          <!-- Stars Collector Badge -->
          <div class="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-300 text-xs sm:text-sm font-extrabold shadow-sm">
            <span>⭐</span>
            <span>{{ store.totalStars }}</span>
          </div>

          <!-- Presentation / Teaching Mode Toggle -->
          <button
            @click="store.togglePresentationMode()"
            :title="store.isPresentationMode ? 'Matikan Mode Layar Mengajar' : 'Aktifkan Mode Layar Mengajar (Font Besar)'"
            class="p-2 rounded-xl transition-all border"
            :class="store.isPresentationMode ? 'bg-amber-500 text-slate-950 border-amber-300 shadow-lg' : 'bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border-emerald-700/50'"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11h.01M9 14h6" />
            </svg>
          </button>

          <!-- Sound Mute/Unmute -->
          <button
            @click="store.toggleSound()"
            :title="store.soundEnabled ? 'Matikan Suara Ceria' : 'Nyalakan Suara Ceria'"
            class="p-2 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/50 transition-all"
          >
            <svg v-if="store.soundEnabled" class="w-5 h-5 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
            <svg v-else class="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          </button>

          <!-- Compare CP Link -->
          <router-link
            to="/perubahan-cp"
            class="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-teal-100 text-xs font-bold border border-teal-500/40 transition-colors"
          >
            <span>⚖️</span>
            <span>Analisis CP</span>
          </router-link>

          <!-- Teacher Notes Link -->
          <router-link
            to="/catatan-guru"
            class="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold shadow-sm transition-colors"
          >
            <span>📝</span>
            <span>Catatan Ibu</span>
          </router-link>

        </div>

      </div>
    </div>
  </header>
</template>

<script setup>
import { useAppStore } from '../stores/appStore';
import { useRouter } from 'vue-router';

const store = useAppStore();
const router = useRouter();

const selectKelas = (k) => {
  store.setKelas(k);
  router.push(`/kelas/${k}`);
};
</script>

