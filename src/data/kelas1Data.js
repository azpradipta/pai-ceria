// Data Materi & Games PAI Kelas 1 SD (Fase A)
// Mencakup Kurikulum CP Lama (Buku Siswa) dan CP Baru (Revisi CP 020/2026)

export const kelas1Data = {
  kelas: 1,
  namaFase: "Fase A (Kelas 1 SD)",
  deskripsi: "Pembelajaran dasar pengenalan huruf hijaiah, rukun iman, rukun Islam, adab menyucikan dan memuji Allah, tata cara bersuci, serta kisah keteladanan Nabi Adam a.s. dan Nabi Idris a.s.",
  
  // ================= SEMESTER 1 =================
  semester1: [
    {
      id: "k1-sem1-bab1",
      bab: 1,
      elemen: "Al-Qur'an dan Hadis",
      judul: "Aku Cinta Al-Qur'an",
      judulCPBaru: "Mengenal Huruf Hijaiah & Makhārijul Ḥuruf",
      icon: "BookOpen",
      temaWarna: "emerald",
      cpLama: {
        fokus: "Huruf Hijaiah Berharakat & Surah Al-Fatihah",
        kompetensi: "Memahami huruf hijaiah dan harakat dasar"
      },
      cpBaru: {
        fokus: "Huruf Hijaiah (Makhārijul Ḥuruf) & Huruf Hijaiah Berharakat",
        kompetensi: "Membaca, membedakan makhraj, dan melafalkan huruf berharakat dengan benar"
      },
      tujuan: [
        "Mengenal Al-Qur'an sebagai kitab suci umat Islam",
        "Mengenal 28 huruf hijaiah dari Alif sampai Ya",
        "Mengetahui letak makhraj (tempat keluar bunyi huruf: bibir, tenggorokan, lidah)",
        "Membaca huruf berharakat Fathah, Kasrah, dan Dammah"
      ],
      materi: {
        pengantar: "Al-Qur'an adalah kitab suci yang diturunkan oleh Allah Swt. kepada Nabi Muhammad saw. Membaca Al-Qur'an bernilai ibadah dan mendapat pahala yang berlipat ganda dari Allah Swt.",
        subBab: [
          {
            judul: "A. Al-Qur'an Kitab Suciku",
            isi: "Al-Qur'an ditulis dengan huruf Arab yang disebut Huruf Hijaiah. Membaca Al-Qur'an dimulai dengan membaca basmalah dan ta'awwudz. Setiap satu huruf yang kita baca akan dibalas dengan sepuluh kebaikan.",
            dalil: {
              arab: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
              latin: "Khairukum man ta'allamal Qur'āna wa 'allamah",
              arti: "Sebaik-baik kalian adalah orang yang belajar Al-Qur'an dan mengajarkannya. (H.R. Bukhari)"
            }
          },
          {
            judul: "B. Mengenal 28 Huruf Hijaiah",
            isi: "Huruf hijaiah berjumlah 28 huruf. Ditulis dan dibaca dari arah kanan ke kiri:",
            daftarHuruf: [
              { arab: "ا", nama: "Alif", bunyi: "A" },
              { arab: "ب", nama: "Ba", bunyi: "B" },
              { arab: "ت", nama: "Ta", bunyi: "T" },
              { arab: "ث", nama: "Tsa", bunyi: "Ts" },
              { arab: "ج", nama: "Jim", bunyi: "J" },
              { arab: "ح", nama: "Ha", bunyi: "H halus" },
              { arab: "خ", nama: "Kha", bunyi: "Kh" },
              { arab: "د", nama: "Dal", bunyi: "D" },
              { arab: "ذ", nama: "Dzal", bunyi: "Dz" },
              { arab: "ر", nama: "Ra", bunyi: "R" },
              { arab: "ز", nama: "Zai", bunyi: "Z" },
              { arab: "س", nama: "Sin", bunyi: "S" },
              { arab: "ش", nama: "Syin", bunyi: "Sy" },
              { arab: "ص", nama: "Sad", bunyi: "S tebal" },
              { arab: "ض", nama: "Dad", bunyi: "Dh tebal" },
              { arab: "ط", nama: "Ta", bunyi: "Th tebal" },
              { arab: "ظ", nama: "Zha", bunyi: "Zh tebal" },
              { arab: "ع", nama: "'Ain", bunyi: "'A (tenggorokan)" },
              { arab: "غ", nama: "Gain", bunyi: "Gh" },
              { arab: "ف", nama: "Fa", bunyi: "F" },
              { arab: "ق", nama: "Qaf", bunyi: "Q (pangkal lidah)" },
              { arab: "ك", nama: "Kaf", bunyi: "K" },
              { arab: "ل", nama: "Lam", bunyi: "L" },
              { arab: "م", nama: "Mim", bunyi: "M" },
              { arab: "ن", nama: "Nun", bunyi: "N" },
              { arab: "و", nama: "Wau", bunyi: "W" },
              { arab: "هـ", nama: "Ha", bunyi: "H besar" },
              { arab: "ي", nama: "Ya", bunyi: "Y" }
            ]
          },
          {
            judul: "C. Makharijul Huruf (CP Baru)",
            isi: "Makharijul Huruf adalah tempat-tempat keluarnya huruf hijaiah ketika diucapkan:",
            makhrajList: [
              { nama: "Al-Halaq (Tenggorokan)", huruf: "ء, هـ, ع, ح, غ, خ", contoh: "Bunyi huruf 'Ha' halus dan 'Ain di tenggorokan tengah." },
              { nama: "Asy-Syafatain (Dua Bibir)", huruf: "ب, م, و, ف", contoh: "Bunyi Ba dan Mim mengatupkan kedua bibir." },
              { nama: "Al-Lisan (Lidah)", huruf: "ت, ث, د, ذ, ر, ز, س, ش, ص, ض, ط, ظ, ق, ك, ل, ن", contoh: "Ujung lidah menempel pada gigi seri atas." }
            ]
          },
          {
            judul: "D. Mengenal Harakat Dasar",
            isi: "Harakat adalah tanda baca agar huruf hijaiah bisa berbunyi:",
            harakatList: [
              { tanda: "َ", nama: "Fathah", letak: "Di atas huruf", bunyi: "Berbunyi 'A' (Contoh: بَ dibaca Ba)" },
              { tanda: "ِ", nama: "Kasrah", letak: "Di bawah huruf", bunyi: "Berbunyi 'I' (Contoh: بِ dibaca Bi)" },
              { tanda: "ُ", nama: "Dammah", letak: "Di atas huruf", bunyi: "Berbunyi 'U' (Contoh: بُ dibaca Bu)" }
            ]
          }
        ],
        rangkuman: [
          "Al-Qur'an adalah pedoman hidup umat Islam.",
          "Huruf hijaiah berjumlah 28 huruf dan dibaca dari kanan ke kiri.",
          "Makhraj huruf adalah tempat keluar bunyi huruf dari mulut dan tenggorokan.",
          "Harakat utama adalah Fathah (a), Kasrah (i), dan Dammah (u)."
        ]
      },
      // Game Interaktif Spesifik Bab 1
      game: {
        id: "game-k1-bab1",
        tipe: "hijaiyah-catcher",
        nama: "Taman Huruf & Harakat Ceria",
        petunjuk: "Pilih harakat dan dengarkan bunyinya, lalu pasangkan huruf hijaiah dengan harakat yang tepat!",
        levels: [
          {
            pertanyaan: "Bagaimanakah huruf 'Ba' jika diberi tanda fathah di atasnya?",
            opsi: [
              { teks: "بَ (Ba)", benar: true },
              { teks: "بِ (Bi)", benar: false },
              { teks: "بُ (Bu)", benar: false }
            ],
            penjelasan: "Fathah berada di atas huruf dan menghasilkan bunyi 'A'."
          },
          {
            pertanyaan: "Huruf apakah yang keluar dari dua bibir (Asy-Syafatain)?",
            opsi: [
              { teks: "ب (Ba) dan م (Mim)", benar: true },
              { teks: "ع ('Ain) dan ح (Ha)", benar: false },
              { teks: "ك (Kaf) dan ق (Qaf)", benar: false }
            ],
            penjelasan: "Huruf Ba dan Mim dilafalkan dengan merapatkan dua bibir."
          },
          {
            pertanyaan: "Harakat yang berada di bawah huruf dan menghasilkan bunyi 'I' adalah...",
            opsi: [
              { teks: "Kasrah ( ِ )", benar: true },
              { teks: "Fathah ( َ )", benar: false },
              { teks: "Dammah ( ُ )", benar: false }
            ],
            penjelasan: "Tanda Kasrah berada di bawah garis huruf dan berbunyi 'I'."
          },
          {
            pertanyaan: "Bila huruf Dal diberi dammah (دُ), bagaimanakah cara membacanya?",
            opsi: [
              { teks: "Du", benar: true },
              { teks: "Da", benar: false },
              { teks: "Di", benar: false }
            ],
            penjelasan: "Dammah menghasilkan bunyi vokal 'U', sehingga Dal + Dammah dibaca 'Du'."
          }
        ]
      }
    },

    {
      id: "k1-sem1-bab2",
      bab: 2,
      elemen: "Akidah",
      judul: "Mengenal Rukun Iman",
      judulCPBaru: "Rukun Iman Sahabat Hatiku",
      icon: "Heart",
      temaWarna: "amber",
      cpLama: {
        fokus: "Pengertian Rukun Iman, Beriman kepada Allah & Rasul",
        kompetensi: "Memahami pengertian rukun iman"
      },
      cpBaru: {
        fokus: "Rukun Iman (6 Rukun) & Bukti Kebesaran Allah",
        kompetensi: "Menjelaskan dan meyakini 6 rukun iman dalam keseharian"
      },
      tujuan: [
        "Menyebutkan arti iman (percaya dan yakin)",
        "Menghafal 6 rukun iman secara urut",
        "Mengenal Allah sebagai Pencipta alam semesta",
        "Mencintai Nabi dan Rasul sebagai utusan Allah"
      ],
      materi: {
        pengantar: "Iman artinya percaya dan yakin sepenuh hati, diucapkan dengan lisan, dan dibuktikan dengan perbuatan baik sehari-hari. Sebagai anak muslim, kita wajib memiliki iman yang kuat.",
        subBab: [
          {
            judul: "A. Arti Iman dan Rukun Iman",
            isi: "Rukun Iman adalah pondasi pokok keimanan setiap orang Islam. Rukun Iman berjumlah 6 perkara yang tidak boleh dipisahkan.",
            rukunList: [
              { nomor: 1, nama: "Iman kepada Allah Swt.", makna: "Yakin bahwa Allah Maha Esa, tiada Tuhan selain Allah, Pencipta langit dan bumi." },
              { nomor: 2, nama: "Iman kepada Malaikat Allah", makna: "Yakin malaikat diciptakan dari cahaya (nur) dan selalu taat kepada Allah." },
              { nomor: 3, nama: "Iman kepada Kitab-Kitab Allah", makna: "Yakin Allah menurunkan kitab suci: Taurat, Zabur, Injil, dan Al-Qur'an." },
              { nomor: 4, nama: "Iman kepada Rasul-Rasul Allah", makna: "Yakin nabi dan rasul adalah manusia pilihan pembawa wahyu bagi manusia." },
              { nomor: 5, nama: "Iman kepada Hari Kiamat", makna: "Yakin bahwa dunia ini sementara dan akan ada hari pembalasan." },
              { nomor: 6, nama: "Iman kepada Qada dan Qadar", makna: "Yakin segala ketetapan dan takdir baik maupun buruk berasal dari Allah." }
            ]
          },
          {
            judul: "B. Mengenal Allah Pencipta Semesta",
            isi: "Allah Swt. menciptakan matahari untuk menyinari bumi di siang hari, bulan dan bintang menghiasi malam, pohon-pohon yang rindang, serta udara sejuk yang kita hirup. Semua ciptaan itu membuktikan bahwa Allah Maha Kuasa.",
            dalil: {
              arab: "إِنَّ رَبَّكُمُ اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ",
              latin: "Inna Rabbakumullāhullażī khalaqas-samāwāti wal-arḍ",
              arti: "Sungguh Tuhan kalian adalah Allah yang menciptakan langit dan bumi. (Q.S. Al-A'raf: 54)"
            }
          }
        ],
        rangkuman: [
          "Iman artinya percaya dalam hati, diucapkan dengan lisan, diamalkan dengan perbuatan.",
          "Rukun iman ada 6: Iman kepada Allah, Malaikat, Kitab, Rasul, Hari Kiamat, serta Qada dan Qadar.",
          "Bukti adanya Allah adalah alam semesta dan seisinya."
        ]
      },
      // Game Interaktif Spesifik Bab 2
      game: {
        id: "game-k1-bab2",
        tipe: "rukun-sorter",
        nama: "Menyusun Bintang 6 Rukun Iman",
        petunjuk: "Ayo susun 6 Rukun Iman secara berurutan dari bintang nomor 1 sampai 6!",
        itemsUrut: [
          { urutan: 1, teks: "1. Iman kepada Allah Swt." },
          { urutan: 2, teks: "2. Iman kepada Malaikat Allah" },
          { urutan: 3, teks: "3. Iman kepada Kitab-Kitab Allah" },
          { urutan: 4, teks: "4. Iman kepada Rasul-Rasul Allah" },
          { urutan: 5, teks: "5. Iman kepada Hari Kiamat" },
          { urutan: 6, teks: "6. Iman kepada Qada dan Qadar" }
        ],
        pertanyaanTambahan: [
          {
            tanya: "Ada berapa jumlah Rukun Iman yang wajib kita yakini?",
            jawaban: ["6 Rukun", "5 Rukun", "4 Rukun"],
            kunci: 0
          },
          {
            tanya: "Siapakah yang menciptakan langit, bumi, dan matahari?",
            jawaban: ["Allah Swt.", "Manusia", "Malaikat"],
            kunci: 0
          }
        ]
      }
    },

    {
      id: "k1-sem1-bab3",
      bab: 3,
      elemen: "Akhlak",
      judul: "Aku Suka Membaca Basmalah dan Hamdalah",
      judulCPBaru: "Akhlak terhadap Allah dengan Menyucikan-Nya (Tasbih)",
      icon: "Sparkles",
      temaWarna: "cyan",
      cpLama: {
        fokus: "Membaca Basmalah & Hamdalah, Bersikap Santun",
        kompetensi: "Membiasakan membaca basmalah dan hamdalah dalam kegiatan"
      },
      cpBaru: {
        fokus: "Akhlak terhadap Allah Swt. dengan Menyucikan-Nya (Kalimat Tasbih Subhanallah)",
        kompetensi: "Menerapkan pembiasaan menyucikan Allah Swt. dari sifat kekurangan"
      },
      tujuan: [
        "Membiasakan mengucap Basmalah sebelum memulai kegiatan",
        "Membiasakan mengucap Hamdalah setelah selesai berkegiatan",
        "Mengenal kalimat Tasbih (Subhanallah) untuk menyucikan Allah",
        "Menunjukkan sikap santun dan bersyukur kepada sesama"
      ],
      materi: {
        pengantar: "Setiap perbuatan baik yang diawali dengan mengingat Allah akan bernilai berkah. Kalimat Thayyibah seperti Basmalah, Hamdalah, dan Tasbih adalah dzikir ringan yang sangat disukai Allah.",
        subBab: [
          {
            judul: "A. Membaca Basmalah Sebelum Beraktivitas",
            isi: "Sebelum makan, minum, belajar, dan berangkat sekolah, bacalah Basmalah:",
            lafal: {
              arab: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
              latin: "Bismillāhir-raḥmānir-raḥīm",
              arti: "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang."
            }
          },
          {
            judul: "B. Membaca Hamdalah Tanda Syukur",
            isi: "Setelah selesai makan, belajar, atau mendapat nikmat, kita mengucap Hamdalah:",
            lafal: {
              arab: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
              latin: "Al-ḥamdu lillāhi rabbil-'ālamīn",
              arti: "Segala puji bagi Allah, Tuhan seluruh alam."
            }
          },
          {
            judul: "C. Menyucikan Allah dengan Kalimat Tasbih (CP Baru)",
            isi: "Menyucikan Allah artinya meyakini Allah bebas dari segala kelemahan dan cela. Allah Maha Sempurna. Ketika kita kagum melihat keindahan alam ciptaan Allah atau melihat kebesaran-Nya, kita mengucap:",
            lafal: {
              arab: "سُبْحَانَ اللَّهِ",
              latin: "Subḥānallāh",
              arti: "Maha Suci Allah."
            }
          }
        ],
        rangkuman: [
          "Mulai kegiatan baik dengan membaca Basmalah.",
          "Selesai berkegiatan kita ucapkan Hamdalah.",
          "Ucapkan Subhanallah (Tasbih) untuk menyucikan Allah dari segala kekurangan."
        ]
      },
      game: {
        id: "game-k1-bab3",
        tipe: "kalimat-thayyibah-match",
        nama: "Detektif Kalimat Thayyibah",
        petunjuk: "Pasangkan situasi kejadian dengan kalimat thayyibah yang paling tepat diucapkan!",
        situasi: [
          {
            kejadian: "Sebelum mulai makan sarapan pagi bersama keluarga...",
            jawabanBenar: "Bismillāhir-raḥmānir-raḥīm",
            opsi: ["Bismillāhir-raḥmānir-raḥīm", "Subḥānallāh", "Astaghfirullāh"]
          },
          {
            kejadian: "Melihat indahnya pemandangan pelangi yang cantik di langit...",
            jawabanBenar: "Subḥānallāh (Maha Suci Allah)",
            opsi: ["Subḥānallāh (Maha Suci Allah)", "Bismillah", "Allahu Akbar"]
          },
          {
            kejadian: "Selesai menyelesaikan PR sekolah dengan baik...",
            jawabanBenar: "Al-ḥamdu lillāhi rabbil-'ālamīn",
            opsi: ["Al-ḥamdu lillāhi rabbil-'ālamīn", "Subhanallah", "Bismillah"]
          }
        ]
      }
    },

    {
      id: "k1-sem1-bab4",
      bab: 4,
      elemen: "Fikih",
      judul: "Mengenal Rukun Islam & Syahadatain",
      judulCPBaru: "Rukun Islam dan Dua Kalimat Syahadat",
      icon: "CheckCircle",
      temaWarna: "indigo",
      cpLama: {
        fokus: "Rukun Islam & Dua Kalimat Syahadat",
        kompetensi: "Memahami 5 rukun Islam dan melafalkan syahadat"
      },
      cpBaru: {
        fokus: "Rukun Islam dan Syahadatain",
        kompetensi: "Menerapkan nilai rukun Islam dan mengucapkan syahadatain dengan tartil"
      },
      tujuan: [
        "Menyebutkan 5 rukun Islam secara urut",
        "Melafalkan Dua Kalimat Syahadat (Syahadat Tauhid dan Syahadat Rasul)",
        "Mengartikan Dua Kalimat Syahadat",
        "Bangga menjadi anak muslim yang rajin beribadah"
      ],
      materi: {
        pengantar: "Islam bagaikan sebuah bangunan megah yang ditopang oleh lima pilar kokoh. Lima pilar tersebut dinamakan Rukun Islam.",
        subBab: [
          {
            judul: "A. Lima Rukun Islam",
            rukunList: [
              { nomor: 1, nama: "Mengucapkan Dua Kalimat Syahadat", ket: "Pintu gerbang memeluk agama Islam." },
              { nomor: 2, nama: "Mendirikan Salat 5 Waktu", ket: "Subuh, Zuhur, Asar, Magrib, dan Isya." },
              { nomor: 3, nama: "Membayar Zakat", ket: "Membersihkan harta dan menolong fakir miskin." },
              { nomor: 4, nama: "Berpuasa di Bulan Ramadan", ket: "Menahan lapar, haus, dan perbuatan buruk dari fajar hingga magrib." },
              { nomor: 5, nama: "Melaksanakan Ibadah Haji ke Baitullah", ket: "Bagi yang mampu secara fisik dan biaya." }
            ]
          },
          {
            judul: "B. Dua Kalimat Syahadat (Syahadatain)",
            isi: "Syahadat artinya persaksian. Syahadatain terdiri dari dua persaksian penting:",
            syahadatTauhid: {
              nama: "1. Syahadat Tauhid (Persaksian kepada Allah)",
              arab: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ",
              latin: "Asyhadu allā ilāha illallāh",
              arti: "Aku bersaksi bahwa tidak ada tuhan selain Allah."
            },
            syahadatRasul: {
              nama: "2. Syahadat Rasul (Persaksian kepada Rasul)",
              arab: "وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ",
              latin: "Wa asyhadu anna Muḥammadar rasūlullāh",
              arti: "Dan aku bersaksi bahwa Nabi Muhammad adalah utusan Allah."
            }
          }
        ],
        rangkuman: [
          "Rukun Islam ada 5: Syahadat, Salat, Zakat, Puasa, Haji bila mampu.",
          "Dua Kalimat Syahadat dinamakan Syahadatain.",
          "Syahadat Tauhid menegaskan keesaan Allah, Syahadat Rasul mengakui Nabi Muhammad saw. adalah utusan-Nya."
        ]
      },
      game: {
        id: "game-k1-bab4",
        tipe: "rukun-islam-pilar",
        nama: "Membangun 5 Menara Rukun Islam",
        petunjuk: "Bantu pasang 5 pilar rukun Islam secara berurutan agar masjid berdiri kokoh!",
        pilars: [
          { urut: 1, nama: "Syahadat", deskripsi: "Pondasi utama bersaksi tiada tuhan selain Allah" },
          { urut: 2, nama: "Salat", deskripsi: "Ibadah 5 waktu tiang agama" },
          { urut: 3, nama: "Zakat", deskripsi: "Berbagi rezeki untuk yang membutuhkan" },
          { urut: 4, nama: "Puasa", deskripsi: "Berpuasa menahan haus lapar di bulan Ramadan" },
          { urut: 5, nama: "Haji", deskripsi: "Ibadah ke tanah suci Makkah bagi yang mampu" }
        ]
      }
    },

    {
      id: "k1-sem1-bab5",
      bab: 5,
      elemen: "Sejarah Peradaban Islam",
      judul: "Kisah Keteladanan Nabi Adam a.s.",
      judulCPBaru: "Kisah Keteladanan Nabi Adam a.s.",
      icon: "Compass",
      temaWarna: "rose",
      cpLama: {
        fokus: "Nabi dan Rasul Panutanku & Kisah Nabi Adam a.s.",
        kompetensi: "Memahami kisah 25 nabi dan keteladanan Nabi Adam"
      },
      cpBaru: {
        fokus: "Kisah Keteladanan Nabi Adam a.s.",
        kompetensi: "Menceritakan kembali kisah dan meneladani sikap taubat dan rendah hati Nabi Adam a.s."
      },
      tujuan: [
        "Mengenal Nabi Adam a.s. sebagai manusia pertama dan nabi pertama",
        "Mengetahui bahwa Nabi Adam a.s. diciptakan dari tanah",
        "Memahami keteladanan Nabi Adam a.s. saat mengakui kesalahan dan segera bertaubat",
        "Membiasakan meminta maaf jika melakukan kekeliruan"
      ],
      materi: {
        pengantar: "Nabi Adam a.s. adalah manusia pertama yang diciptakan oleh Allah Swt. sekaligus nabi pertama dari 25 nabi yang wajib kita ketahui. Istrinya bernama Siti Hawa.",
        subBab: [
          {
            judul: "A. Penciptaan Nabi Adam a.s.",
            isi: "Allah Swt. menciptakan Nabi Adam a.s. dari tanah liat, lalu meniupkan ruh ke dalamnya. Allah mengajarkan nama-nama benda kepada Nabi Adam a.s. Para malaikat diperintahkan bersujud (hormat) kepada Nabi Adam, namun Iblis sombong dan menolak perintah Allah."
          },
          {
            judul: "B. Tinggal di Surga dan Ujian Pohon Khuldi",
            isi: "Nabi Adam a.s. dan Siti Hawa tinggal di dalam surga yang penuh kenikmatan. Allah memperbolehkan mereka memakan buah apa saja, kecuali satu pohon yang dilarang. Iblis memperdaya mereka hingga keduanya memakan buah terlarang tersebut."
          },
          {
            judul: "C. Taubat dan Doa Nabi Adam a.s.",
            isi: "Nabi Adam a.s. dan Hawa sangat menyesali perbuatannya. Mereka tidak mencari-cari alasan, melainkan langsung memohon ampun kepada Allah Swt. dengan penuh ketulusan.",
            doaTaubat: {
              arab: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
              latin: "Rabbanā ẓalamnā anfusanā wa illam tagfir lanā wa tarḥamnā lanakūnanna minal-khāsirīn",
              arti: "Ya Tuhan kami, kami telah menzalimi diri kami sendiri. Jika Engkau tidak mengampuni kami dan memberi rahmat kepada kami, niscaya kami termasuk orang-orang yang rugi. (Q.S. Al-A'raf: 23)"
            }
          },
          {
            judul: "D. Nilai Keteladanan",
            isi: "Jika kita berbuat salah kepada teman atau orang tua, jangan malu untuk segera meminta maaf dan berjanji tidak mengulanginya lagi, seperti keteladanan Nabi Adam a.s."
          }
        ],
        rangkuman: [
          "Nabi Adam a.s. adalah manusia dan nabi pertama.",
          "Iblis dikeluarkan dari surga karena bersikap sombong dan membangkang.",
          "Nabi Adam a.s. segera bertaubat saat khilaf dan Allah mengampuninya.",
          "Teladan utama: Rendah hati, mengakui kesalahan, dan gemar meminta maaf."
        ]
      },
      game: {
        id: "game-k1-bab5",
        tipe: "story-maze",
        nama: "Petualangan Kebaikan Nabi Adam a.s.",
        petunjuk: "Pilih tindakan yang terpuji saat kita menyadari telah melakukan kesalahan!",
        questions: [
          {
            tanya: "Nabi Adam a.s. diciptakan Allah Swt. dari...",
            opsi: ["Tanah", "Cahaya", "Api"],
            benar: 0,
            alasan: "Nabi Adam diciptakan dari tanah, malaikat dari cahaya, dan jin/iblis dari api."
          },
          {
            tanya: "Mengapa Iblis menolak bersujud hormat kepada Nabi Adam a.s.?",
            opsi: ["Karena sombong merasa dirinya lebih baik", "Karena mengantuk", "Karena lupa"],
            benar: 0,
            alasan: "Iblis sombong merasa dirinya terbuat dari api yang dianggapnya lebih mulia dari tanah."
          },
          {
            tanya: "Ketika kita tidak sengaja menumpahkan air minum milik teman, sikap kita adalah...",
            opsi: ["Segera minta maaf dan membantu mengeringkannya", "Menyalahkan orang lain", "Pura-pura tidak tahu"],
            benar: 0,
            alasan: "Anak saleh meneladani Nabi Adam a.s. yang berani mengakui kesalahan dan berbuat baik."
          }
        ]
      }
    }
  ],

  // ================= SEMESTER 2 =================
  semester2: [
    {
      id: "k1-sem2-bab6",
      bab: 6,
      elemen: "Al-Qur'an dan Hadis",
      judul: "Huruf Hijaiah Bersambung & Surah Al-Fatihah",
      judulCPBaru: "Huruf Hijaiah Bersambung (2 Huruf) & Surah al-Fātiḥah",
      icon: "FileText",
      temaWarna: "emerald",
      cpLama: {
        fokus: "Mengenal Harakat, Membaca Huruf Hijaiah, Surah Al-Ikhlas",
        kompetensi: "Membaca Surah Al-Ikhlas dan pesan pokoknya"
      },
      cpBaru: {
        fokus: "Huruh Hijaiah Bersambung (2 Huruf) & Surah al-Fātiḥah",
        kompetensi: "Menyambung 2 huruf hijaiah dan melafalkan Surah Al-Fatihah dengan benar"
      },
      tujuan: [
        "Mengenal perubahan bentuk huruf hijaiah saat disambung (di awal, tengah, dan akhir)",
        "Membaca sambungan 2 huruf hijaiah dengan lancar",
        "Membaca Surah Al-Fatihah ayat 1 sampai 7 secara tartil",
        "Memahami bahwa Surah Al-Fatihah adalah Ummul Qur'an yang wajib dibaca saat salat"
      ],
      materi: {
        pengantar: "Huruf hijaiah dapat dirangkai membentuk kata. Pada semester 2 ini, anak-anak belajar menyambung 2 huruf dan menghafal surah pembuka Al-Qur'an yaitu Surah Al-Fatihah.",
        subBab: [
          {
            judul: "A. Menyambung 2 Huruf Hijaiah",
            isi: "Ada huruf yang bisa menyambung dan disambung, seperti: ب (Ba), ت (Ta), ث (Tsa), ن (Nun), ي (Ya). Namun ada juga 6 huruf yang TIDAK BISA menyambung ke huruf setelahnya: ا (Alif), د (Dal), ذ (Dzal), ر (Ra), ز (Zai), و (Wau).",
            contohSambung: [
              { terpisah: "بَ - تKey", gabung: "بَتَ", dibaca: "Bata" },
              { terpisah: "كKey - تَ", gabung: "كَتَ", dibaca: "Kata" },
              { terpisah: "نَ - مَ", gabung: "نَمَ", dibaca: "Nama" }
            ]
          },
          {
            judul: "B. Surah Al-Fatihah (Pembukaan)",
            isi: "Surah Al-Fatihah terdiri dari 7 ayat dan diturunkan di kota Makkah (Makkiyah):",
            ayatList: [
              { no: 1, arab: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", latin: "Bismillāhir-raḥmānir-raḥīm", arti: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang." },
              { no: 2, arab: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", latin: "Al-ḥamdu lillāhi rabbil-'ālamīn", arti: "Segala puji bagi Allah, Tuhan seluruh alam." },
              { no: 3, arab: "الرَّحْمَٰنِ الرَّحِيمِ", latin: "Ar-raḥmānir-raḥīm", arti: "Yang Maha Pengasih, Maha Penyayang." },
              { no: 4, arab: "مَالِكِ يَوْمِ الدِّينِ", latin: "Māliki yaumid-dīn", arti: "Pemilik hari pembalasan." },
              { no: 5, arab: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", latin: "Iyyāka na'budu wa iyyāka nasta'īn", arti: "Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan." },
              { no: 6, arab: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", latin: "Ihdinaṣ-ṣirāṭal-mustaqīm", arti: "Tunjukilah kami jalan yang lurus." },
              { no: 7, arab: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", latin: "Ṣirāṭallażīna an'amta 'alaihim gairil-magḍūbi 'alaihim walāḍ-ḍāllīn", arti: "(yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat." }
            ]
          }
        ],
        rangkuman: [
          "Surah Al-Fatihah artinya Pembukaan dan wajib dibaca setiap rakaat salat.",
          "Menyambung huruf hijaiah mengubah sedikit bentuk kepala huruf.",
          "Hanya kepada Allah kita beribadah dan memohon pertolongan."
        ]
      },
      game: {
        id: "game-k1-bab6",
        tipe: "connect-letters",
        nama: "Menyusun Kereta Surah Al-Fatihah",
        petunjuk: "Susun ayat 1 sampai 4 Surah Al-Fatihah dengan mengklik gerbong kereta yang tepat!",
        gerbong: [
          { urutan: 1, teks: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ (Ayat 1)" },
          { urutan: 2, teks: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (Ayat 2)" },
          { urutan: 3, teks: "الرَّحْمَٰنِ الرَّحِيمِ (Ayat 3)" },
          { urutan: 4, teks: "مَالِكِ يَوْمِ الدِّينِ (Ayat 4)" }
        ]
      }
    },

    {
      id: "k1-sem2-bab7",
      bab: 7,
      elemen: "Akidah",
      judul: "Iman kepada Allah Swt. & Asmaulhusna",
      judulCPBaru: "Iman kepada Allah Swt. Melalui Ciptaan-Nya",
      icon: "Sun",
      temaWarna: "amber",
      cpLama: {
        fokus: "Kasih Sayang terhadap Sesama, Asmaulhusna Ar-Rahman & Ar-Rahim",
        kompetensi: "Mengenal Asmaulhusna Ar-Rahman dan Ar-Rahim"
      },
      cpBaru: {
        fokus: "Iman kepada Allah Swt.",
        kompetensi: "Meyakini Allah Swt. melalui pengamatan ciptaan-Nya dan meneladani sifat kasih sayang"
      },
      tujuan: [
        "Meyakini keberadaan Allah Swt. meski mata tidak dapat melihat-Nya secara langsung",
        "Mengenal Asmaulhusna Ar-Rahman (Maha Pengasih) dan Ar-Rahim (Maha Penyayang)",
        "Menyayangi sesama teman, orang tua, dan hewan peliharaan",
        "Bersyukur atas nikmat panca indra yang diberikan Allah"
      ],
      materi: {
        pengantar: "Allah Swt. tidak dapat dilihat dengan mata kepala kita, tetapi tanda-tanda kebesaran-Nya ada di mana-mana: pada diri kita, hewan, pepohonan, dan pergantian siang serta malam.",
        subBab: [
          {
            judul: "A. Allah Maha Pengasih (Ar-Rahmān)",
            isi: "Ar-Rahman artinya Allah Maha Pengasih kepada seluruh makhluk di dunia. Allah memberi udara, air, dan makanan tidak hanya untuk manusia, tetapi juga untuk burung yang terbang dan semut di tanah.",
            asmaulHusna: { arab: "الرَّحْمَٰنُ", nama: "Ar-Rahmān", arti: "Maha Pengasih" }
          },
          {
            judul: "B. Allah Maha Penyayang (Ar-Rahīm)",
            isi: "Ar-Rahim artinya Allah Maha Penyayang, terutama memberikan kasih sayang istimewa dan pahala surga bagi orang-orang yang beriman dan rajin beribadah.",
            asmaulHusna: { arab: "الرَّحِيمُ", nama: "Ar-Rahīm", arti: "Maha Penyayang" }
          },
          {
            judul: "C. Meneladani Kasih Sayang Allah",
            isi: "Kita meneladani Ar-Rahman dan Ar-Rahim dengan bersikap lemah lembut, menyayangi adik dan kakak, membantu ibu di rumah, dan tidak menyiksa hewan."
          }
        ],
        rangkuman: [
          "Ar-Rahman: Kasih Allah meliputi semua makhluk di dunia.",
          "Ar-Rahim: Kasih sayang Allah abadi untuk orang beriman di akhirat.",
          "Anak saleh selalu menebarkan kasih sayang dan tolong-menolong."
        ]
      },
      game: {
        id: "game-k1-bab7",
        tipe: "memory-card",
        nama: "Kartu Memori Kasih Sayang Asmaul Husna",
        petunjuk: "Buka dan temukan pasangan kartu nama Asmaul Husna dengan arti indahnya!",
        cards: [
          { id: 1, pairId: "rahman", label: "الرَّحْمَٰنُ (Ar-Rahman)" },
          { id: 2, pairId: "rahman", label: "Maha Pengasih" },
          { id: 3, pairId: "rahim", label: "الرَّحِيمُ (Ar-Rahim)" },
          { id: 4, pairId: "rahim", label: "Maha Penyayang" },
          { id: 5, pairId: "khalik", label: "الْخَالِقُ (Al-Khaliq)" },
          { id: 6, pairId: "khalik", label: "Maha Pencipta" }
        ]
      }
    },

    {
      id: "k1-sem2-bab8",
      bab: 8,
      elemen: "Akhlak",
      judul: "Akhlak terhadap Allah dengan Memuji-Nya",
      judulCPBaru: "Akhlak terhadap Allah Swt. dengan Memuji-Nya (Tahmid)",
      icon: "Smile",
      temaWarna: "teal",
      cpLama: {
        fokus: "Aku Suka Berterima Kasih dan Disiplin",
        kompetensi: "Membiasakan berterima kasih dan berperilaku disiplin"
      },
      cpBaru: {
        fokus: "Akhlak terhadap Allah Swt. dengan Memuji-Nya (Tahmid / Alhamdulillah)",
        kompetensi: "Menerapkan pujian dan rasa syukur kepada Allah Swt. serta terima kasih kepada sesama"
      },
      tujuan: [
        "Membiasakan melafalkan kalimat Tahmid (Alhamdulillah)",
        "Memahami bahwa segala pujian dan kebaikan hanya milik Allah",
        "Membiasakan berterima kasih kepada orang tua, guru, dan teman",
        "Menunjukkan sikap disiplin waktu dalam belajar dan beribadah"
      ],
      materi: {
        pengantar: "Ketika kita mendapat nilai bagus, sembuh dari sakit, atau mendapat pertolongan, jangan lupa mengucap Alhamdulillah sebagai bentuk pujian kepada Allah Swt.",
        subBab: [
          {
            judul: "A. Memuji Allah dengan Kalimat Tahmid",
            isi: "Kalimat Tahmid berbunyi 'Alhamdulillāh' (Segala puji bagi Allah). Memuji Allah berarti mengakui bahwa segala kebaikan yang kita rasakan bersumber dari karunia-Nya.",
            lafal: {
              arab: "الْحَمْدُ لِلَّهِ",
              latin: "Al-ḥamdu lillāh",
              arti: "Segala puji bagi Allah."
            }
          },
          {
            judul: "B. Berterima Kasih kepada Sesama Manusia",
            isi: "Rasulullah saw. bersabda bahwa barangsiapa yang tidak berterima kasih kepada manusia, maka dia belum bersyukur kepada Allah. Ucapkan 'Jazākallāhu khairan' atau 'Terima kasih' saat dibantu teman atau diberi hadiah."
          }
        ],
        rangkuman: [
          "Kalimat tahmid adalah 'Alhamdulillah'.",
          "Orang yang pandai bersyukur nikmatnya akan ditambah oleh Allah Swt.",
          "Selalu ucapkan terima kasih kepada siapa pun yang telah membantu kita."
        ]
      },
      game: {
        id: "game-k1-bab8",
        tipe: "thank-you-sorter",
        nama: "Pohon Syukur & Terima Kasih",
        petunjuk: "Petik buah kebaikan dengan memilih ucapan yang tepat untuk setiap momen syukur!",
        items: [
          {
            momen: "Ketika kamu bersin, sunnah membaca...",
            pilihan: ["Alhamdulillah", "Astaghfirullah", "Bismillah"],
            benar: "Alhamdulillah"
          },
          {
            momen: "Teman yang mendengar orang bersin mengucapkan...",
            pilihan: ["Yarhamukallah", "Alhamdulillah", "Subhanallah"],
            benar: "Yarhamukallah"
          },
          {
            momen: "Mendapat hadiah buku cerita dari Ayah, kita mengucap...",
            pilihan: ["Terima kasih Ayah, Alhamdulillah", "Biasa saja", "Minta uang saja"],
            benar: "Terima kasih Ayah, Alhamdulillah"
          }
        ]
      }
    },

    {
      id: "k1-sem2-bab9",
      bab: 9,
      elemen: "Fikih",
      judul: "Tata Cara Bersuci: Wudu, Tayamum & Istinja",
      judulCPBaru: "Tata Cara Bersuci (Wudu, Tayamum, dan Istinja)",
      icon: "Droplets",
      temaWarna: "blue",
      cpLama: {
        fokus: "Membiasakan Hidup Bersih & Berwudu",
        kompetensi: "Mempraktikkan cara bersuci dan berwudu"
      },
      cpBaru: {
        fokus: "Tata Cara Bersuci (Wudu, Tayamum, dan Istinja)",
        kompetensi: "Menerapkan tata cara bersuci (Wudu, Tayamum, dan Istinja) secara benar dan mandiri"
      },
      tujuan: [
        "Mengetahui arti bersuci (thaharah) dari hadas dan najis",
        "Mengetahui adab buang air dan tata cara istinja (membersihkan diri setelah buang air)",
        "Mempraktikkan rukun dan urutan wudu secara berurutan dan tertib",
        "Mengetahui tata cara tayamum menggunakan debu yang suci jika tidak ada air"
      ],
      materi: {
        pengantar: "Agama Islam sangat mencintai kebersihan. Bersuci merupakan syarat sah salat. Salat tidak akan diterima jika badan atau pakaian kita dalam keadaan kotor/berhadas.",
        subBab: [
          {
            judul: "A. Mengenal Istinja",
            isi: "Istinja adalah membersihkan qubul (kemaluan depan) atau dubur (belakang) setelah buang air kecil atau buang air besar. Bersihkan dengan air bersih yang suci menggunakan tangan kiri. Jika tidak ada air, boleh menggunakan batu/tisu kering."
          },
          {
            judul: "B. Tata Cara Berwudu yang Benar",
            isi: "Wudu dilakukan dengan menggunakan air suci dan menyucikan:",
            langkahWudu: [
              { urut: 1, aksi: "Niat dalam hati dan membaca Basmalah sambil mencuci kedua telapak tangan hingga bersih." },
              { urut: 2, aksi: "Berkumur-kumur sebanyak 3 kali untuk membersihkan mulut." },
              { urut: 3, aksi: "Membersihkan lubang hidung (istinsyaq) sebanyak 3 kali." },
              { urut: 4, aksi: "Membasuh seluruh wajah dari batas tumbuhnya rambut kepala hingga dagu (Rukun Wudu)." },
              { urut: 5, aksi: "Membasuh kedua tangan sampai siku, mendahulukan tangan kanan lalu kiri (Rukun Wudu)." },
              { urut: 6, aksi: "Mengusap sebagian kepala atau rambut (Rukun Wudu)." },
              { urut: 7, aksi: "Mengusap kedua daun telinga luar dan dalam (Sunah)." },
              { urut: 8, aksi: "Mencuci kedua kaki sampai mata kaki (Rukun Wudu)." },
              { urut: 9, aksi: "Tertib (berurutan) dan membaca doa setelah wudu menghadap kiblat." }
            ]
          },
          {
            judul: "C. Tayamum",
            isi: "Tayamum adalah pengganti wudu jika tidak ada air atau sedang sakit keras tidak boleh terkena air. Tayamum menggunakan debu yang suci dan bersih dengan mengusap wajah dan kedua tangan hingga siku."
          }
        ],
        rangkuman: [
          "Kebersihan adalah sebagian dari iman (An-Naẓāfatu minal-īmān).",
          "Istinja adalah membersihkan diri setelah buang air.",
          "Rukun wudu ada 4 anggota: wajah, tangan sampai siku, sebagian kepala, dan kaki sampai mata kaki.",
          "Tayamum adalah keringanan pengganti wudu menggunakan debu suci."
        ]
      },
      game: {
        id: "game-k1-bab9",
        tipe: "wudhu-step-builder",
        nama: "Petualangan Wudu Ceria",
        petunjuk: "Urutkan gambar gerakan wudu dari awal hingga akhir dengan benar!",
        steps: [
          { step: 1, nama: "Mencuci telapak tangan & membaca Basmalah" },
          { step: 2, nama: "Berkumur-kumur" },
          { step: 3, nama: "Membasuh lubang hidung" },
          { step: 4, nama: "Membasuh seluruh wajah" },
          { step: 5, nama: "Membasuh tangan sampai siku" },
          { step: 6, nama: "Mengusap sebagian kepala" },
          { step: 7, nama: "Mengusap kedua telinga" },
          { step: 8, nama: "Membasuh kaki sampai mata kaki" },
          { step: 9, nama: "Tertib & berdoa setelah wudu" }
        ]
      }
    },

    {
      id: "k1-sem2-bab10",
      bab: 10,
      elemen: "Sejarah Peradaban Islam",
      judul: "Kisah Keteladanan Nabi Idris a.s.",
      judulCPBaru: "Kisah Keteladanan Nabi Idris a.s. yang Rajin Belajar",
      icon: "Award",
      temaWarna: "purple",
      cpLama: {
        fokus: "Kisah Keteladanan Nabi Ibrahim a.s.",
        kompetensi: "Menceritakan keteladanan Nabi Ibrahim a.s."
      },
      cpBaru: {
        fokus: "Kisah Keteladanan Nabi Idris a.s.",
        kompetensi: "Menceritakan keteladanan Nabi Idris a.s. dalam hal ketekunan belajar dan kepandaian"
      },
      tujuan: [
        "Mengenal Nabi Idris a.s. sebagai nabi kedua setelah Nabi Adam a.s.",
        "Mengetahui keistimewaan Nabi Idris a.s. yang pandai membaca, menulis, dan menjahit pakaian",
        "Meneladani semangat Nabi Idris a.s. yang tekun belajar dan gemar mencari ilmu",
        "Menjadi siswa yang bersemangat ke sekolah dan rajin berlatih menulis"
      ],
      materi: {
        pengantar: "Catatan Perubahan CP Baru: Pada CP 020/2026, materi sejarah semester 2 disesuaikan menjadi Kisah Keteladanan Nabi Idris a.s. Nabi Idris a.s. adalah sosok panutan yang sangat rajin belajar dan berinovasi.",
        subBab: [
          {
            judul: "A. Siapakah Nabi Idris a.s.?",
            isi: "Nabi Idris a.s. adalah keturunan keenam dari Nabi Adam a.s. Nama aslinya adalah Khanukh. Beliau digelari 'Idris' karena ketekunannya mempelajari lembaran wahyu Allah (Darasah artinya belajar/mengaji)."
          },
          {
            judul: "B. Manusia Pertama yang Menulis dan Menjahit",
            isi: "Allah menganugerahi Nabi Idris kecerdasan luar biasa. Beliau adalah manusia pertama yang menulis dengan pena, manusia pertama yang menjahit pakaian dari kain (sebelumnya manusia memakai kulit binatang), serta memahami ilmu perhitungan dan perbintangan."
          },
          {
            judul: "C. Rajin Belajar dan Berzikir",
            isi: "Setiap menusukkan jarum saat menjahit baju, Nabi Idris a.s. selalu membaca tasbih 'Subhanallah'. Beliau tidak pernah membuang waktu secara sia-sia."
          },
          {
            judul: "D. Nilai Keteladanan untuk Anak Saleh",
            isi: "Sebagai murid kelas 1 SD, kita harus mencontoh Nabi Idris a.s.: rajin belajar membaca, menulis rapi, suka membantu orang tua, dan selalu ingat kepada Allah di setiap pekerjaan."
          }
        ],
        rangkuman: [
          "Nabi Idris a.s. dinamai Idris karena tekun mengkaji ajaran Allah.",
          "Nabi Idris a.s. manusia pertama yang pandai menulis dengan pena dan menjahit pakaian.",
          "Setiap bekerja menjahit, Nabi Idris selalu berzikir kepada Allah.",
          "Teladan utama: Gemar membaca, tekun belajar, kreatif, dan suka berzikir."
        ]
      },
      game: {
        id: "game-k1-bab10",
        tipe: "knowledge-challenge",
        nama: "Kuis Pintar Nabi Idris a.s.",
        petunjuk: "Jawablah teka-teki kepintaran Nabi Idris a.s.!",
        questions: [
          {
            tanya: "Nabi Idris a.s. adalah manusia pertama yang pandai...",
            opsi: ["Menulis dengan pena dan menjahit baju", "Membuat mobil", "Membuat pesawat terbang"],
            benar: 0,
            alasan: "Nabi Idris a.s. diberi kepandaian oleh Allah untuk menulis dengan pena dan merajut/menjahit pakaian."
          },
          {
            tanya: "Apa yang selalu diucapkan Nabi Idris a.s. setiap kali menusukkan jarum jahit?",
            opsi: ["Subhanallah (Maha Suci Allah)", "Mengeluh capek", "Diam saja"],
            benar: 0,
            alasan: "Nabi Idris senantiasa bertasbih menyucikan Allah Swt. di setiap tusukan jarum jahitnya."
          },
          {
            tanya: "Bagaimana cara kita meneladani sifat Nabi Idris a.s. di sekolah?",
            opsi: ["Rajin belajar membaca, menulis, dan mendengarkan guru", "Malas mengerjakan PR", "Tidur di kelas"],
            benar: 0,
            alasan: "Meneladani Nabi Idris a.s. diwujudkan dengan tekun membaca, rajin menulis, dan bersemangat menuntut ilmu."
          }
        ]
      }
    }
  ]
};

