// Data Materi & Games PAI Kelas 6 SD (Fase C)
// Mencakup Kurikulum CP Lama (Buku Siswa Kemdikbud) dan CP Baru (Revisi CP 020/2026 Fase C)

export const kelas6Data = {
  kelas: 6,
  namaFase: "Fase C (Kelas 6 SD)",
  deskripsi: "Pembelajaran tingkat akhir jenjang SD: Tajwid Ghunnah, Tafkhim & Tarqiq, Surah Ad-Duha, Al-Kafirun, Al-A'la, dan Al-Insyirah, Asmaul Husna pengayom jiwa, Fikih Zakat-Infak-Sedekah dan Wakaf, Iman kepada Qada & Qadar, Akhlak peduli lingkungan, serta Khulafaur Rasyidin.",

  // ================= SEMESTER 1 =================
  semester1: [
    {
      id: "k6-sem1-bab1",
      bab: 1,
      elemen: "Al-Qur'an dan Hadis",
      judul: "Surah Ad-Duha, Al-Insyirah & Tajwid Ghunnah",
      judulCPBaru: "Tajwid Bacaan Ghunnah & Surah al-Insyirāḥ",
      icon: "BookOpen",
      temaWarna: "emerald",
      cpLama: {
        fokus: "Belajar Al-Qur'an dan Hadis: Q.S. Ad-Duha & Q.S. Al-Kafirun",
        kompetensi: "Membaca, menulis, dan memahami pesan pokok Surah Ad-Duha dan toleransi"
      },
      cpBaru: {
        fokus: "Huruf Bersambung (3 Kata atau Lebih), Tajwid Praktik Ghunnah & Surah al-Insyirāḥ",
        kompetensi: "Mempraktikkan bacaan Ghunnah musyaddadah dan memahami motivasi kelapangan dada dalam Surah Al-Insyirah"
      },
      tujuan: [
        "Membaca Surah Ad-Duha dan Surah Al-Insyirah dengan tartil dan mahraj tepat",
        "Menguasai hukum tajwid Ghunnah Musyaddadah (Nun Tasydid dan Mim Tasydid)",
        "Memahami pesan pokok Surah Al-Insyirah: Di balik setiap kesulitan pasti ada kemudahan",
        "Meneladani optimisme Rasulullah saw. dalam menghadapi rintangan hidup"
      ],
      materi: {
        pengantar: "Surah Ad-Duha dan Surah Al-Insyirah adalah dua surah penyejuk jiwa yang diturunkan saat Rasulullah sedang merasa sedih. Surah ini mengajarkan harapan, ketabahan, dan optimisme tinggi.",
        subBab: [
          {
            judul: "A. Hukum Tajwid Ghunnah Musyaddadah (CP Baru)",
            isi: "Ghunnah secara bahasa artinya dengung. Hukum Ghunnah Musyaddadah terjadi apabila ada huruf NUN bertasydid (نّ) atau MIM bertasydid (مّ):",
            aturanGhunnah: [
              {
                huruf: "Nun Bertasydid (نّ)",
                caraBaca: "Didengungkan di pangkal hidung (Khaisyum) selama 2 sampai 3 harakat.",
                contoh: "إِنَّ (Inna), النَّاسِ (An-Nāsi), عَمَّ يَتَسَاءَلُونَ ('Amma)"
              },
              {
                huruf: "Mim Bertasydid (مّ)",
                caraBaca: "Didengungkan dengan merapatkan bibir dan menahan suara dengung 2-3 harakat.",
                contoh: "ثُمَّ (Tsumma), فَلَمَّا (Falammā), مِّمَّا (Mimmā)"
              }
            ]
          },
          {
            judul: "B. Surah Al-Insyirāḥ (Kelapangan Dada)",
            isi: "Surah Al-Insyirāḥ terdiri dari 8 ayat. Diturunkan di Makkah (Makkiyah):",
            ayatInsyirah: [
              { no: 1, arab: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ", latin: "Alam nasyraḥ laka ṣadrak", arti: "Bukankah Kami telah melapangkan dadamu (Muhammad)?" },
              { no: 2, arab: "وَوَضَعْنَا عَنكَ وِزْرَكَ", latin: "Wa waḍa'nā 'anka wizrak", arti: "dan Kami pun telah menurunkan bebanmu darimu," },
              { no: 3, arab: "الَّذِي أَنقَضَ ظَهْرَكَ", latin: "Allażī anqaḍa ẓahrak", arti: "yang memberatkan punggungmu," },
              { no: 4, arab: "وَرَفَعْنَا لَكَ ذِكْرَكَ", latin: "Wa rafa'nā laka żikrak", arti: "dan Kami tinggikan sebutan (nama)mu bagimu." },
              { no: 5, arab: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", latin: "Fa inna ma'al-'usri yusrā", arti: "Maka sesungguhnya beserta kesulitan ada kemudahan," },
              { no: 6, arab: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", latin: "Inna ma'al-'usri yusrā", arti: "sesungguhnya beserta kesulitan itu ada kemudahan." },
              { no: 7, arab: "فَإِذَا فَرَغْتَ فَانصَبْ", latin: "Fa iżā faragta fanṣab", arti: "Maka apabila engkau telah selesai (dari suatu urusan), tetaplah bekerja keras (untuk urusan yang lain)," },
              { no: 8, arab: "وَإِلَىٰ رَبِّكَ فَارْغَب", latin: "Wa ilā Rabbika fargab", arti: "dan hanya kepada Tuhanmulah engkau berharap." }
            ]
          },
          {
            judul: "C. Surah Ad-Duha (Materi Buku)",
            isi: "Surah Ad-Duha menceritakan pemeliharaan Allah kepada Nabi saat yatim, memberi petunjuk, dan mencukupi kebutuhan. Kita dilarang sewenang-wenang kepada anak yatim dan tidak boleh menghardik orang yang meminta-minta."
          }
        ],
        rangkuman: [
          "Ghunnah Musyaddadah terjadi pada Nun bertasydid (نّ) dan Mim bertasydid (مّ) dibaca dengung 2 harakat.",
          "Surah Al-Insyirah menjamin: setiap satu kesulitan diiringi dua kemudahan.",
          "Setelah selesai beribadah/belajar, kita tidak boleh bermalas-malasan melainkan beralih ke amal baik lainnya."
        ]
      },
      game: {
        id: "game-k6-bab1",
        tipe: "ghunnah-hunter",
        nama: "Pemburu Dengung Ghunnah",
        petunjuk: "Temukan kata-kata di bawah ini yang WAJIB dibaca dengung Ghunnah Musyaddadah!",
        kataList: [
          { kata: "إِنَّ الْإِنسَانَ (Inna)", isGhunnah: true, tanda: "نّ (Nun Bertasydid)" },
          { kata: "قُلْ هُوَ اللَّهُ (Qul huwa)", isGhunnah: false, tanda: "Bukan nun/mim tasydid" },
          { kata: "ثُمَّ كَلَّا سَوْفَ (Tsumma)", isGhunnah: true, tanda: "مّ (Mim Bertasydid)" },
          { kata: "الْحَمْدُ لِلَّهِ (Alhamdu)", isGhunnah: false, tanda: "Mim sukun idzhar" },
          { kata: "مِنَ الْجِنَّةِ وَالنَّاسِ (Al-Jinnati wan-Nās)", isGhunnah: true, tanda: "نّ pada dua kata" }
        ]
      }
    },

    {
      id: "k6-sem1-bab2",
      bab: 2,
      elemen: "Akidah",
      judul: "Asmaulhusna: al-Waliy, al-Hamid, al-'Adl, ash-Shabur",
      judulCPBaru: "Asmaulhusna (al-Waliy, al-Ḥamīd, al-'Adl, aṣ-Ṣabūr)",
      icon: "ShieldCheck",
      temaWarna: "amber",
      cpLama: {
        fokus: "Allah Swt. Maha Segalanya: al-Gaffār, al-'Afuw, al-Wāḥid, dan aṣ-Ṣamad",
        kompetensi: "Memahami 4 Asmaulhusna tentang ampunan dan keesaan Allah"
      },
      cpBaru: {
        fokus: "al-Waliy, al-Ḥamīd, al-'Adl, aṣ-Ṣabūr",
        kompetensi: "Menjelaskan dan meyakini sifat perlindungan, pujian, keadilan, dan kesabaran Allah Swt."
      },
      tujuan: [
        "Mengetahui makna Asmaulhusna versi CP Baru: al-Waliy, al-Hamid, al-'Adl, ash-Shabur",
        "Mengetahui makna Asmaulhusna versi Buku: al-Gaffar, al-'Afuw, al-Wahid, ash-Samad",
        "Menjadikan Allah sebagai satu-satunya pelindung dan tempat bersandar",
        "Membiasakan sikap adil terhadap sesama dan sabar dalam menghadapi ujian"
      ],
      materi: {
        pengantar: "Mengenal sifat-sifat keagungan Allah menumbuhkan rasa aman, keadilan, dan ketabahan saat menghadapi masa-masa ujian sekolah dan kehidupan pra-remaja.",
        subBab: [
          {
            judul: "A. Asmaulhusna CP Baru (CP 020/2026)",
            isi: "Empat sifat mulia Allah yang patut kita teladani:",
            daftarBaru: [
              {
                nama: "Al-Waliy (الْوَلِيُّ)",
                arti: "Maha Melindungi / Maha Mengayomi",
                makna: "Allah adalah pelindung terbaik bagi hamba-hamba-Nya yang beriman. Barangsiapa mendekat kepada Allah, Allah akan melindunginya dari segala tipu daya setan."
              },
              {
                nama: "Al-Ḥamīd (الْحَمِيدُ)",
                arti: "Maha Terpuji",
                makna: "Allah Maha Terpuji dalam segala perbuatan, nama, dan ketetapan-Nya, baik makhluk memuji-Nya ataupun tidak. Teladan kita: Senantiasa memuji Allah dan menjaga diri agar berperilaku terpuji."
              },
              {
                nama: "Al-'Adl (الْعَدْلُ)",
                arti: "Maha Adil",
                makna: "Keadilan Allah sempurna dan tidak ada kezaliman sedikit pun. Allah menempatkan segala sesuatu tepat pada tempatnya. Teladan kita: Berlaku adil saat membagi tugas kelompok di kelas."
              },
              {
                nama: "Aṣ-Ṣabūr (الصَّبُورُ)",
                arti: "Maha Penyabar",
                makna: "Allah Maha Sabar, tidak terburu-buru menghukum orang yang berdosa sebelum tiba saatnya. Teladan kita: Sabar dalam belajar, sabar saat mengantre, dan sabar ketika ditimpa musibah."
              }
            ]
          },
          {
            judul: "B. Asmaulhusna Sumber Buku Siswa (CP Lama)",
            isi: "Empat Asmaulhusna pengampun dan maha penolong:",
            daftarLama: [
              { nama: "Al-Gaffār (الْغَفَّارُ)", arti: "Maha Pengampun (menutupi dan mengampuni dosa-dosa berulang)" },
              { nama: "Al-'Afuw (الْعَفُوُّ)", arti: "Maha Pemaaf (menghapuskan bekas-bekas dosa hamba-Nya)" },
              { nama: "Al-Wāḥid (الْوَاحِدُ)", arti: "Maha Tunggal / Esa (tiada sekutu bagi-Nya)" },
              { nama: "Aṣ-Ṣamad (الصَّمَدُ)", arti: "Maha Dibutuhkan (tempat bergantung seluruh makhluk)" }
            ]
          }
        ],
        rangkuman: [
          "Al-Waliy: Allah pelindung sejati orang beriman.",
          "Al-Hamid: Allah Maha Terpuji atas segala nikmat-Nya.",
          "Al-'Adl: Mendorong kita bersikap adil dan tidak memihak yang salah.",
          "Ash-Shabur: Menginspirasi kesabaran tiada batas dalam menuntut ilmu."
        ]
      },
      game: {
        id: "game-k6-bab2",
        tipe: "asmaul-pair-matcher",
        nama: "Galaksi Asmaul Husna Kelas 6",
        petunjuk: "Hubungkan nama Asmaul Husna dengan teladan sikap sehari-hari yang sesuai!",
        pairs: [
          { nama: "الْوَلِيُّ (Al-Waliy)", sikap: "Merasa tenang karena selalu berada dalam lindungan Allah Swt." },
          { nama: "الْحَمِيدُ (Al-Hamid)", sikap: "Menjaga sopan santun dan gemar memuji kebaikan sesama." },
          { nama: "الْعَدْلُ (Al-'Adl)", sikap: "Membagi tugas piket kelas secara jujur tanpa pilih kasih." },
          { nama: "الصَّبُورُ (Ash-Shabur)", sikap: "Tekun berlatih dan tidak mudah putus asa saat soal latihan terasa sulit." }
        ]
      }
    },

    {
      id: "k6-sem1-bab3",
      bab: 3,
      elemen: "Akhlak",
      judul: "Akhlak terhadap Tetangga & Kaum Non-Muslim",
      judulCPBaru: "Akhlak terhadap Tetangga dan Non Muslim",
      icon: "Home",
      temaWarna: "cyan",
      cpLama: {
        fokus: "Hidup Damai dengan Saling Memaafkan & Akhlak Non Muslim",
        kompetensi: "Menerapkan sikap pemaaf dan toleransi beragama"
      },
      cpBaru: {
        fokus: "Akhlak terhadap Tetangga dan Non Muslim",
        kompetensi: "Menerapkan hak-hak tetangga dan etika hidup bermasyarakat majemuk dengan santun"
      },
      tujuan: [
        "Mengetahui hak-hak tetangga dalam ajaran Islam",
        "Mengetahui batasan toleransi dalam bermasyarakat sesuai ajaran Surah Al-Kafirun",
        "Menjaga kerukunan lingkungan, tidak membuat kebisingan yang mengganggu",
        "Berbuat adil dan berbagi makanan kepada tetangga meski berbeda keyakinan"
      ],
      materi: {
        pengantar: "Tetangga adalah orang terdekat yang pertama kali akan menolong kita saat terjadi kesulitan di rumah. Menghormati tetangga merupakan salah satu bukti kesempurnaan iman seseorang.",
        subBab: [
          {
            judul: "A. Hak-Hak Tetangga dalam Islam",
            isi: "Malaikat Jibril senantiasa berpesan kepada Rasulullah agar berbuat baik kepada tetangga hingga Rasulullah sempat mengira tetangga akan mendapat hak warisan. Hak-hak tetangga:",
            hakTetangga: [
              "Menyapa dengan ramah dan tidak membuang sampah sembarangan di depan rumah tetangga",
              "Menjenguk saat tetangga sakit dan mengantarkan jenazahnya saat meninggal",
              "Membantu ketika mereka tertimpa kesusahan atau bencana",
              "Membagikan makanan lezat jika kita memasak lebih (Rasulullah berpesan: 'Perbanyaklah kuahnya dan bagikan ke tetangga')."
            ]
          },
          {
            judul: "B. Berakhlak Baik kepada Non-Muslim",
            isi: "Islam melarang keras menyakiti orang non-muslim yang hidup berdampingan secara damai (kafir dzimmi). Kita wajib tolong-menolong dalam urusan sosial kemanusiaan, tetapi TIDAK BOLEH ikut campur dalam peribadatan akidah agama mereka.",
            dalil: {
              arab: "لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
              latin: "Lakum dīnukum wa liya dīn",
              arti: "Untukmu agamamu, dan untukku agamaku. (Q.S. Al-Kafirun: 6)"
            }
          }
        ],
        rangkuman: [
          "Iman kepada Allah diukur dari bagaimana kita memuliakan tetangga.",
          "Berbagi hadiah dan makanan dapat merekatkan kerukunan tetangga.",
          "Toleransi beragama: Saling menghormati dalam urusan sosial, tetap teguh menjaga akidah masing-masing."
        ]
      },
      game: {
        id: "game-k6-bab3",
        tipe: "neighbor-dilemma",
        nama: "Simulasi Tetangga Idaman",
        petunjuk: "Selesaikan skenario kehidupan bertetangga dengan memilih sikap yang paling bijaksana!",
        scenarios: [
          {
            kasus: "Kamu sedang mendengarkan musik atau bermain game di kamar pada malam hari...",
            pilihanTepat: "Mengecilkan volume suara agar tetangga yang sedang istirahat tidak terganggu",
            pilihanSalah: "Memutar suara sekencang-kencangnya karena di dalam rumah sendiri",
            hikmah: "Menjaga ketenteraman dan ketenangan istirahat tetangga adalah kewajiban akhlak Islami."
          },
          {
            kasus: "Tetangga sebelah rumah yang berbeda agama sedang sakit demam...",
            pilihanTepat: "Menjenguk dan membawakan buah-buahan segar untuk mendoakan kesembuhannya",
            pilihanSalah: "Membiarkan saja karena berbeda agama",
            hikmah: "Kemanusiaan dan kepedulian sosial diajarkan Islam kepada siapa pun tanpa memandang suku/agama."
          }
        ]
      }
    },

    {
      id: "k6-sem1-bab4",
      bab: 4,
      elemen: "Fikih",
      judul: "Fikih Zakat, Infak, dan Sedekah (ZIS)",
      judulCPBaru: "Zakat, Infak, dan Sedekah Pembersih Harta",
      icon: "Coins",
      temaWarna: "indigo",
      cpLama: {
        fokus: "Hukum Halal dan Haram (Definisi, dasar hukum, penerapan)",
        kompetensi: "Menganalisis hukum halal dan haram dalam makanan & perbuatan"
      },
      cpBaru: {
        fokus: "Zakat, Infak dan Sedekah",
        kompetensi: "Menerapkan konsep ZIS, membedakan nisab zakat, serta 8 golongan penerima (Mustahiq)"
      },
      tujuan: [
        "Membedakan pengertian Zakat (wajib), Infak (sukarela berupa harta), dan Sedekah (segala bentuk kebaikan)",
        "Mengetahui 2 macam Zakat: Zakat Fitrah (jiwa) dan Zakat Mal (harta)",
        "Menghafal 8 golongan yang berhak menerima zakat (Mustahiq Zakat)",
        "Menumbuhkan jiwa dermawan dan kepedulian mengentaskan kemiskinan"
      ],
      materi: {
        pengantar: "Harta yang kita miliki sejatinya titipan Allah dan di dalamnya terdapat hak kaum dhuafa. Melalui Zakat, Infak, dan Sedekah (ZIS), harta menjadi berkah, bersih, dan bertumbuh.",
        subBab: [
          {
            judul: "A. Pengertian Zakat, Infak, dan Sedekah",
            perbandinganZIS: [
              {
                nama: "1. Zakat (Wajib)",
                ket: "Kadar harta tertentu yang wajib dikeluarkan oleh seorang muslim yang telah memenuhi syarat untuk diberikan kepada 8 golongan berhak. Terdiri dari Zakat Fitrah (2,5 kg / 3,5 liter beras di akhir Ramadan) dan Zakat Mal (emas, perak, perniagaan, hasil bumi)."
              },
              {
                nama: "2. Infak (Sunah)",
                ket: "Mengeluarkan sebagian harta kekayaan untuk kepentingan umum atau kemaslahatan umat tanpa ada batasan nisab dan waktu tertentu."
              },
              {
                nama: "3. Sedekah (Sangat Luas)",
                ket: "Segala bentuk pemberian kebaikan kepada orang lain, baik berupa harta, tenaga, ilmu, senyuman manis, maupun menyingkirkan duri di jalan."
              }
            ]
          },
          {
            judul: "B. Delapan Golongan Mustahiq Zakat (Q.S. At-Taubah: 60)",
            delapanAsnaf: [
              { no: 1, nama: "Fakir", ket: "Orang yang tidak punya harta dan pekerjaan, tidak mampu memenuhi kebutuhan pokok." },
              { no: 2, nama: "Miskin", ket: "Punya pekerjaan namun penghasilannya tidak mencukupi kebutuhan pokok sehari-hari." },
              { no: 3, nama: "Amil", ket: "Petugas yang ditunjuk resmi mengumpulkan dan membagikan zakat." },
              { no: 4, nama: "Mualaf", ket: "Orang yang baru memeluk agama Islam agar hatinya semakin kokoh." },
              { no: 5, nama: "Riqab", ket: "Hamba sahaya yang ingin memerdekakan dirinya." },
              { no: 6, nama: "Gharimin", ket: "Orang yang terlilit hutang demi mempertahankan hidup yang benar." },
              { no: 7, nama: "Fisabilillah", ket: "Pejuang yang berjuang di jalan Allah untuk dakwah dan pendidikan Islam." },
              { no: 8, nama: "Ibnu Sabil", ket: "Musafir yang kehabisan bekal dalam perjalanan ketaatan." }
            ]
          }
        ],
        rangkuman: [
          "Zakat hukumnya fardhu 'ain bagi yang mampu; Infak dan sedekah bernilai sunah.",
          "Zakat Fitrah membersihkan jiwa; Zakat Mal membersihkan dan mensucikan harta.",
          "Penerima zakat ada 8 asnaf yang tercantum dalam Surah At-Taubah ayat 60."
        ]
      },
      game: {
        id: "game-k6-bab4",
        tipe: "zis-distributor",
        nama: "Manajer Kotak Berkah ZIS",
        petunjuk: "Salurkan bantuan zakat tepat sasaran kepada golongan yang berhak (Mustahiq)!",
        penerimaList: [
          { nama: "Kakek Rasyid (Fakir tidak punya penghasilan)", bolehZakat: true, asnaf: "Fakir" },
          { nama: "Pak Harto (Orang kaya pedagang sukses)", bolehZakat: false, asnaf: "Muzakki (Wajib bayar zakat)" },
          { nama: "Ustaz Hamdan (Dai pengajar pedalaman)", bolehZakat: true, asnaf: "Fisabilillah" },
          { nama: "Santri Yatim penghafal Al-Qur'an", bolehZakat: true, asnaf: "Fisabilillah / Miskin" }
        ]
      }
    },

    {
      id: "k6-sem1-bab5",
      bab: 5,
      elemen: "Sejarah Peradaban Islam",
      judul: "Kisah Khulafaur Rasyidin: Abu Bakar & Umar bin Khattab",
      judulCPBaru: "Keteladanan Khalifah Abu Bakar dan Umar bin Khattab",
      icon: "Award",
      temaWarna: "rose",
      cpLama: {
        fokus: "Jasa Khulafaurrasyidin untuk Dunia: Abu Bakar al-Siddiq & Umar bin Khattab",
        kompetensi: "Menceritakan biografi dan perjuangan Abu Bakar dan Umar"
      },
      cpBaru: {
        fokus: "Kisah Keteladanan Abu Bakar aṣ-Ṣiddīq dan Umar bin Khaṭṭāb",
        kompetensi: "Menganalisis kepemimpinan demokratis, ketegasan membasmi kemungkaran, dan kesederhanaan"
      },
      tujuan: [
        "Mengenal arti Khulafaur Rasyidin (para pemimpin pengganti yang mendapat petunjuk)",
        "Mengetahui jasa Khalifah Abu Bakar: Memerangi nabi palsu dan mengumpulkan lembaran Al-Qur'an",
        "Mengetahui jasa Khalifah Umar bin Khattab: Menetapkan kalender Hijriah, mendirikan baitul mal, dan perluasan wilayah damai",
        "Meneladani sifat jujur asy-Syiddiq dan ketegasan al-Faruq (pembeda benar dan batil)"
      ],
      materi: {
        pengantar: "Setelah Rasulullah wafat, kepemimpinan umat Islam dilanjutkan oleh empat sahabat terbaik yang disebut Khulafaur Rasyidin. Dua khalifah pertama adalah Abu Bakar dan Umar.",
        subBab: [
          {
            judul: "A. Khalifah Abu Bakar aṣ-Ṣiddīq r.a. (11 - 13 H)",
            isi: "Gelar 'Aṣ-Ṣiddīq' diberikan karena beliau langsung membenarkan peristiwa Isra Mi'raj tanpa ragu sedikit pun. Beliau dikenal sangat lembut namun sangat tegas mempertahankan akidah.",
            jasaAbuBakar: [
              "Menumpas nabi-nabi palsu (seperti Musailamah al-Kazzab) dan menertibkan orang yang enggan membayar zakat.",
              "Mengumpulkan mushaf lembaran Al-Qur'an atas usulan Umar bin Khattab setelah banyak penghafal Al-Qur'an gugur di perang Yamamah.",
              "Menunjuk Zaid bin Tsabit sebagai ketua tim kodifikasi mushaf Al-Qur'an."
            ]
          },
          {
            judul: "B. Khalifah Umar bin Khaṭṭāb r.a. (13 - 23 H)",
            isi: "Diberi gelar 'Al-Fārūq' (sang pembeda antara yang hak dan batil). Beliau sosok pemimpin yang sangat merakyat, sering berkeliling malam hari memeriksa warganya yang kelaparan.",
            jasaUmar: [
              "Menetapkan sistem Kalender Hijriah dimulai dari tahun hijrahnya Rasulullah ke Madinah.",
              "Mendirikan Baitul Mal (kas negara untuk kesejahteraan fakir miskin dan janda).",
              "Mendirikan lembaga kehakiman, kepolisian, dan kantor pos pengantar surat."
            ]
          }
        ],
        rangkuman: [
          "Abu Bakar adalah khalifah pertama yang berjasa mengumpulkan lembaran mushaf Al-Qur'an.",
          "Umar bin Khattab memprakarsai penanggalan Hijriah dan administrasi negara modern.",
          "Kedua sahabat hidup sangat sederhana meski memimpin imperium yang amat luas."
        ]
      },
      game: {
        id: "game-k6-bab5",
        tipe: "caliph-history-match",
        nama: "Jejak Prestasi Abu Bakar & Umar",
        petunjuk: "Cocokkan jasa besar kepemimpinan dengan khalifah yang memeloporinya!",
        items: [
          { prestasi: "Memulai pengumpulan lembaran-lembaran Al-Qur'an pertama kali", khalifah: "Abu Bakar aṣ-Ṣiddīq" },
          { prestasi: "Menetapkan Tahun Baru Islam Kalender Hijriah", khalifah: "Umar bin Khaṭṭāb" },
          { prestasi: "Mendapat gelar Al-Fārūq (Pembeda Benar dan Salah)", khalifah: "Umar bin Khaṭṭāb" },
          { prestasi: "Mendapat gelar Aṣ-Ṣiddīq karena membenarkan Isra Mi'raj", khalifah: "Abu Bakar aṣ-Ṣiddīq" }
        ]
      }
    }
  ],

  // ================= SEMESTER 2 =================
  semester2: [
    {
      id: "k6-sem2-bab6",
      bab: 6,
      elemen: "Al-Qur'an dan Hadis",
      judul: "Tajwid Tafkhim & Tarqiq serta Hadis Menyayangi Teman",
      judulCPBaru: "Tajwid Tafkhim-Tarqiq & Hadis Berbuat Baik kepada Teman",
      icon: "BookOpen",
      temaWarna: "emerald",
      cpLama: {
        fokus: "Mengaji Al-Qur'an Surah Al-A'la & Q.S. Al-Hujurat: 13",
        kompetensi: "Membaca, menulis, dan memahami pesan pokok Surah Al-A'la"
      },
      cpBaru: {
        fokus: "Huruf Bersambung (3 Kata), Praktik Bacaan Tafkhim-Tarqiq & Hadis tentang Berbuat Baik terhadap Teman",
        kompetensi: "Menerapkan hukum bacaan tebal (tafkhim) dan tipis (tarqiq) pada Lam Jalalah dan Ra serta mengamalkan hadis teman"
      },
      tujuan: [
        "Memahami pengertian Tafkhim (tebal) dan Tarqiq (tipis) dalam tajwid",
        "Mempraktikkan cara membaca huruf Ra' tebal dan tipis serta Lam Jalalah (lafadz Allah)",
        "Menghafal dan mengartikan hadis tentang mencintai saudara/teman seperti mencintai diri sendiri",
        "Menampilkan akhlak terpuji dan tidak bersikap iri dengki terhadap teman"
      ],
      materi: {
        pengantar: "Tajwid Tafkhim (suara tebal menggelegar di langit-langit) dan Tarqiq (suara tipis mendatar) memberikan keindahan mahkota dalam membaca Al-Qur'an.",
        subBab: [
          {
            judul: "A. Hukum Lam Jalālah (Lafadz Allah: اللَّه / لِلَّه)",
            isi: "Lafadz Allah dibaca dengan dua cara:",
            lamRules: [
              {
                nama: "1. Lam Tafkhim (Tebal)",
                syarat: "Jika lafadz Allah didahului oleh harakat FATHAH atau DAMMAH.",
                contoh: "قَالَ اللَّهُ (Qālallāhu), عَبْدُ اللَّهِ ('Abdullāhi), شَهِدَ اللَّهُ (Syahidallāhu)"
              },
              {
                nama: "2. Lam Tarqiq (Tipis)",
                syarat: "Jika lafadz Allah didahului oleh harakat KASRAH.",
                contoh: "بِسْمِ اللَّهِ (Bismillāhi), قُلِ اللَّهُمَّ (Qulillāhumma)"
              }
            ]
          },
          {
            judul: "B. Hukum Huruf Ra' (ر)",
            raRules: [
              {
                nama: "1. Ra' Tafkhim (Tebal)",
                syarat: "Ra' berharakat fathah, dammah, atau ra' sukun yang didahului huruf fathah/dammah.",
                contoh: "رَبَّنَا (Rabbanā), رُسُلٌ (Rusulun), قُرْآنٌ (Qur'ānun)"
              },
              {
                nama: "2. Ra' Tarqiq (Tipis)",
                syarat: "Ra' berharakat kasrah, atau ra' sukun yang didahului huruf berharakat kasrah asli.",
                contoh: "رِجَالٌ (Rijālun), فِرْعَوْنَ (Fir'auna)"
              }
            ]
          },
          {
            judul: "C. Hadis Berbuat Baik terhadap Teman (CP Baru)",
            isi: "Rasulullah saw. bersabda mengenai bukti kesempurnaan iman:",
            hadisTeman: {
              arab: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّىٰ يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
              latin: "Lā yu'minu aḥadukum ḥattā yuḥibba li'akhīhi mā yuḥibbu linafsih",
              arti: "Tidak sempurna iman salah seorang di antara kalian sampai dia mencintai saudaranya sebagaimana dia mencintai dirinya sendiri. (H.R. Bukhari dan Muslim)"
            }
          }
        ],
        rangkuman: [
          "Tafkhim artinya tebal; Tarqiq artinya tipis.",
          "Lam Jalalah tebal jika didahului fathah/dammah; tipis jika didahului kasrah.",
          "Sempurnanya iman ditandai dengan mencintai teman sebagaimana mencintai diri sendiri."
        ]
      },
      game: {
        id: "game-k6-bab6",
        tipe: "tafkhim-tarqiq-sorter",
        nama: "Timbangan Bunyi Tebal vs Tipis",
        petunjuk: "Klasifikasikan potongan bacaan ke kolom 'Tafkhim (Tebal)' atau 'Tarqiq (Tipis)'!",
        items: [
          { lafal: "بِسْمِ اللَّهِ (Bismillāh)", tipe: "Tarqiq (Tipis)", alasan: "Lam Jalalah didahului huruf berharakat kasrah (mi)." },
          { lafal: "قُلْ هُوَ اللَّهُ (Huwallāh)", tipe: "Tafkhim (Tebal)", alasan: "Lam Jalalah didahului huruf berharakat fathah (wa)." },
          { lafal: "فِرْعَوْنَ (Fir'aun)", tipe: "Tarqiq (Tipis)", alasan: "Huruf Ra' sukun didahului huruf kasrah." },
          { lafal: "رَسُولُ اللَّهِ (Rasūlullāh)", tipe: "Tafkhim (Tebal)", alasan: "Didahului huruf dammah (lu) dan Ra berharakat fathah." }
        ]
      }
    },

    {
      id: "k6-sem2-bab7",
      bab: 7,
      elemen: "Akidah",
      judul: "Indahnya Ketetapan Allah: Iman kepada Qada dan Qadar",
      judulCPBaru: "Iman Kepada Qada dan Qadar (Ketetapan & Takdir)",
      icon: "Compass",
      temaWarna: "amber",
      cpLama: {
        fokus: "Indahnya Ketetapan Allah: Makna Qada dan Qadar serta Jenis Takdir",
        kompetensi: "Memahami makna qada dan kadar serta hikmahnya"
      },
      cpBaru: {
        fokus: "Iman Kepada Qada dan Qadar",
        kompetensi: "Menganalisis perbedaan takdir Mubram dan takdir Mu'allaq serta korelasi ikhtiar dan tawakal"
      },
      tujuan: [
        "Memahami pengertian Qada (rencana/ketetapan azali) dan Qadar (perwujudan takdir di alam nyata)",
        "Membedakan Takdir Mubram (pasti terjadi) dan Takdir Mu'allaq (bisa diupayakan dengan doa & ikhtiar)",
        "Menjauhi sifat sombong saat berhasil dan tidak berputus asa saat gagal",
        "Menyadari bahwa takdir Allah selalu mengandung hikmah terbaik bagi hamba-Nya"
      ],
      materi: {
        pengantar: "Beriman kepada Qada dan Qadar adalah rukun iman keenam. Keyakinan ini membuat hati menjadi lapang, tidak sombong ketika berprestasi, dan tidak mudah menyerah saat menghadapi kegagalan.",
        subBab: [
          {
            judul: "A. Pengertian Qada dan Qadar",
            isi: "Qada adalah ketetapan Allah sejak zaman azali (sebelum semesta diciptakan). Qadar (Takdir) adalah perwujudan atau realisasi dari ketetapan Allah tersebut sesuai ukuran dan waktunya.",
            dalil: {
              arab: "إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ",
              latin: "Innā kulla syai'in khalaqnāhu biqadar",
              arti: "Sungguh, Kami menciptakan segala sesuatu menurut ukuran (takdir). (Q.S. Al-Qamar: 49)"
            }
          },
          {
            judul: "B. Dua Jenis Takdir",
            jenisTakdir: [
              {
                nama: "1. Takdir Mubram (Pasti / Tidak Dapat Diubah)",
                ket: "Ketetapan Allah yang mutlak berlaku bagi manusia dan tidak dapat diubah oleh usaha apa pun.",
                contoh: "Kematian (ajal), jenis kelamin saat lahir, suku bangsa orang tua, peredaran matahari dan bumi."
              },
              {
                nama: "2. Takdir Mu'allaq (Tergantung Ikhtiar & Doa)",
                ket: "Ketetapan Allah yang dikaitkan dengan ikhtiar sungguh-sungguh dan doa manusia.",
                contoh: "Kecerdasan (bisa diupayakan dengan rajin belajar), kesehatan (dengan menjaga pola makan dan olahraga), serta kesuksesan rezeki."
              }
            ]
          },
          {
            judul: "C. Hikmah Beriman kepada Takdir",
            hikmahList: [
              "Hati menjadi tenteram dan ridha atas segala kenyataan",
              "Mendorong semangat bekerja keras dan pantang berputus asa",
              "Menghindarkan diri dari penyakit hati sombong dan takabur"
            ]
          }
        ],
        rangkuman: [
          "Qada adalah ketetapan sejak zaman azali; Qadar adalah wujud terjadinya takdir.",
          "Takdir Mubram tidak dapat diubah (seperti kematian); Takdir Mu'allaq dipengaruhi ikhtiar dan doa (seperti kepintaran).",
          "Orang beriman selalu bersyukur ketika berhasil dan bersabar ketika diuji."
        ]
      },
      game: {
        id: "game-k6-bab7",
        tipe: "takdir-sorter",
        nama: "Timbangan Takdir Mubram vs Mu'allaq",
        petunjuk: "Tentukan jenis takdir untuk setiap peristiwa dalam kehidupan berikut!",
        items: [
          { peristiwa: "Kematian seseorang ketika ajalnya telah tiba", jenis: "Takdir Mubram", alasan: "Ajal telah dipastikan oleh Allah dan tidak bisa dimajukan/dimundurkan sedetik pun." },
          { peristiwa: "Siswa menjadi juara kelas karena rajin membaca buku setiap malam", jenis: "Takdir Mu'allaq", alasan: "Prestasi dan kepandaian bergantung pada ikhtiar belajar dan doa." },
          { peristiwa: "Waktu terbitnya matahari dari timur dan tenggelam di barat", jenis: "Takdir Mubram", alasan: "Ketetapan alam semesta yang pasti berjalan atas qudrah Allah." },
          { peristiwa: "Seorang pasien sembuh dari sakitnya setelah berobat dan meminum obat", jenis: "Takdir Mu'allaq", alasan: "Kesembuhan dipengaruhi ikhtiar pengobatan medis dan izin Allah." }
        ]
      }
    },

    {
      id: "k6-sem2-bab8",
      bab: 8,
      elemen: "Akhlak",
      judul: "Peduli Lingkungan & Akhlak terhadap Hewan",
      judulCPBaru: "Akhlak terhadap Hewan dan Kelestarian Lingkungan",
      icon: "Trees",
      temaWarna: "cyan",
      cpLama: {
        fokus: "Peduli Lingkungan: Konsep lingkungan & sikap peduli",
        kompetensi: "Menerapkan sikap peduli terhadap kelestarian lingkungan"
      },
      cpBaru: {
        fokus: "Akhlak terhadap Hewan dan Lingkungan",
        kompetensi: "Menerapkan peran khalifah fil ardhi dalam menjaga alam, menyayangi binatang, dan menanam pohon"
      },
      tujuan: [
        "Memahami tugas manusia sebagai khalifah (pemimpin pemakmur) di muka bumi",
        "Mengetahui adab memperlakukan hewan: memberi makan, tidak menyiksa, dan tidak mengurung tanpa makan",
        "Mempraktikkan kepedulian lingkungan: menghemat air, membuang sampah pada tempatnya, dan menanam pohon",
        "Mengetahui larangan berbuat kerusakan (fasad) di darat dan di laut"
      ],
      materi: {
        pengantar: "Bumi diciptakan Allah sebagai tempat tinggal yang asri dan seimbang. Menjaga kelestarian alam serta menyayangi hewan adalah bagian tak terpisahkan dari ibadah dan akhlak seorang muslim.",
        subBab: [
          {
            judul: "A. Akhlak Menyayangi Hewan",
            isi: "Hewan adalah makhluk bernyawa yang juga merasakan sakit dan lapar. Rasulullah menceritakan kisah wanita yang masuk neraka karena mengurung seekor kucing tanpa memberinya makan, dan sebaliknya seorang pria diampuni seluruh dosanya karena memberi minum anjing yang kehausan di sumur.",
            adabHewan: [
              "Memberi makanan dan minuman yang cukup",
              "Menyayangi hewan peliharaan dan tidak membebaninya di luar batas kemampuannya",
              "Jika menyembelih hewan ternak, wajib menggunakan pisau yang sangat tajam agar tidak menyiksa"
            ]
          },
          {
            judul: "B. Merawat Kelestarian Lingkungan (Eco-Islam)",
            isi: "Rasulullah saw. sangat menganjurkan penghijauan:",
            hadisMenanam: {
              arab: "مَا مِنْ مُسْلِمٍ يَغْرِسُ غَرْسًا أَوْ يَزْرَعُ زَرْعًا فَيَأْكُلُ مِنْهُ طَيْرٌ أَوْ إِنْسَانٌ أَوْ بَهِيمَةٌ إِلَّا كَانَ لَهُ بِهِ صَدَقَةٌ",
              latin: "Mā min muslimin yagrisu gārsan aw yazra'u zar'an faya'kulu minhu ṭairun aw insānun aw bahīmatun illā kāna lahū bihī ṣadaqah",
              arti: "Tidaklah seorang muslim menanam pohon atau menabur benih tanaman, lalu tanaman itu dimakan oleh burung, manusia, atau hewan, melainkan hal itu bernilai sedekah baginya. (H.R. Bukhari)"
            }
          }
        ],
        rangkuman: [
          "Manusia adalah khalifah yang diamanahi merawat bumi, bukan merusaknya.",
          "Menyayangi hewan mengundang rahmat dan ampunan Allah Swt.",
          "Menanam pohon bernilai sedekah jariyah yang pahalanya mengalir terus."
        ]
      },
      game: {
        id: "game-k6-bab8",
        tipe: "eco-hero",
        nama: "Pahlawan Penjaga Bumi Ceria",
        petunjuk: "Pilih tindakan hijau yang menyelamatkan lingkungan dan hewan di sekitar kita!",
        missions: [
          {
            misi: "Melihat seekor burung kecil terjatuh dari sarangnya di halaman sekolah...",
            tindakanHijau: "Mengambilnya dengan lembut dan mengembalikannya ke ranting pohon sarangnya",
            tindakanKeliru: "Melemparinya dengan batu",
            catatan: "Menolong makhluk hidup yang lemah adalah perbuatan mulia."
          },
          {
            misi: "Saat berwudu di tempat wudu masjid sekolah...",
            tindakanHijau: "Membuka kran air secukupnya dan mematikan kembali setelah selesai",
            tindakanKeliru: "Membuka kran sebesar-besarnya sampai air meluap",
            catatan: "Rasulullah melarang boros air meskipun berwudu di sungai yang mengalir deras."
          }
        ]
      }
    },

    {
      id: "k6-sem2-bab9",
      bab: 9,
      elemen: "Fikih",
      judul: "Fikih Wakaf: Filantropi Abadi dalam Islam",
      judulCPBaru: "Wakaf (Pengertian, Dasar Hukum, Rukun, dan Manfaat)",
      icon: "Landmark",
      temaWarna: "indigo",
      cpLama: {
        fokus: "Infak, Sedekah, Hadiah & Mengamalkan Puasa Sunah",
        kompetensi: "Memahami keutamaan infak, sedekah, dan puasa sunah"
      },
      cpBaru: {
        fokus: "Wakaf (Pengertian, Dasar Hukum, dan Jenis)",
        kompetensi: "Menganalisis konsep wakaf, rukun wakaf, jenis wakaf produktif, dan pengelolaannya untuk umat"
      },
      tujuan: [
        "Memahami pengertian Wakaf secara bahasa (menahan) dan istilah syariat",
        "Mengetahui dasar hukum wakaf dalam Al-Qur'an dan Hadis amal jariyah",
        "Mengetahui 4 Rukun Wakaf (Wakif, Mauquf bih, Mauquf 'alaih, dan Sighat)",
        "Mengenal jenis wakaf: benda tidak bergerak (tanah, masjid) dan benda bergerak/produktif (uang, sumur)"
      ],
      materi: {
        pengantar: "Catatan Perubahan CP Baru: Pada CP 020/2026, materi Fikih semester 2 kelas 6 membahas secara khusus tentang WAKAF. Wakaf adalah instrumen sedekah jariyah yang pahalanya mengalir abadi bahkan setelah pewakafnya meninggal dunia.",
        subBab: [
          {
            judul: "A. Pengertian dan Dasar Hukum Wakaf",
            isi: "Wakaf secara bahasa artinya 'menahan' (al-habs). Menurut syariat, wakaf adalah menahan suatu benda yang tahan lama untuk dimanfaatkan bagi kepentingan umum demi mendekatkan diri kepada Allah Swt.",
            hadisWakaf: {
              arab: "إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ: إِلَّا مِنْ صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ",
              latin: "Iżā mātal-insānu inqaṭa'a 'anhu 'amaluhū illā min ṡalāṡatin: illā min ṣadaqatin jāriyatin, aw 'ilmin yuntafa'u bihī, aw waladin ṣāliḥin yad'ū lah",
              arti: "Apabila manusia meninggal dunia, maka terputuslah amalnya kecuali tiga perkara: sedekah jariyah (wakaf), ilmu yang bermanfaat, dan anak saleh yang mendoakannya. (H.R. Muslim)"
            }
          },
          {
            judul: "B. Empat Rukun Wakaf",
            rukunWakaf: [
              { nama: "1. Wāqif", ket: "Orang yang mewakafkan hartanya (harus merdeka, berakal, baligh, dan atas kerelaan sendiri)." },
              { nama: "2. Mauqūf Bih", ket: "Harta benda yang diwakafkan (harus bernilai, tahan lama/tidak habis sekali pakai, dan milik sah wakif)." },
              { nama: "3. Mauqūf 'Alaih", ket: "Pihak yang menerima manfaat wakaf (seperti masyarakat umum, yayasan yatim, madrasah)." },
              { nama: "4. Ṣīgah", ket: "Ikrar atau pernyataan serah terima wakaf baik secara lisan maupun tertulis." },
              { nama: "Nāẓir (Pengelola)", ket: "Pihak atau badan yang diamanahi menjaga, memelihara, dan mengelola harta wakaf." }
            ]
          },
          {
            judul: "C. Contoh Wakaf Sepanjang Sejarah",
            isi: "Contoh wakaf termasyhur adalah Sumur Raumah yang dibeli oleh Khalifah Usman bin Affan dari seorang Yahudi, lalu diwakafkan untuk seluruh masyarakat Madinah secara cuma-cuma. Manfaat sumur dan kebun kurmanya masih mengalir hingga hari ini di Madinah!"
          }
        ],
        rangkuman: [
          "Wakaf adalah menahan pokok harta yang tahan lama untuk disalurkan manfaatnya bagi umat.",
          "Wakaf termasuk sedekah jariyah yang pahalanya tidak terputus setelah wafat.",
          "Empat rukun wakaf: Wakif, Harta wakaf, Penerima manfaat, dan Ikrar wakaf.",
          "Pengelola wakaf disebut Nazhir."
        ]
      },
      game: {
        id: "game-k6-bab9",
        tipe: "waqf-simulator",
        nama: "Simulasi Wakaf Kebaikan Abadi",
        petunjuk: "Bantu pilih harta wakaf yang sah menurut syariat untuk kemaslahatan masyarakat!",
        items: [
          { barang: "Tanah untuk pembangunan Madrasah dan Masjid", status: "Sah sebagai Wakaf", alasan: "Harta tidak bergerak dan awet bermanfaat bagi umat selamanya." },
          { barang: "Sepiring nasi goreng yang lezat", status: "Bukan Wakaf (Sedekah Biasa)", alasan: "Makanan habis sekali konsumsi, tidak memenuhi syarat keabadian pokok harta wakaf." },
          { barang: "Sumur air bersih untuk warga desa yang kekeringan", status: "Sah sebagai Wakaf", alasan: "Mengalirkan air bersih selamanya seperti teladan sumur Raumah Usman bin Affan." },
          { barang: "Bangunan perpustakaan dan buku-buku ilmu pengetahuan", status: "Sah sebagai Wakaf", alasan: "Bermanfaat bagi pendidikan generasi penerus." }
        ]
      }
    },

    {
      id: "k6-sem2-bab10",
      bab: 10,
      elemen: "Sejarah Peradaban Islam",
      judul: "Kisah Khulafaur Rasyidin: Usman bin Affan & Ali bin Abi Talib",
      judulCPBaru: "Keteladanan Khalifah Uṡmān bin ‘Affān dan ‘Alī bin Abī Ṭālib",
      icon: "Shield",
      temaWarna: "rose",
      cpLama: {
        fokus: "Meneladani Jasa Khalifah Usman Bin Affan dan Ali Bin Abi Talib",
        kompetensi: "Menceritakan biografi dan kepahlawanan Usman dan Ali"
      },
      cpBaru: {
        fokus: "Kisah Keteladanan Usman bin Affan dan Ali bin Abi Talib",
        kompetensi: "Menganalisis kedermawanan, pengorbanan harta, kecerdasan, dan keberanian menegakkan kebenaran"
      },
      tujuan: [
        "Mengenal kepribadian Khalifah Usman bin Affan (Dzun Nurain - pemilik dua cahaya)",
        "Mengetahui jasa monumental Usman: Membukukan dan menyatukan bacaan Mushaf Al-Qur'an (Mushaf Usmani)",
        "Mengenal kepribadian Khalifah Ali bin Abi Talib (Babul 'Ilm - gerbang ilmu dan ksatria pemberani)",
        "Meneladani kedermawanan luar biasa Usman bin Affan dan ketegasan ilmu Ali bin Abi Talib"
      ],
      materi: {
        pengantar: "Dua lentera terakhir Khulafaur Rasyidin adalah sahabat mulia Usman bin Affan yang dermawan dan pemalu, serta Ali bin Abi Talib yang cerdas dan ksatria gagah berani.",
        subBab: [
          {
            judul: "A. Khalifah Uṡmān bin ‘Affān r.a. (23 - 35 H)",
            isi: "Usman mendapat julukan 'Żun Nūrain' (Pemilik Dua Cahaya) karena menikahi dua putri Rasulullah secara berurutan (Ruqayyah dan Ummu Kultsum). Beliau saudagar kaya raya yang sangat pemalu dan dermawan.",
            jasaUsman: [
              "Standardisasi Mushaf Al-Qur'an (Mushaf Usmani): Menyeragamkan penulisan Al-Qur'an dengan dialek Quraisy dan menggandakannya ke berbagai kota besar Islam.",
              "Merestrukturisasi dan memperluas Masjid Nabawi di Madinah dan Masjidil Haram di Makkah.",
              "Membentuk armada angkatan laut Islam pertama untuk melindungi wilayah perairan kaum muslimin."
            ]
          },
          {
            judul: "B. Khalifah ‘Alī bin Abī Ṭālib r.a. (35 - 40 H)",
            isi: "Ali adalah sepupu sekaligus menantu Rasulullah saw. (suami Sayyidah Fatimah az-Zahra). Beliau adalah anak muda pertama yang memeluk Islam. Rasulullah bersabda: 'Aku adalah kotanya ilmu, dan Ali adalah gerbang pintunya'.",
            jasaAli: [
              "Memajukan ilmu tata bahasa Arab (ilmu Nahwu) bersama Abu al-Aswad ad-Du'ali dengan memberi tanda harakat pada teks Arab.",
              "Mengganti pejabat-pejabat yang kurang cakap dan menata kembali keuangan negara.",
              "Sosok panglima perang yang tak terkalahkan namun sangat zuhud, tidur di atas tikar kasar di rumahnya."
            ]
          }
        ],
        rangkuman: [
          "Usman bin Affan berjasa besar menyatukan umat Islam melalui penulisan Mushaf Usmani.",
          "Ali bin Abi Talib adalah gerbang ilmu dan lambang ksatria sejati.",
          "Empat Khulafaur Rasyidin adalah teladan kepemimpinan terbaik setelah para Nabi."
        ]
      },
      game: {
        id: "game-k6-bab10",
        tipe: "companion-duel",
        nama: "Ksatria Kebajikan Usman & Ali",
        petunjuk: "Pilihlah sosok sahabat Nabi yang sesuai dengan gelar dan jasa agung berikut!",
        questions: [
          {
            tanya: "Sahabat yang mendapat gelar 'Żun Nūrain' (Pemilik Dua Cahaya) adalah...",
            opsi: ["Uṡmān bin ‘Affān", "‘Alī bin Abī Ṭālib", "Abu Bakar"],
            benar: 0,
            alasan: "Usman menikahi dua putri Rasulullah saw., yaitu Ruqayyah dan Ummu Kultsum."
          },
          {
            tanya: "Jasa monumental Usman bin Affan yang hingga hari ini kita nikmati di seluruh dunia adalah...",
            opsi: ["Membukukan Mushaf Al-Qur'an (Mushaf Usmani)", "Membangun jalan raya", "Membuat benteng"],
            benar: 0,
            alasan: "Standardisasi Mushaf Usmani menyatukan seluruh umat Islam dalam satu bacaan Al-Qur'an resmi."
          },
          {
            tanya: "Sahabat yang digelari 'Babul 'Ilmi' (Pintu Gerbang Ilmu) oleh Rasulullah saw. adalah...",
            opsi: ["‘Alī bin Abī Ṭālib", "Usman bin Affan", "Khalid bin Walid"],
            benar: 0,
            alasan: "Rasulullah bersabda: 'Aku kotanya ilmu dan Ali adalah pintu gerbangnya'."
          }
        ]
      }
    }
  ]
};

