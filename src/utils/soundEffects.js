// Web Audio API Synthesizer for 100% offline cheerful educational sound effects
class SoundSynthesizer {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type = 'sine', duration = 0.2, startTime = 0, gainLevel = 0.2) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTime);

      gain.gain.setValueAtTime(gainLevel, this.ctx.currentTime + startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + startTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + startTime);
      osc.stop(this.ctx.currentTime + startTime + duration);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  // Sound effects
  playClick() {
    this.playTone(800, 'sine', 0.05, 0, 0.08);
  }

  playCorrect() {
    // Joyful ascending major chord: C5 - E5 - G5 - C6
    this.playTone(523.25, 'triangle', 0.15, 0.0, 0.2);
    this.playTone(659.25, 'triangle', 0.15, 0.08, 0.2);
    this.playTone(783.99, 'triangle', 0.2, 0.16, 0.25);
    this.playTone(1046.50, 'sine', 0.35, 0.24, 0.28);
  }

  playWrong() {
    // Gentle low bonk
    this.playTone(220, 'sawtooth', 0.15, 0.0, 0.15);
    this.playTone(180, 'sawtooth', 0.25, 0.12, 0.15);
  }

  playSuccessFanfare() {
    // Victory trumpet fanfare
    const notes = [
      { f: 523.25, d: 0.12, t: 0.0 },
      { f: 659.25, d: 0.12, t: 0.12 },
      { f: 783.99, d: 0.12, t: 0.24 },
      { f: 1046.50, d: 0.45, t: 0.36 },
      { f: 880.00, d: 0.15, t: 0.60 },
      { f: 1046.50, d: 0.60, t: 0.75 },
    ];
    notes.forEach(n => this.playTone(n.f, 'triangle', n.d, n.t, 0.22));
  }

  playStar() {
    this.playTone(987.77, 'sine', 0.1, 0.0, 0.2);
    this.playTone(1318.51, 'sine', 0.25, 0.08, 0.25);
  }
}

export const sounds = new SoundSynthesizer();

