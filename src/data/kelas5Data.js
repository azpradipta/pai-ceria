// Data Materi & Games PAI Kelas 5 SD (Fase C)
// Mencakup Kurikulum CP Lama (Buku Siswa Kemdikbud) dan CP Baru (Revisi CP 020/2026 Fase C)

export const kelas5Data = {
  kelas: 5,
  namaFase: "Fase C (Kelas 5 SD)",
  deskripsi: "Pembelajaran mendalam tajwid Mim Sukun dan Qalqalah, Surah Al-Ma'un dan Al-'Asr, Asmaul Husna pilihan, Akhlak berdoa dan berteman, Fikih Puasa Wajib & Sunah serta Makanan Halal-Haram, dan Kepemimpinan Rasulullah di Madinah.",

  // ================= SEMESTER 1 =================
  semester1: [
    {
      id: "k5-sem1-bab1",
      bab: 1,
      elemen: "Al-Qur'an dan Hadis",
      judul: "Menyayangi Anak Yatim & Surah Al-Mā'ūn / Al-'Aṣr",
      judulCPBaru: "Huruf Bersambung, Tajwid Mim Sukun & Surah al-'Aṣr",
      icon: "BookOpen",
      temaWarna: "emerald",
      cpLama: {
        fokus: "Q.S. al-Mā'ūn dan Hadis terkait Toleransi & Kepedulian Sosial",
        kompetensi: "Membaca, menghafal, dan memahami pesan pokok Q.S. al-Mā'ūn"
      },
      cpBaru: {
        fokus: "Huruf Hijaiah Bersambung (3 Kata), Praktik Bacaan Mim Sukun & Surah al-'Aṣr",
        kompetensi: "Membedakan hukum bacaan Mim Sukun, membaca Surah al-'Aṣr, dan menghargai waktu"
      },
      tujuan: [
        "Membaca Q.S. Al-Mā'ūn dan Surah Al-'Aṣr secara tartil dan fasih",
        "Mengetahui ciri-ciri pendusta agama menurut Surah Al-Mā'ūn",
        "Menguasai 3 hukum bacaan Mim Sukun (Ikhfa Syafawi, Idgham Mimi, Idzhar Syafawi)",
        "Memahami pentingnya memanfaatkan waktu untuk beriman dan beramal saleh (Surah Al-'Aṣr)"
      ],
      materi: {
        pengantar: "Al-Qur'an menuntun kita untuk selalu peduli terhadap sesama dan disiplin memanfaatkan waktu. Di semester ini kita mengkaji Surah Al-Mā'ūn dan Surah Al-'Aṣr serta hukum tajwid Mim Sukun.",
        subBab: [
          {
            judul: "A. Surah Al-Mā'ūn (CP Lama & Materi Buku)",
            isi: "Surah Al-Mā'ūn terdiri dari 7 ayat. Al-Mā'ūn artinya barang-barang yang berguna. Surah ini memperingatkan orang-orang yang mendustakan agama:",
            ayatPenting: [
              { arab: "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ", latin: "Ara'aitallażī yukażżibu bid-dīn", arti: "Tahukah kamu (orang) yang mendustakan agama?" },
              { arab: "فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ", latin: "Fażālikallażī yadu''ul-yatīm", arti: "Maka itulah orang yang menghardik anak yatim," },
              { arab: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ", latin: "Wa lā yaḥuḍḍu 'alā ṭa'āmil-miskīn", arti: "dan tidak mendorong memberi makan orang miskin." },
              { arab: "فَوَيْلٌ لِّلْمُصَلِّينَ", latin: "Fa wailul lil-muṣallīn", arti: "Maka celakalah bagi orang-orang yang salat," },
              { arab: "الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ", latin: "Allażīna hum 'an ṣalātihim sāhūn", arti: "(yaitu) orang-orang yang lalai terhadap salatnya," },
              { arab: "الَّذِينَ هُمْ يُرَاءُونَ", latin: "Allażīna hum yurā'ūn", arti: "orang-orang yang berbuat riya," },
              { arab: "وَيَمْنَعُونَ الْمَاعُونَ", latin: "Wa yamna'ūnal-mā'ūn", arti: "dan enggan (memberikan) bantuan barang berguna." }
            ],
            ciriPendusta: [
              "Menghardik (membentak/menyakiti) anak yatim",
              "Tidak mau mengajak/membantu memberi makan fakir miskin",
              "Lalai dari salatnya (mengulur-ulur waktu dan malas)",
              "Riya (beribadah hanya ingin dipuji orang lain)",
              "Enggan memberi bantuan barang yang berguna kepada orang lain"
            ]
          },
          {
            judul: "B. Praktik Tajwid: Tiga Hukum Mim Sukun (مْ) (CP Baru)",
            isi: "Apabila ada huruf Mim Sukun (مْ) bertemu huruf hijaiah, terdapat 3 macam hukum bacaan:",
            hukumMim: [
              {
                nama: "1. Ikhfa Syafawi (إِخْفَاء شَفَوِي)",
                aturan: "Mim Sukun (مْ) bertemu dengan huruf Ba (ب).",
                caraBaca: "Disamarkan di bibir disertai dengung (gunnah) selama 2 harakat.",
                contoh: "تَرْمِيهِم بِحِجَارَةٍ (Tarmiihim biḥijārah) dalam Surah Al-Fil."
              },
              {
                nama: "2. Idgham Mimi / Mutamatsilain (إِدْغَام مِثْلَيْنِ)",
                aturan: "Mim Sukun (مْ) bertemu dengan sesama huruf Mim (م).",
                caraBaca: "Memasukkan bunyi mim pertama ke mim kedua disertai dengung 2 harakat.",
                contoh: "أَطْعَمَهُم مِّن جُوعٍ (Aṭ'amahum min joo')"
              },
              {
                nama: "3. Idzhar Syafawi (إِظْهَار شَفَوِي)",
                aturan: "Mim Sukun (مْ) bertemu dengan seluruh huruf hijaiah SELAIN huruf Mim dan Ba (26 huruf).",
                caraBaca: "Dibaca jelas di bibir tanpa dengung.",
                contoh: "هُمْ فِيهَا (Hum fīhā), أَلَمْ تَرَ (Alam tara)"
              }
            ]
          },
          {
            judul: "C. Surah Al-'Aṣr (CP Baru)",
            isi: "Surah Al-'Aṣr menegaskan bahwa seluruh manusia berada dalam kerugian, kecuali orang yang memiliki 4 sifat:",
            empatSifat: [
              "1. Beriman kepada Allah Swt.",
              "2. Mengerjakan amal kebajikan (amal saleh)",
              "3. Saling menasihati untuk kebenaran",
              "4. Saling menasihati untuk kesabaran"
            ],
            dalil: {
              arab: "وَالْعَصْرِ ۙ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ ۙ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
              latin: "Wal-'aṣr. Innal-insāna lafī khusr. Illallażīna āmanū wa 'amiluṣ-ṣāliḥāti wa tawāṣau bil-ḥaqqi wa tawāṣau biṣ-ṣabr.",
              arti: "Demi masa. Sungguh, manusia berada dalam kerugian, kecuali orang-orang yang beriman dan mengerjakan kebajikan serta saling menasihati untuk kebenaran dan saling menasihati untuk kesabaran."
            }
          }
        ],
        rangkuman: [
          "Surah Al-Ma'un mengecam orang yang menindas anak yatim, riya, dan lalai salat.",
          "Hukum Mim Sukun ada tiga: Ikhfa Syafawi (ketemu Ba), Idgham Mimi (ketemu Mim), dan Idzhar Syafawi (ketemu 26 huruf lainnya).",
          "Surah Al-'Asr mengajarkan disiplin waktu dan empat kunci terbebas dari kerugian hidup."
        ]
      },
      game: {
        id: "game-k5-bab1",
        tipe: "tajwid-detective",
        nama: "Detektif Tajwid Mim Sukun",
        petunjuk: "Analisis penggalan ayat Al-Qur'an berikut! Tentukan hukum Mim Sukun yang terkandung di dalamnya!",
        soalList: [
          {
            potonganAyat: "تَرْمِيهِم بِحِجَارَةٍ (Tarmiihim bihijārah)",
            tanya: "Mim sukun (مْ) bertemu huruf Ba (ب). Hukum bacaannya adalah...",
            pilihan: ["Ikhfa Syafawi", "Idgham Mimi", "Idzhar Syafawi"],
            kunci: "Ikhfa Syafawi",
            alasan: "Karena Mim Sukun bertemu Ba, dibaca samar di bibir dengan dengung 2 harakat."
          },
          {
            potonganAyat: "أَطْعَمَهُم مِّن جُوعٍ (At'amahum min joo')",
            tanya: "Mim sukun (مْ) bertemu huruf Mim (م). Hukum bacaannya adalah...",
            pilihan: ["Idgham Mimi / Mutamatsilain", "Idzhar Syafawi", "Iqlab"],
            kunci: "Idgham Mimi / Mutamatsilain",
            alasan: "Pertemuan dua huruf mim sejenis yang dileburkan dengan dengung."
          },
          {
            potonganAyat: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ (Alam tara kaifa...)",
            tanya: "Mim sukun (مْ) bertemu huruf Ta (ت). Hukum bacaannya adalah...",
            pilihan: ["Idzhar Syafawi", "Ikhfa Syafawi", "Idgham Bilaghunnah"],
            kunci: "Idzhar Syafawi",
            alasan: "Ta bukan mim dan bukan ba, maka mim sukun dibaca jelas tanpa dengung."
          },
          {
            potonganAyat: "هُمْ فِيهَا خَالِدُونَ (Hum fiihaa...)",
            tanya: "Mim sukun (مْ) bertemu huruf Fa (ف). Hukum bacaannya adalah...",
            pilihan: ["Idzhar Syafawi", "Ikhfa Syafawi", "Idgham Mimi"],
            kunci: "Idzhar Syafawi",
            alasan: "Pertemuan mim sukun dengan huruf Fa harus dibaca jelas (Idzhar Syafawi), hati-hati jangan sampai tersamarkan."
          }
        ]
      }
    },

    {
      id: "k5-sem1-bab2",
      bab: 2,
      elemen: "Akidah",
      judul: "Asmaulhusna: Mengenal Nama-Nama Agung Allah",
      judulCPBaru: "Asmaulhusna (al-Ḥalīm, asy-Syakūr, al-Ḥakīm, al-Wadūd)",
      icon: "Sparkles",
      temaWarna: "amber",
      cpLama: {
        fokus: "al-Bā'iś, al-Qawiyyu, al-Muḥyi, al-Mumīt, al-Qayyūm",
        kompetensi: "Mengenal 5 Asmaulhusna tentang kekuasaan dan kehidupan"
      },
      cpBaru: {
        fokus: "al-Ḥalīm, asy-Syakūr, al-Ḥakīm, al-Wadūd",
        kompetensi: "Menjelaskan makna dan meneladani keluhuran budi, syukur, hikmah, dan cinta kasih"
      },
      tujuan: [
        "Mengetahui Asmaulhusna versi Buku: al-Bā'iś, al-Qawiyyu, al-Muḥyi, al-Mumīt, al-Qayyūm",
        "Mengetahui Asmaulhusna versi CP Baru: al-Ḥalīm, asy-Syakūr, al-Ḥakīm, al-Wadūd",
        "Meneladani sifat penyantun, pemaaf, dan bijaksana dalam pergaulan sekolah",
        "Menebarkan rasa kasih sayang (Wadūd) kepada seluruh makhluk"
      ],
      materi: {
        pengantar: "Allah memiliki 99 nama-nama terbaik (Asmaulhusna). Memahami Asmaulhusna membuat hati semakin dekat dan cinta kepada Sang Maha Pencipta.",
        subBab: [
          {
            judul: "A. Asmaulhusna CP Baru (CP 020/2026)",
            isi: "Empat Asmaulhusna pembentuk akhlak mulia siswa:",
            daftarAsmaulCPBaru: [
              {
                nama: "Al-Ḥalīm (الْحَلِيمُ)",
                arti: "Maha Penyantun / Paling Sabar",
                penjelasan: "Allah tidak tergesa-gesa menghukum hamba-Nya yang berbuat dosa, melainkan memberi kesempatan untuk bertaubat. Teladan kita: Menahan amarah dan tidak cepat membalas dendam."
              },
              {
                nama: "Asy-Syakūr (الشَّكُورُ)",
                arti: "Maha Menghargai / Mensyukuri Kebaikan",
                penjelasan: "Allah membalas amal kebaikan kecil dari hamba-Nya dengan pahala yang berlipat ganda. Teladan kita: Selalu menghargai bantuan teman sekecil apa pun."
              },
              {
                nama: "Al-Ḥakīm (الْحَكِيمُ)",
                arti: "Maha Bijaksana",
                penjelasan: "Segala ketetapan dan penciptaan Allah penuh dengan hikmah dan tidak ada yang sia-sia. Teladan kita: Bertindak dengan pertimbangan matang dan adil."
              },
              {
                nama: "Al-Wadūd (الْوَدُودُ)",
                arti: "Maha Mengasihi / Mencintai",
                penjelasan: "Allah mencintai hamba-hamba-Nya yang saleh dan melimpahkan ketenteraman. Teladan kita: Menebarkan cinta kasih, ramah, dan mendamaikan teman yang berselisih."
              }
            ]
          },
          {
            judul: "B. Asmaulhusna Sumber Buku Siswa (CP Lama)",
            isi: "Lima Asmaulhusna tentang keagungan penciptaan dan kekuasaan mutlak Allah:",
            daftarAsmaulCPLama: [
              { nama: "Al-Bā'iś (الْبَاعِثُ)", arti: "Maha Membangkitkan (membangkitkan manusia dari kubur di hari kiamat)" },
              { nama: "Al-Qawiyyu (الْقَوِيُّ)", arti: "Maha Kuat (kekuatan Allah tiada tandingannya)" },
              { nama: "Al-Muḥyī (الْمُحْيِي)", arti: "Maha Menghidupkan (memberi kehidupan bagi seluruh makhluk)" },
              { nama: "Al-Mumīt (الْمُمِيتُ)", arti: "Maha Mematikan (menentukan ajal setiap yang bernyawa)" },
              { nama: "Al-Qayyūm (الْقَيُّومُ)", arti: "Maha Mandiri (berdiri sendiri tanpa membutuhkan bantuan siapa pun)" }
            ]
          }
        ],
        rangkuman: [
          "Asmaulhusna adalah nama-nama agung dan terindah milik Allah Swt.",
          "Al-Halim mengajarkan kita bersikap santun dan sabar.",
          "Asy-Syakur memotivasi kita untuk selalu menghargai orang lain.",
          "Al-Hakim mendorong kita berpikir bijaksana sebelum bertindak.",
          "Al-Wadud menanamkan nilai cinta kasih dan persaudaraan tanpa pamrih."
        ]
      },
      game: {
        id: "game-k5-bab2",
        tipe: "memory-asmaul-husna",
        nama: "Taman Bintang Asmaul Husna",
        petunjuk: "Cocokkan nama Asmaul Husna dengan arti dan teladan penerapannya!",
        pairs: [
          { id: 1, nama: "الْحَلِيمُ (Al-Halim)", target: "Maha Penyantun (Sabar tidak lekas marah)" },
          { id: 2, nama: "الشَّكُورُ (Asy-Syakur)", target: "Maha Menghargai (Membalas kebaikan berlipat)" },
          { id: 3, nama: "الْحَكِيمُ (Al-Hakim)", target: "Maha Bijaksana (Penuh hikmah)" },
          { id: 4, nama: "الْوَدُودُ (Al-Wadud)", target: "Maha Mencintai (Penuh kasih sayang)" }
        ]
      }
    },

    {
      id: "k5-sem1-bab3",
      bab: 3,
      elemen: "Akhlak",
      judul: "Akhlak terhadap Allah: Berdoa dan Bertawakal",
      judulCPBaru: "Akhlak terhadap Allah dengan Berdoa dan Bertawakal",
      icon: "ShieldAlert",
      temaWarna: "cyan",
      cpLama: {
        fokus: "Aku Anak Saleh & Akhlak Berdoa dan Bertawakal",
        kompetensi: "Menerapkan adab berdoa dan sikap tawakal"
      },
      cpBaru: {
        fokus: "Akhlak terhadap Allah Swt. dengan Berdoa dan Bertawakal kepada-Nya",
        kompetensi: "Menerapkan kepasrahan dan optimisme melalui doa serta tawakal setelah berikhtiar"
      },
      tujuan: [
        "Memahami arti doa sebagai senjata dan bentuk ibadah orang beriman",
        "Mengetahui adab dan waktu mustajab untuk berdoa",
        "Memahami konsep ikhtiar (berusaha keras) sebelum bertawakal",
        "Menunjukkan sikap pantang putus asa ketika doa belum terkabul"
      ],
      materi: {
        pengantar: "Manusia adalah makhluk yang lemah dan selalu membutuhkan pertolongan Allah. Doa dan tawakal adalah dua sayap keimanan yang membawa ketenangan jiwa.",
        subBab: [
          {
            judul: "A. Pengertian Doa dan Maknanya",
            isi: "Doa secara bahasa artinya memanggil atau memohon. Secara istilah, doa adalah permohonan hamba kepada Allah Swt. dengan penuh ketundukan dan pengharapan.",
            dalil: {
              arab: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ",
              latin: "Wa qāla Rabbukumud'ūnī astajib lakum",
              arti: "Dan Tuhanmu berfirman: 'Berdoalah kepada-Ku, niscaya akan Kuperkenankan bagimu.' (Q.S. Gafir: 60)"
            }
          },
          {
            judul: "B. Adab dan Waktu Mustajab Berdoa",
            adabList: [
              "Menghadap kiblat dalam keadaan suci dari hadas",
              "Mengawali doa dengan memuji Allah (Alhamdulillah) dan bersalawat kepada Nabi Muhammad saw.",
              "Berdoa dengan suara lembut, khusyuk, dan penuh keyakinan bahwa Allah akan mengabulkannya",
              "Waktu mustajab: Sepertiga malam terakhir, saat sujud dalam salat, antara azan dan ikamah, serta hari Jumat."
            ]
          },
          {
            judul: "C. Konsep Tawakal yang Benar",
            isi: "Tawakal artinya berserah diri kepada keputusan Allah SETELAH melakukan ikhtiar (usaha sungguh-sungguh). Seseorang tidak boleh hanya diam pasrah tanpa belajar saat ingin pintar, seperti sabda Nabi: 'Ikatlah untamu, lalu bertawakallah!'."
          }
        ],
        rangkuman: [
          "Doa adalah bukti kerendahan hati manusia di hadapan Allah.",
          "Adab berdoa: Mengawali dengan hamdalah dan salawat, serta khusyuk.",
          "Ikhtiar dan tawakal harus seimbang; usaha sekuat tenaga, hasil diserahkan kepada Allah."
        ]
      },
      game: {
        id: "game-k5-bab3",
        tipe: "ikhtiar-tawakal-choice",
        nama: "Jembatan Ikhtiar & Doa",
        petunjuk: "Tentukan apakah pernyataan berikut termasuk 'Ikhtiar' atau 'Tawakal'!",
        skenario: [
          {
            teks: "Belajar tekun setiap malam dan mengerjakan latihan soal menjelang ujian semester.",
            jawaban: "Ikhtiar",
            penjelasan: "Ini adalah bentuk usaha nyata manusia menggunakan akal dan tenaga."
          },
          {
            teks: "Berdoa dengan tenang setelah ujian selesai dan menerima apa pun nilai yang diberikan Allah dengan ikhlas.",
            jawaban: "Tawakal",
            penjelasan: "Ini adalah sikap berserah diri setelah mengerahkan ikhtiar secara maksimal."
          },
          {
            teks: "Memeriksakan diri ke dokter dan meminum obat saat sedang sakit flu.",
            jawaban: "Ikhtiar",
            penjelasan: "Berobat adalah ikhtiar medis yang disunnahkan Rasulullah saw."
          }
        ]
      }
    },

    {
      id: "k5-sem1-bab4",
      bab: 4,
      elemen: "Fikih",
      judul: "Fikih Puasa: Puasa Wajib dan Puasa Sunah",
      judulCPBaru: "Puasa Wajib dan Puasa Sunah dalam Islam",
      icon: "Moon",
      temaWarna: "indigo",
      cpLama: {
        fokus: "Puasa-puasa Sunah & Hidup Lapang dengan Berbagi",
        kompetensi: "Memahami macam-macam puasa sunah dan praktiknya"
      },
      cpBaru: {
        fokus: "Puasa Wajib dan Puasa Sunah",
        kompetensi: "Menerapkan ketentuan puasa wajib Ramadan serta puasa-puasa sunah yang dianjurkan"
      },
      tujuan: [
        "Memahami definisi puasa (ash-Shiyam) secara bahasa dan syariat",
        "Mengetahui syarat wajib, syarat sah, rukun, dan hal yang membatalkan puasa",
        "Mengenal macam-macam puasa wajib (Ramadan, Qadha, Nazar, Kifarat)",
        "Mengenal macam-macam puasa sunah (Senin-Kamis, Ayyamul Bidh, Syawal, Arafah, Asyura)"
      ],
      materi: {
        pengantar: "Puasa melatih kejujuran, disiplin, empati terhadap kaum dhuafa, dan menjaga kesehatan. Pada CP Baru, anak mempelajari puasa secara menyeluruh baik wajib maupun sunah.",
        subBab: [
          {
            judul: "A. Pengertian dan Rukun Puasa",
            isi: "Puasa artinya menahan diri dari makan, minum, dan segala hal yang membatalkan puasa mulai dari terbit fajar shadiq (subuh) hingga terbenam matahari (magrib) disertai niat karena Allah Swt.",
            rukunPuasa: [
              "1. Niat pada malam hari (sebelum terbit fajar)",
              "2. Menahan diri dari makan, minum, dan perkara yang membatalkan puasa sejak fajar sampai magrib"
            ]
          },
          {
            judul: "B. Macam-Macam Puasa Wajib",
            daftarWajib: [
              { nama: "Puasa Ramadan", ket: "Puasa satu bulan penuh di bulan suci Ramadan (hukumnya fardhu 'ain)." },
              { nama: "Puasa Qadha", ket: "Puasa untuk mengganti hari puasa Ramadan yang tertinggal karena sakit atau bepergian jauh (safar)." },
              { nama: "Puasa Nazar", ket: "Puasa yang dijanjikan oleh seseorang jika keinginannya yang baik tercapai." },
              { nama: "Puasa Kifarat", ket: "Puasa denda akibat melanggar aturan tertentu dalam syariat." }
            ]
          },
          {
            judul: "C. Macam-Macam Puasa Sunah",
            daftarSunah: [
              { nama: "Puasa Senin dan Kamis", ket: "Hari di mana amal perbuatan diangkat dan diperiksa oleh Allah Swt." },
              { nama: "Puasa Ayyamul Bidh", ket: "Puasa tanggal 13, 14, dan 15 setiap bulan Hijriah saat bulan purnama." },
              { nama: "Puasa 6 Hari di Bulan Syawal", ket: "Pahalanya seperti berpuasa satu tahun penuh." },
              { nama: "Puasa Hari Arafah (9 Zulhijjah)", ket: "Bagi orang yang tidak berhaji, menghapus dosa setahun yang lalu dan setahun yang akan datang." },
              { nama: "Puasa Asyura (10 Muharram)", ket: "Menghapuskan dosa setahun yang telah lalu." }
            ]
          }
        ],
        rangkuman: [
          "Rukun puasa ada dua: niat dan menahan diri dari yang membatalkan sejak fajar hingga magrib.",
          "Puasa wajib: Ramadan, Qadha, Nazar, dan Kifarat.",
          "Puasa sunah: Senin-Kamis, Ayyamul Bidh, Syawal, Arafah, dan Asyura."
        ]
      },
      game: {
        id: "game-k5-bab4",
        tipe: "fasting-category-sorter",
        nama: "Pilah Keranjang Puasa Wajib vs Sunah",
        petunjuk: "Geser atau pilih jenis puasa ke dalam keranjang yang tepat: 'Puasa Wajib' atau 'Puasa Sunah'!",
        items: [
          { nama: "Puasa Ramadan", kategori: "Wajib" },
          { nama: "Puasa Hari Senin & Kamis", kategori: "Sunah" },
          { nama: "Puasa Nazar", kategori: "Wajib" },
          { nama: "Puasa 6 Hari Syawal", kategori: "Sunah" },
          { nama: "Puasa Qadha Pengganti", kategori: "Wajib" },
          { nama: "Puasa Hari Arafah (9 Zulhijjah)", kategori: "Sunah" }
        ]
      }
    },

    {
      id: "k5-sem1-bab5",
      bab: 5,
      elemen: "Sejarah Peradaban Islam",
      judul: "Kepemimpinan Rasulullah saw. di Madinah",
      judulCPBaru: "Kepemimpinan Nabi Muhammad saw. Membangun Kota Madinah",
      icon: "Flag",
      temaWarna: "rose",
      cpLama: {
        fokus: "Kisah Keteladanan Nabi Muhammad saw. Membangun Kota Madinah",
        kompetensi: "Menceritakan upaya Rasulullah mempersaudarakan kaum Muhajirin dan Ansar"
      },
      cpBaru: {
        fokus: "Kepemimpinan Nabi Muhammad saw. di Madinah (Piagam Madinah)",
        kompetensi: "Menganalisis prinsip keadilan, toleransi, dan persatuan dalam Piagam Madinah"
      },
      tujuan: [
        "Menceritakan peristiwa hijrah Nabi Muhammad saw. dari Makkah ke Madinah (Yatsrib)",
        "Mengetahui langkah pertama Nabi: Membangun Masjid Nabawi sebagai pusat ibadah dan pembinaan umat",
        "Meneladani persaudaraan tulus antara kaum Muhajirin dan kaum Ansar",
        "Memahami nilai toleransi dalam Piagam Madinah (Sahifatul Madinah)"
      ],
      materi: {
        pengantar: "Setelah berhijrah ke Madinah, Rasulullah saw. meletakkan fondasi peradaban baru yang adil, toleran, dan berkeadaban. Madinah menjadi model masyarakat madani yang rukun.",
        subBab: [
          {
            judul: "A. Membangun Masjid Nabawi",
            isi: "Langkah pertama yang dilakukan Rasulullah setibanya di Madinah adalah membangun Masjid Nabawi. Tanah dibeli dari dua anak yatim bernama Sahl dan Suhail. Masjid bukan sekadar tempat salat, melainkan pusat musyawarah, pendidikan, dan kegiatan sosial kemasyarakatan."
          },
          {
            judul: "B. Mempersaudarakan Muhajirin dan Ansar",
            isi: "Kaum Muhajirin meninggalkan harta bendanya di Makkah demi mempertahankan keimanan. Kaum Ansar (penduduk asli Madinah) menyambut mereka dengan penuh kehangatan dan membagi tempat tinggal, kebun kurma, dan makanan tanpa pamrih. Persaudaraan atas dasar iman melampaui ikatan darah."
          },
          {
            judul: "C. Piagam Madinah: Teladan Kerukunan Antarumat Beragama",
            isi: "Nabi menyusun Piagam Madinah yang disepakati oleh seluruh penduduk Madinah, baik muslim, Yahudi, maupun suku-suku Arab lainnya. Prinsip utamanya:",
            prinsipPiagam: [
              "Semua warga Madinah wajib saling tolong-menolong membela kota Madinah jika diserang musuh.",
              "Kebebasan beragama dijamin sepenuhnya; tidak boleh ada pemaksaan keyakinan.",
              "Keadilan hukum berlaku sama bagi seluruh golongan tanpa memandang suku atau agama."
            ]
          }
        ],
        rangkuman: [
          "Masjid Nabawi adalah pilar pertama peradaban Islam di Madinah.",
          "Muhajirin dan Ansar dipersaudarakan atas dasar ikatan akidah Islam.",
          "Piagam Madinah adalah konstitusi tertulis pertama di dunia yang menjamin hak asasi dan toleransi beragama."
        ]
      },
      game: {
        id: "game-k5-bab5",
        tipe: "madinah-explorer",
        nama: "Petualangan Membangun Madinah",
        petunjuk: "Bantu Rasulullah saw. memilih keputusan bijak dalam membangun peradaban Madinah!",
        stages: [
          {
            tantangan: "Langkah pertama apa yang dilakukan Nabi saw. setibanya di Madinah?",
            opsi: ["Mendirikan Masjid Nabawi", "Membeli senjata perang", "Membangun istana megah"],
            benar: 0,
            ulasan: "Masjid Nabawi dibangun sebagai sentra spiritual, musyawarah, dan pendidikan umat."
          },
          {
            tantangan: "Bagaimana cara Nabi saw. menyelesaikan kesulitan hidup kaum Muhajirin?",
            opsi: ["Mempersaudarakannya dengan kaum Ansar yang dermawan", "Menyuruh mereka kembali ke Makkah", "Menelantarkannya"],
            benar: 0,
            ulasan: "Persaudaraan kaum Muhajirin dan Ansar menjadi bukti kekuatan ukhuwah Islamiyah."
          },
          {
            tantangan: "Apa isi penting dari Piagam Madinah mengenai kaum non-muslim?",
            opsi: ["Menjamin kebebasan memeluk agama dan saling melindungi", "Mengusir kaum non-muslim", "Melarang ibadah mereka"],
            benar: 0,
            ulasan: "Piagam Madinah memberikan jaminan kebebasan beragama dan hak keamanan yang setara."
          }
        ]
      }
    }
  ],

  // ================= SEMESTER 2 =================
  semester2: [
    {
      id: "k5-sem2-bab6",
      bab: 6,
      elemen: "Al-Qur'an dan Hadis",
      judul: "Tajwid Qalqalah & Hadis Berbakti kepada Orang Tua dan Guru",
      judulCPBaru: "Tajwid Qalqalah & Birrul Walidain (Berbakti)",
      icon: "HeartHandshake",
      temaWarna: "emerald",
      cpLama: {
        fokus: "Q.S. ar-Rūm: 22 dan al-Baqarah: 256 (Toleransi & Keragaman)",
        kompetensi: "Memahami keragaman bahasa dan warna kulit serta toleransi"
      },
      cpBaru: {
        fokus: "Praktik Bacaan Kalkalah (Qalqalah) & Hadis Berbuat Baik kepada Orang Tua dan Guru",
        kompetensi: "Mempraktikkan Qalqalah Sugra & Kubra serta mengamalkan adab berbakti"
      },
      tujuan: [
        "Mengetahui 5 huruf Qalqalah (ق, ط, ب, ج, د / baju di toko)",
        "Membedakan cara membaca Qalqalah Sugra (pantulan kecil) dan Qalqalah Kubra (pantulan besar)",
        "Menghafal dan mengartikan Hadis tentang keutamaan berbakti kepada orang tua dan guru",
        "Menunjukkan sikap hormat dan patuh kepada nasihat orang tua dan guru"
      ],
      materi: {
        pengantar: "Membaca Al-Qur'an dengan tajwid memantul (Qalqalah) membuat bacaan indah dan berirama. Di samping itu, ridha Allah bergantung pada ridha kedua orang tua kita.",
        subBab: [
          {
            judul: "A. Hukum Tajwid Qalqalah (قَلْقَلَة)",
            isi: "Qalqalah artinya memantul atau bergetar. Huruf qalqalah ada lima yang disingkat 'Ba-Ju-Di-To-Qo' (ب - ج - د - ط - ق):",
            jenisQalqalah: [
              {
                nama: "1. Qalqalah Sugra (Pantulan Kecil)",
                ket: "Huruf qalqalah berharakat sukun ASLI dan berada di tengah kata.",
                caraBaca: "Memantul ringan tanpa jeda nafas.",
                contoh: "يَطْمَعُ (Yaṭma'u), أَبْصَارِهِمْ (Abṣārihim), خَلَقْنَا (Khalaqnā)"
              },
              {
                nama: "2. Qalqalah Kubra (Pantulan Besar)",
                ket: "Huruf qalqalah berada di akhir kata dan disukunkan karena waqaf (berhenti membaca).",
                caraBaca: "Memantul kuat dan jelas.",
                contoh: "الْفَلَقِ ۙ dibaca 'Al-Falaq!', الْعَلَقِ ۙ dibaca 'Al-'Alaq!', أَحَدٌ ۙ dibaca 'Ahad!'"
              }
            ]
          },
          {
            judul: "B. Hadis Berbuat Baik kepada Orang Tua dan Guru (CP Baru)",
            isi: "Berbakti kepada kedua orang tua dinamakan 'Birrul Wālidain'. Guru adalah orang tua rohani kita di sekolah yang membimbing kita dengan ilmu.",
            hadisOrangTua: {
              arab: "رِضَى الرَّبِّ فِي رِضَى الْوَالِدَيْنِ وَسَخَطُ الرَّبِّ فِي سَخَطِ الْوَالِدَيْنِ",
              latin: "Riḍār-Rabbi fī riḍāl-wālidaini wa sakhaṭur-Rabbi fī sakhaṭil-wālidain",
              arti: "Ridha Allah terletak pada ridha kedua orang tua, dan murka Allah terletak pada kemurkaan kedua orang tua. (H.R. Tirmizi)"
            }
          }
        ],
        rangkuman: [
          "Huruf Qalqalah ada 5: Ba, Jim, Dal, Tha, Qaf.",
          "Qalqalah Sugra sukun di tengah kata; Qalqalah Kubra sukun di akhir karena berhenti (waqaf).",
          "Membahagiakan orang tua dan memuliakan guru adalah kunci kesuksesan dunia dan akhirat."
        ]
      },
      game: {
        id: "game-k5-bab6",
        tipe: "qalqalah-matcher",
        nama: "Pantulan Qalqalah Ceria",
        petunjuk: "Dengarkan dan tentukan apakah kata berikut termasuk Qalqalah Sugra atau Kubra!",
        soalList: [
          { kata: "يَجْعَلْ (Yaj'al)", jawaban: "Qalqalah Sugra", alasan: "Huruf Jim sukun berada di tengah kata." },
          { kata: "قُلْ هُوَ اللَّهُ أَحَدٌ ۙ (Ahad)", jawaban: "Qalqalah Kubra", alasan: "Huruf Dal berada di akhir ayat dan dibaca waqaf (memantul besar)." },
          { kata: "إِذَا وَقَبَ ۙ (Waqab)", jawaban: "Qalqalah Kubra", alasan: "Huruf Ba di akhir ayat berhenti karena waqaf." },
          { kata: "حَبْلٌ مِّن مَّسَدٍ (Hablun)", jawaban: "Qalqalah Sugra", alasan: "Huruf Ba sukun asli di tengah kata." }
        ]
      }
    },

    {
      id: "k5-sem2-bab7",
      bab: 7,
      elemen: "Akidah",
      judul: "Iman kepada Hari Akhir (Kiamat)",
      judulCPBaru: "Ketika Kehidupan Telah Berhenti: Hari Akhir",
      icon: "Clock",
      temaWarna: "amber",
      cpLama: {
        fokus: "Ketika Kehidupan Telah Berhenti & Hari Kiamat",
        kompetensi: "Memahami makna beriman kepada hari akhir"
      },
      cpBaru: {
        fokus: "Iman kepada Hari Akhir",
        kompetensi: "Menjelaskan tanda-tanda hari akhir dan meyakini pertanggungjawaban amal"
      },
      tujuan: [
        "Memahami bahwa hari akhir (kiamat) pasti akan datang dan hanya Allah yang tahu waktunya",
        "Mengetahui perbedaan Kiamat Sugra (kecil) dan Kiamat Kubra (besar)",
        "Mengenal tahapan peristiwa setelah hari kiamat (Ba'ats, Hasyr, Hisab, Mizan, Jaza')",
        "Membiasakan beramal saleh sebagai bekal menuju alam akhirat"
      ],
      materi: {
        pengantar: "Hari akhir adalah rukun iman kelima. Mengimani hari akhir menjadikan kita bijak dalam memanfaatkan umur dan takut berbuat dosa.",
        subBab: [
          {
            judul: "A. Pengertian Hari Kiamat dan Jenisnya",
            isi: "Hari kiamat adalah hari berakhirnya seluruh kehidupan di alam semesta. Kiamat terbagi menjadi dua:",
            jenisKiamat: [
              {
                nama: "1. Kiamat Sugra (Kiamat Kecil)",
                ket: "Kematian setiap manusia atau bencana alam lokal seperti banjir, gempa bumi, tsunami, dan gunung meletus."
              },
              {
                nama: "2. Kiamat Kubra (Kiamat Besar)",
                ket: "Hancurnya seluruh alam semesta, bintang-bintang berjatuhan, bumi digoncangkan sehebat-hebatnya saat Malaikat Israfil meniup sangkakala pertama."
              }
            ]
          },
          {
            judul: "B. Tahapan Perjalanan Setelah Kematian",
            tahapan: [
              { nama: "Alam Barzakh (Kubur)", ket: "Pintu gerbang penantian antara dunia dan akhirat." },
              { nama: "Yaumul Ba'ats", ket: "Hari dibangkitkannya seluruh manusia dari dalam kubur." },
              { nama: "Yaumul Hasyr / Mahsyar", ket: "Hari dikumpulkannya seluruh umat manusia di Padang Mahsyar." },
              { nama: "Yaumul Hisab & Mizan", ket: "Hari perhitungan dan penimbangan seluruh amal baik dan buruk manusia tanpa ada yang terlewat." },
              { nama: "As-Sirath", ket: "Jembatan yang membentang di atas neraka menuju surga." },
              { nama: "Surga atau Neraka", ket: "Tempat pembalasan abadi bagi orang beriman (Surga) atau durhaka (Neraka)." }
            ]
          }
        ],
        rangkuman: [
          "Hari kiamat pasti datang, hanya Allah yang mengetahui waktunya.",
          "Kiamat sugra berupa kematian dan bencana alam; Kiamat kubra kehancuran total semesta.",
          "Seluruh perbuatan manusia akan ditimbang di Yaumul Mizan."
        ]
      },
      game: {
        id: "game-k5-bab7",
        tipe: "timeline-journey",
        nama: "Jejak Langkah Hari Pembalasan",
        petunjuk: "Susun tahapan kehidupan setelah hari kiamat secara berurutan!",
        tahapanUrut: [
          { no: 1, nama: "Alam Barzakh (Kubur)" },
          { no: 2, nama: "Yaumul Ba'ats (Kebangkitan)" },
          { no: 3, nama: "Padang Mahsyar (Pengumpulan)" },
          { no: 4, nama: "Yaumul Hisab & Mizan (Penimbangan)" },
          { no: 5, nama: "Surga Kenikmatan Abadi" }
        ]
      }
    },

    {
      id: "k5-sem2-bab8",
      bab: 8,
      elemen: "Akhlak",
      judul: "Akhlak terhadap Teman: Indahnya Persahabatan",
      judulCPBaru: "Akhlak terhadap Teman (Anti-Bullying & Toleransi)",
      icon: "Users",
      temaWarna: "cyan",
      cpLama: {
        fokus: "Akhlak terhadap Teman dan Tetangga & Senangnya Berteman",
        kompetensi: "Menerapkan sikap saling menghargai teman"
      },
      cpBaru: {
        fokus: "Akhlak terhadap Teman",
        kompetensi: "Menerapkan sikap setia kawan, menjauhi perundungan (bullying), dan menjaga rahasia sahabat"
      },
      tujuan: [
        "Mengetahui adab bergaul dengan teman sebaya dalam Islam",
        "Menghindari perilaku buruk: mengejek, memanggil dengan julukan jelek, dan ghibah",
        "Menunjukkan sikap saling memaafkan dan menolong teman yang kesusahan",
        "Mewujudkan kelas yang nyaman dan bebas dari perundungan"
      ],
      materi: {
        pengantar: "Teman yang baik bagaikan penjual minyak wangi: bila kita berdekatan dengannya, kita ikut tertular aroma harum kebaikannya. Islam mengajarkan persahabatan yang tulus karena Allah.",
        subBab: [
          {
            judul: "A. Adab Berteman yang Baik",
            adabBerteman: [
              "Mengucapkan salam dan tersenyum ketika bertemu",
              "Menolong teman yang sedang membutuhkan bantuan tanpa pamrih",
              "Berbicara dengan kata-kata santun dan mendengarkan ketika teman berbicara",
              "Menjaga aib dan rahasia teman, tidak membicarakannya di belakang (ghibah)"
            ]
          },
          {
            judul: "B. Larangan Menyakiti Teman (Stop Perundungan)",
            isi: "Allah Swt. melarang keras perbuatan mencela dan merendahkan sesama:",
            dalil: {
              arab: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِّن قَوْمٍ عَسَىٰ أَن يَكُونُوا خَيْرًا مِّنْهُمْ",
              latin: "Yā ayyuhallażīna āmanū lā yaskhar qaumum min qaumin 'asā ay yakūnū khairam minhum",
              arti: "Wahai orang-orang yang beriman! Janganlah suatu kaum mengolok-olok kaum yang lain (karena) boleh jadi mereka (yang diperolok-olokkan) lebih baik dari mereka. (Q.S. Al-Hujurat: 11)"
            }
          }
        ],
        rangkuman: [
          "Teman yang baik saling mengingatkan dalam kebaikan dan takwa.",
          "Dilarang mengejek kekurangan fisik atau memberi julukan jelek kepada teman.",
          "Memaafkan kesalahan teman mempererat ukhuwah islamiyah."
        ]
      },
      game: {
        id: "game-k5-bab8",
        tipe: "friendship-shield",
        nama: "Benteng Sahabat Sejati",
        petunjuk: "Pilih tindakan pahlawan kebaikan untuk melindungi teman dari perundungan!",
        cases: [
          {
            situasi: "Ada teman yang sepatunya basah terkena hujan lalu ditertawakan di kelas...",
            pilihanBenar: "Menghiburnya dan membantunya mengeringkan sepatu",
            opsiLain: ["Ikut menertawakan ramai-ramai", "Memfoto dan menyebarkannya"],
            alasan: "Sahabat sejati hadir untuk menolong dan memberi semangat, bukan menertawakan kemalangan teman."
          },
          {
            situasi: "Mendengar ada teman yang sedang membicarakan kejelekan orang lain di pojok kelas...",
            pilihanBenar: "Menasihati dengan sopan agar berhenti ghibah",
            opsiLain: ["Mendengarkan dengan asyik", "Menambahi cerita gosip"],
            alasan: "Menjauhkan diri dan sahabat dari bahaya lisan ghibah."
          }
        ]
      }
    },

    {
      id: "k5-sem2-bab9",
      bab: 9,
      elemen: "Fikih",
      judul: "Makanan dan Minuman yang Halal dan Haram",
      judulCPBaru: "Makanan dan Minuman Halal serta Menjauhi yang Haram",
      icon: "Apple",
      temaWarna: "emerald",
      cpLama: {
        fokus: "Memahami Zakat (Zakat Fitrah & Zakat Mal)",
        kompetensi: "Menjelaskan ketentuan zakat"
      },
      cpBaru: {
        fokus: "Makanan Minuman yang Halal dan Haram",
        kompetensi: "Menganalisis kriteria makanan dan minuman halal thayyib serta bahaya makanan haram"
      },
      tujuan: [
        "Memahami arti Halal (boleh dikonsumsi) dan Thayyib (baik, bergizi, menyehatkan)",
        "Mengetahui jenis binatang yang halal dan yang haram dimakan",
        "Mengetahui sebab-sebab makanan menjadi haram (zatnya atau cara memperolehnya)",
        "Membiasakan membaca label halal saat membeli makanan kemasan"
      ],
      materi: {
        pengantar: "Makanan yang masuk ke dalam tubuh kita menjadi energi untuk beribadah dan darah daging kita. Mengonsumsi makanan halal dan thayyib adalah perintah langsung dari Allah Swt.",
        subBab: [
          {
            judul: "A. Konsep Halalan Thayyiban",
            isi: "Halal artinya diizinkan menurut syariat Islam. Thayyib artinya bersih, suci, bergizi, higienis, dan bermanfaat bagi kesehatan jasmani.",
            dalil: {
              arab: "يَا أَيُّهَا النَّاسُ كُلُوا مِمَّا فِي الْأَرْضِ حَلَالًا طَيِّبًا",
              latin: "Yā ayyuhan-nāsu kulū mimmā fil-arḍi ḥalālan ṭayyibā",
              arti: "Wahai manusia! Makanlah dari (makanan) yang halal dan baik yang terdapat di bumi. (Q.S. Al-Baqarah: 168)"
            }
          },
          {
            judul: "B. Jenis Makanan & Hewan yang Diharamkan",
            isi: "Secara zatnya (Haram Liżātihī), ada makanan yang tegas dilarang Allah:",
            haramList: [
              "1. Bangkai (kecuali bangkai ikan laut dan belalang yang halal)",
              "2. Darah yang mengalir",
              "3. Daging babi dan seluruh produk olahan turunannya",
              "4. Hewan yang disembelih tanpa menyebut nama Allah",
              "5. Hewan bertaring yang memangsa (singa, harimau, serigala)",
              "6. Burung yang berkuku tajam mencengkeram mangsa (elang, rajawali)",
              "7. Hewan yang hidup di dua alam (katak) dan hewan yang menjijikkan / disuruh dibunuh (ular, tikus)",
              "8. Segala minuman yang memabukkan (khamr, alkohol, narkoba)"
            ]
          },
          {
            judul: "C. Haram Karena Cara Memperolehnya (Haram Ligairihī)",
            isi: "Makanan yang asalnya halal (seperti nasi, ayam, buah) bisa menjadi haram apabila diperoleh dengan cara mencuri, menipu, memeras, atau hasil korupsi."
          }
        ],
        rangkuman: [
          "Halal artinya diizinkan syariat; thayyib artinya sehat, bergizi, dan higienis.",
          "Bangkai ikan dan belalang halal dimakan tanpa perlu disembelih.",
          "Hewan bertaring buas dan minuman memabukkan haram dikonsumsi.",
          "Makanan haram menghalangi terkabulnya doa kita."
        ]
      },
      game: {
        id: "game-k5-bab9",
        tipe: "halal-express",
        nama: "Keranjang Halal Thayyib Express",
        petunjuk: "Sortir makanan ke dalam kotak 'Halal Thayyib' atau kotak 'Haram / Bahaya'!",
        items: [
          { nama: "Ikan Laut Segar", tipe: "Halal", icon: "🐟" },
          { nama: "Daging Babi", tipe: "Haram", icon: "🥩" },
          { nama: "Madu & Buah Apel", tipe: "Halal", icon: "🍎" },
          { nama: "Minuman Keras / Alkohol", tipe: "Haram", icon: "🍾" },
          { nama: "Daging Sapi Sembelihan Halal", tipe: "Halal", icon: "🥩" },
          { nama: "Daging Bangkai Ayam", tipe: "Haram", icon: "🍗" }
        ]
      }
    },

    {
      id: "k5-sem2-bab10",
      bab: 10,
      elemen: "Sejarah Peradaban Islam",
      judul: "Kisah Perjuangan Nabi: Hudaibiah, Fathu Makkah & Haji Wada'",
      judulCPBaru: "Perjanjian Hudaibiah, Fathu Makkah, dan Haji Wada'",
      icon: "Shield",
      temaWarna: "purple",
      cpLama: {
        fokus: "Kisah keteladanan Nabi Muhammad saw. (Perjanjian Hudaibiah, Fathu Makkah, Haji Wada')",
        kompetensi: "Menceritakan peristiwa damai Hudaibiah dan Fathu Makkah"
      },
      cpBaru: {
        fokus: "Perjanjian Hudaibiah, Fathu Makkah, dan Haji Wada'",
        kompetensi: "Menganalisis strategi diplomasi damai Rasulullah saw. dan keteladanan sifat pemaaf"
      },
      tujuan: [
        "Menceritakan latar belakang Perjanjian Hudaibiah sebagai diplomasi damai yang cerdas",
        "Mengetahui peristiwa Fathu Makkah (Pembebasan Makkah) tanpa pertumpahan darah",
        "Meneladani keagungan sikap pemaaf Rasulullah kepada kaum Quraisy yang dahulu memusuhi",
        "Memahami pesan persaudaraan dan kesetaraan dalam khutbah Haji Wada' (Haji Perpisahan)"
      ],
      materi: {
        pengantar: "Dakwah Rasulullah saw. mencapai puncak kejayaannya bukan melalui peperangan, melainkan dengan diplomasi damai dan sifat pemaaf yang memikat jutaan hati manusia.",
        subBab: [
          {
            judul: "A. Perjanjian Hudaibiah (Tahun 6 H)",
            isi: "Saat Rasulullah dan kaum muslimin hendak berumrah, mereka dihadang kafir Quraisy di Hudaibiah. Rasulullah mengutamakan perdamaian melalui perjanjian gencatan senjata selama 10 tahun. Perjanjian ini membuka jalan dakwah Islam tersebar luas ke seluruh jazirah Arab."
          },
          {
            judul: "B. Fathu Makkah: Kemenangan Tanpa Darah (Tahun 8 H)",
            isi: "Setelah kaum Quraisy melanggar isi perjanjian Hudaibiah, Rasulullah berangkat menuju Makkah bersama 10.000 pasukan. Pasukan masuk kota Makkah dengan damai. Berhala di sekeliling Ka'bah dihancurkan. Rasulullah mengumumkan pengampunan umum kepada seluruh penduduk Makkah dengan sabda beliau: 'Pergilah kalian, hari ini tidak ada cercaan atas kalian, kalian bebas!'."
          },
          {
            judul: "C. Haji Wada' (Tahun 10 H)",
            isi: "Haji Wada' adalah haji terakhir sekaligus haji perpisahan Rasulullah saw. bersama lebih dari 100.000 sahabat. Dalam khotbah terakhirnya, Rasulullah berpesan agar umat Islam tidak menzalimi wanita, tidak menumpahkan darah sesama, dan berpegang teguh pada Al-Qur'an dan Sunnah."
          }
        ],
        rangkuman: [
          "Perjanjian Hudaibiah mengajarkan pentingnya diplomasi dan musyawarah damai.",
          "Fathu Makkah membuktikan bahwa Islam disebarkan dengan cinta dan pengampunan.",
          "Pesan Haji Wada': Semua manusia setara, yang membedakan di hadapan Allah hanyalah ketakwaan."
        ]
      },
      game: {
        id: "game-k5-bab10",
        tipe: "history-quiz",
        nama: "Lintas Sejarah Fathu Makkah",
        petunjuk: "Uji wawasanmu tentang peristiwa agung pembebasan kota Makkah!",
        questions: [
          {
            tanya: "Bagaimanakah sikap Rasulullah saw. kepada kaum kafir Quraisy saat Fathu Makkah?",
            opsi: ["Memaafkan dan membebaskan mereka semua", "Membalas dendam masa lalu", "Menghukum mereka"],
            benar: 0,
            alasan: "Rasulullah saw. berjiwa mulia dengan memaafkan musuh-musuh yang dulu pernah menganiayanya."
          },
          {
            tanya: "Berapa tahun kesepakatan gencatan senjata dalam Perjanjian Hudaibiah?",
            opsi: ["10 Tahun", "2 Tahun", "1 Tahun"],
            benar: 0,
            alasan: "Perjanjian Hudaibiah menyepakati gencatan senjata antara muslim dan Quraisy selama 10 tahun."
          },
          {
            tanya: "Dua pusaka utama yang ditinggalkan Nabi saw. pada Haji Wada' agar umat tidak sesat adalah...",
            opsi: ["Kitabullah (Al-Qur'an) dan Sunnah Rasul", "Emas dan Perak", "Pedang dan Kuda"],
            benar: 0,
            alasan: "Al-Qur'an dan Sunnah Nabi saw. adalah pedoman abadi yang menjaga umat Islam di jalan kebenaran."
          }
        ]
      }
    }
  ]
};

