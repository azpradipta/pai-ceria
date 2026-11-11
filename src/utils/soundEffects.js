// Original synthesized sounds; no downloads or backend required.
export class SoundSynthesizer {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.musicGain = null;
    this.muted = false;
    this.volume = 0.45;
    this.musicEnabled = false;
    this.visible = true;
    this.speechActive = false;
    this.nodes = new Set();
    this.musicNodes = new Set();
    this.musicTimer = null;
    this.pendingUnlock = null;
    this.generation = 0;
    this.onStatus = () => {};
  }

  async unlock() {
    if (this.muted) return false;
    try {
      if (!this.ctx || this.ctx.state === 'closed') {
        const AudioCtx = globalThis.window?.AudioContext || globalThis.window?.webkitAudioContext;
        if (!AudioCtx) {
          this.onStatus({ ready: false, error: 'Suara belum didukung browser ini.' });
          return false;
        }
        // This method is called synchronously from the user's click handler.
        this.ctx = new AudioCtx();
        this.master = this.ctx.createGain();
        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.value = this.speechActive ? 0.025 : 0.14;
        this.musicGain.connect(this.master);
        this.master.connect(this.ctx.destination);
        this.applyVolume();
        this.ctx.onstatechange = () => {
          this.onStatus({ ready: this.ctx.state === 'running', error: '' });
          if (this.ctx.state !== 'running') this.stopMusic();
          else this.syncMusic();
        };
      }
      if (this.ctx.state !== 'running') {
        if (!this.pendingUnlock) {
          this.pendingUnlock = this.ctx.resume().finally(() => { this.pendingUnlock = null; });
        }
        await this.pendingUnlock;
      }
      const ready = this.ctx.state === 'running';
      this.onStatus({ ready, error: ready ? '' : 'Ketuk Coba suara untuk memulai audio.' });
      this.syncMusic();
      return ready;
    } catch {
      this.onStatus({ ready: false, error: 'Suara belum bisa diputar. Ketuk Coba suara untuk mencoba lagi.' });
      return false;
    }
  }

  applyVolume() {
    if (!this.master) return;
    const gain = this.muted ? 0 : Math.pow(this.volume, 1.4) * 0.65;
    this.master.gain.setTargetAtTime(gain, this.ctx.currentTime, 0.025);
  }

  setEnabled(enabled) {
    this.muted = !enabled;
    this.generation++;
    this.applyVolume();
    if (this.muted) { this.stopMusic(); this.stopNodes(this.nodes); }
    else this.syncMusic();
  }

  setVolume(volume) {
    if (!Number.isFinite(volume)) return;
    this.volume = Math.min(1, Math.max(0, volume));
    this.applyVolume();
    this.syncMusic();
  }

  setMusicEnabled(enabled) { this.musicEnabled = enabled; this.syncMusic(); }
  setSpeechActive(active) {
    this.speechActive = active;
    if (this.musicGain) this.musicGain.gain.setTargetAtTime(active ? 0.025 : 0.14, this.ctx.currentTime, 0.1);
  }
  setPageVisible(visible) {
    this.visible = visible;
    if (!visible) { this.generation++; this.stopNodes(this.nodes); }
    this.syncMusic();
  }

  tone(frequency, duration, time, gain, type = 'sine', music = false) {
    const oscillator = this.ctx.createOscillator();
    const envelope = this.ctx.createGain();
    oscillator.type = type;
    oscillator.frequency.value = frequency;
    envelope.gain.setValueAtTime(0, time);
    envelope.gain.linearRampToValueAtTime(gain, time + 0.012);
    envelope.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    oscillator.connect(envelope);
    envelope.connect(music ? this.musicGain : this.master);
    const collection = music ? this.musicNodes : this.nodes;
    collection.add(oscillator);
    oscillator.onended = () => { collection.delete(oscillator); oscillator.disconnect(); envelope.disconnect(); };
    oscillator.start(time);
    oscillator.stop(time + duration + 0.025);
  }

  async play(notes) {
    if (this.muted || !this.visible || this.volume === 0) return;
    const generation = this.generation;
    if (!await this.unlock() || this.muted || generation !== this.generation) return;
    const start = this.ctx.currentTime + 0.015;
    for (const [frequency, offset, duration, gain = 0.3, type = 'sine'] of notes) {
      this.tone(frequency, duration, start + offset, gain, type);
    }
  }

  playClick() { return this.play([[660, 0, 0.07, 0.23], [880, 0.04, 0.1, 0.18]]); }
  playWelcome() { return this.play([[523.25,0,0.25],[659.25,0.13,0.25],[783.99,0.26,0.45]]); }
  playCorrect() { return this.play([[523.25,0,0.15],[659.25,0.09,0.15],[783.99,0.18,0.3]]); }
  playWrong() { return this.play([[293.66,0,0.18,0.2],[261.63,0.12,0.22,0.18]]); }
  playSuccessFanfare() { return this.play([[523.25,0,0.18],[659.25,0.12,0.18],[783.99,0.24,0.2],[1046.5,0.4,0.5],[880,0.7,0.2],[1046.5,0.9,0.6]]); }

  syncMusic() {
    const shouldPlay = this.musicEnabled && !this.muted && this.visible && this.volume > 0 && this.ctx?.state === 'running';
    if (!shouldPlay) { this.stopMusic(); return; }
    if (this.musicTimer !== null) return;
    // A gentle pentatonic loop composed for this app.
    const melody = [523.25,659.25,783.99,659.25,587.33,0,659.25,880,783.99,659.25,523.25,0,587.33,659.25,523.25,0];
    let index = 0;
    let nextTime = this.ctx.currentTime + 0.05;
    const schedule = () => {
      if (this.ctx.state !== 'running') { this.stopMusic(); return; }
      // Avoid a burst of queued notes after a delayed timer.
      if (nextTime < this.ctx.currentTime) nextTime = this.ctx.currentTime + 0.04;
      while (nextTime < this.ctx.currentTime + 0.25) {
        const note = melody[index % melody.length];
        if (note) this.tone(note, 0.65, nextTime, 0.4, 'sine', true);
        nextTime += 0.58;
        index++;
      }
    };
    this.musicTimer = setInterval(schedule, 100);
    schedule();
  }

  stopNodes(collection) {
    for (const node of collection) { try { node.stop(); } catch { /* Already ended. */ } }
    collection.clear();
  }
  stopMusic() {
    if (this.musicTimer !== null) clearInterval(this.musicTimer);
    this.musicTimer = null;
    this.stopNodes(this.musicNodes);
  }
}
export const sounds = new SoundSynthesizer();
