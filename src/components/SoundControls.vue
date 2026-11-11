<template>
  <div ref="container" class="relative" data-sound="off" @keydown.esc.stop="closePanel">
    <button ref="trigger" @click="openPanel" type="button" :aria-expanded="open" aria-controls="sound-preferences" aria-label="Pengaturan suara" class="inline-flex h-10 items-center gap-2 rounded-xl border px-3 text-xs font-bold transition-colors" :class="store.soundEnabled && store.audioReady ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-slate-200 bg-white text-slate-600'">
      <Volume2 v-if="store.soundEnabled" class="w-4 h-4" /><VolumeX v-else class="w-4 h-4" />
      <span class="hidden sm:inline">{{ store.soundEnabled ? (store.audioReady ? 'Suara aktif' : 'Aktifkan suara') : 'Suara mati' }}</span>
      <span class="sm:hidden">Suara</span>
      <ChevronDown class="w-3 h-3" />
    </button>
    <section v-if="open" id="sound-preferences" aria-label="Pengaturan suara belajar" class="absolute right-0 top-full mt-3 w-72 max-w-[calc(100vw-2rem)] rounded-2xl border border-emerald-100 bg-white p-5 shadow-xl space-y-5">
      <div class="flex items-center justify-between gap-3"><h2 class="font-black text-sm text-emerald-950">Suara belajar</h2><button @click="closePanel" type="button" aria-label="Tutup pengaturan suara" class="rounded-lg p-1 text-slate-500 hover:bg-slate-100"><X class="w-4 h-4" /></button></div>
      <div class="flex items-center justify-between gap-4"><div><p class="text-sm font-bold text-slate-800">Suara aplikasi</p><p class="text-xs text-slate-500 mt-1">Nada tombol dan permainan</p></div><button @click="store.toggleSound()" type="button" role="switch" :aria-checked="store.soundEnabled" aria-label="Suara aplikasi" class="w-11 h-6 rounded-full p-1 shrink-0 transition-colors" :class="store.soundEnabled ? 'bg-emerald-700' : 'bg-slate-300'"><span class="block w-4 h-4 rounded-full bg-white transition-transform" :class="store.soundEnabled ? 'translate-x-5' : ''"></span></button></div>
      <div class="flex items-center justify-between gap-4"><div><p class="text-sm font-bold text-slate-800">Musik belajar</p><p class="text-xs text-slate-500 mt-1">Melodi lembut untuk menemani</p></div><button @click="store.setMusicEnabled(!(store.musicEnabled && store.soundEnabled))" type="button" role="switch" :aria-checked="store.musicEnabled && store.soundEnabled" aria-label="Musik belajar" class="w-11 h-6 rounded-full p-1 shrink-0 transition-colors" :class="store.musicEnabled && store.soundEnabled ? 'bg-emerald-700' : 'bg-slate-300'"><span class="block w-4 h-4 rounded-full bg-white transition-transform" :class="store.musicEnabled && store.soundEnabled ? 'translate-x-5' : ''"></span></button></div>
      <label class="block"><span class="flex justify-between text-xs font-bold text-slate-600 mb-3"><span>Volume</span><span>{{ Math.round(store.soundVolume * 100) }}%</span></span><input type="range" min="0" max="100" step="5" :value="Math.round(store.soundVolume * 100)" @input="store.setSoundVolume(Number($event.target.value) / 100)" aria-label="Volume suara" class="w-full accent-emerald-700" /></label>
      <button @click="store.activateSound()" type="button" class="w-full flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl px-4 py-2.5 font-bold text-xs"><Play class="w-3.5 h-3.5" />Coba suara</button>
      <p v-if="store.audioError" role="status" class="text-xs leading-relaxed text-amber-800">{{ store.audioError }}</p>
      <p v-else class="text-[11px] leading-relaxed text-slate-500">Musik mengecil saat materi dibacakan. Pilihan suara tersimpan di perangkat ini.</p>
    </section>
  </div>
</template>
<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { ChevronDown, Play, Volume2, VolumeX, X } from 'lucide-vue-next';
import { useAppStore } from '../stores/appStore';
const store = useAppStore();
const open = ref(false);
const container = ref(null);
const trigger = ref(null);
function openPanel() {
  open.value = !open.value;
  if (open.value && store.soundEnabled && !store.audioReady) store.activateSound();
}
function closePanel() { open.value = false; trigger.value?.focus(); }
function outside(event) { if (!container.value?.contains(event.target)) open.value = false; }
onMounted(() => document.addEventListener('click', outside));
onBeforeUnmount(() => document.removeEventListener('click', outside));
</script>
