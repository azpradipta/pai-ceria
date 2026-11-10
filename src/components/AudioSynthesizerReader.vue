<template>
  <button
    @click="speak"
    :title="isPlaying ? 'Berhenti Membaca' : 'Dengarkan Pelafalan'"
    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm active:scale-95"
    :class="isPlaying ? 'bg-amber-500 text-white animate-pulse' : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border border-emerald-300'"
  >
    <svg v-if="isPlaying" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <svg v-else class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
    <span>{{ isPlaying ? 'Memutar...' : label }}</span>
  </button>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue';
import { sounds } from '../utils/soundEffects';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    default: 'id-ID' // or 'ar-SA' for Arabic
  },
  label: {
    type: String,
    default: 'Suara'
  }
});

const isPlaying = ref(false);

const speak = () => {
  sounds.playClick();
  
  if (!('speechSynthesis' in window)) {
    sounds.playCorrect();
    alert('Browser tidak mendukung SpeechSynthesis. Audio nada aktif.');
    return;
  }

  if (isPlaying.value) {
    window.speechSynthesis.cancel();
    isPlaying.value = false;
    return;
  }

  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(props.text);
  utterance.lang = props.lang;
  utterance.rate = 0.85; // Slightly slower for clear classroom education
  utterance.pitch = 1.05;

  utterance.onstart = () => {
    isPlaying.value = true;
  };

  utterance.onend = () => {
    isPlaying.value = false;
  };

  utterance.onerror = () => {
    isPlaying.value = false;
  };

  window.speechSynthesis.speak(utterance);
};

onBeforeUnmount(() => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
});
</script>

