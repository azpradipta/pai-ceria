<template>
  <div v-if="babData" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
    
    <!-- Top Breadcrumb & Navigation -->
    <div class="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
      <router-link :to="classLocation(kelas)" class="inline-flex items-center gap-1 font-bold text-slate-500 hover:text-emerald-700">
        <span>←</span>
        <span>Kembali ke Daftar Bab Kelas {{ kelas }}</span>
      </router-link>

      <div class="flex flex-wrap items-center gap-2">
        <button
          @click="markRead"
          class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full font-bold transition-all text-xs"
          :class="isRead ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
        >
          <span>{{ isRead ? '✓ Sudah Dipelajari' : '〇 Tandai Selesai Belajar' }}</span>
        </button>

        <router-link
          :to="`/kelas/${kelas}/bab/${babData.id}/game`"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-extrabold bg-purple-600 hover:bg-purple-700 text-white text-xs shadow-sm transition-all active:scale-95"
        >
          <span>🎮</span>
          <span>Main Game Bab Ini</span>
        </router-link>
      </div>
    </div>

    <!-- Active Curriculum Notification & Switcher -->
    <div
      class="p-4 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm shadow-sm transition-colors duration-300"
      :class="currentMode === 'cp-baru' ? 'bg-emerald-50 border-2 border-emerald-300 text-emerald-950' : 'bg-amber-50 border-2 border-amber-300 text-amber-950'"
    >
      <div class="flex items-center gap-2.5">
        <span class="text-2xl">{{ currentMode === 'cp-baru' ? '✨' : '📖' }}</span>
        <div>
          <span class="font-black uppercase tracking-wide">
            {{ currentMode === 'cp-baru' ? 'Versi Materi: CP Baru (Dokumen Perubahan CP)' : 'Versi Materi: CP Lama (Buku Siswa Kemdikbud Cetak)' }}
          </span>
          <p class="text-slate-600 text-xs mt-0.5">
            {{ currentMode === 'cp-baru' ? 'Materi dikembangkan mengikuti lingkup dokumen perubahan CP yang disertakan.' : 'Materi mengikuti teks dan urutan buku cetak siswa Kemdikbud.' }}
          </p>
        </div>
      </div>

      <button
        @click="switchCurriculumMode"
        class="self-start sm:self-auto px-4 py-2 rounded-xl font-black text-xs bg-white shadow-sm border border-slate-300 hover:bg-slate-50 transition-all flex items-center gap-1.5 active:scale-95 shrink-0"
      >
        <span>Lihat Versi {{ currentMode === 'cp-baru' ? '📖 CP Lama (Buku)' : '✨ CP Baru' }}</span>
        <span>⇄</span>
      </button>
    </div>

    <!-- Chapter Main Banner Card -->
    <div class="bg-gradient-to-br from-emerald-800 to-teal-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-600/40 relative overflow-hidden">
      <!-- Decorative background glow -->
      <div class="absolute -right-10 -bottom-10 w-52 h-52 bg-emerald-500/20 rounded-full blur-2xl"></div>

      <div class="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div class="md:col-span-9 space-y-4">
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
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-950 text-amber-300 border border-emerald-500/40">
              {{ currentMode === 'cp-baru' ? '✨ CP Baru' : '📖 CP Lama' }}
            </span>
          </div>

          <h1 class="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
            {{ babData.judul }}
          </h1>

          <p class="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-2xl">
            <strong class="text-amber-300">Fokus Pembelajaran:</strong> {{ babData.fokusCP }}
          </p>
        </div>

        <div class="md:col-span-3 flex justify-center">
          <div class="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white/10 backdrop-blur-md p-3 border border-white/20 flex items-center justify-center shadow-inner">
            <IslamicIllustration :name="babData.icon || 'quran'" className="w-24 h-24 animate-float" />
          </div>
        </div>
      </div>
    </div>

    <!-- Tujuan Pembelajaran Card -->
    <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-100 space-y-4">
      <div class="flex items-center gap-2">
        <span class="text-2xl">🎯</span>
        <h2 class="text-lg sm:text-xl font-black text-slate-900">Tujuan Pembelajaran yang Dicapai</h2>
      </div>

      <div class="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
        <ul class="space-y-2 text-xs sm:text-sm text-slate-700 list-disc pl-5">
          <li v-for="(t, idx) in babData.tujuan" :key="idx" class="leading-relaxed font-semibold">
            {{ t }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Pengantar Materi Card -->
    <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-3">
      <h3 class="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
        <span>📖</span>
        <span>Pengantar Materi Pembelajaran</span>
      </h3>
      <p class="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
        {{ babData.materi?.pengantar }}
      </p>
      <AudioSynthesizerReader :text="babData.materi.pengantar" label="Dengarkan pengantar" />
    </div>

    <!-- Sub-Bab Detailed Material Sections -->
    <div class="space-y-6">
      <div
        v-for="(sub, sIdx) in babData.materi?.subBab"
        :key="sIdx"
        class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 space-y-6"
      >
        <!-- Sub-Bab Header with Dedicated Illustration -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-4 gap-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
              <IslamicIllustration :name="sub.ilustrasi || babData.icon || 'quran'" className="w-9 h-9" />
            </div>
            <div>
              <h3 class="text-lg sm:text-xl font-black text-emerald-900">
                {{ sub.subJudul }}
              </h3>
            </div>
          </div>

          <AudioSynthesizerReader
            v-if="sub.uraian"
            :text="sub.uraian"
            label="Dengarkan penjelasan"
          />
        </div>

        <!-- Text Description -->
        <p v-if="sub.uraian" class="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
          {{ sub.uraian }}
        </p>

        <!-- Dalil Naqli Al-Qur'an / Hadis Box -->
        <div v-if="sub.dalil" class="bg-emerald-50/70 border-2 border-emerald-300/80 rounded-3xl p-6 space-y-3 shadow-sm">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <span class="text-xs font-black text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
              <span>📖</span> Dalil Naqli (Al-Qur'an & Hadis)
            </span>
            <AudioSynthesizerReader :text="sub.dalil.latin" label="Lafalkan" />
          </div>

          <div class="text-right py-2">
            <p lang="ar" dir="rtl" class="font-arabic text-2xl sm:text-3xl text-slate-900 leading-loose">
              {{ sub.dalil.arab }}
            </p>
          </div>

          <div class="space-y-1.5 border-t border-emerald-200 pt-3 text-xs sm:text-sm">
            <p class="italic text-emerald-950 font-medium">
              "{{ sub.dalil.latin }}"
            </p>
            <p class="text-slate-800 font-bold">
              Artinya: {{ sub.dalil.arti }}
            </p>
          </div>
        </div>

        <!-- Kalimat Thayyibah Box -->
        <div v-if="sub.lafal" class="bg-amber-50/70 border-2 border-amber-300/80 rounded-3xl p-6 space-y-3 shadow-sm">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <span class="text-xs font-black text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
              <span>✨</span> Kalimat Thayyibah Mulia
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
            <p class="text-slate-800 font-semibold">
              Artinya: {{ sub.lafal.arti }}
            </p>
          </div>
        </div>

        <!-- Ayat List (Surah Al-Fatihah / Al-Ma'un / Al-Insyirah / Al-Duha / Al-Ikhlas) -->
        <div v-if="sub.ayatList || sub.ayatPenting" class="space-y-3.5">
          <p class="text-xs text-slate-500 leading-relaxed">Bacaan dan transliterasi · tombol suara membacakan teks Latin melalui perangkat. Untuk makhraj dan tajwid, ikuti bimbingan guru.</p>
          <div
            v-for="(ayat, aIdx) in (sub.ayatList || sub.ayatPenting)"
            :key="aIdx"
            class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:bg-emerald-50/40 transition-colors"
          >
            <div class="flex flex-wrap items-center justify-between gap-3">
              <span class="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">
                {{ ayat.no || (aIdx + 1) }}
              </span>
              <AudioSynthesizerReader :text="ayat.latin" label="Dengar" />
            </div>

            <div class="text-right py-1">
              <p class="font-arabic text-2xl sm:text-3xl text-slate-900 leading-loose">
                {{ ayat.arab }}
              </p>
            </div>

            <p class="italic text-xs sm:text-sm text-emerald-950 font-bold">
              {{ ayat.latin }}
            </p>
            <p class="text-xs sm:text-sm text-slate-700">
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
            <div class="text-[10px] text-slate-500 font-semibold">({{ h.bunyi }})</div>
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
            <div class="text-xs font-bold text-amber-900">{{ hk.suara }}</div>
          </div>
        </div>

        <!-- Makhraj List (Kelas 1 CP Baru) -->
        <div v-if="sub.makhrajList" class="space-y-3">
          <div
            v-for="(m, mIdx) in sub.makhrajList"
            :key="mIdx"
            class="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2"
          >
            <div class="font-black text-emerald-950 text-sm sm:text-base flex items-center gap-2">
              <span>🗣️</span>
              <span>{{ m.nama }}</span>
            </div>
            <div class="p-2 rounded-xl bg-white text-emerald-800 font-black text-sm">
              Huruf: {{ m.huruf }}
            </div>
            <p class="text-xs sm:text-sm text-slate-700"><strong>Cara Pelafalan:</strong> {{ m.cara }}</p>
            <p class="text-xs text-slate-500">Contoh: {{ m.contoh }}</p>
          </div>
        </div>

        <!-- Tajwid Rules (Mim Sukun / Qalqalah / Ghunnah / Tafkhim-Tarqiq) -->
        <div v-if="sub.hukumMim || sub.jenisQalqalah || sub.contohGhunnah || sub.lamRules || sub.raRules" class="space-y-4">
          <div
            v-for="(rule, rIdx) in (sub.hukumMim || sub.jenisQalqalah || sub.contohGhunnah || sub.lamRules || sub.raRules)"
            :key="rIdx"
            class="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-2"
          >
            <h4 class="font-black text-teal-950 text-sm sm:text-base flex items-center gap-2">
              <span>💎</span>
              <span>{{ rule.nama || rule.lafal }}</span>
            </h4>
            <p v-if="rule.aturan || rule.syarat" class="text-xs sm:text-sm text-slate-800">
              <strong>Aturan Tajwid:</strong> {{ rule.aturan || rule.syarat }}
            </p>
            <p v-if="rule.caraBaca || rule.ket || rule.transliterasi" class="text-xs sm:text-sm text-teal-900 font-bold">
              <strong>Cara Membaca:</strong> {{ rule.caraBaca || rule.ket || rule.transliterasi }}
            </p>
            <div v-if="rule.contoh" class="p-2.5 rounded-xl bg-white border border-teal-200 text-xs sm:text-sm font-black text-slate-900">
              Contoh Ayat: {{ rule.contoh }}
            </div>
          </div>
        </div>

        <!-- Asmaul Husna List (CP Lama & CP Baru) -->
        <div v-if="sub.daftarAsmaul || sub.daftarBaru" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="(asm, aIdx) in (sub.daftarAsmaul || sub.daftarBaru)"
            :key="aIdx"
            class="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2"
          >
            <div class="flex items-center justify-between">
            <span class="font-black text-sm text-amber-950">{{ asm.nama }}</span>
              <span v-if="asm.arti" class="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-900">{{ asm.arti }}</span>
            </div>
            <p v-if="asm.makna || asm.penjelasan" class="text-xs text-slate-700 leading-relaxed font-medium">
              {{ asm.makna || asm.penjelasan }}
            </p>
          </div>
        </div>

        <!-- Langkah Wudu Steps (Kelas 1) -->
        <div v-if="sub.steps" class="space-y-2.5">
          <div
            v-for="step in sub.steps"
            :key="step.step"
            class="flex items-start gap-3 p-3 rounded-2xl bg-blue-50/70 border border-blue-200"
          >
            <span class="w-7 h-7 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0">
              {{ step.step }}
            </span>
            <p class="text-xs sm:text-sm text-slate-800 font-semibold pt-0.5">
              {{ step.nama }}
            </p>
          </div>
        </div>

        <!-- 8 Asnaf Zakat (Kelas 6 CP Baru) -->
        <div v-if="sub.asnafList" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            v-for="(asnaf, asIdx) in sub.asnafList"
            :key="asIdx"
            class="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 font-bold text-xs sm:text-sm text-indigo-950 flex items-center gap-2"
          >
            <span>💰</span>
            <span>{{ asnaf }}</span>
          </div>
        </div>

        <!-- Rukun Wakaf (Kelas 6 CP Baru) -->
        <div v-if="sub.rukunList" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div
            v-for="(rw, rwIdx) in sub.rukunList"
            :key="rwIdx"
            class="p-3.5 rounded-2xl bg-purple-50 border border-purple-200 space-y-1"
          >
            <div class="font-black text-purple-950 text-xs sm:text-sm">{{ rw.nama }}</div>
            <p class="text-xs text-slate-600">{{ rw.arti }}</p>
          </div>
        </div>

        <div v-for="bacaan in sub.bacaanTambahan" :key="bacaan.judul" class="rounded-2xl bg-emerald-50 border border-emerald-200 p-5 space-y-3">
          <h4 class="font-bold text-emerald-900">{{ bacaan.judul }}</h4>
          <p class="font-arabic text-2xl text-right" lang="ar" dir="rtl">{{ bacaan.arab }}</p>
          <p class="italic text-sm text-slate-600">{{ bacaan.latin }}</p>
          <p class="text-sm text-slate-700">{{ bacaan.arti }}</p>
        </div>

        <!-- Generic poin list -->
        <div v-if="sub.poinList" class="space-y-2">
          <div
            v-for="(poin, pIdx) in sub.poinList"
            :key="pIdx"
            class="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100"
          >
            <span class="text-emerald-600 font-black shrink-0 mt-0.5">•</span>
            <span class="text-xs sm:text-sm text-slate-700 font-medium">{{ poin }}</span>
          </div>
        </div>

        <!-- Tabel / info blocks -->
        <div v-if="sub.tabelInfo" class="overflow-x-auto rounded-2xl border border-slate-200">
          <table class="w-full text-xs sm:text-sm">
            <thead>
              <tr class="bg-emerald-700 text-white">
                <th v-for="(col, cIdx) in sub.tabelInfo.header" :key="cIdx" class="px-3 py-2 text-left font-black">{{ col }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(row, rIdx) in sub.tabelInfo.rows"
                :key="rIdx"
                :class="rIdx % 2 === 0 ? 'bg-white' : 'bg-emerald-50/40'"
              >
                <td v-for="(cell, cIdx) in row" :key="cIdx" class="px-3 py-2 text-slate-700">{{ cell }}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>

    <section class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4">
      <h2 class="text-xl font-black text-emerald-900">Ayo praktikkan</h2>
      <p class="text-sm text-slate-500">Aktivitas pengembangan · lakukan dengan pendamping sesuai kebutuhan.</p>
      <ol class="list-decimal pl-5 space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed"><li v-for="activity in babData.materi.aktivitas" :key="activity">{{ activity }}</li></ol>
    </section>
    <section class="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-5">
      <h2 class="text-xl font-black text-emerald-900">Cek pemahamanmu</h2>
      <p class="text-sm text-slate-500">Coba jawab terlebih dahulu, lalu buka pembahasannya.</p>
      <article v-for="(q, index) in babData.materi.latihan" :key="q.tanya" class="border-b border-slate-100 pb-5 space-y-3">
        <h3 class="text-sm sm:text-base font-bold text-slate-800">{{ index + 1 }}. {{ q.tanya }}</h3>
        <details class="rounded-xl bg-emerald-50 p-4"><summary class="cursor-pointer text-xs font-bold text-emerald-800">Lihat jawaban dan pembahasan</summary><p class="text-sm text-slate-700 mt-3 leading-relaxed"><strong>{{ q.opsi[q.benar] }}.</strong> {{ q.alasan }}</p></details>
      </article>
      <div class="bg-amber-50 rounded-2xl p-5 space-y-2"><h3 class="font-black text-sm text-amber-900">Renungkan</h3><p class="text-sm text-slate-700 leading-relaxed">{{ babData.materi.refleksi }}</p></div>
    </section>

    <!-- Mutiara Budi Pekerti / Karakter Card -->
    <div v-if="babData.materi?.budiPekerti" class="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-3xl p-6 sm:p-8 shadow-md flex items-center gap-4">
      <div class="text-4xl shrink-0">🌱</div>
      <div class="space-y-1">
        <span class="text-xs font-black uppercase tracking-widest text-emerald-200">Mutiara Budi Pekerti Anak Saleh</span>
        <p class="text-sm sm:text-base font-bold leading-relaxed">
          "{{ babData.materi.budiPekerti }}"
        </p>
      </div>
    </div>

    <!-- Rangkuman Pembelajaran -->
    <div class="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-6 sm:p-8 border border-emerald-200 space-y-4">
      <div class="flex items-center gap-2">
        <span class="text-2xl">📝</span>
        <h3 class="text-lg font-black text-slate-900">Rangkuman Materi Penting</h3>
      </div>
      <ul class="space-y-2 text-xs sm:text-sm text-slate-700 pl-5 list-disc">
        <li v-for="(r, idx) in babData.materi?.rangkuman" :key="idx" class="leading-relaxed font-semibold">
          {{ r }}
        </li>
      </ul>
    </div>

    <section class="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
      <h2 class="font-black text-sm text-slate-800">Rujukan bab ini</h2>
      <ul class="space-y-2"><li v-for="source in babData.materi.sumber" :key="source.file" class="text-xs text-slate-600 leading-relaxed"><strong>{{ source.judul }}</strong> · {{ source.lokasi }}<span class="block text-slate-500 break-words">{{ source.file }}</span></li></ul>
      <p class="text-xs text-slate-500 leading-relaxed">{{ babData.materi.catatanSumber }}</p>
      <router-link to="/perubahan-cp" class="inline-block text-xs font-bold text-emerald-700">Lihat panduan sumber dan kurikulum →</router-link>
    </section>

    <!-- Big Action: Play Game CTA Banner -->
    <div class="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="space-y-2 text-center md:text-left">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-extrabold text-amber-300">
          <span>🎮</span>
          <span>Game Edukatif Bab Ini</span>
        </div>
        <h3 class="text-2xl font-black">{{ babData.game?.nama }}</h3>
        <p class="text-xs sm:text-sm text-purple-200 max-w-xl">
          {{ babData.game?.petunjuk }} Mainkan sekarang bersama siswa di kelas untuk menguji pemahaman dengan ceria!
        </p>
      </div>

      <router-link
        :to="`/kelas/${kelas}/bab/${babData.id}/game`"
        class="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base shadow-lg transform hover:scale-105 transition-all text-center whitespace-nowrap active:scale-95"
      >
        Mulai Mainkan Game Sekarang →
      </router-link>
    </div>

  </div>

  <div v-else class="max-w-5xl mx-auto px-4 py-16 text-center space-y-4">
    <div class="text-4xl">⚠️</div>
    <h2 class="text-xl font-bold text-slate-800">Bab Tidak Ditemukan</h2>
    <p class="text-xs text-slate-500">Materi untuk bab yang dipilih tidak tersedia atau telah dipindahkan.</p>
    <router-link :to="classLocation(kelas)" class="inline-block px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold">
      Kembali ke Daftar Bab Kelas {{ kelas }}
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useAppStore } from '../stores/appStore';
import { useCurriculumNavigation } from '../composables/useCurriculumNavigation';
import { getMateriByKelasAndBab } from '../data/paiData';
import AudioSynthesizerReader from '../components/AudioSynthesizerReader.vue';
import IslamicIllustration from '../components/IslamicIllustration.vue';
const props = defineProps({ kelas: { type: [String, Number], required: true }, babId: { type: String, required: true } });
const store = useAppStore();
const { currentMode, selectCurriculum, classLocation } = useCurriculumNavigation();
const babData = computed(() => getMateriByKelasAndBab(Number(props.kelas), props.babId));
const isRead = computed(() => store.isChapterRead(props.babId));
const markRead = () => store.markChapterAsRead(props.babId);
const switchCurriculumMode = () => selectCurriculum(currentMode.value === 'cp-baru' ? 'cp-lama' : 'cp-baru');
</script>
