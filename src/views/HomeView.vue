<template>
  <div>
    <section class="relative overflow-hidden bg-[#f4f8f1] border-b border-emerald-100">
      <div class="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-7 relative z-10">
          <p class="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-800 tracking-wider uppercase"><span class="w-2 h-2 bg-emerald-500 rounded-full"></span>Ruang belajar PAI untuk SD</p>
          <h1 class="text-4xl sm:text-6xl font-black leading-[1.12] tracking-tight text-emerald-950">Ilmu yang dipahami.<br><span class="text-emerald-600">Kebaikan yang<br class="hidden sm:block"> dijalani.</span></h1>
          <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">Belajar Al-Qur'an, mengenal Allah, dan membiasakan akhlak baik. Jelajahi materi kelas 1, 5, dan 6 melalui bacaan, praktik, serta permainan yang bermakna.</p>
          <div class="flex flex-wrap gap-3">
            <a href="#pilih-kelas" class="px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-extrabold inline-flex items-center gap-4">Mulai belajar <ArrowRight class="w-4 h-4" /></a>
            <router-link to="/perubahan-cp" class="px-6 py-3.5 rounded-xl bg-white border border-emerald-200 text-emerald-900 text-sm font-bold hover:bg-emerald-50">Kenali pilihan CP</router-link>
          </div>
          <div class="flex items-center gap-3 text-xs text-slate-600">
            <button @click="store.activateSound()" data-sound="off" class="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-2 font-bold text-emerald-800 hover:bg-emerald-50"><Volume2 class="w-4 h-4" />{{ store.soundEnabled && store.audioReady ? 'Dengarkan nada ceria' : 'Aktifkan suara belajar' }}</button>
            <span class="max-w-40 leading-relaxed">Nada interaktif dan musik pilihanmu.</span>
          </div>
          <div class="flex flex-wrap gap-7 border-t border-emerald-200/70 pt-6">
            <div v-for="stat in stats" :key="stat.label"><p class="text-2xl font-black text-emerald-900">{{ stat.value }}</p><p class="text-xs text-slate-500 mt-1">{{ stat.label }}</p></div>
          </div>
        </div>
        <div class="relative lg:pl-6">
          <div class="absolute inset-8 rounded-full bg-emerald-200/40 blur-3xl" aria-hidden="true"></div>
          <div class="relative rounded-[2rem] bg-emerald-900 p-6 sm:p-9 shadow-xl text-white overflow-hidden">
            <div class="absolute w-56 h-56 rounded-full border border-white/10 -right-20 -top-14" aria-hidden="true"></div>
            <div class="flex items-center justify-between"><span class="text-xs tracking-wider font-bold text-emerald-200 uppercase">Sedikit ilmu, setiap hari</span><BookOpen class="w-5 h-5 text-amber-300" /></div>
            <div class="flex items-center gap-5 py-8"><IslamicIllustration name="quran" className="w-28 h-28 sm:w-36 sm:h-36 shrink-0" /><div><p class="text-amber-200 text-xs font-bold mb-2">BACA • PAHAMI • LAKUKAN</p><h2 class="text-2xl sm:text-3xl font-black leading-snug">Belajar dengan hati,<br>tumbuh dalam kebaikan.</h2></div></div>
            <div class="bg-white rounded-2xl p-4 text-slate-800 space-y-3">
              <div class="flex items-center justify-between gap-2"><span class="text-xs font-bold text-slate-500">JELAJAHI MATERI</span><span class="text-[10px] font-black text-emerald-800 bg-emerald-50 px-2 py-1 rounded-full">{{ currentMode === 'cp-baru' ? 'CP BARU' : 'CP LAMA' }}</span></div>
              <router-link v-for="item in highlights" :key="item.id" :to="`/kelas/${item.kelas}/bab/${item.id}`" class="flex items-center gap-3 rounded-xl p-2 hover:bg-emerald-50 group"><span class="w-9 h-9 grid place-items-center rounded-lg bg-amber-50 text-emerald-800 font-black text-xs shrink-0">{{ item.kelas }}</span><span class="flex-1 min-w-0"><span class="text-[10px] text-slate-500">Kelas {{ item.kelas }} · {{ item.elemen }}</span><span class="block text-xs font-extrabold leading-relaxed">{{ item.judul }}</span></span><ArrowUpRight class="w-4 h-4 text-emerald-600 shrink-0" /></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16 space-y-16">
      <section id="pilih-kelas" class="scroll-mt-40 space-y-7">
        <div class="flex flex-wrap items-end justify-between gap-4"><div><p class="eyebrow">LANGKAH PERTAMA</p><h2 class="section-title">Pilih kelas, mulai petualanganmu.</h2><p class="mt-3 text-sm text-slate-500">Materi dua semester, tersusun agar mudah diikuti.</p></div><div class="rounded-xl border border-slate-200 p-1 inline-flex"><button v-for="mode in ['cp-baru', 'cp-lama']" :key="mode" @click="selectCurriculum(mode)" :aria-pressed="currentMode === mode" class="px-4 py-2 rounded-lg text-xs font-bold" :class="currentMode === mode ? 'bg-emerald-800 text-white' : 'text-slate-500'">{{ mode === 'cp-baru' ? 'CP Baru' : 'CP Lama (Buku)' }}</button></div></div>
        <div class="grid md:grid-cols-3 gap-5">
          <router-link v-for="grade in grades" :key="grade.kelas" :to="classLocation(grade.kelas)" class="group rounded-3xl bg-white border border-slate-200 p-7 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col">
            <div class="flex items-start justify-between mb-8"><span class="text-5xl font-black text-emerald-800 tracking-tight">0{{ grade.kelas }}</span><span class="text-xs px-3 py-1 rounded-full bg-amber-50 text-amber-900 font-bold">{{ grade.fase }}</span></div>
            <h3 class="text-xl font-black text-slate-900">Kelas {{ grade.kelas }}</h3><p class="text-sm text-slate-500 leading-relaxed mt-3 flex-1">{{ grade.deskripsi }}</p>
            <div class="flex flex-wrap gap-2 mt-5"><span v-for="tag in grade.tags" :key="tag" class="text-[10px] text-emerald-800 bg-emerald-50 rounded-lg px-2 py-1 font-bold">{{ tag }}</span></div>
            <div class="mt-7 pt-5 border-t border-slate-100 flex justify-between text-xs font-extrabold text-emerald-800"><span>{{ getAllBabsForKelas(grade.kelas, 0, currentMode).length }} bab · 2 semester</span><span class="inline-flex items-center gap-2">Buka kelas <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span></div>
          </router-link>
        </div>
      </section>
      <section class="grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-16 items-start">
        <div><p class="eyebrow">BELAJAR SAMPAI PAHAM</p><h2 class="section-title">Dari bacaan<br>ke kebiasaan baik.</h2><p class="mt-4 text-sm text-slate-500 leading-relaxed">Luangkan waktu untuk memahami, mencoba, lalu menceritakan kembali. Guru atau orang tua dapat mendampingi sesuai kebutuhan anak.</p></div>
        <div class="space-y-6"><div v-for="(step, i) in steps" :key="step.title" class="flex gap-5 pb-6 border-b border-slate-200 last:border-0"><span class="text-sm font-black text-emerald-700 bg-emerald-100 w-10 h-10 grid place-items-center rounded-full shrink-0">0{{ i + 1 }}</span><div><h3 class="font-black text-slate-900">{{ step.title }}</h3><p class="mt-2 text-sm text-slate-500 leading-relaxed">{{ step.text }}</p></div></div></div>
      </section>
      <section class="bg-emerald-900 rounded-3xl p-7 sm:p-10 text-white flex flex-wrap justify-between items-center gap-6"><div class="max-w-2xl"><p class="text-xs font-bold tracking-widest text-amber-200 mb-3">UNTUK GURU & ORANG TUA</p><h2 class="text-2xl font-black">Dua rujukan, pilihan belajar yang jelas.</h2><p class="text-sm text-emerald-100 leading-relaxed mt-3">CP Lama mengikuti buku siswa yang tersedia. CP Baru mengikuti lingkup dokumen perubahan CP. Lihat perbedaannya sebelum menentukan materi pendamping.</p></div><router-link to="/perubahan-cp" class="bg-white text-emerald-900 rounded-xl px-5 py-3 text-sm font-bold">Baca panduan CP →</router-link></section>
      <section class="max-w-3xl mx-auto space-y-6"><div class="text-center"><p class="eyebrow">SEBELUM MULAI</p><h2 class="section-title">Hal yang sering ditanyakan</h2></div><details v-for="faq in faqs" :key="faq.q" class="bg-white rounded-2xl border border-slate-200 p-5"><summary class="font-extrabold text-sm text-slate-800 cursor-pointer">{{ faq.q }}</summary><p class="pt-4 text-sm text-slate-500 leading-relaxed">{{ faq.a }}</p></details></section>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { ArrowRight, ArrowUpRight, BookOpen, Volume2 } from 'lucide-vue-next';
import { useAppStore } from '../stores/appStore';
import IslamicIllustration from '../components/IslamicIllustration.vue';
import { getAllBabsForKelas } from '../data/paiData';
import { useCurriculumNavigation } from '../composables/useCurriculumNavigation';
const { currentMode, selectCurriculum, classLocation } = useCurriculumNavigation();
const store = useAppStore();
const stats = computed(() => [{ value: '3', label: 'pilihan kelas' }, { value: [1,5,6].reduce((n,k) => n + getAllBabsForKelas(k,0,currentMode.value).length, 0), label: 'bab per pilihan CP' }, { value: '5', label: 'elemen pembelajaran' }]);
const highlights = computed(() => [1,5,6].map(kelas => ({ ...getAllBabsForKelas(kelas,0,currentMode.value)[0], kelas })));
const grades = [
  { kelas: 1, fase: 'Fase A', deskripsi: 'Mengenal huruf Al-Qur’an, dasar keimanan, dan kebiasaan baik melalui langkah kecil yang menyenangkan.', tags: ['Hijaiah', 'Rukun iman', 'Bersuci'] },
  { kelas: 5, fase: 'Fase C', deskripsi: 'Memahami pesan ayat, memperkuat akhlak, dan belajar menerapkan ibadah dalam kehidupan sehari-hari.', tags: ['Al-Qur’an & hadis', 'Akhlak', 'Ibadah'] },
  { kelas: 6, fase: 'Fase C', deskripsi: 'Mendalami keimanan, kepedulian kepada sesama, serta teladan kepemimpinan para sahabat.', tags: ['Akidah', 'Kepedulian', 'Khulafaurasyidin'] },
];
const steps = [
  { title: 'Baca dan pahami', text: 'Mulai dari tujuan belajar, ikuti penjelasan tiap subbab, lalu perhatikan contoh penerapannya.' },
  { title: 'Coba dalam keseharian', text: 'Lakukan aktivitas bab: berlatih membaca, bermain peran, mengamati lingkungan, atau berbagi kebaikan.' },
  { title: 'Uji pemahamanmu', text: 'Kerjakan latihan dan permainan. Baca pembahasannya, ulangi bagian yang belum dipahami, lalu tandai bab selesai.' },
];
const faqs = [
  { q: 'Apakah perlu membuat akun?', a: 'Tidak. Semua materi dapat dibuka langsung. Tanda selesai belajar dan hasil permainan disimpan di browser perangkat yang dipakai; data tidak berpindah ke perangkat lain.' },
  { q: 'Apa perbedaan CP Lama dan CP Baru?', a: 'CP Lama merujuk urutan buku PDF kelas 1, 5, dan 6 yang disertakan. CP Baru mengembangkan lingkup dalam dokumen perubahan CP fase A dan C. Nomor bab yang sama dapat membahas topik berbeda.' },
  { q: 'Bisakah digunakan tanpa internet?', a: 'Setelah aplikasi berhasil dimuat dan tersimpan oleh browser, materi aplikasi yang telah dicache dapat diakses kembali tanpa internet. Ketersediaan suara pembaca bergantung pada perangkat dan bahasa yang terpasang.' },
  { q: 'Bagaimana cara belajar yang disarankan?', a: 'Pilih kelas dan CP yang digunakan sekolah. Pelajari materi bertahap, lakukan aktivitas dengan pendamping, dan gunakan pembahasan latihan untuk mengecek pemahaman.' },
];
</script>
