<template>
  <div class="min-h-screen flex flex-col text-base">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:p-4 focus:bg-white focus:text-emerald-900">Langsung ke materi</a>
    <Navbar />
    <div v-if="store.showPwaBanner && store.pwaPrompt" class="bg-emerald-50 px-4 py-3 flex flex-wrap justify-center items-center gap-3 text-xs font-bold text-emerald-900">
      <span>Pasang PAI Ceria untuk akses belajar yang lebih mudah.</span>
      <button @click="store.triggerInstallPwa()" class="bg-emerald-800 text-white rounded-lg px-3 py-2">Pasang aplikasi</button>
      <button @click="store.showPwaBanner = false" aria-label="Tutup ajakan pemasangan" class="p-2">✕</button>
    </div>
    <main id="main-content" class="flex-1 pb-20 lg:pb-8">
      <router-view v-slot="{ Component }"><component :is="Component" :key="$route.fullPath" /></router-view>
    </main>
    <footer class="border-t border-slate-200 bg-white px-6 pt-8 pb-28 lg:pb-8">
      <div class="max-w-7xl mx-auto flex flex-wrap justify-between gap-4 text-xs text-slate-500">
        <p><strong class="text-emerald-900">PAI Ceria</strong> · Pendidikan Agama Islam dan Budi Pekerti SD</p>
        <router-link to="/perubahan-cp" class="font-bold text-emerald-700">Sumber materi & panduan kurikulum →</router-link>
      </div>
    </footer>
    <BottomNav />
  </div>
</template>
<script setup>
import Navbar from './components/Navbar.vue';
import BottomNav from './components/BottomNav.vue';
import { useAppStore } from './stores/appStore';
const store = useAppStore();
</script>
