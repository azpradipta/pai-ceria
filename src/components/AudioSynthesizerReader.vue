<template>
  <span class="inline-flex max-w-full flex-col items-start gap-1" data-sound="off">
  <button
    @click="speak"
    type="button"
    :title="isPlaying || isLoading ? 'Berhenti membaca' : 'Bacakan teks dengan suara perangkat'"
    :aria-pressed="isPlaying || isLoading"
    class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm active:scale-95"
    :class="isPlaying ? 'bg-amber-500 text-white animate-pulse' : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border border-emerald-300'"
  >
    <svg v-if="isPlaying" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <svg v-else class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
    <span>{{ isPlaying ? 'Berhenti membaca' : isLoading ? 'Menyiapkan suara…' : label }}</span>
  </button>
  <span v-if="message" role="status" class="max-w-64 text-xs leading-relaxed text-amber-800">{{ message }}</span>
  </span>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue';
import { useAppStore } from '../stores/appStore';
import { speechReader } from '../utils/speechReader.js';

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
const isLoading = ref(false);
const message = ref('');
const owner = Symbol('reader');
const store = useAppStore();

const speak = () => {
  if (isPlaying.value || isLoading.value) {
    speechReader.stop(owner);
    return;
  }
  store.enableSound();
  message.value = '';
  isLoading.value = true;
  speechReader.speak({
    owner, text: props.text, lang: props.lang,
    onStart: () => { isLoading.value = false; isPlaying.value = true; },
    onStop: () => { isLoading.value = false; isPlaying.value = false; },
    onError: text => { isLoading.value = false; isPlaying.value = false; message.value = text; },
  });
};

onBeforeUnmount(() => {
  speechReader.stop(owner);
});
</script>

