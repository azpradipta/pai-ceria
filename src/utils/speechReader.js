import { sounds } from './soundEffects.js';

export class SpeechReader {
  constructor(audio = sounds) {
    this.audio = audio;
    this.current = null;
  }

  stop(owner) {
    if (owner && this.current?.owner !== owner) return;
    const previous = this.current;
    this.current = null;
    if (previous) {
      clearTimeout(previous.timer);
      window.speechSynthesis.cancel();
      this.audio.setSpeechActive(false);
      previous.onStop?.();
    }
  }

  speak({ owner, text, lang = 'id-ID', onStart, onStop, onError }) {
    this.stop();
    if (!globalThis.window?.speechSynthesis || !globalThis.window?.SpeechSynthesisUtterance) {
      onError?.('Suara pembaca belum tersedia di browser ini. Coba browser lain yang mendukung suara perangkat.');
      return;
    }
    if (!text?.trim()) { onError?.('Teks untuk dibacakan belum tersedia.'); return; }
    const synth = window.speechSynthesis;
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.85;
    utterance.pitch = 1;
    utterance.volume = this.audio.volume;
    const voices = synth.getVoices();
    utterance.voice = voices.find(voice => voice.lang.toLowerCase() === lang.toLowerCase())
      || voices.find(voice => voice.lang.toLowerCase().split('-')[0] === lang.toLowerCase().split('-')[0]) || null;
    const reading = { owner, onStop, utterance, timer: null };
    this.current = reading;
    const finish = () => {
      if (this.current !== reading) return;
      clearTimeout(reading.timer);
      this.current = null;
      this.audio.setSpeechActive(false);
      onStop?.();
    };
    utterance.onstart = () => {
      if (this.current !== reading) return;
      clearTimeout(reading.timer);
      this.audio.setSpeechActive(true);
      onStart?.();
    };
    utterance.onend = finish;
    utterance.onerror = event => {
      if (this.current !== reading) return;
      finish();
      if (!['canceled', 'interrupted'].includes(event.error)) {
        onError?.('Suara pembaca belum bisa diputar. Pastikan suara bahasa yang dipilih tersedia di perangkat, lalu coba lagi.');
      }
    };
    reading.timer = setTimeout(() => {
      if (this.current !== reading) return;
      finish();
      synth.cancel();
      onError?.('Suara bahasa belum siap di perangkat ini. Periksa suara bahasa Indonesia atau coba browser lain.');
    }, 8000);
    try {
      // Speak directly from the click; browser loads its default voice if the list is still empty.
      synth.cancel();
      synth.speak(utterance);
      synth.resume();
    } catch {
      finish();
      onError?.('Suara pembaca belum bisa diputar di perangkat ini.');
    }
  }
}

export const speechReader = new SpeechReader();
