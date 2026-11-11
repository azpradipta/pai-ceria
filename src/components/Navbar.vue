<template>
  <header class="sticky top-0 z-40 border-b border-emerald-100 bg-white/95 backdrop-blur-xl">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
      <BrandLogo />
      <nav class="hidden lg:flex items-center gap-5 text-sm font-bold" aria-label="Navigasi utama">
        <router-link to="/" class="text-slate-600 hover:text-emerald-700">Beranda</router-link>
        <router-link v-for="k in [1, 5, 6]" :key="k" :to="classLocation(k)" :class="Number($route.params.kelas) === k ? 'text-emerald-700' : 'text-slate-600'">Kelas {{ k }}</router-link>
        <router-link to="/perubahan-cp" class="text-slate-600 hover:text-emerald-700">Panduan CP</router-link>
      </nav>
      <div class="flex items-center gap-2 max-sm:w-full max-sm:justify-between">
        <div class="inline-flex p-1 rounded-xl bg-slate-100" role="group" aria-label="Pilih kurikulum">
          <button v-for="mode in ['cp-baru', 'cp-lama']" :key="mode" @click="selectCurriculum(mode)" :aria-pressed="currentMode === mode" class="rounded-lg px-3 py-2 text-xs font-extrabold transition-colors" :class="currentMode === mode ? 'bg-emerald-800 text-white shadow-sm' : 'text-slate-600 hover:bg-white'">{{ mode === 'cp-baru' ? 'CP Baru' : 'CP Lama (Buku)' }}</button>
        </div>
        <SoundControls />
      </div>
    </div>
  </header>
</template>
<script setup>
import BrandLogo from './BrandLogo.vue';
import SoundControls from './SoundControls.vue';
import { useCurriculumNavigation } from '../composables/useCurriculumNavigation';
const { currentMode, selectCurriculum, classLocation } = useCurriculumNavigation();
</script>
