<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
    
    <!-- Hero Welcome Banner -->
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-teal-700 to-emerald-900 text-white shadow-xl p-6 sm:p-10 border border-emerald-500/30">
      <!-- Decorative background circles -->
      <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-2xl"></div>
      <div class="absolute right-20 top-0 w-40 h-40 bg-amber-400/20 rounded-full blur-xl"></div>
      
      <div class="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div class="md:col-span-8 space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-200 text-xs font-bold">
            <span>✨</span>
            <span>Aplikasi Pembelajaran & Game Interaktif PAI SD</span>
          </div>

          <h1 class="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Assalamu’alaikum, <span class="text-amber-300">Ibu Guru</span> & Anak-Anak Hebat!
          </h1>

          <p class="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-2xl">
            Selamat datang di media ajar digital interaktif Pendidikan Agama Islam & Budi Pekerti untuk <strong class="text-white">Kelas 1, 5, dan 6</strong>. Tersedia materi lengkap untuk seluruh bab berdasarkan <strong class="text-amber-300">Buku Siswa (CP Lama)</strong> dan penyesuaian <strong class="text-amber-300">Revisi CP Baru (CP 020/2026)</strong>, lengkap dengan ragam games edukatif seru!
          </p>

          <!-- Current active curriculum pill -->
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <div class="flex items-center gap-2 bg-emerald-950/70 px-3.5 py-1.5 rounded-xl border border-emerald-500/40 text-xs">
              <span class="text-slate-300">Mode Kurikulum:</span>
              <span class="font-extrabold text-amber-300 uppercase tracking-wider">
                {{ store.curriculumMode === 'cp-baru' ? '✨ CP Baru (Revisi CP 020/2026)' : '📖 CP Lama (Buku Siswa)' }}
              </span>
            </div>

            <button
              @click="toggleMode"
              class="text-xs font-bold underline text-emerald-200 hover:text-white transition-colors"
            >
              Ganti ke {{ store.curriculumMode === 'cp-baru' ? 'CP Lama (Buku)' : 'CP Baru (Docx)' }}
            </button>
          </div>
        </div>

        <!-- Illustration -->
        <div class="md:col-span-4 flex justify-center">
          <div class="relative w-44 h-44 sm:w-52 sm:h-52 bg-white/10 rounded-full p-4 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-inner">
            <IslamicIllustration name="mosque" className="w-36 h-36 animate-float" />
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Stats & Status Bar -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
      <div class="bg-white rounded-2xl p-4 shadow-sm border border-emerald-100 flex items-center gap-3">
        <div class="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl font-black shadow-sm">
          ⭐
        </div>
        <div>
          <div class="text-2xl font-black text-slate-800">{{ store.totalStars }}</div>
          <div class="text-xs font-bold text-slate-500">Bintang Prestasi</div>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-4 shadow-sm border border-emerald-100 flex items-center gap-3">
        <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl font-black shadow-sm">
          📚
        </div>
        <div>
          <div class="text-2xl font-black text-slate-800">30 Bab</div>
          <div class="text-xs font-bold text-slate-500">Kelas 1, 5, dan 6</div>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-4 shadow-sm border border-emerald-100 flex items-center gap-3">
        <div class="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-2xl font-black shadow-sm">
          🎮
        </div>
        <div>
          <div class="text-2xl font-black text-slate-800">30 Games</div>
          <div class="text-xs font-bold text-slate-500">Tantangan Kreatif</div>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-4 shadow-sm border border-emerald-100 flex items-center gap-3">
        <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-black shadow-sm">
          ⚡
        </div>
        <div>
          <div class="text-2xl font-black text-slate-800">100%</div>
          <div class="text-xs font-bold text-slate-500">Bisa Offline (PWA)</div>
        </div>
      </div>
    </div>

    <!-- Pilihan Kelas Mengajar -->
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">Pilih Kelas yang Diajar</h2>
          <p class="text-xs sm:text-sm text-slate-500">Materi lengkap, rangkuman, teks arab berharakat, dan game edukatif</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- KELAS 1 -->
        <router-link
          to="/kelas/1"
          @click="store.setKelas(1)"
          class="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border-2 border-emerald-200/80 hover:border-emerald-500 transition-all duration-300 relative flex flex-col justify-between overflow-hidden transform hover:-translate-y-1"
        >
          <div class="absolute top-0 right-0 w-24 h-24 bg-emerald-100/60 rounded-bl-full transition-transform group-hover:scale-110"></div>
          
          <div class="space-y-4 relative z-10">
            <div class="flex items-center justify-between">
              <span class="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                FASE A • SEMESTER 1 & 2
              </span>
              <span class="text-3xl">🌱</span>
            </div>

            <div>
              <h3 class="text-2xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                Kelas 1 SD
              </h3>
              <p class="text-xs text-slate-600 mt-1 line-clamp-2">
                Fondasi dasar huruf hijaiah, makharijul huruf, rukun iman & Islam, adab tasbih & tahmid, wudu, serta kisah Nabi Adam & Idris a.s.
              </p>
            </div>

            <div class="bg-emerald-50 rounded-2xl p-3 border border-emerald-100 space-y-1.5 text-xs">
              <div class="flex items-center justify-between text-slate-700">
                <span class="font-bold">Total Pembelajaran:</span>
                <span class="font-black text-emerald-800">10 Bab</span>
              </div>
              <div class="flex items-center justify-between text-slate-700">
                <span class="font-bold">Game Menarik:</span>
                <span class="font-black text-amber-600">Makhraj Pop, Wudu Builder</span>
              </div>
            </div>
          </div>

          <div class="pt-4 flex items-center justify-between text-sm font-extrabold text-emerald-700 group-hover:text-emerald-800">
            <span>Buka Materi Kelas 1</span>
            <span class="text-lg transition-transform group-hover:translate-x-1">→</span>
          </div>
        </router-link>

        <!-- KELAS 5 -->
        <router-link
          to="/kelas/5"
          @click="store.setKelas(5)"
          class="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border-2 border-teal-200/80 hover:border-teal-500 transition-all duration-300 relative flex flex-col justify-between overflow-hidden transform hover:-translate-y-1"
        >
          <div class="absolute top-0 right-0 w-24 h-24 bg-teal-100/60 rounded-bl-full transition-transform group-hover:scale-110"></div>
          
          <div class="space-y-4 relative z-10">
            <div class="flex items-center justify-between">
              <span class="px-3 py-1 rounded-full text-xs font-black bg-teal-100 text-teal-800 border border-teal-300">
                FASE C • SEMESTER 1 & 2
              </span>
              <span class="text-3xl">🌿</span>
            </div>

            <div>
              <h3 class="text-2xl font-black text-slate-900 group-hover:text-teal-700 transition-colors">
                Kelas 5 SD
              </h3>
              <p class="text-xs text-slate-600 mt-1 line-clamp-2">
                Tajwid Mim Sukun & Qalqalah, Surah Al-Ma'un & Al-'Asr, Asmaul Husna terpilih, Fikih Puasa Wajib/Sunah, Makanan Halal-Haram, dan Kepemimpinan Madinah.
              </p>
            </div>

            <div class="bg-teal-50 rounded-2xl p-3 border border-teal-100 space-y-1.5 text-xs">
              <div class="flex items-center justify-between text-slate-700">
                <span class="font-bold">Total Pembelajaran:</span>
                <span class="font-black text-teal-800">10 Bab</span>
              </div>
              <div class="flex items-center justify-between text-slate-700">
                <span class="font-bold">Game Menarik:</span>
                <span class="font-black text-amber-600">Detektif Tajwid, Halal Express</span>
              </div>
            </div>
          </div>

          <div class="pt-4 flex items-center justify-between text-sm font-extrabold text-teal-700 group-hover:text-teal-800">
            <span>Buka Materi Kelas 5</span>
            <span class="text-lg transition-transform group-hover:translate-x-1">→</span>
          </div>
        </router-link>

        <!-- KELAS 6 -->
        <router-link
          to="/kelas/6"
          @click="store.setKelas(6)"
          class="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border-2 border-amber-200/80 hover:border-amber-500 transition-all duration-300 relative flex flex-col justify-between overflow-hidden transform hover:-translate-y-1"
        >
          <div class="absolute top-0 right-0 w-24 h-24 bg-amber-100/60 rounded-bl-full transition-transform group-hover:scale-110"></div>
          
          <div class="space-y-4 relative z-10">
            <div class="flex items-center justify-between">
              <span class="px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800 border border-amber-300">
                FASE C • SEMESTER 1 & 2
              </span>
              <span class="text-3xl">🌳</span>
            </div>

            <div>
              <h3 class="text-2xl font-black text-slate-900 group-hover:text-amber-700 transition-colors">
                Kelas 6 SD
              </h3>
              <p class="text-xs text-slate-600 mt-1 line-clamp-2">
                Tajwid Ghunnah, Tafkhim & Tarqiq, Surah Al-Insyirah & Ad-Duha, ZIS & Wakaf, Iman Takdir Qada & Qadar, Akhlak Lingkungan, dan 4 Khulafaur Rasyidin.
              </p>
            </div>

            <div class="bg-amber-50 rounded-2xl p-3 border border-amber-100 space-y-1.5 text-xs">
              <div class="flex items-center justify-between text-slate-700">
                <span class="font-bold">Total Pembelajaran:</span>
                <span class="font-black text-amber-800">10 Bab</span>
              </div>
              <div class="flex items-center justify-between text-slate-700">
                <span class="font-bold">Game Menarik:</span>
                <span class="font-black text-emerald-700">Simulasi Wakaf, Timbangan Takdir</span>
              </div>
            </div>
          </div>

          <div class="pt-4 flex items-center justify-between text-sm font-extrabold text-amber-700 group-hover:text-amber-800">
            <span>Buka Materi Kelas 6</span>
            <span class="text-lg transition-transform group-hover:translate-x-1">→</span>
          </div>
        </router-link>

      </div>
    </div>

    <!-- Penjelasan Arsitektur & Database (Jawaban untuk User) -->
    <div class="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-700 space-y-4">
      <div class="flex items-center gap-3">
        <span class="text-2xl">💡</span>
        <h3 class="text-lg sm:text-xl font-black text-amber-300">
          Penjelasan Teknis Deploy: "Apakah Perlu Database Backend?"
        </h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm">
        <div class="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
          <div class="font-black text-emerald-400 flex items-center gap-1.5">
            <span>🚀</span>
            <span>1. TIDAK PERLU DATABASE SERVER</span>
          </div>
          <p class="text-slate-300 leading-relaxed">
            Materi kurikulum PAI, teks Arab, transliterasi, tajwid, dan kisi-kisi game adalah <strong>data referensi statis terstruktur</strong>. Menyimpannya di frontend membuat aplikasi terbuka <strong>instan tanpa loading</strong> dan <strong>100% bebas biaya sewa database bulanan</strong>.
          </p>
        </div>

        <div class="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
          <div class="font-black text-amber-400 flex items-center gap-1.5">
            <span>📶</span>
            <span>2. BISA 100% OFFLINE (PWA)</span>
          </div>
          <p class="text-slate-300 leading-relaxed">
            Ibu sering mengajar di ruang kelas yang sinyal internetnya kurang stabil. Dengan arsitektur PWA tanpa backend terpisah, aplikasi tetap bisa diakses lancar di HP/laptop ibu tanpa butuh kuota internet setelah sekali dibuka.
          </p>
        </div>

        <div class="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
          <div class="font-black text-teal-400 flex items-center gap-1.5">
            <span>💾</span>
            <span>3. PENYIMPANAN LOCALSTORAGE</span>
          </div>
          <p class="text-slate-300 leading-relaxed">
            Skor game siswa, bintang prestasi, serta <strong>Catatan Guru & Refleksi Mengajar Ibu</strong> tersimpan otomatis dan aman di browser perangkat ibu via <code class="bg-black/40 px-1 py-0.5 rounded text-amber-300">LocalStorage</code>.
          </p>
        </div>
      </div>

      <div class="pt-2 text-xs text-slate-400 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
        <span>✅ <strong>Rekomendasi Deploy:</strong> Cukup deploy di <em>Vercel</em>, <em>Netlify</em>, <em>GitHub Pages</em>, atau <em>Cloudflare Pages</em> secara gratis dan langsung siap pakai!</span>
        <router-link to="/perubahan-cp" class="text-amber-400 font-bold hover:underline">
          Lihat Panduan Analisis Perubahan CP →
        </router-link>
      </div>
    </div>

    <!-- Fitur Khusus untuk Ibu Guru -->
    <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-100 space-y-6">
      <div class="flex items-center gap-3">
        <span class="text-3xl">👩‍🏫</span>
        <div>
          <h3 class="text-xl font-extrabold text-slate-900">Fitur Pendukung untuk Ibu Guru</h3>
          <p class="text-xs text-slate-500">Dirancang khusus agar memudahkan ibu saat mengajar di kelas maupun membimbing siswa secara mandiri</p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-2">
          <div class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center text-lg font-bold">
            📺
          </div>
          <h4 class="font-bold text-slate-900 text-sm">Mode Layar Mengajar</h4>
          <p class="text-xs text-slate-600 leading-relaxed">
            Menampilkan teks dan kartu materi dengan ukuran ekstra besar, sangat jelas terlihat saat dihubungkan ke proyektor LCD atau TV kelas.
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-100 space-y-2">
          <div class="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center text-lg font-bold">
            ⚖️
          </div>
          <h4 class="font-bold text-slate-900 text-sm">Komparasi CP Baru vs Lama</h4>
          <p class="text-xs text-slate-600 leading-relaxed">
            Tersedia tabel analisis perbandingan CP 046/2025 (Buku) dan CP 020/2026 (Revisi Docx) agar ibu tahu persis letak pergeseran materi.
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-teal-50/70 border border-teal-100 space-y-2">
          <div class="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center text-lg font-bold">
            📝
          </div>
          <h4 class="font-bold text-slate-900 text-sm">Jurnal Catatan Mengajar</h4>
          <p class="text-xs text-slate-600 leading-relaxed">
            Ibu dapat menuliskan catatan khusus, tanggal pelaksanaan, atau nama siswa yang perlu remidi di setiap bab secara langsung di aplikasi.
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useAppStore } from '../stores/appStore';
import IslamicIllustration from '../components/IslamicIllustration.vue';

const store = useAppStore();

const toggleMode = () => {
  store.setCurriculumMode(store.curriculumMode === 'cp-baru' ? 'cp-lama' : 'cp-baru');
};
</script>

