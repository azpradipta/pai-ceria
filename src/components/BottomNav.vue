<template>
  <nav class="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/80 shadow-2xl pb-safe">
    <div class="grid grid-cols-6 h-16">
      
      <!-- Home -->
      <router-link
        to="/"
        class="flex flex-col items-center justify-center text-xs font-bold transition-all"
        :class="$route.path === '/' ? 'text-emerald-700 font-extrabold' : 'text-slate-500 hover:text-emerald-600'"
      >
        <span class="text-xl">🏠</span>
        <span class="text-[10px] mt-0.5">Home</span>
      </router-link>

      <!-- Kelas 1 -->
      <router-link
        to="/kelas/1"
        @click="store.setKelas(1)"
        class="flex flex-col items-center justify-center text-xs font-bold transition-all"
        :class="$route.path === '/kelas/1' || ($route.params.kelas == '1') ? 'text-emerald-700 font-extrabold' : 'text-slate-500 hover:text-emerald-600'"
      >
        <div class="relative">
          <span class="text-lg">🌱</span>
          <span v-if="store.selectedKelas === 1" class="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-amber-500"></span>
        </div>
        <span class="text-[10px] mt-0.5">Kls 1</span>
      </router-link>

      <!-- Kelas 5 -->
      <router-link
        to="/kelas/5"
        @click="store.setKelas(5)"
        class="flex flex-col items-center justify-center text-xs font-bold transition-all"
        :class="$route.path === '/kelas/5' || ($route.params.kelas == '5') ? 'text-emerald-700 font-extrabold' : 'text-slate-500 hover:text-emerald-600'"
      >
        <div class="relative">
          <span class="text-lg">🌿</span>
          <span v-if="store.selectedKelas === 5" class="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-amber-500"></span>
        </div>
        <span class="text-[10px] mt-0.5">Kls 5</span>
      </router-link>

      <!-- Kelas 6 -->
      <router-link
        to="/kelas/6"
        @click="store.setKelas(6)"
        class="flex flex-col items-center justify-center text-xs font-bold transition-all"
        :class="$route.path === '/kelas/6' || ($route.params.kelas == '6') ? 'text-emerald-700 font-extrabold' : 'text-slate-500 hover:text-emerald-600'"
      >
        <div class="relative">
          <span class="text-lg">🌳</span>
          <span v-if="store.selectedKelas === 6" class="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-amber-500"></span>
        </div>
        <span class="text-[10px] mt-0.5">Kls 6</span>
      </router-link>

      <!-- Analisis CP -->
      <router-link
        to="/perubahan-cp"
        class="flex flex-col items-center justify-center text-xs font-bold transition-all"
        :class="$route.path === '/perubahan-cp' ? 'text-teal-700 font-extrabold' : 'text-slate-500 hover:text-teal-600'"
      >
        <span class="text-xl">⚖️</span>
        <span class="text-[10px] mt-0.5">Info CP</span>
      </router-link>

      <!-- Catatan Ibu -->
      <router-link
        to="/catatan-guru"
        class="flex flex-col items-center justify-center text-xs font-bold transition-all"
        :class="$route.path === '/catatan-guru' ? 'text-amber-700 font-extrabold' : 'text-slate-500 hover:text-amber-600'"
      >
        <span class="text-xl">📝</span>
        <span class="text-[10px] mt-0.5">Catatan</span>
      </router-link>

    </div>
  </nav>
</template>

<script setup>
import { useAppStore } from '../stores/appStore';

const store = useAppStore();
</script>

