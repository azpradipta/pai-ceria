<template>
  <nav class="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200 pb-safe" aria-label="Navigasi seluler">
    <div class="grid grid-cols-5 h-16 max-w-lg mx-auto">
      <router-link to="/" class="mobile-link" :class="{ active: $route.name === 'home' }"><Home class="w-5 h-5" />Beranda</router-link>
      <router-link v-for="k in [1, 5, 6]" :key="k" :to="classLocation(k)" class="mobile-link" :class="{ active: Number($route.params.kelas) === k }"><BookOpen class="w-5 h-5" />Kelas {{ k }}</router-link>
      <router-link to="/perubahan-cp" class="mobile-link" :class="{ active: $route.name === 'perubahan-cp' }"><Layers class="w-5 h-5" />Panduan CP</router-link>
    </div>
  </nav>
</template>
<script setup>
import { Home, BookOpen, Layers } from 'lucide-vue-next';
import { useCurriculumNavigation } from '../composables/useCurriculumNavigation';
const { classLocation } = useCurriculumNavigation();
</script>
<style scoped>
.mobile-link { @apply flex flex-col items-center justify-center gap-1 text-[10px] font-bold text-slate-500; }
.mobile-link.active { @apply text-emerald-700 bg-emerald-50; }
</style>
