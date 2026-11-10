<template>
  <div v-if="babData" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
    
    <!-- Top Breadcrumb & Navigation -->
    <div class="flex items-center justify-between text-xs sm:text-sm">
      <router-link :to="`/kelas/${kelas}`" class="inline-flex items-center gap-1 font-bold text-slate-500 hover:text-emerald-700">
        <span>←</span>
        <span>Kembali ke Daftar Bab Kelas {{ kelas }}</span>
      </router-link>

      <div class="flex items-center gap-2">
        <button
          @click="markRead"
          class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full font-bold transition-all text-xs"
          :class="isRead ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
        >
          <span>{{ isRead ? '✓ Sudah Dipelajari' : '〇 Tandai Selesai Belajar' }}</span>
        </button>

        <!-- Direct Game Button -->
        <router-link
          :to="`/kelas/${kelas}/bab/${babId}/game`"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-extrabold bg-purple-600 hover:bg-purple-700 text-white text-xs shadow-sm transition-all"
        >
          <span>🎮</span>
          <span>Main Game</span>
        </router-link>
      </div>
    </div>

    <!-- Chapter Header Card -->
    <div class="bg-gradient-to-br from-emerald-800 to-teal-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-600/40 relative overflow-hidden">
      <!-- Decorative circle -->
      <div class="absolute -right-8 -bottom-8 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl"></div>

      <div class="relative z-10 space-y-4">
        <div class="flex flex-wrap items-center gap-2">
          <span class="px-3 py-1 rounded-full text-xs font-black bg-amber-400 text-slate-950 shadow-sm">
            Kelas {{ kelas }} • Bab {{ babData.bab }}
          </span>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-emerald-100 backdrop-blur-sm border border-white/20">
            {{ babData.elemen }}
          </span>
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-emerald-100">
            Semester {{ babData.bab <= 5 ? '1' : '2' }}
          </span>
        </div>

        <h1 class="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
          {{ store.curriculumMode === 'cp-baru' ? (babData.judulCPBaru || babData.judul) : babData.judul }}
        </h1>

        <!-- Comparison Notice if Titles Differ -->
        <div v-if="babData.judulCPBaru && babData.judulCPBaru !== babData.judul" class="p-3 rounded-2xl bg-black/20 border border-white/10 text-xs sm:text-sm text-emerald-200 space-y-1">
          <div class="flex items-center gap-2">
            <span class="font-extrabold text-amber-300">ℹ️ Penyesuaian CP:</span>
            <span>Judul CP Baru: <strong>{{ babData.judulCPBaru }}</strong></span>
          </div>
          <div class="text-slate-300">
            Judul versi Buku Siswa: <em>"{{ babData.judul }}"</em>
          </div>
        </div>

        <!-- Curriculum Mode Selector Pills in Header -->
        <div class="pt-2 flex flex-wrap items-center gap-3">
          <span class="text-xs text-slate-300 font-bold">Tampilan Kurikulum:</span>
          <div class="inline-flex bg-emerald-950/80 p-1 rounded-2xl border border-emerald-500/30">
            <button
              @click="store.setCurriculumMode('cp-baru')"
              class="px-3 py-1 rounded-xl text-xs font-extrabold transition-all"
              :class="store.curriculumMode === 'cp-baru' ? 'bg-emerald-500 text-white shadow' : 'text-emerald-300 hover:text-white'"
            >
              ✨ Revisi CP Baru (CP 020/2026)
            </button>
            <button
              @click="store.setCurriculumMode('cp-lama')"
              class="px-3 py-1 rounded-xl text-xs font-extrabold transition-all"
              :class="store.curriculumMode === 'cp-lama' ? 'bg-amber-400 text-slate-950 shadow' : 'text-emerald-300 hover:text-white'"
            >
              📖 CP Lama (Buku Siswa)
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- Capaian & Tujuan Pembelajaran Card -->
    <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-100 space-y-4">
      <div class="flex items-center gap-2">
        <span class="text-2xl">🎯</span>
        <h2 class="text-lg sm:text-xl font-black text-slate-900">Tujuan & Target Pembelajaran</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
        <div class="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 space-y-2">
          <div class="font-bold text-emerald-900 flex items-center gap-1.5">
            <span>📌</span>
            <span>Target Kompetensi ({{ store.curriculumMode === 'cp-baru' ? 'CP Baru 2026' : 'CP Lama Buku' }}):</span>
          </div>
          <p class="text-slate-700 leading-relaxed font-medium">
            {{ store.curriculumMode === 'cp-baru' ? babData.cpBaru?.kompetensi : babData.cpLama?.kompetensi }}
          </p>
          <div class="text-[11px] text-slate-500 pt-1">
            Fokus: {{ store.curriculumMode === 'cp-baru' ? babData.cpBaru?.fokus : babData.cpLama?.fokus }}
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-amber-50 border border-amber-100 space-y-2">
          <div class="font-bold text-amber-900 flex items-center gap-1.5">
            <span>✨</span>
            <span>Indikator Keberhasilan Siswa:</span>
          </div>
          <ul class="space-y-1.5 text-slate-700 list-disc pl-4">
            <li v-for="(t, idx) in babData.tujuan" :key="idx">
              {{ t }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Pengantar Materi -->
    <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-3">
      <h3 class="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
        <span>📖</span>
        <span>Pengantar Pembelajaran</span>
      </h3>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed">
        {{ babData.materi?.pengantar }}
      </p>
    </div>

    <!-- Sub-Bab Detailed Material Sections -->
    <div class="space-y-6">
      <div
        v-for="(sub, sIdx) in babData.materi?.subBab"
        :key="sIdx"
        class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 space-y-5"
      >
        <div class="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 class="text-lg sm:text-xl font-black text-slate-900 text-emerald-800">
            {{ sub.judul }}
          </h3>
          <AudioSynthesizerReader
            v-if="sub.dalil || sub.lafal"
            :text="sub.dalil?.latin || sub.lafal?.latin || sub.judul"
            label="Dengarkan Lafal"
          />
        </div>

        <p v-if="sub.isi" class="text-sm sm:text-base text-slate-700 leading-relaxed">
          {{ sub.isi }}
        </p>

        <!-- Dalil / Ayat Al-Qur'an Box if present -->
        <div v-if="sub.dalil" class="bg-emerald-50/70 border-2 border-emerald-300/80 rounded-3xl p-6 space-y-3 shadow-sm">
          <div class="flex items-center justify-between">
            <span class="text-xs font-extrabold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
              <span>📖</span> Dalil Naqli
            </span>
            <AudioSynthesizerReader :text="sub.dalil.latin" label="Lafalkan" />
          </div>

          <div class="text-right py-2">
            <p class="font-arabic text-2xl sm:text-3xl text-slate-900 leading-loose">
              {{ sub.dalil.arab }}
            </p>
          </div>

          <div class="space-y-1 border-t border-emerald-200 pt-3 text-xs sm:text-sm">
            <p class="italic text-emerald-950 font-medium">
              "{{ sub.dalil.latin }}"
            </p>
            <p class="text-slate-700 font-semibold">
              Artinya: {{ sub.dalil.arti }}
            </p>
          </div>
        </div>

        <!-- Lafal Box if present -->
        <div v-if="sub.lafal" class="bg-amber-50/70 border-2 border-amber-300/80 rounded-3xl p-6 space-y-3 shadow-sm">
          <div class="flex items-center justify-between">
            <span class="text-xs font-extrabold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
              <span>✨</span> Bacaan Kalimat Thayyibah
            </span>
            <AudioSynthesizerReader :text="sub.lafal.latin" label="Lafalkan" />
          </div>

          <div class="text-right py-2">
            <p class="font-arabic text-3xl sm:text-4xl text-slate-900 leading-loose">
              {{ sub.lafal.arab }}
            </p>
          </div>

          <div class="border-t border-amber-200 pt-3 text-xs sm:text-sm space-y-1">
            <p class="italic text-amber-950 font-bold">
              "{{ sub.lafal.latin }}"
            </p>
            <p class="text-slate-700 font-semibold">
              Artinya: {{ sub.lafal.arti }}
            </p>
          </div>
        </div>

        <!-- Ayat List (Surah Al-Fatihah / Al-Ma'un / Al-Insyirah) -->
        <div v-if="sub.ayatList || sub.ayatPenting || sub.ayatInsyirah" class="space-y-4">
          <div
            v-for="(ayat, aIdx) in (sub.ayatList || sub.ayatPenting || sub.ayatInsyirah)"
            :key="aIdx"
            class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:bg-emerald-50/40 transition-colors"
          >
            <div class="flex items-center justify-between">
              <span class="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                {{ ayat.no || (aIdx + 1) }}
              </span>
              <AudioSynthesizerReader :text="ayat.latin" label="Dengar" />
            </div>

            <div class="text-right py-1">
              <p class="font-arabic text-xl sm:text-2xl text-slate-900 leading-loose">
                {{ ayat.arab }}
              </p>
            </div>

            <p class="italic text-xs sm:text-sm text-emerald-900 font-medium">
              {{ ayat.latin }}
            </p>
            <p class="text-xs sm:text-sm text-slate-600">
              {{ ayat.arti }}
            </p>
          </div>
        </div>

        <!-- Daftar Huruf Hijaiah (Kelas 1) -->
        <div v-if="sub.daftarHuruf" class="grid grid-cols-4 sm:grid-cols-7 gap-3">
          <div
            v-for="(h, hIdx) in sub.daftarHuruf"
            :key="hIdx"
            class="bg-emerald-50 p-3 rounded-2xl border border-emerald-200 text-center hover:scale-105 transition-transform"
          >
            <div class="font-arabic text-3xl text-emerald-900">{{ h.arab }}</div>
            <div class="text-xs font-black text-slate-800 mt-1">{{ h.nama }}</div>
            <div class="text-[10px] text-slate-500">({{ h.bunyi }})</div>
          </div>
        </div>

        <!-- Harakat List (Kelas 1) -->
        <div v-if="sub.harakatList" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            v-for="(hk, hkIdx) in sub.harakatList"
            :key="hkIdx"
            class="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1.5"
          >
            <div class="flex items-center justify-between">
              <span class="font-black text-slate-900 text-sm">{{ hk.nama }}</span>
              <span class="font-arabic text-2xl text-amber-700">{{ hk.tanda }}</span>
            </div>
            <div class="text-xs text-slate-600">Letak: {{ hk.letak }}</div>
            <div class="text-xs font-bold text-amber-900">{{ hk.bunyi }}</div>
          </div>
        </div>

        <!-- Tajwid Rules (Mim Sukun / Qalqalah / Ghunnah / Tafkhim-Tarqiq) -->
        <div v-if="sub.hukumMim || sub.jenisQalqalah || sub.aturanGhunnah || sub.lamRules || sub.raRules" class="space-y-4">
          <div
            v-for="(rule, rIdx) in (sub.hukumMim || sub.jenisQalqalah || sub.aturanGhunnah || sub.lamRules || sub.raRules)"
            :key="rIdx"
            class="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-2"
          >
            <h4 class="font-black text-teal-900 text-sm sm:text-base flex items-center gap-2">
              <span>💎</span>
              <span>{{ rule.nama || rule.huruf }}</span>
            </h4>
            <p v-if="rule.aturan || rule.syarat" class="text-xs sm:text-sm text-slate-700">
              <strong>Aturan:</strong> {{ rule.aturan || rule.syarat }}
            </p>
            <p v-if="rule.caraBaca" class="text-xs sm:text-sm text-teal-800 font-semibold">
              <strong>Cara Membaca:</strong> {{ rule.caraBaca }}
            </p>
            <div v-if="rule.contoh" class="p-2.5 rounded-xl bg-white border border-teal-200 text-xs sm:text-sm font-bold text-slate-900">
              Contoh: {{ rule.contoh }}
            </div>
          </div>
        </div>

        <!-- Asmaul Husna List -->
        <div v-if="sub.daftarAsmaulCPBaru || sub.daftarAsmaulCPLama || sub.daftarBaru || sub.daftarLama" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="(asm, aIdx) in (sub.daftarAsmaulCPBaru || sub.daftarAsmaulCPLama || sub.daftarBaru || sub.daftarLama)"
            :key="aIdx"
            class="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2"
          >
            <div class="flex items-center justify-between">
              <span class="font-extrabold text-sm text-amber-950">{{ asm.nama }}</span>
              <span class="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-900">{{ asm.arti }}</span>
            </div>
            <p v-if="asm.penjelasan || asm.makna" class="text-xs text-slate-700 leading-relaxed">
              {{ asm.penjelasan || asm.makna }}
            </p>
          </div>
        </div>

        <!-- Langkah Wudu Steps (Kelas 1) -->
        <div v-if="sub.langkahWudu" class="space-y-2.5">
          <div
            v-for="step in sub.langkahWudu"
            :key="step.urut"
            class="flex items-start gap-3 p-3 rounded-2xl bg-blue-50/70 border border-blue-200"
          >
            <span class="w-7 h-7 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0">
              {{ step.urut }}
            </span>
            <p class="text-xs sm:text-sm text-slate-800 font-semibold pt-0.5">
              {{ step.aksi }}
            </p>
          </div>
        </div>

        <!-- 8 Asnaf Zakat (Kelas 6) -->
        <div v-if="sub.delapanAsnaf" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            v-for="asnaf in sub.delapanAsnaf"
            :key="asnaf.no"
            class="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-1"
          >
            <div class="font-black text-indigo-950 text-xs sm:text-sm flex items-center gap-1.5">
              <span class="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center">{{ asnaf.no }}</span>
              <span>{{ asnaf.nama }}</span>
            </div>
            <p class="text-xs text-slate-600">{{ asnaf.ket }}</p>
          </div>
        </div>

        <!-- Rukun Wakaf (Kelas 6) -->
        <div v-if="sub.rukunWakaf" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            v-for="(rw, rwIdx) in sub.rukunWakaf"
            :key="rwIdx"
            class="p-3.5 rounded-2xl bg-purple-50 border border-purple-200 space-y-1"
          >
            <div class="font-black text-purple-950 text-xs sm:text-sm">{{ rw.nama }}</div>
            <p class="text-xs text-slate-600">{{ rw.ket }}</p>
          </div>
        </div>

      </div>
    </div>

    <!-- Rangkuman Pembelajaran -->
    <div class="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-6 sm:p-8 border border-emerald-200 space-y-4">
      <div class="flex items-center gap-2">
        <span class="text-2xl">📝</span>
        <h3 class="text-lg font-black text-slate-900">Rangkuman Materi Penting</h3>
      </div>
      <ul class="space-y-2 text-xs sm:text-sm text-slate-700 pl-5 list-disc">
        <li v-for="(r, idx) in babData.materi?.rangkuman" :key="idx" class="leading-relaxed">
          {{ r }}
        </li>
      </ul>
    </div>

    <!-- Catatan Refleksi Mengajar untuk Ibu Guru -->
    <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-amber-200 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-2xl">👩‍🏫</span>
          <div>
            <h3 class="text-base sm:text-lg font-black text-slate-900">Catatan Mengajar Ibu Guru</h3>
            <p class="text-xs text-slate-500">Tersimpan otomatis di HP/komputer ibu untuk bab ini</p>
          </div>
        </div>
        <span v-if="noteSavedNotice" class="text-xs font-bold text-emerald-600 animate-pulse">
          ✓ Tersimpan!
        </span>
      </div>

      <textarea
        v-model="currentTeacherNote"
        rows="3"
        placeholder="Tuliskan catatan khusus untuk bab ini (misal: tanggal ulangan, anak yang perlu bimbingan tajwid tambahan, atau ide ice breaking kelas)..."
        class="w-full p-3.5 bg-amber-50/50 border border-amber-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
      ></textarea>

      <div class="flex justify-end">
        <button
          @click="saveNote"
          class="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs shadow-sm transition-all"
        >
          Simpan Catatan Bab Ini
        </button>
      </div>
    </div>

    <!-- Big Action: Play Game CTA Banner -->
    <div class="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="space-y-2 text-center md:text-left">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-extrabold text-amber-300">
          <span>🎮</span>
          <span>Game Interaktif Bab Ini</span>
        </div>
        <h3 class="text-2xl font-black">{{ babData.game.nama }}</h3>
        <p class="text-xs sm:text-sm text-purple-200 max-w-xl">
          {{ babData.game.petunjuk }} Mainkan sekarang bersama siswa di kelas untuk menguji pemahaman dengan ceria!
        </p>
      </div>

      <router-link
        :to="`/kelas/${kelas}/bab/${babId}/game`"
        class="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base shadow-lg transform hover:scale-105 transition-all text-center whitespace-nowrap"
      >
        Mulai Mainkan Game Sekarang →
      </router-link>
    </div>

  </div>

  <div v-else class="max-w-5xl mx-auto px-4 py-16 text-center space-y-4">
    <div class="text-4xl">⚠️</div>
    <h2 class="text-xl font-bold text-slate-800">Bab Tidak Ditemukan</h2>
    <p class="text-xs text-slate-500">Materi untuk bab yang dipilih tidak tersedia atau telah dipindahkan.</p>
    <router-link :to="`/kelas/${kelas}`" class="inline-block px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold">
      Kembali ke Daftar Bab
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useAppStore } from '../stores/appStore';
import { getMateriByKelasAndBab } from '../data/paiData';
import AudioSynthesizerReader from '../components/AudioSynthesizerReader.vue';

const props = defineProps({
  kelas: {
    type: [String, Number],
    required: true
  },
  babId: {
    type: String,
    required: true
  }
});

const store = useAppStore();
const currentTeacherNote = ref('');
const noteSavedNotice = ref(false);

const babData = computed(() => {
  return getMateriByKelasAndBab(Number(props.kelas), props.babId);
});

const isRead = computed(() => {
  return store.isChapterRead(props.babId);
});

const markRead = () => {
  store.markChapterAsRead(props.babId);
};

const saveNote = () => {
  store.saveNote(props.babId, currentTeacherNote.value);
  noteSavedNotice.value = true;
  setTimeout(() => {
    noteSavedNotice.value = false;
  }, 2500);
};

onMounted(() => {
  // Load existing note
  currentTeacherNote.value = store.getNoteForBab(props.babId);
  // Mark as read when opened
  store.markChapterAsRead(props.babId);
});
</script>

