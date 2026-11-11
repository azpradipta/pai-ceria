const KEY = 'pai_ceria_audio_v1';
export const DEFAULT_AUDIO = { enabled: true, music: false, volume: 0.45 };

export function getAudioPreferences() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY)) || {};
    return {
      enabled: typeof saved.enabled === 'boolean' ? saved.enabled : DEFAULT_AUDIO.enabled,
      music: typeof saved.music === 'boolean' ? saved.music : DEFAULT_AUDIO.music,
      volume: typeof saved.volume === 'number' && Number.isFinite(saved.volume)
        ? Math.min(1, Math.max(0, saved.volume)) : DEFAULT_AUDIO.volume,
    };
  } catch { return { ...DEFAULT_AUDIO }; }
}

export function saveAudioPreferences(preferences) {
  try { localStorage.setItem(KEY, JSON.stringify(preferences)); } catch { /* Audio also works without storage. */ }
}
