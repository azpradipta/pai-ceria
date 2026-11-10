<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
    
    <!-- Top Header -->
    <div class="bg-gradient-to-br from-amber-600 to-amber-800 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-amber-500/40 relative overflow-hidden">
      <div class="relative z-10 space-y-3">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-amber-100 text-xs font-black">
          <span>📝</span>
          <span>Jurnal Refleksi Mengajar</span>
        </div>

        <h1 class="text-2xl sm:text-4xl font-black">
          Catatan & Jurnal Mengajar Ibu Guru
        </h1>

        <p class="text-xs sm:text-sm text-amber-100 max-w-2xl leading-relaxed">
          Semua catatan khusus, hasil evaluasi, dan pengingat pembelajaran untuk setiap bab yang ibu tulis tersimpan aman di browser perangkat ibu.
        </p>
      </div>
    </div>

    <!-- Notes List -->
    <div v-if="notesList.length > 0" class="space-y-4">
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold text-slate-500">Terdapat {{ notesList.length }} catatan bab tersimpan</span>
        <button
          @click="clearAllNotes"
          class="text-xs font-bold text-rose-600 hover:underline"
        >
          Hapus Semua Catatan
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="note in notesList"
          :key="note.babId"
          class="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-3 flex flex-col justify-between"
        >
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-amber-100 text-amber-800">
                Kelas {{ note.kelas }} • Bab {{ note.babNumber }}
              </span>
              <span class="text-[10px] text-slate-400">
                {{ formatDate(note.updatedAt) }}
              </span>
            </div>

            <h3 class="font-extrabold text-slate-900 text-sm sm:text-base">
              {{ note.babTitle }}
            </h3>

            <div class="p-3 rounded-2xl bg-amber-50/60 border border-amber-100 text-xs text-slate-700 whitespace-pre-line leading-relaxed">
              {{ note.text }}
            </div>
          </div>

          <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <router-link
              :to="`/kelas/${note.kelas}/bab/${note.babId}`"
              class="font-extrabold text-emerald-700 hover:underline"
            >
              Buka Bab Ini →
            </router-link>

            <button
              @click="deleteNote(note.babId)"
              class="font-bold text-rose-600 hover:text-rose-800"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="bg-white rounded-3xl p-12 text-center space-y-4 border border-slate-200">
      <div class="text-5xl">📝</div>
      <h3 class="text-lg font-bold text-slate-800">Belum Ada Catatan Tersimpan</h3>
      <p class="text-xs text-slate-500 max-w-sm mx-auto">
        Ibu dapat menambahkan catatan kapan saja saat membuka halaman detail materi di masing-masing bab.
      </p>
      <router-link
        to="/kelas/1"
        class="inline-block px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-extrabold shadow"
      >
        Mulai Buka Materi & Buat Catatan
      </router-link>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useAppStore } from '../stores/appStore';
import { allKelasData } from '../data/paiData';

const store = useAppStore();

const notesList = computed(() => {
  const result = [];
  const notes = store.teacherNotes || {};

  for (const [babId, noteObj] of Object.entries(notes)) {
    if (!noteObj || !noteObj.text?.trim()) continue;

    // Find bab info
    let foundBab = null;
    let foundKelas = null;

    for (const [k, kData] of Object.entries(allKelasData)) {
      const allB = [...kData.semester1, ...kData.semester2];
      const match = allB.find(b => b.id === babId);
      if (match) {
        foundBab = match;
        foundKelas = k;
        break;
      }
    }

    result.push({
      babId,
      kelas: foundKelas || '?',
      babNumber: foundBab?.bab || '?',
      babTitle: foundBab?.judul || 'Bab Pembelajaran',
      text: noteObj.text,
      updatedAt: noteObj.updatedAt || new Date().toISOString()
    });
  }

  return result;
});

const formatDate = (isoString) => {
  if (!isoString) return '';
  const d = new Date(isoString);
  return d.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

const deleteNote = (babId) => {
  if (confirm('Hapus catatan bab ini?')) {
    store.saveNote(babId, '');
  }
};

const clearAllNotes = () => {
  if (confirm('Yakin ingin menghapus seluruh catatan mengajar?')) {
    localStorage.removeItem('pai_ceria_teacher_notes_v1');
    store.teacherNotes = {};
  }
};
</script>

