<template>
  <div
    :class="[
      'min-h-screen flex flex-col transition-all duration-300',
      store.isPresentationMode ? 'text-lg sm:text-xl' : 'text-base'
    ]"
  >
    <!-- Top Navigation Bar -->
    <Navbar />

    <!-- PWA Install Banner (If available on mobile/browser) -->
    <div
      v-if="store.showPwaBanner && store.pwaPrompt"
      class="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-4 py-2.5 flex items-center justify-between shadow-md"
    >
      <div class="flex items-center gap-2">
        <span class="text-xl">📲</span>
        <span class="text-xs sm:text-sm font-bold">Pasang aplikasi PAI Ceria di layar utama HP Ibu/Siswa agar bisa dibuka cepat & offline!</span>
      </div>
      <div class="flex items-center gap-2">
        <button
          @click="store.triggerInstallPwa()"
          class="px-3 py-1 bg-slate-950 text-white rounded-lg text-xs font-black hover:bg-slate-800 transition-colors shadow"
        >
          Pasang PWA
        </button>
        <button
          @click="store.showPwaBanner = false"
          class="text-slate-900 hover:text-black font-bold text-xs p-1"
        >
          ✕
        </button>
      </div>
    </div>

    <!-- Active Presentation Mode Indicator Banner -->
    <div
      v-if="store.isPresentationMode"
      class="bg-emerald-900 text-amber-300 text-xs py-1 px-4 text-center font-bold tracking-wide flex items-center justify-center gap-2 border-b border-emerald-700"
    >
      <span>📺 Mode Layar Mengajar Guru Aktif (Teks & Ilustrasi Lebih Besar untuk Ditampilkan ke Siswa)</span>
      <button
        @click="store.togglePresentationMode()"
        class="underline text-white hover:text-amber-200 ml-2"
      >
        Tutup Mode
      </button>
    </div>

    <!-- Main Content Area -->
    <main class="flex-1 pb-20 md:pb-8">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Mobile Bottom Navigation Bar -->
    <BottomNav />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import BottomNav from './components/BottomNav.vue';
import { useAppStore } from './stores/appStore';

const store = useAppStore();
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>

