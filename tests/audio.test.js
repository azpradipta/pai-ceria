import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SoundSynthesizer } from '../src/utils/soundEffects.js';
import { SpeechReader } from '../src/utils/speechReader.js';
import { DEFAULT_AUDIO, getAudioPreferences } from '../src/utils/audioPreferences.js';

function fakeAudio(t) {
  const previous = globalThis.window;
  const starts = [];
  let resume;
  const param = () => ({ value: 1, setTargetAtTime(value) { this.value = value; }, setValueAtTime() {}, linearRampToValueAtTime() {}, exponentialRampToValueAtTime() {} });
  class Context {
    state = 'suspended'; currentTime = 1; destination = {};
    resume() { return new Promise(resolve => { resume = () => { this.currentTime = 2; this.state = 'running'; resolve(); }; }); }
    createGain() { return { gain: param(), connect() {}, disconnect() {} }; }
    createOscillator() {
      return { frequency: {}, connect() {}, disconnect() {}, start(time) { starts.push(time); }, stop(time) { if (!time) this.onended?.(); } };
    }
  }
  globalThis.window = { AudioContext: Context };
  const audio = new SoundSynthesizer();
  t.after(() => { audio.stopMusic(); globalThis.window = previous; });
  return { audio, starts, resume: () => resume() };
}

test('effects wait for browser resume and schedule against the running audio clock', async t => {
  const { audio, starts, resume } = fakeAudio(t);
  const playback = audio.playClick();
  assert.equal(starts.length, 0);
  resume();
  await playback;
  assert.equal(starts.length, 2);
  assert.ok(starts.every(time => time > 2));
});

test('muting during audio activation prevents queued effects from playing', async t => {
  const { audio, starts, resume } = fakeAudio(t);
  const playback = audio.playWelcome();
  audio.setEnabled(false);
  resume();
  await playback;
  assert.equal(starts.length, 0);
  assert.equal(audio.master.gain.value, 0);
});

test('music stops when muted, hidden, or at zero volume and ducks under narration', async t => {
  const { audio, resume } = fakeAudio(t);
  audio.setMusicEnabled(true);
  assert.equal(audio.musicTimer, null);
  const unlocking = audio.unlock(); resume(); await unlocking;
  assert.notEqual(audio.musicTimer, null);
  assert.ok(audio.musicNodes.size > 0);
  audio.setSpeechActive(true);
  assert.equal(audio.musicGain.gain.value, 0.025);
  audio.setSpeechActive(false);
  assert.equal(audio.musicGain.gain.value, 0.14);
  audio.setPageVisible(false);
  assert.equal(audio.musicTimer, null);
  assert.equal(audio.musicNodes.size, 0);
  audio.setPageVisible(true);
  assert.notEqual(audio.musicTimer, null);
  audio.setVolume(0);
  assert.equal(audio.musicTimer, null);
  audio.setVolume(0.5);
  assert.notEqual(audio.musicTimer, null);
  audio.setEnabled(false);
  assert.equal(audio.musicTimer, null);
});

test('audio preferences tolerate unavailable storage and invalid volume', t => {
  const previous = globalThis.localStorage;
  t.after(() => { if (previous) globalThis.localStorage = previous; else delete globalThis.localStorage; });
  globalThis.localStorage = { getItem: () => '{invalid' };
  assert.deepEqual(getAudioPreferences(), DEFAULT_AUDIO);
  globalThis.localStorage = { getItem: () => JSON.stringify({ enabled: false, music: true, volume: 4 }) };
  assert.deepEqual(getAudioPreferences(), { enabled: false, music: true, volume: 1 });
});

test('narration selects Indonesian voice and one reader replaces the previous reader', t => {
  const previous = globalThis.window;
  t.after(() => { globalThis.window = previous; });
  const spoken = [];
  const voice = { lang: 'id-ID', name: 'Indonesia' };
  let ducked = false;
  globalThis.window = {
    SpeechSynthesisUtterance: class { constructor(text) { this.text = text; } },
    speechSynthesis: { getVoices: () => [{ lang: 'en-US' }, voice], cancel() {}, resume() {}, speak(utterance) { spoken.push(utterance); utterance.onstart(); } },
  };
  const reader = new SpeechReader({ volume: 0.45, setSpeechActive(value) { ducked = value; } });
  const first = Symbol('first'); const second = Symbol('second');
  let stopped = 0;
  reader.speak({ owner: first, text: 'Pengantar', onStop: () => stopped++ });
  assert.equal(spoken[0].voice, voice);
  assert.equal(ducked, true);
  reader.speak({ owner: second, text: 'Penjelasan' });
  assert.equal(stopped, 1);
  spoken[0].onend(); // A delayed event from the old reader must not stop the current one.
  assert.equal(reader.current.owner, second);
  assert.equal(ducked, true);
  reader.stop(first);
  assert.equal(reader.current.owner, second);
  reader.stop();
  assert.equal(reader.current, null);
  assert.equal(ducked, false);
});
