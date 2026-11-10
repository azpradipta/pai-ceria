<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
    
    <!-- Top Header -->
    <div class="bg-gradient-to-br from-teal-800 via-emerald-800 to-teal-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-teal-600/40 relative overflow-hidden">
      <div class="relative z-10 space-y-3">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-teal-200 text-xs font-bold border border-white/20">
          <span>⚖️</span>
          <span>Analisis Komparasi Kurikulum Resmi</span>
        </div>

        <h1 class="text-2xl sm:text-4xl font-black">
          Panduan Perubahan CP PAI SD: <span class="text-amber-300">CP Lama vs CP Baru</span>
        </h1>

        <p class="text-xs sm:text-sm text-teal-100 max-w-3xl leading-relaxed">
          Berdasarkan dokumen resmi <strong class="text-white">Perubahan Capaian Pembelajaran (CP) PAI dan Budi Pekerti (CP 046/2025 dibandingkan CP 020/2026)</strong> untuk Fase A (Kelas 1) dan Fase C (Kelas 5 & 6). Halaman ini dirancang untuk memandu Ibu Guru memahami detail materi yang bergeser.
        </p>
      </div>
    </div>

    <!-- Phase Selector Tab -->
    <div class="flex items-center gap-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
      <button
        @click="activeFaseTab = 'faseA'"
        class="flex-1 py-3 px-5 rounded-xl text-xs sm:text-sm font-extrabold transition-all text-center whitespace-nowrap"
        :class="activeFaseTab === 'faseA' ? 'bg-emerald-600 text-white shadow' : 'text-slate-600 hover:bg-slate-100'"
      >
        🌱 Fase A: Kelas 1 SD (CP 046 vs CP 020)
      </button>

      <button
        @click="activeFaseTab = 'faseC'"
        class="flex-1 py-3 px-5 rounded-xl text-xs sm:text-sm font-extrabold transition-all text-center whitespace-nowrap"
        :class="activeFaseTab === 'faseC' ? 'bg-teal-600 text-white shadow' : 'text-slate-600 hover:bg-slate-100'"
      >
        🌿 Fase C: Kelas 5 & 6 SD (CP 046 vs CP 020)
      </button>
    </div>

    <!-- Content for Fase A (Kelas 1) -->
    <div v-if="activeFaseTab === 'faseA'" class="space-y-6">
      
      <!-- Summary Box -->
      <div class="bg-emerald-50 rounded-3xl p-6 border border-emerald-200 space-y-2">
        <h3 class="text-base font-black text-emerald-900 flex items-center gap-2">
          <span>💡</span>
          <span>Inti Perubahan Fase A (Kelas 1 SD):</span>
        </h3>
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {{ perbandinganCP.faseA.ringkasan }}
        </p>
      </div>

      <!-- Comparison Cards per Element -->
      <div class="space-y-4">
        <div
          v-for="(item, idx) in perbandinganCP.faseA.perubahan"
          :key="idx"
          class="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4"
        >
          <div class="flex items-center justify-between border-b border-slate-100 pb-3">
            <h4 class="text-base font-black text-slate-900 flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 text-xs font-black flex items-center justify-center">
                {{ idx + 1 }}
              </span>
              <span>Elemen: {{ item.elemen }}</span>
            </h4>
            <span class="text-xs font-bold text-slate-400">Fase A</span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <!-- CP Lama (Buku Siswa) -->
            <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2">
              <div class="font-black text-amber-900 flex items-center gap-1.5">
                <span>📖</span>
                <span>CP Lama 046/2025 (Buku Siswa):</span>
              </div>
              <p class="text-slate-700 leading-relaxed font-medium">
                {{ item.lama }}
              </p>
            </div>

            <!-- CP Baru (Docx) -->
            <div class="p-4 rounded-2xl bg-emerald-50/80 border-2 border-emerald-300 space-y-2">
              <div class="font-black text-emerald-900 flex items-center gap-1.5">
                <span>✨</span>
                <span>CP Baru 020/2026 (Revisi Docx):</span>
              </div>
              <p class="text-slate-800 leading-relaxed font-bold">
                {{ item.baru }}
              </p>
            </div>
          </div>

          <!-- Highlight of Focus -->
          <div class="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600 flex items-start gap-2">
            <span class="text-base">🔍</span>
            <div>
              <strong class="text-slate-800">Catatan Pengajaran Guru:</strong> {{ item.fokus }}
            </div>
          </div>

        </div>
      </div>

    </div>

    <!-- Content for Fase C (Kelas 5 & 6) -->
    <div v-else class="space-y-8">
      
      <!-- Summary Box -->
      <div class="bg-teal-50 rounded-3xl p-6 border border-teal-200 space-y-2">
        <h3 class="text-base font-black text-teal-900 flex items-center gap-2">
          <span>💡</span>
          <span>Inti Perubahan Fase C (Kelas 5 & 6 SD):</span>
        </h3>
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {{ perbandinganCP.faseC.ringkasan }}
        </p>
      </div>

      <!-- KELAS 5 TABLE -->
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <span class="text-xl">🌿</span>
          <h3 class="text-lg font-black text-slate-900">Rincian Perubahan Materi Kelas 5 SD</h3>
        </div>

        <div class="grid grid-cols-1 gap-4">
          <div
            v-for="(item, idx) in perbandinganCP.faseC.perubahanKelas5"
            :key="idx"
            class="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-3"
          >
            <div class="font-black text-slate-900 text-sm sm:text-base text-teal-800 flex items-center gap-2">
              <span class="w-6 h-6 rounded-md bg-teal-100 text-teal-800 text-xs flex items-center justify-center font-bold">
                {{ idx + 1 }}
              </span>
              <span>Elemen: {{ item.elemen }}</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div class="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
                <span class="font-bold text-amber-900">📖 CP Lama (Buku):</span>
                <p class="text-slate-700 font-medium">{{ item.lama }}</p>
              </div>
              <div class="p-3.5 rounded-2xl bg-teal-50 border-2 border-teal-300 space-y-1">
                <span class="font-black text-teal-900">✨ CP Baru (Revisi):</span>
                <p class="text-slate-800 font-bold">{{ item.baru }}</p>
              </div>
            </div>

            <div class="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <strong>Fokus Guru:</strong> {{ item.fokus }}
            </div>
          </div>
        </div>
      </div>

      <!-- KELAS 6 TABLE -->
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <span class="text-xl">🌳</span>
          <h3 class="text-lg font-black text-slate-900">Rincian Perubahan Materi Kelas 6 SD</h3>
        </div>

        <div class="grid grid-cols-1 gap-4">
          <div
            v-for="(item, idx) in perbandinganCP.faseC.perubahanKelas6"
            :key="idx"
            class="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-3"
          >
            <div class="font-black text-slate-900 text-sm sm:text-base text-amber-800 flex items-center gap-2">
              <span class="w-6 h-6 rounded-md bg-amber-100 text-amber-800 text-xs flex items-center justify-center font-bold">
                {{ idx + 1 }}
              </span>
              <span>Elemen: {{ item.elemen }}</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div class="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-1">
                <span class="font-bold text-amber-900">📖 CP Lama (Buku):</span>
                <p class="text-slate-700 font-medium">{{ item.lama }}</p>
              </div>
              <div class="p-3.5 rounded-2xl bg-emerald-50 border-2 border-emerald-300 space-y-1">
                <span class="font-black text-emerald-900">✨ CP Baru (Revisi):</span>
                <p class="text-slate-800 font-bold">{{ item.baru }}</p>
              </div>
            </div>

            <div class="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <strong>Fokus Guru:</strong> {{ item.fokus }}
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { perbandinganCP } from '../data/kurikulumInfo';

const activeFaseTab = ref('faseA');
</script>

