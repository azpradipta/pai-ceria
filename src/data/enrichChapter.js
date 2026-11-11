import { materiPengayaan, chapterTopics } from './materiPengayaan.js';
import { alAlaAyat, duhaAyatTambahan } from './bacaanTambahan.js';

const bookPages = {
  1: ['1–16','17–34','35–52','53–72','73–92','97–110','111–128','129–148','149–166','167–184'],
  5: ['1–30','31–54','55–78','79–106','107–130','131–156','157–184','185–204','205–228','229–252'],
  6: ['1–32','33–46','47–62','63–80','81–100','101–122','123–140','141–156','157–174','175–192'],
};
const extraFields = {
  poinPenting: 'Hal yang perlu diperhatikan', daftarRukun: 'Rukun iman', daftarPilar: 'Rukun Islam',
  contohLatihan: 'Latihan membaca', enamHuruf: 'Huruf yang tidak menyambung ke kiri',
  contohSambung: 'Contoh sambungan', adabIstinja: 'Adab istinja', ciriList: 'Ciri perilaku', tahapanList: 'Tahapan kehidupan akhirat',
};
const textValue = value => typeof value === 'string' ? value : typeof value === 'number' ? String(value) :
  Array.isArray(value) ? value.map(textValue).join(' · ') : value && typeof value === 'object' ? Object.values(value).map(textValue).join(' — ') : '';

export function normalizeSection(original) {
  const sub = { ...original };
  sub.poinList = [...(sub.poinList || [])];
  for (const [field, label] of Object.entries(extraFields)) {
    if (sub[field]) sub.poinList.push(`${label}: ${textValue(sub[field])}`);
  }
  sub.bacaanTambahan = ['syahadatTauhid','syahadatRasul','doaTaubat'].filter(key => sub[key]).map(key => ({
    judul: { syahadatTauhid: 'Syahadat tauhid', syahadatRasul: 'Syahadat rasul', doaTaubat: 'Doa tobat' }[key],
    ...sub[key],
  }));
  return sub;
}

export function enrichChapter(original, kelas, mode) {
  const chapter = structuredClone(original);
  const key = chapterTopics[kelas][mode][chapter.bab - 1];
  const enrichment = materiPengayaan[key];
  let baseSections = chapter.materi.subBab;
  if (['usmanali','wakaf','asma6lama','asma6baru'].includes(key)) baseSections = [];
  if (key === 'ghunnah') baseSections = baseSections.filter(sub => sub.ayatList);
  // The supplied books differ from the old DOCX column; these chapters follow the actual PDF.
  if (chapter.id === 'k5-lama-bab-5') {
    chapter.judul = 'Meneladani Perjuangan Rasulullah: Fathu Makkah dan Haji Wada';
    chapter.fokusCP = 'Menceritakan Fathu Makkah, Haji Wada, dan teladan pengampunan serta tanggung jawab.';
    chapter.tujuan = ['Menceritakan peristiwa Fathu Makkah dan Haji Wada secara runtut.', 'Menjelaskan teladan pengampunan serta penghormatan terhadap hak sesama.', 'Menerapkan tanggung jawab dan sikap damai dalam pergaulan.'];
    baseSections = [];
  }
  if (chapter.id === 'k5-lama-bab-6') {
    chapter.judul = 'Hidup Damai dalam Kebersamaan: Q.S. Ali Imran dan Al-Baqarah';
    chapter.fokusCP = 'Memahami pesan Q.S. Ali Imran/3:64 dan Al-Baqarah/2:256 tentang ajakan tauhid dan kebebasan beragama.';
    chapter.tujuan = ['Mengenali bacaan Q.S. Ali Imran/3:64 dan Al-Baqarah/2:256 bersama guru.', 'Menjelaskan pesan kedua ayat dengan bahasa sendiri.', 'Mempraktikkan penghormatan terhadap perbedaan keyakinan.'];
    baseSections = [];
  }
  if (chapter.id === 'k5-lama-bab-4') {
    chapter.judul = 'Hidup Lapang dengan Berbagi: Zakat, Infak, Sedekah, dan Hadiah';
    chapter.fokusCP = 'Membedakan zakat, infak, sedekah, dan hadiah serta menerapkan kepedulian secara amanah.';
    chapter.tujuan = ['Menjelaskan zakat, infak, sedekah, dan hadiah.', 'Memberikan contoh berbagi sesuai kebutuhan.', 'Membuat rencana bantuan sederhana yang bertanggung jawab.'];
    baseSections = [];
  }
  if (chapter.id === 'k6-lama-bab-1') chapter.judul = 'Belajar Al-Qur’an dan Hadis: Surah Ad-Duha';
  if (chapter.id === 'k6-lama-bab-6') {
    chapter.judul = 'Mengaji Al-Qur’an Surah Al-A’la';
    chapter.fokusCP = 'Membaca, menulis, menghafal, dan memahami pesan Surah Al-A’la dengan bimbingan guru.';
    chapter.tujuan = ['Membaca Surah Al-A’la sesuai bimbingan guru.', 'Menyalin ayat dengan teliti.', 'Menjelaskan pesan tentang menyucikan Allah dan tanggung jawab hidup.'];
    baseSections = [];
  }
  if (chapter.id === 'k5-lama-bab-10') {
    baseSections = [];
    chapter.fokusCP = 'Mengenal empat Khulafaurasyidin dan meneladani kejujuran, keadilan, kedermawanan, serta kecintaan pada ilmu.';
  }
  if (key === 'usmanali') {
    chapter.tujuan = ['Menceritakan riwayat dan jasa Usman bin Affan serta Ali bin Abi Talib.', 'Membedakan penghimpunan Al-Qur’an masa Abu Bakar dari penyalinan mushaf masa Usman.', 'Meneladani kedermawanan, amanah, keadilan, serta kecintaan pada ilmu.'];
  }
  // Remove misleading abbreviated source claims and use learning language in introductions.
  chapter.materi.pengantar = enrichment.sections[0].uraian;
  chapter.materi.subBab = [...baseSections, ...enrichment.sections].map(normalizeSection);
  if (key === 'ala') {
    chapter.materi.subBab.unshift(normalizeSection({ subJudul: 'Bacaan Surah Al-A’la, ayat 1–19', uraian: 'Bacalah bersama guru. Teks Latin membantu mengenali bacaan, sedangkan makhraj dan tajwid tetap mengikuti contoh langsung. Arti di bawah merupakan makna ringkas untuk belajar.', ayatList: alAlaAyat }));
    chapter.materi.subBab.push(normalizeSection({ subJudul: 'Perhatikan ketelitian bacaan', uraian: 'Buku halaman 105 mengingatkan tiga hal: jangan menambahkan hamzah ketika berhenti di akhir ayat, bedakan makhraj huruf yang mirip, dan perhatikan tasydid pada ṣad dalam kata aṣ-ṣuḥuf ayat 18. Tunjukkan bacaanmu kepada guru sebelum melanjutkan hafalan.', poinList: ['Berhenti pada al-a‘lā tanpa menambah bunyi hamzah.', 'Bedakan bunyi ṡa dan sin serta ha dan ḥa.', 'Ulangi ayat 18 dengan memperhatikan tasydid dan panjang pendek.'] }));
  }
  if (key === 'duha') {
    const ayat = chapter.materi.subBab.find(sub => sub.ayatList);
    if (ayat) ayat.ayatList = [...ayat.ayatList, ...duhaAyatTambahan].sort((a,b) => a.no - b.no);
  }
  if (chapter.id === 'k1-lama-bab-1') {
    chapter.materi.subBab.push(normalizeSection({ subJudul: 'Menghafal Al-Fatihah bersama guru', uraian: 'Buku kelas 1 bab 1 juga mengenalkan Al-Fatihah. Bacalah tujuh ayat dari mushaf bersama guru, ulangi per ayat, lalu jelaskan bahwa kita memuji Allah dan memohon petunjuk jalan yang lurus.' }));
  }
  if (chapter.id === 'k5-lama-bab-10') {
    chapter.materi.subBab.push(...materiPengayaan.usmanali.sections.slice(0, 5).map(normalizeSection));
  }
  chapter.materi.rangkuman = [...new Set(enrichment.sections.map(sub => sub.poinList[0]).filter(Boolean))];
  chapter.materi.aktivitas = enrichment.aktivitas;
  chapter.materi.latihan = enrichment.latihan;
  chapter.materi.refleksi = `Setelah mempelajari ${chapter.judul}, perilaku atau keterampilan apa yang ingin kamu latih? Jelaskan satu langkah yang dapat kamu lakukan dan siapa yang bisa mendampingimu.`;
  chapter.materi.sumber = mode === 'cp-lama'
    ? [{ judul: `Buku PAI dan Budi Pekerti Kelas ${kelas}`, file: `KELAS ${kelas}_BUKU SISWA.pdf`, lokasi: `Bab ${chapter.bab}, halaman cetak ${bookPages[kelas][chapter.bab - 1]}` }]
    : [{ judul: `Dokumen Perubahan CP PAI Fase ${kelas === 1 ? 'A' : 'C'}`, file: `Perubahan_CP_PAI_Fase_${kelas === 1 ? 'A' : 'C'}.docx`, lokasi: `Elemen ${chapter.elemen}, kelas ${kelas}, semester ${chapter.bab <= 5 ? 1 : 2}, kolom CP 020/2026` }];
  if (mode === 'cp-baru') chapter.materi.sumber.push({ judul: 'Rujukan pendamping', file: `KELAS ${kelas}_BUKU SISWA.pdf`, lokasi: 'Topik yang beririsan digunakan sebagai bacaan pendamping; susunan bab baru mengikuti DOCX.' });
  chapter.materi.catatanSumber = 'Penjelasan disarikan dan dikembangkan untuk belajar. Aktivitas, contoh kasus, serta soal merupakan pengembangan pendamping dari topik rujukan.';
  if (key === 'usmanali' && mode === 'cp-lama') chapter.materi.subBab.push(normalizeSection({ subJudul: 'Perbandingan keteladanan', tabelInfo: { header: ['Tokoh','Jasa yang dipelajari','Contoh sikap siswa'], rows: [['Usman bin Affan','Penyalinan mushaf dan kepedulian pada fasilitas umat','Teliti memeriksa sumber, dermawan, merawat buku'],['Ali bin Abi Talib','Amanah pengelolaan dan perhatian pada ilmu','Adil membagi tugas, menjaga kas, tekun belajar']] } }));
  if (key === 'ghunnah') {
    chapter.materi.subBab.forEach(sub => { if (sub.uraian) sub.uraian = sub.uraian.replace('2 sampai 3 harakat', 'sekitar 2 harakat'); });
    const ayat = chapter.materi.subBab.find(sub => sub.ayatList);
    if (ayat && !ayat.ayatList.some(item => item.no === 3)) {
      ayat.ayatList.push({ no: 3, arab: 'الَّذِي أَنْقَضَ ظَهْرَكَ', latin: 'Allażī anqaḍa ẓahrak', arti: 'yang memberatkan punggungmu,' }, { no: 4, arab: 'وَرَفَعْنَا لَكَ ذِكْرَكَ', latin: 'Wa rafa‘nā laka żikrak', arti: 'dan Kami tinggikan sebutan (nama)mu bagimu.' });
      ayat.ayatList.sort((a,b) => a.no - b.no);
    }
  }
  chapter.game = normalizeGame(chapter.game, enrichment.latihan, chapter.id);
  if (chapter.id === 'k5-lama-bab-10') chapter.game.questions.push(...materiPengayaan.usmanali.latihan);
  return chapter;
}

function normalizeGame(game, questions, chapterId) {
  const order = game.steps || game.itemsUrut || game.pilars || game.gerbong;
  const memory = game.cards?.length > 0;
  const correctOldMaterial = !['k5-lama-bab-4','k5-lama-bab-5','k5-lama-bab-6','k6-lama-bab-6'].includes(chapterId);
  const oldQuestions = correctOldMaterial ? (game.questions || game.levels || game.soalList || game.situasi || []) : [];
  const normalizedQuestions = oldQuestions.map(q => {
    const options = q.opsi || q.pilihan || [];
    let answer = q.benar ?? q.kunci ?? q.jawabanBenar;
    if (typeof options[0] === 'object') answer = options.findIndex(option => option.benar);
    else if (typeof answer === 'string') answer = options.indexOf(answer);
    return { tanya: [q.potonganAyat, q.tanya || q.pertanyaan || q.kejadian || q.momen].filter(Boolean).join(' — '), opsi: options.map(option => typeof option === 'object' ? option.teks : option), benar: answer, alasan: q.penjelasan || q.alasan || 'Perhatikan kembali makna dan contoh dalam materi bab ini.' };
  }).filter(q => q.tanya && q.opsi.length >= 2 && q.benar >= 0 && q.benar < q.opsi.length);
  // Rotate choices deterministically so the correct choice is not always the first.
  const allQuestions = [...normalizedQuestions, ...questions].map((q, index) => {
    const shift = (index + Number(chapterId.match(/bab-(\d+)/)?.[1] || 0)) % q.opsi.length;
    return { ...q, opsi: [...q.opsi.slice(shift), ...q.opsi.slice(0, shift)], benar: (q.benar - shift + q.opsi.length) % q.opsi.length };
  });
  return { ...game, tipe: memory ? 'memory-card' : order ? 'order' : 'quiz',
    nama: correctOldMaterial ? game.nama.replace(/Bintang\s*/gi, '') : 'Tantangan Pemahaman Bab',
    petunjuk: memory ? 'Temukan pasangan kartu, lalu lanjutkan latihan pemahaman.' : order ? 'Susun urutan dengan tepat, lalu lanjutkan latihan pemahaman.' : 'Pilih jawaban, baca pembahasannya, dan selesaikan seluruh latihan.',
    questions: allQuestions,
    steps: order?.map((item,index) => ({ order: item.step || item.urutan || item.urut || index + 1, label: (item.nama || item.teks).replace(/^\d+\.\s*/, '') })) || [],
  };
}
