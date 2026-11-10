// Data Materi & Games PAI Kelas 1 SD (Fase A)
// Terbagi jelas antara CP LAMA (Buku Siswa Kemdikbud) dan CP BARU (Revisi BSKAP 020/2026 Word Docx)

export const kelas1Data = {
  kelas: 1,
  namaFase: "Fase A (Kelas 1 SD)",

  // =========================================================================
  // 1. KURIKULUM CP LAMA (Berdasarkan Buku Siswa Kemdikbud Cetak)
  // =========================================================================
  cpLama: {
    deskripsi: "Kurikulum berdasarkan Buku Siswa PAI & Budi Pekerti Kelas 1 Kemdikbud (CP 046/2025). Terdiri dari 10 Bab.",
    semester1: [
      {
        id: "k1-lama-bab-1",
        bab: 1,
        elemen: "Al-Qur'an dan Hadis",
        judul: "Aku Cinta Al-Qur'an",
        icon: "quran",
        fokusCP: "Mengenal Al-Qur'an sebagai kitab suci, huruf hijaiah, dan harakat dasar.",
        tujuan: [
          "Meyakini Al-Qur'an sebagai kitab suci umat Islam yang diturunkan kepada Nabi Muhammad saw.",
          "Mengenal 28 huruf hijaiah tunggal dari Alif sampai Ya.",
          "Mengenal tiga harakat dasar: Fathah (a), Kasrah (i), dan Dammah (u).",
          "Melafalkan huruf hijaiah berharakat dengan tartil dan percaya diri."
        ],
        materi: {
          pengantar: "Al-Qur'an adalah kitab suci yang diturunkan oleh Allah Swt. kepada Nabi Muhammad saw. melalui perantara Malaikat Jibril. Al-Qur'an menjadi pedoman hidup bagi seluruh umat Islam di dunia agar bahagia di dunia dan akhirat.",
          subBab: [
            {
              subJudul: "A. Al-Qur'an Adalah Kitab Suciku",
              ilustrasi: "quran",
              uraian: "Al-Qur'an ditulis dalam bahasa Arab. Membaca Al-Qur'an adalah ibadah yang sangat mulia. Setiap kali kita membaca satu huruf dari Al-Qur'an, Allah Swt. akan melipatgandakan pahalanya menjadi sepuluh kebaikan.",
              dalil: {
                arab: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
                latin: "Khairukum man ta'allamal-Qur'āna wa 'allamah",
                arti: "Sebaik-baik kalian adalah orang yang belajar Al-Qur'an dan mengajarkannya. (H.R. Bukhari)"
              },
              poinPenting: [
                "Sebelum membaca Al-Qur'an hendaknya berwudu dan dalam keadaan suci.",
                "Membaca ta'awwudz (A'udzubillahi minasy-syaithanir-rajim) dan basmalah.",
                "Membaca dengan tenang, tartil, dan tidak terburu-buru."
              ]
            },
            {
              subJudul: "B. Mengenal 28 Huruf Hijaiah",
              ilustrasi: "hijaiyah",
              uraian: "Huruf Al-Qur'an disebut huruf hijaiah. Huruf hijaiah berjumlah 28 huruf, dibaca dan ditulis mulai dari sebelah kanan ke kiri:",
              daftarHuruf: [
                { arab: "ا", nama: "Alif", bunyi: "A" }, { arab: "ب", nama: "Ba", bunyi: "B" },
                { arab: "ت", nama: "Ta", bunyi: "T" }, { arab: "ث", nama: "Tsa", bunyi: "Ts" },
                { arab: "ج", nama: "Jim", bunyi: "J" }, { arab: "ح", nama: "Ha", bunyi: "H" },
                { arab: "خ", nama: "Kha", bunyi: "Kh" }, { arab: "د", nama: "Dal", bunyi: "D" },
                { arab: "ذ", nama: "Dzal", bunyi: "Dz" }, { arab: "ر", nama: "Ra", bunyi: "R" },
                { arab: "ز", nama: "Zai", bunyi: "Z" }, { arab: "س", nama: "Sin", bunyi: "S" },
                { arab: "ش", nama: "Syin", bunyi: "Sy" }, { arab: "ص", nama: "Sad", bunyi: "S (tebal)" },
                { arab: "ض", nama: "Dad", bunyi: "Dh (tebal)" }, { arab: "ط", nama: "Ta", bunyi: "Th (tebal)" },
                { arab: "ظ", nama: "Zha", bunyi: "Zh (tebal)" }, { arab: "ع", nama: "'Ain", bunyi: "'A" },
                { arab: "غ", nama: "Gain", bunyi: "Gh" }, { arab: "ف", nama: "Fa", bunyi: "F" },
                { arab: "ق", nama: "Qaf", bunyi: "Q" }, { arab: "ك", nama: "Kaf", bunyi: "K" },
                { arab: "ل", nama: "Lam", bunyi: "L" }, { arab: "م", nama: "Mim", bunyi: "M" },
                { arab: "ن", nama: "Nun", bunyi: "N" }, { arab: "و", nama: "Wau", bunyi: "W" },
                { arab: "هـ", nama: "Ha", bunyi: "H (besar)" }, { arab: "ي", nama: "Ya", bunyi: "Y" }
              ]
            },
            {
              subJudul: "C. Aku Tahu Tanda Baca (Harakat)",
              ilustrasi: "tajwid",
              uraian: "Harakat adalah tanda baca yang membuat huruf hijaiah dapat berbunyi:",
              harakatList: [
                { tanda: "َ", nama: "Fathah", letak: "Di atas huruf", suara: "Menghasilkan bunyi 'A' (Contoh: بَ = Ba)" },
                { tanda: "ِ", nama: "Kasrah", letak: "Di bawah huruf", suara: "Menghasilkan bunyi 'I' (Contoh: بِ = Bi)" },
                { tanda: "ُ", nama: "Dammah", letak: "Di atas huruf", suara: "Menghasilkan bunyi 'U' (Contoh: بُ = Bu)" }
              ]
            }
          ],
          rangkuman: [
            "Al-Qur'an adalah kitab suci umat Islam yang berisi petunjuk hidup.",
            "Huruf hijaiah ada 28 huruf dan dibaca dari arah kanan.",
            "Tiga tanda baca dasar adalah Fathah (a), Kasrah (i), dan Dammah (u)."
          ],
          budiPekerti: "Anak saleh rajin mengaji Al-Qur'an setiap sore di rumah atau di TPA masjid."
        },
        game: {
          id: "game-k1-lama-b1",
          tipe: "hijaiyah-catcher",
          nama: "Taman Bunga Harakat",
          petunjuk: "Pilih bunyi huruf berharakat yang tepat sesuai tanda bacanya!",
          levels: [
            {
              pertanyaan: "Bagaimanakah huruf Dal (د) jika diberi tanda Fathah di atasnya?",
              opsi: [{ teks: "دَ (Da)", benar: true }, { teks: "دِ (Di)", benar: false }, { teks: "دُ (Du)", benar: false }],
              penjelasan: "Tanda Fathah terletak di atas garis huruf dan berbunyi vokal 'A'."
            },
            {
              pertanyaan: "Tanda baca Kasrah berada di mana dan berbunyi apa?",
              opsi: [{ teks: "Di bawah huruf, berbunyi I", benar: true }, { teks: "Di atas huruf, berbunyi U", benar: false }, { teks: "Di depan huruf, berbunyi A", benar: false }],
              penjelasan: "Kasrah berbentuk garis miring di bawah huruf dan menghasilkan vokal 'I'."
            },
            {
              pertanyaan: "Huruf Mim berharakat Dammah (مُ) dibaca...",
              opsi: [{ teks: "Mu", benar: true }, { teks: "Ma", benar: false }, { teks: "Mi", benar: false }],
              penjelasan: "Dammah berbentuk seperti wau kecil di atas huruf dan menghasilkan vokal 'U'."
            }
          ]
        }
      },

      {
        id: "k1-lama-bab-2",
        bab: 2,
        elemen: "Akidah",
        judul: "Mengenal Rukun Iman",
        icon: "rukun-iman",
        fokusCP: "Memahami pengertian rukun iman serta beriman kepada Allah dan Rasul.",
        tujuan: [
          "Menjelaskan pengertian rukun iman dengan bahasa sederhana.",
          "Menyebutkan 6 rukun iman secara urut.",
          "Meyakini Allah Swt. sebagai Tuhan Yang Maha Esa pencipta alam semesta.",
          "Meneladani akhlak mulia para nabi dan rasul utusan Allah."
        ],
        materi: {
          pengantar: "Iman artinya percaya dan yakin dengan sepenuh hati, diucapkan dengan lisan, dan dibuktikan dengan perbuatan baik sehari-hari. Sebagai anak muslim, kita harus memiliki pondasi iman yang kokoh.",
          subBab: [
            {
              subJudul: "A. Pengertian dan Enam Rukun Iman",
              ilustrasi: "rukun-iman",
              uraian: "Rukun artinya tiang atau pokok pegangan. Rukun Iman adalah enam perkara pokok yang wajib kita yakini dalam hati:",
              daftarRukun: [
                { no: 1, nama: "Iman kepada Allah Swt.", arti: "Percaya bahwa Allah Maha Esa, tiada Tuhan selain Allah, Pencipta alam semesta." },
                { no: 2, nama: "Iman kepada Malaikat Allah", arti: "Percaya adanya malaikat ciptaan Allah yang taat menjalankan tugas." },
                { no: 3, nama: "Iman kepada Kitab-Kitab Allah", arti: "Percaya Allah menurunkan kitab suci kepada para rasul sebagai petunjuk." },
                { no: 4, nama: "Iman kepada Rasul-Rasul Allah", arti: "Percaya para nabi dan rasul adalah manusia pilihan utusan Allah." },
                { no: 5, nama: "Iman kepada Hari Kiamat", arti: "Percaya bahwa dunia ini sementara dan akan ada hari akhir pembalasan." },
                { no: 6, nama: "Iman kepada Qada dan Qadar", arti: "Percaya segala ketentuan dan takdir baik maupun buruk dari Allah." }
              ]
            },
            {
              subJudul: "B. Beriman kepada Allah dan Rasul",
              ilustrasi: "mosque",
              uraian: "Bukti adanya Allah adalah alam semesta yang luas: ada matahari yang bersinar terang, awan yang menurunkan hujan, tumbuhan yang berbuah manis, dan udara untuk kita bernapas. Kita mencintai Nabi Muhammad saw. dengan cara meniru kejujuran dan sifat santun beliau.",
              dalil: {
                arab: "قُلْ هُوَ اللَّهُ أَحَدٌ",
                latin: "Qul huwallāhu aḥad",
                arti: "Katakanlah (Muhammad), Dialah Allah, Yang Maha Esa. (Q.S. Al-Ikhlas: 1)"
              }
            }
          ],
          rangkuman: [
            "Iman artinya percaya dalam hati, diucapkan lisan, dibuktikan amal perbuatan.",
            "Rukun iman ada 6 perkara yang tidak boleh dipisahkan.",
            "Allah adalah Pencipta alam semesta, dan Nabi Muhammad adalah rasul panutan kita."
          ],
          budiPekerti: "Selalu jujur saat berbicara dan tidak berbohong kepada orang tua dan bapak/ibu guru."
        },
        game: {
          id: "game-k1-lama-b2",
          tipe: "rukun-sorter",
          nama: "Menyusun Bintang 6 Rukun Iman",
          petunjuk: "Susun 6 Rukun Iman secara berurutan dari bintang nomor 1 sampai 6!",
          itemsUrut: [
            { urutan: 1, teks: "1. Iman kepada Allah Swt." },
            { urutan: 2, teks: "2. Iman kepada Malaikat Allah" },
            { urutan: 3, teks: "3. Iman kepada Kitab-Kitab Allah" },
            { urutan: 4, teks: "4. Iman kepada Rasul-Rasul Allah" },
            { urutan: 5, teks: "5. Iman kepada Hari Kiamat" },
            { urutan: 6, teks: "6. Iman kepada Qada dan Qadar" }
          ]
        }
      },

      {
        id: "k1-lama-bab-3",
        bab: 3,
        elemen: "Akhlak",
        judul: "Aku Suka Membaca Basmalah dan Hamdalah",
        icon: "tasbih",
        fokusCP: "Membiasakan membaca Basmalah sebelum beraktivitas dan Hamdalah setelah selesai.",
        tujuan: [
          "Melafalkan kalimat Basmalah dengan benar beserta artinya.",
          "Melafalkan kalimat Hamdalah dengan benar beserta artinya.",
          "Membiasakan mengucap Basmalah sebelum makan, belajar, dan berpergian.",
          "Menunjukkan rasa syukur atas nikmat yang Allah berikan."
        ],
        materi: {
          pengantar: "Setiap aktivitas baik yang dimulai dengan mengingat nama Allah akan bernilai berkah dan dilindungi dari godaan setan. Kalimat thayyibah adalah ucapan-ucapan yang baik dan disenangi Allah.",
          subBab: [
            {
              subJudul: "A. Membaca Basmalah",
              ilustrasi: "tasbih",
              uraian: "Sebelum belajar, makan, minum, atau memakai pakaian, kita membaca Basmalah:",
              lafal: {
                arab: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
                latin: "Bismillāhir-raḥmānir-raḥīm",
                arti: "Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang."
              }
            },
            {
              subJudul: "B. Membaca Hamdalah",
              ilustrasi: "tahmid",
              uraian: "Setelah selesai makan, selesai belajar, atau sembuh dari sakit, kita membaca Hamdalah:",
              lafal: {
                arab: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                latin: "Al-ḥamdu lillāhi rabbil-'ālamīn",
                arti: "Segala puji bagi Allah, Tuhan seluruh alam."
              }
            }
          ],
          rangkuman: [
            "Mulai perbuatan baik dengan Basmalah.",
            "Akhiri perbuatan baik dengan Hamdalah sebagai tanda syukur."
          ],
          budiPekerti: "Makan dan minum menggunakan tangan kanan sambil duduk dan membaca basmalah."
        },
        game: {
          id: "game-k1-lama-b3",
          tipe: "kalimat-thayyibah-match",
          nama: "Detektif Kalimat Thayyibah",
          petunjuk: "Pilih kalimat thayyibah yang tepat untuk setiap momen harian!",
          situasi: [
            {
              kejadian: "Sebelum mulai membuka buku pelajaran di kelas...",
              jawabanBenar: "Bismillāhir-raḥmānir-raḥīm",
              opsi: ["Bismillāhir-raḥmānir-raḥīm", "Alhamdulillah", "Astaghfirullah"]
            },
            {
              kejadian: "Setelah selesai makan siang bersama keluarga...",
              jawabanBenar: "Al-ḥamdu lillāhi rabbil-'ālamīn",
              opsi: ["Al-ḥamdu lillāhi rabbil-'ālamīn", "Bismillah", "Subhanallah"]
            }
          ]
        }
      },

      {
        id: "k1-lama-bab-4",
        bab: 4,
        elemen: "Fikih",
        judul: "Mengenal Rukun Islam & Syahadatain",
        icon: "rukun-islam",
        fokusCP: "Mengerti 5 rukun Islam, mengenal dua kalimat syahadat dan artinya.",
        tujuan: [
          "Menyebutkan 5 rukun Islam secara urut.",
          "Melafalkan Syahadat Tauhid dan Syahadat Rasul secara fasih.",
          "Mengartikan dua kalimat syahadat ke dalam bahasa Indonesia.",
          "Bangga menjadi anak muslim yang taat beribadah."
        ],
        materi: {
          pengantar: "Islam bagaikan rumah yang kokoh. Rumah tersebut memiliki 5 pilar penyangga utama yang dinamakan Rukun Islam.",
          subBab: [
            {
              subJudul: "A. Lima Rukun Islam",
              ilustrasi: "rukun-islam",
              uraian: "Lima rukun Islam yang wajib dilaksanakan oleh setiap orang beriman:",
              daftarPilar: [
                { urut: 1, nama: "Mengucapkan Dua Kalimat Syahadat" },
                { urut: 2, nama: "Mendirikan Salat 5 Waktu Sehari Semalam" },
                { urut: 3, nama: "Membayar Zakat untuk Mensucikan Jiwa dan Harta" },
                { urut: 4, nama: "Menjalankan Puasa di Bulan Suci Ramadan" },
                { urut: 5, nama: "Melaksanakan Ibadah Haji ke Baitullah bagi yang Mampu" }
              ]
            },
            {
              subJudul: "B. Dua Kalimat Syahadat (Syahadatain)",
              ilustrasi: "mosque",
              uraian: "Syahadat artinya kesaksian iman:",
              syahadatTauhid: {
                arab: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ",
                latin: "Asyhadu allā ilāha illallāh",
                arti: "Aku bersaksi bahwa tidak ada Tuhan selain Allah."
              },
              syahadatRasul: {
                arab: "وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ",
                latin: "Wa asyhadu anna Muḥammadar rasūlullāh",
                arti: "Dan aku bersaksi bahwa Nabi Muhammad adalah utusan Allah."
              }
            }
          ],
          rangkuman: [
            "Rukun Islam ada 5: Syahadat, Salat, Zakat, Puasa, dan Haji bila mampu.",
            "Dua kalimat syahadat adalah pintu gerbang memeluk Islam."
          ],
          budiPekerti: "Belajar salat 5 waktu bersama ayah dan ibu di rumah."
        },
        game: {
          id: "game-k1-lama-b4",
          tipe: "rukun-islam-pilar",
          nama: "Menegakkan 5 Pilar Rukun Islam",
          petunjuk: "Pasang 5 pilar rukun Islam secara berurutan!",
          pilars: [
            { urut: 1, nama: "1. Syahadat", deskripsi: "Pondasi utama" },
            { urut: 2, nama: "2. Salat", deskripsi: "Tiang agama 5 waktu" },
            { urut: 3, nama: "3. Zakat", deskripsi: "Membersihkan harta" },
            { urut: 4, nama: "4. Puasa", deskripsi: "Menahan diri di bulan Ramadan" },
            { urut: 5, nama: "5. Haji", deskripsi: "Bagi yang mampu" }
          ]
        }
      },

      {
        id: "k1-lama-bab-5",
        bab: 5,
        elemen: "Sejarah Peradaban Islam",
        judul: "Nabi dan Rasul Panutanku",
        icon: "sahabat",
        fokusCP: "Mengenal 25 nabi dan rasul, mukjizat, serta perilaku sederhana para nabi.",
        tujuan: [
          "Membedakan pengertian nabi dan rasul.",
          "Mengetahui jumlah 25 nabi dan rasul yang wajib diketahui.",
          "Mengetahui mukjizat istimewa para nabi pilihan.",
          "Meneladani perilaku hidup sederhana dan dermawan para nabi."
        ],
        materi: {
          pengantar: "Nabi adalah manusia pilihan yang menerima wahyu dari Allah untuk dirinya sendiri. Rasul adalah nabi yang menerima wahyu dan wajib menyampaikannya kepada umat manusia.",
          subBab: [
            {
              subJudul: "A. 25 Nabi dan Rasul yang Wajib Diketahui",
              ilustrasi: "sahabat",
              uraian: "Nabi pertama adalah Nabi Adam a.s. dan nabi terakhir sebagai penutup para nabi (Khatamun Nabiyyin) adalah Nabi Muhammad saw. Di antaranya ada Nabi Nuh, Ibrahim, Musa, Isa, dan 25 nabi lainnya."
            },
            {
              subJudul: "B. Mukjizat dan Keteladanan Sederhana",
              ilustrasi: "quran",
              uraian: "Mukjizat adalah kejadian luar biasa yang diberikan Allah kepada para nabi untuk membuktikan kebenaran risalah mereka. Contohnya: Tongkat Nabi Musa menjadi ular besar, Nabi Ibrahim tidak hangus dibakar api, dan Al-Qur'an sebagai mukjizat terbesar Nabi Muhammad saw."
            }
          ],
          rangkuman: [
            "Ada 25 nabi dan rasul yang wajib kita imani.",
            "Para nabi hidup sangat sederhana, jujur, dan berakhlak mulia."
          ],
          budiPekerti: "Tidak berlebih-lebihan saat membeli jajanan di sekolah dan rajin menabung."
        },
        game: {
          id: "game-k1-lama-b5",
          tipe: "knowledge-challenge",
          nama: "Kuis 25 Nabi Panutan",
          petunjuk: "Jawablah pertanyaan seputar nabi dan rasul panutan kita!",
          questions: [
            {
              tanya: "Siapakah nabi pertama dan manusia pertama yang diciptakan Allah?",
              opsi: ["Nabi Adam a.s.", "Nabi Ibrahim a.s.", "Nabi Muhammad saw."],
              benar: 0,
              alasan: "Nabi Adam a.s. adalah manusia sekaligus nabi pertama."
            },
            {
              tanya: "Nabi yang menerima mukjizat Al-Qur'an adalah...",
              opsi: ["Nabi Muhammad saw.", "Nabi Musa a.s.", "Nabi Isa a.s."],
              benar: 0,
              alasan: "Al-Qur'an diturunkan kepada Nabi Muhammad saw."
            }
          ]
        }
      }
    ],

    semester2: [
      {
        id: "k1-lama-bab-6",
        bab: 6,
        elemen: "Al-Qur'an dan Hadis",
        judul: "Al-Qur'an Pedoman Hidupku (Surah Al-Ikhlas)",
        icon: "quran",
        fokusCP: "Mengenal harakat tanwin/sukun, membaca huruf hijaiah bersambung, dan Surah Al-Ikhlas.",
        tujuan: [
          "Membaca Surah Al-Ikhlas dengan tartil dan lancar.",
          "Memahami arti Surah Al-Ikhlas tentang keesaan Allah.",
          "Menolak segala bentuk perbuatan menyekutukan Allah (syirik)."
        ],
        materi: {
          pengantar: "Surah Al-Ikhlas adalah surah ke-112 dalam Al-Qur'an yang menjelaskan tentang tauhid, yaitu menegaskan bahwa Allah itu Maha Esa dan tidak beranak maupun diperanakkan.",
          subBab: [
            {
              subJudul: "A. Membaca Surah Al-Ikhlas",
              ilustrasi: "quran",
              ayatList: [
                { no: 1, arab: "قُلْ هُوَ اللَّهُ أَحَدٌ", latin: "Qul huwallāhu aḥad", arti: "Katakanlah (Muhammad), 'Dialah Allah, Yang Maha Esa.'" },
                { no: 2, arab: "اللَّهُ الصَّمَدُ", latin: "Allāhuṣ-ṣamad", arti: "Allah tempat meminta segala sesuatu." },
                { no: 3, arab: "لَمْ يَلِدْ وَلَمْ يُولَدْ", latin: "Lam yalid wa lam yūlad", arti: "Dia tidak beranak dan tidak pula diperanakkan," },
                { no: 4, arab: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ", latin: "Wa lam yakul lahū kufuwan aḥad", arti: "dan tidak ada sesuatu yang setara dengan Dia." }
              ]
            }
          ],
          rangkuman: [
            "Surah Al-Ikhlas terdiri dari 4 ayat.",
            "Allah Maha Esa, tiada sekutu bagi-Nya, dan hanya kepada Allah kita menyembah."
          ],
          budiPekerti: "Hanya beribadah dan meminta pertolongan kepada Allah Swt."
        },
        game: {
          id: "game-k1-lama-b6",
          tipe: "connect-letters",
          nama: "Menyusun Ayat Surah Al-Ikhlas",
          petunjuk: "Susun ayat 1 sampai 4 Surah Al-Ikhlas dengan benar!",
          gerbong: [
            { urutan: 1, teks: "قُلْ هُوَ اللَّهُ أَحَدٌ (Ayat 1)" },
            { urutan: 2, teks: "اللَّهُ الصَّمَدُ (Ayat 2)" },
            { urutan: 3, teks: "لَمْ يَلِدْ وَلَمْ يُولَدْ (Ayat 3)" },
            { urutan: 4, teks: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ (Ayat 4)" }
          ]
        }
      },

      {
        id: "k1-lama-bab-7",
        bab: 7,
        elemen: "Akidah",
        judul: "Kasih Sayang terhadap Sesama (Ar-Rahmān & Ar-Rahīm)",
        icon: "asmaul-husna",
        fokusCP: "Mengenal Asmaulhusna Ar-Rahman dan Ar-Rahim serta keteladanan kasih sayang Nabi Muhammad saw.",
        tujuan: [
          "Mengartikan Asmaulhusna Ar-Rahmān (Maha Pengasih).",
          "Mengartikan Asmaulhusna Ar-Rahīm (Maha Penyayang).",
          "Meneladani sifat kasih sayang Nabi Muhammad saw. kepada anak yatim, orang miskin, dan hewan."
        ],
        materi: {
          pengantar: "Allah Swt. melimpahkan kasih sayang kepada seluruh makhluk-Nya. Nabi Muhammad saw. diutus ke muka bumi sebagai rahmat bagi seluruh alam semesta (Rahmatan lil 'Alamin).",
          subBab: [
            {
              subJudul: "A. Ar-Rahman dan Ar-Rahim",
              ilustrasi: "asmaul-husna",
              uraian: "Ar-Rahman artinya Allah Maha Pengasih kepada semua makhluk tanpa membeda-bedakan. Ar-Rahim artinya Allah Maha Penyayang terutama kepada hamba-Nya yang taat beriman."
            },
            {
              subJudul: "B. Kasih Sayang Nabi Muhammad saw.",
              ilustrasi: "mosque",
              uraian: "Nabi Muhammad saw. sangat menyayangi anak-anak, mengusap kepala anak yatim, dan melarang siapa pun menganiaya binatang."
            }
          ],
          rangkuman: [
            "Ar-Rahman: Kasih Allah di dunia.",
            "Ar-Rahim: Sayang Allah di akhirat.",
            "Tebarkan kasih sayang kepada adik, kakak, teman, dan hewan."
          ],
          budiPekerti: "Menyayangi kucing peliharaan dengan memberinya makan dan air minum."
        },
        game: {
          id: "game-k1-lama-b7",
          tipe: "memory-card",
          nama: "Kartu Memori Ar-Rahman & Ar-Rahim",
          petunjuk: "Cocokkan nama Asmaul Husna dengan maknanya!",
          cards: [
            { id: 1, pairId: "rahman", label: "الرَّحْمَٰنُ (Ar-Rahman)" },
            { id: 2, pairId: "rahman", label: "Maha Pengasih" },
            { id: 3, pairId: "rahim", label: "الرَّحِيمُ (Ar-Rahim)" },
            { id: 4, pairId: "rahim", label: "Maha Penyayang" }
          ]
        }
      },

      {
        id: "k1-lama-bab-8",
        bab: 8,
        elemen: "Akhlak",
        judul: "Aku Suka Berterima Kasih dan Disiplin",
        icon: "tahmid",
        fokusCP: "Membiasakan sikap berterima kasih kepada sesama dan hidup disiplin.",
        tujuan: [
          "Membiasakan mengucap terima kasih saat dibantu atau diberi hadiah.",
          "Mengetahui cara berterima kasih sesuai tuntunan Islam.",
          "Menunjukkan sikap disiplin waktu: bangun pagi, berangkat sekolah tepat waktu, dan tertib antre."
        ],
        materi: {
          pengantar: "Bersyukur kepada Allah tidak akan lengkap jika kita tidak berterima kasih kepada orang-orang yang telah berbuat baik kepada kita. Disiplin adalah kunci menjadi anak yang cerdas dan sukses.",
          subBab: [
            {
              subJudul: "A. Berterima Kasih kepada Sesama",
              ilustrasi: "tahmid",
              uraian: "Rasulullah saw. bersabda: 'Barangsiapa yang tidak berterima kasih kepada manusia, maka dia belum bersyukur kepada Allah'. Ucapkan 'Jazakallahu khairan' (semoga Allah membalas kebaikanmu) kepada orang yang membantu kita."
            },
            {
              subJudul: "B. Berperilaku Disiplin",
              ilustrasi: "tasbih",
              uraian: "Disiplin artinya taat pada aturan. Contohnya: meletakkan sepatu di rak, membuang bungkus makanan ke tempat sampah, dan tidur tepat waktu agar tidak terlambat salat Subuh."
            }
          ],
          rangkuman: [
            "Selalu ucapkan terima kasih kepada orang tua, guru, dan teman.",
            "Disiplin waktu membuat hidup teratur dan disenangi banyak orang."
          ],
          budiPekerti: "Mengucapkan terima kasih saat dipinjamkan pensil oleh teman sekelas."
        },
        game: {
          id: "game-k1-lama-b8",
          tipe: "knowledge-challenge",
          nama: "Pohon Budi Pekerti Santun",
          petunjuk: "Pilih ucapan yang paling santun dalam setiap situasi!",
          questions: [
            {
              tanya: "Saat Ibu selesai menyajikan sarapan lezat di meja makan, kita mengucap...",
              opsi: ["Terima kasih banyak Ibu, makanannya lezat!", "Biasa saja", "Diam saja langsung makan"],
              benar: 0,
              alasan: "Anak berbakti selalu berterima kasih atas jerih payah ibu."
            }
          ]
        }
      },

      {
        id: "k1-lama-bab-9",
        bab: 9,
        elemen: "Fikih",
        judul: "Membiasakan Hidup Bersih & Tata Cara Wudu",
        icon: "wudhu",
        fokusCP: "Mengenal kebersihan lahir batin, bersuci, dan tata cara wudu.",
        tujuan: [
          "Memahami hadis kebersihan sebagian dari iman.",
          "Mengetahui alat bersuci (air mutlak yang suci dan menyucikan).",
          "Mempraktikkan rukun dan sunah wudu secara tertib."
        ],
        materi: {
          pengantar: "Kebersihan adalah sebagian dari iman. Allah menyukai orang-orang yang senantiasa bertaubat dan membersihkan diri.",
          subBab: [
            {
              subJudul: "A. Hidup Bersih dan Suci",
              ilustrasi: "bersuci",
              uraian: "Badan yang bersih membuat kita sehat dan terhindar dari penyakit kuman. Pakaian dan tempat salat harus bersih dari najis dan kotoran."
            },
            {
              subJudul: "B. Tata Cara Berwudu",
              ilustrasi: "wudhu",
              uraian: "Wudu menggunakan air bersih yang mengalir. Rukun wudu ada 4 anggota: wajah, kedua tangan sampai siku, sebagian kepala, dan kedua kaki sampai mata kaki secara tertib."
            }
          ],
          rangkuman: [
            "Bersuci disebut thaharah.",
            "Wudu adalah syarat sah sebelum melaksanakan salat fardu."
          ],
          budiPekerti: "Mandi dua kali sehari dan memotong kuku secara teratur pada hari Jumat."
        },
        game: {
          id: "game-k1-lama-b9",
          tipe: "wudhu-step-builder",
          nama: "Urutan Berwudu Sempurna",
          petunjuk: "Susun urutan gerakan wudu dari awal sampai akhir!",
          steps: [
            { step: 1, nama: "Mencuci tangan & membaca basmalah" },
            { step: 2, nama: "Berkumur-kumur" },
            { step: 3, nama: "Membasuh hidung" },
            { step: 4, nama: "Membasuh seluruh wajah" },
            { step: 5, nama: "Membasuh tangan hingga siku" },
            { step: 6, nama: "Mengusap sebagian rambut/kepala" },
            { step: 7, nama: "Mengusap kedua telinga" },
            { step: 8, nama: "Membasuh kaki sampai mata kaki" },
            { step: 9, nama: "Tertib dan berdoa setelah wudu" }
          ]
        }
      },

      {
        id: "k1-lama-bab-10",
        bab: 10,
        elemen: "Sejarah Peradaban Islam",
        judul: "Nabi Adam a.s. Manusia Pertama",
        icon: "nabi-adam",
        fokusCP: "Menceritakan penciptaan Nabi Adam a.s., tinggal di surga, dan keteladanan sikap taubatnya.",
        tujuan: [
          "Menceritakan kisah penciptaan Nabi Adam a.s. dari tanah liat.",
          "Mengetahui sifat sombong Iblis yang menolak perintah Allah.",
          "Meneladani kerendahan hati Nabi Adam a.s. yang segera bertaubat saat khilaf."
        ],
        materi: {
          pengantar: "Nabi Adam a.s. adalah nenek moyang seluruh manusia di muka bumi. Allah menciptakannya dengan sempurna dan memuliakannya.",
          subBab: [
            {
              subJudul: "A. Penciptaan dan Ujian di Surga",
              ilustrasi: "nabi-adam",
              uraian: "Allah Swt. menciptakan Nabi Adam dari tanah dan istrinya bernama Hawa. Mereka tinggal di surga yang indah. Iblis memperdaya mereka agar memakan buah pohon khuldi yang dilarang Allah."
            },
            {
              subJudul: "B. Taubat Nabi Adam a.s.",
              ilustrasi: "tahmid",
              uraian: "Nabi Adam sangat menyesal dan tidak mencari kambing hitam. Beliau langsung berdoa memohon ampunan kepada Allah Swt.",
              doaTaubat: {
                arab: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
                latin: "Rabbanā ẓalamnā anfusanā wa illam tagfir lanā wa tarḥamnā lanakūnanna minal-khāsirīn",
                arti: "Ya Tuhan kami, kami telah menzalimi diri kami sendiri. Jika Engkau tidak mengampuni kami dan memberi rahmat kepada kami, niscaya kami termasuk orang-orang yang rugi."
              }
            }
          ],
          rangkuman: [
            "Nabi Adam a.s. manusia pertama ciptaan Allah.",
            "Iblis dikeluarkan dari surga karena bersikap sombong.",
            "Teladan Nabi Adam: Rendah hati, mengakui kesalahan, dan memohon maaf."
          ],
          budiPekerti: "Jika berbuat salah kepada teman, segera meminta maaf dan berjanji tidak mengulanginya."
        },
        game: {
          id: "game-k1-lama-b10",
          tipe: "knowledge-challenge",
          nama: "Petualangan Kebaikan Nabi Adam a.s.",
          petunjuk: "Pilih jawaban yang benar seputar kisah Nabi Adam a.s.!",
          questions: [
            {
              tanya: "Nabi Adam a.s. diciptakan oleh Allah Swt. dari...",
              opsi: ["Tanah", "Cahaya", "Batu"],
              benar: 0,
              alasan: "Nabi Adam diciptakan dari tanah liat."
            },
            {
              tanya: "Apa yang dilakukan Nabi Adam a.s. saat menyadari telah bersalah?",
              opsi: ["Segera bertaubat dan memohon ampun kepada Allah", "Menyalahkan orang lain", "Pura-pura lupa"],
              benar: 0,
              alasan: "Nabi Adam langsung berdoa memohon ampunan Allah."
            }
          ]
        }
      }
    ]
  },

  // =========================================================================
  // 2. KURIKULUM CP BARU (Berdasarkan Revisi BSKAP 020/2026 Word Docx)
  // =========================================================================
  cpBaru: {
    deskripsi: "Kurikulum berdasarkan Keputusan BSKAP No. 020/2026 (Perubahan CP Fase A). Memuat materi baru: Makhārijul Ḥuruf, Tasbih & Tahmid terstruktur, Adab Istinja, dan Kisah Keteladanan Nabi Idris a.s.",
    semester1: [
      {
        id: "k1-baru-bab-1",
        bab: 1,
        elemen: "Al-Qur'an dan Hadis",
        judul: "Huruf Hijaiah & Makhārijul Ḥuruf Berharakat",
        icon: "makhraj",
        fokusCP: "Membaca, membedakan makhraj huruf, dan melafalkan huruf berharakat lengkap.",
        tujuan: [
          "Mengenal tempat-tempat keluarnya huruf hijaiah (Makhārijul Ḥuruf) secara visual dan audio.",
          "Membedakan bunyi huruf tenggorokan (Al-Halaq), huruf dua bibir (Asy-Syafatain), dan huruf lidah (Al-Lisan).",
          "Membaca huruf hijaiah berharakat fathah, kasrah, dammah, tanwin, dan sukun dengan makhraj yang benar."
        ],
        materi: {
          pengantar: "Pada CP Baru 020/2026, anak-anak kelas 1 sejak awal semester 1 tidak hanya mengenal bentuk huruf, tetapi langsung dilatih melafalkan tempat keluar suara huruf (Makhārijul Ḥuruf) agar fasih membaca Al-Qur'an.",
          subBab: [
            {
              subJudul: "A. Apa itu Makhārijul Ḥuruf?",
              ilustrasi: "makhraj",
              uraian: "Makhraj artinya tempat keluar. Makhārijul Ḥuruf adalah bagian mulut dan tenggorokan tempat bunyi huruf hijaiah dibunyikan. Tiga makhraj utama yang dipelajari di kelas 1:",
              makhrajList: [
                {
                  nama: "1. Al-Halaq (Tenggorokan)",
                  huruf: "ء (Hamzah), هـ (Ha), ع ('Ain), ح (Ha halus), غ (Gain), خ (Kha)",
                  cara: "Bunyi keluar dari pita suara di tenggorokan bawah, tengah, dan atas.",
                  contoh: "Lafal 'A-I-U', bunyi 'Ha' pedas di tengah tenggorokan."
                },
                {
                  nama: "2. Asy-Syafatain (Kedua Bibir)",
                  huruf: "ب (Ba), م (Mim), و (Wau), ف (Fa)",
                  cara: "Bunyi keluar dengan merapatkan atau membulatkan kedua bibir.",
                  contoh: "Huruf Ba dan Mim merapatkan bibir; Fa gigi seri atas menempel ke bibir bawah."
                },
                {
                  nama: "3. Al-Lisan (Lidah)",
                  huruf: "ت (Ta), د (Dal), ط (Tha), ر (Ra), ل (Lam), ن (Nun)",
                  cara: "Ujung lidah menempel ke gusi atau pangkal gigi seri atas.",
                  contoh: "Lafalkan 'Ta-Ti-Tu', 'Da-Di-Du' dengan ujung lidah tegak."
                }
              ]
            },
            {
              subJudul: "B. Huruf Hijaiah Berharakat Lengkap",
              ilustrasi: "tajwid",
              uraian: "Melatih pelafalan makhraj huruf dengan harakat Fathah (a), Kasrah (i), Dammah (u), serta Sukun (mati). Contoh latihan membaca:",
              contohLatihan: [
                { lafal: "أَ - إِ - أُ", baca: "A - I - U (Tenggorokan bawah)" },
                { lafal: "بَ - بِ - بُ - أَبْ", baca: "Ba - Bi - Bu - Ab (Dua bibir)" },
                { lafal: "حَ - حِ - حُ - أَحْ", baca: "Ha - Hi - Hu - Ah (Tenggorokan tengah halus)" },
                { lafal: "مَ - مِ - مُ - أَمْ", baca: "Ma - Mi - Mu - Am (Bibir merapat)" }
              ]
            }
          ],
          rangkuman: [
            "Makharijul huruf adalah tempat keluarnya huruf dari tenggorokan, lidah, atau bibir.",
            "Huruf bibir: Ba, Mim, Wau, Fa.",
            "Huruf tenggorokan: Hamzah, Ha, 'Ain, Ha halus, Gain, Kha."
          ],
          budiPekerti: "Berlatih mengaji dengan sabar dan memperhatikan contoh pelafalan dari ibu guru."
        },
        game: {
          id: "game-k1-baru-b1",
          tipe: "hijaiyah-catcher",
          nama: "Tantangan Makhraj Pop Ceria",
          petunjuk: "Pilih kelompok huruf sesuai dengan tempat keluar suaranya (makhraj)!",
          levels: [
            {
              pertanyaan: "Huruf apakah yang keluar dengan cara merapatkan kedua bibir (Asy-Syafatain)?",
              opsi: [{ teks: "ب (Ba) dan م (Mim)", benar: true }, { teks: "ع ('Ain) dan ح (Ha)", benar: false }, { teks: "ق (Qaf) dan ك (Kaf)", benar: false }],
              penjelasan: "Huruf Ba dan Mim diucapkan dengan mengatupkan bibir atas dan bawah."
            },
            {
              pertanyaan: "Huruf Hamzah (ء) dan Ha (هـ) berbunyi dari bagian mana?",
              opsi: [{ teks: "Al-Halaq (Tenggorokan bawah)", benar: true }, { teks: "Kedua bibir", benar: false }, { teks: "Hidung", benar: false }],
              penjelasan: "Hamzah dan Ha besar keluar dari pangkal tenggorokan terdalam."
            }
          ]
        }
      },

      {
        id: "k1-baru-bab-2",
        bab: 2,
        elemen: "Akidah",
        judul: "Rukun Iman Sahabat Hatiku",
        icon: "rukun-iman",
        fokusCP: "Menjelaskan dan meyakini 6 rukun iman dalam keseharian siswa.",
        tujuan: [
          "Menyebutkan 6 rukun iman secara berurutan dan hafal di luar kepala.",
          "Meyakini dalam hati bahwa Allah adalah Pencipta yang Maha Melihat segala perbuatan kita.",
          "Mengetahui bahwa malaikat mencatat setiap amal baik dan buruk manusia."
        ],
        materi: {
          pengantar: "Rukun Iman adalah sahabat hati anak muslim. Iman menuntun hati kita agar selalu merasa dekat dengan Allah Swt. di mana pun kita berada.",
          subBab: [
            {
              subJudul: "A. Makna Beriman dalam Keseharian",
              ilustrasi: "rukun-iman",
              uraian: "Beriman bukan sekadar dihafalkan, melainkan dipraktikkan. Anak yang beriman kepada Allah tidak akan berbuat curang saat ujian sekolah karena yakin Allah Maha Melihat (Al-Bashir)."
            },
            {
              subJudul: "B. Enam Bintang Rukun Iman",
              ilustrasi: "iman",
              uraian: "1. Iman kepada Allah, 2. Iman kepada Malaikat, 3. Iman kepada Kitab, 4. Iman kepada Rasul, 5. Iman kepada Hari Akhir, 6. Iman kepada Takdir Qada dan Qadar."
            }
          ],
          rangkuman: [
            "Iman artinya percaya dalam hati dan dibuktikan dengan sikap jujur.",
            "Rukun iman ada 6 perkara pokok."
          ],
          budiPekerti: "Merasa diawasi oleh Allah sehingga selalu berbuat baik meski tidak ada orang yang melihat."
        },
        game: {
          id: "game-k1-baru-b2",
          tipe: "rukun-sorter",
          nama: "Bintang 6 Rukun Iman Sejati",
          petunjuk: "Susun 6 rukun iman mulai dari rukun nomor 1 hingga 6!",
          itemsUrut: [
            { urutan: 1, teks: "1. Iman kepada Allah Swt." },
            { urutan: 2, teks: "2. Iman kepada Malaikat Allah" },
            { urutan: 3, teks: "3. Iman kepada Kitab-Kitab Allah" },
            { urutan: 4, teks: "4. Iman kepada Rasul-Rasul Allah" },
            { urutan: 5, teks: "5. Iman kepada Hari Kiamat" },
            { urutan: 6, teks: "6. Iman kepada Qada dan Qadar" }
          ]
        }
      },

      {
        id: "k1-baru-bab-3",
        bab: 3,
        elemen: "Akhlak",
        judul: "Akhlak terhadap Allah: Menyucikan-Nya (Tasbih)",
        icon: "tasbih",
        fokusCP: "Menerapkan pembiasaan menyucikan Allah Swt. dari sifat kekurangan dengan kalimat Tasbih.",
        tujuan: [
          "Melafalkan kalimat Tasbih 'Subhanallah' secara tartil dan fasih.",
          "Memahami arti menyucikan Allah dari sifat lemah, kantuk, lelah, dan salah.",
          "Membiasakan mengucap Tasbih saat melihat pemandangan indah atau kebesaran ciptaan Allah."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Di CP 020/2026, materi semester 1 berfokus secara mendalam pada Akhlak terhadap Allah Swt. dengan MENYUCIKAN-NYA melalui kalimat Tasbih 'Subhanallah'.",
          subBab: [
            {
              subJudul: "A. Mengenal Kalimat Tasbih",
              ilustrasi: "tasbih",
              lafal: {
                arab: "سُبْحَانَ اللَّهِ",
                latin: "Subḥānallāh",
                arti: "Maha Suci Allah."
              },
              uraian: "Allah itu Maha Suci. Allah tidak pernah tidur, tidak pernah lelah, tidak membutuhkan makan, dan tidak memiliki kekurangan apa pun."
            },
            {
              subJudul: "B. Kapan Kita Membaca Tasbih?",
              ilustrasi: "quran",
              uraian: "Kita membaca Subhanallah ketika: 1. Melihat keindahan alam ciptaan Allah (gunung yang megah, bintang bertaburan, bunga bermekaran), 2. Saat berzikir setelah selesai salat fardu sebanyak 33 kali, 3. Saat mendengar hal yang tidak pantas disandarkan kepada Allah."
            }
          ],
          rangkuman: [
            "Menyucikan Allah diucapkan dengan kalimat Tasbih: Subhanallah.",
            "Allah Maha Suci dari segala cela, kelemahan, dan kekurangan."
          ],
          budiPekerti: "Rutin berzikir membaca Subhanallah 33 kali setiap selesai salat lima waktu."
        },
        game: {
          id: "game-k1-baru-b3",
          tipe: "kalimat-thayyibah-match",
          nama: "Cahaya Zikir Tasbih",
          petunjuk: "Tentukan peristiwa yang tepat untuk mengucap Subhanallah!",
          situasi: [
            {
              kejadian: "Melihat hamparan pemandangan laut yang biru dan indah...",
              jawabanBenar: "Subḥānallāh (Maha Suci Allah)",
              opsi: ["Subḥānallāh (Maha Suci Allah)", "Astaghfirullah", "Bismillah"]
            },
            {
              kejadian: "Melihat pelangi yang memukau membentang di langit sore...",
              jawabanBenar: "Subḥānallāh (Maha Suci Allah)",
              opsi: ["Subḥānallāh (Maha Suci Allah)", "Alhamdulillah", "Allahu Akbar"]
            }
          ]
        }
      },

      {
        id: "k1-baru-bab-4",
        bab: 4,
        elemen: "Fikih",
        judul: "Rukun Islam dan Syahadatain",
        icon: "rukun-islam",
        fokusCP: "Menerapkan nilai rukun Islam dan mengucapkan syahadatain dengan benar.",
        tujuan: [
          "Menghafal 5 rukun Islam secara urut beserta praktiknya.",
          "Mengucapkan Syahadat Tauhid dan Syahadat Rasul secara fasih.",
          "Mengetahui bahwa Syahadatain adalah rukun Islam yang pertama dan paling utama."
        ],
        materi: {
          pengantar: "Rukun Islam adalah lima amalan lahiriah yang wajib dijalankan oleh seorang muslim. Tanpa rukun Islam, keislaman seseorang belum sempurna.",
          subBab: [
            {
              subJudul: "A. Bangunan Rukun Islam",
              ilustrasi: "rukun-islam",
              uraian: "1. Syahadatain, 2. Salat 5 Waktu, 3. Zakat, 4. Puasa Ramadan, 5. Haji ke Baitullah jika mampu."
            },
            {
              subJudul: "B. Dua Kalimat Syahadat",
              ilustrasi: "mosque",
              syahadatTauhid: {
                arab: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ",
                latin: "Asyhadu allā ilāha illallāh",
                arti: "Aku bersaksi bahwa tiada Tuhan selain Allah."
              },
              syahadatRasul: {
                arab: "وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ",
                latin: "Wa asyhadu anna Muḥammadar rasūlullāh",
                arti: "Dan aku bersaksi bahwa Nabi Muhammad adalah utusan Allah."
              }
            }
          ],
          rangkuman: [
            "Rukun Islam ada 5 perkara amalan lahiriah.",
            "Syahadatain terdiri dari Syahadat Tauhid dan Syahadat Rasul."
          ],
          budiPekerti: "Rajin berangkat ke masjid bersama ayah untuk salat berjamaah."
        },
        game: {
          id: "game-k1-baru-b4",
          tipe: "rukun-islam-pilar",
          nama: "Menara Rukun Islam",
          petunjuk: "Susun 5 pilar rukun Islam agar masjid berdiri tegak!",
          pilars: [
            { urut: 1, nama: "1. Syahadat", deskripsi: "Pondasi persaksian iman" },
            { urut: 2, nama: "2. Salat", deskripsi: "Tiang tiang ibadah harian" },
            { urut: 3, nama: "3. Zakat", deskripsi: "Pembersih harta bagi sesama" },
            { urut: 4, nama: "4. Puasa", deskripsi: "Menahan diri di bulan Ramadan" },
            { urut: 5, nama: "5. Haji", deskripsi: "Ibadah ke Makkah bagi yang mampu" }
          ]
        }
      },

      {
        id: "k1-baru-bab-5",
        bab: 5,
        elemen: "Sejarah Peradaban Islam",
        judul: "Kisah Keteladanan Nabi Adam a.s.",
        icon: "nabi-adam",
        fokusCP: "Menceritakan kembali kisah keteladanan Nabi Adam a.s. dalam hal taubat dan kerendahan hati.",
        tujuan: [
          "Menceritakan kisah Nabi Adam a.s. sebagai manusia pertama dan nabi pertama.",
          "Menjelaskan penyebab Iblis diusir dari surga karena takabur.",
          "Meneladani sikap Nabi Adam a.s. yang berani mengakui kesalahan dan segera bertaubat."
        ],
        materi: {
          pengantar: "Nabi Adam a.s. mengajarkan kepada kita bahwa manusia bisa berbuat keliru, namun manusia yang paling dicintai Allah adalah orang yang segera mengakui kekhilafannya dan bertaubat dengan sungguh-sungguh.",
          subBab: [
            {
              subJudul: "A. Nabi Adam dan Iblis yang Sombong",
              ilustrasi: "nabi-adam",
              uraian: "Allah memerintahkan para malaikat dan iblis bersujud hormat kepada Nabi Adam. Malaikat taat, namun Iblis sombong membangkang karena merasa dirinya lebih mulia terbuat dari api sedangkan Adam dari tanah."
            },
            {
              subJudul: "B. Taubat Tulus Nabi Adam a.s.",
              ilustrasi: "tahmid",
              uraian: "Nabi Adam khilaf memakan buah pohon khuldi karena terbujuk rayuan Iblis. Beliau sangat sedih dan segera memohon ampun dengan berdoa: 'Rabbanā ẓalamnā anfusanā...'. Allah Maha Pengampun menerima taubat Nabi Adam a.s."
            }
          ],
          rangkuman: [
            "Sombong adalah sifat tercela Iblis yang harus dijauhi.",
            "Nabi Adam a.s. adalah teladan kerendahan hati dan taubat tulus."
          ],
          budiPekerti: "Jangan sombong dengan kepintaran atau pakaian bagus yang kita miliki."
        },
        game: {
          id: "game-k1-baru-b5",
          tipe: "knowledge-challenge",
          nama: "Jejak Teladan Nabi Adam",
          petunjuk: "Pilih sikap terpuji yang meneladani Nabi Adam a.s.!",
          questions: [
            {
              tanya: "Mengapa Iblis sombong menolak perintah Allah?",
              opsi: ["Karena merasa dirinya lebih mulia terbuat dari api", "Karena tidak mendengar", "Karena malas"],
              benar: 0,
              alasan: "Iblis menganggap api lebih mulia daripada tanah liat."
            },
            {
              tanya: "Saat kita tidak sengaja merusakkan mainan teman, apa yang harus kita lakukan?",
              opsi: ["Segera meminta maaf dengan tulus dan bertanggung jawab", "Lari dan sembunyi", "Menyalahkan teman lain"],
              benar: 0,
              alasan: "Anak saleh meneladani Nabi Adam yang berani mengakui kesalahan."
            }
          ]
        }
      }
    ],

    semester2: [
      {
        id: "k1-baru-bab-6",
        bab: 6,
        elemen: "Al-Qur'an dan Hadis",
        judul: "Huruf Bersambung (2 Huruf) & Surah al-Fātiḥah",
        icon: "quran",
        fokusCP: "Membaca sambungan 2 huruf hijaiah dan melafalkan Surah al-Fatihah secara tartil.",
        tujuan: [
          "Mengenal aturan perubahan bentuk huruf saat menyambung dua huruf hijaiah.",
          "Mengetahui 6 huruf yang tidak bisa menyambung ke huruf setelahnya (Alif, Dal, Dzal, Ra, Zai, Wau).",
          "Membaca dan menghafal Surah Al-Fatihah ayat 1 sampai 7 beserta artinya."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Di CP 020/2026, materi semester 2 difokuskan pada menyambung DUA HURUF saja (agar ramah anak kelas 1) dan mengkaji Surah Al-Fatihah sebagai Ummul Qur'an.",
          subBab: [
            {
              subJudul: "A. Aturan Menyambung 2 Huruf Hijaiah",
              ilustrasi: "hijaiyah",
              uraian: "Bila huruf hijaiah disambung, umumnya bentuk badannya disederhanakan dan kepalanya tetap. Namun ingat, ada 6 huruf yang TIDAK BISA menyambung ke sebelah kiri:",
              enamHuruf: "ا (Alif), د (Dal), ذ (Dzal), ر (Ra), ز (Zai), و (Wau)",
              contohSambung: [
                { terpisah: "بَ - تKey", gabung: "بَتَ", baca: "Bata" },
                { terpisah: "نَ - مَ", gabung: "نَمَ", baca: "Nama" },
                { terpisah: "دَ - رَ", gabung: "دَرَ", baca: "Dara (keduanya tidak bisa bersambung)" }
              ]
            },
            {
              subJudul: "B. Surah Al-Fātihah (Pembukaan)",
              ilustrasi: "quran",
              uraian: "Surah Al-Fatihah wajib dibaca setiap rakaat salat fardu:",
              ayatList: [
                { no: 1, arab: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", latin: "Bismillāhir-raḥmānir-raḥīm", arti: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang." },
                { no: 2, arab: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", latin: "Al-ḥamdu lillāhi rabbil-'ālamīn", arti: "Segala puji bagi Allah, Tuhan seluruh alam." },
                { no: 3, arab: "الرَّحْمَٰنِ الرَّحِيمِ", latin: "Ar-raḥmānir-raḥīm", arti: "Yang Maha Pengasih, Maha Penyayang." },
                { no: 4, arab: "مَالِكِ يَوْمِ الدِّينِ", latin: "Māliki yaumid-dīn", arti: "Pemilik hari pembalasan." },
                { no: 5, arab: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", latin: "Iyyāka na'budu wa iyyāka nasta'īn", arti: "Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami mohon pertolongan." },
                { no: 6, arab: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", latin: "Ihdinaṣ-ṣirāṭal-mustaqīm", arti: "Tunjukilah kami jalan yang lurus." },
                { no: 7, arab: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", latin: "Ṣirāṭallażīna an'amta 'alaihim gairil-magḍūbi 'alaihim walāḍ-ḍāllīn", arti: "(yaitu) jalan orang-orang yang telah Engkau beri nikmat; bukan jalan mereka yang dimurkai dan bukan pula mereka yang sesat." }
              ]
            }
          ],
          rangkuman: [
            "Ada 6 huruf yang tidak bisa menyambung ke huruf sebelah kiri.",
            "Surah Al-Fatihah terdiri dari 7 ayat dan wajib dibaca dalam setiap rakaat salat."
          ],
          budiPekerti: "Membaca Surah Al-Fatihah dengan tartil dan meresapi maknanya saat salat."
        },
        game: {
          id: "game-k1-baru-b6",
          tipe: "connect-letters",
          nama: "Kereta Surah Al-Fatihah",
          petunjuk: "Susun ayat 1 sampai 4 Surah Al-Fatihah secara urut!",
          gerbong: [
            { urutan: 1, teks: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ (Ayat 1)" },
            { urutan: 2, teks: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (Ayat 2)" },
            { urutan: 3, teks: "الرَّحْمَٰنِ الرَّحِيمِ (Ayat 3)" },
            { urutan: 4, teks: "مَالِكِ يَوْمِ الدِّينِ (Ayat 4)" }
          ]
        }
      },

      {
        id: "k1-baru-bab-7",
        bab: 7,
        elemen: "Akidah",
        judul: "Iman kepada Allah Swt. Melalui Ciptaan-Nya",
        icon: "rukun-iman",
        fokusCP: "Meyakini keberadaan Allah Swt. melalui pengamatan keagungan ciptaan-Nya.",
        tujuan: [
          "Meyakini bahwa Allah itu ada meskipun tidak dapat dilihat dengan mata kepala.",
          "Menyebutkan bukti-bukti keberadaan Allah di alam semesta dan pada diri manusia.",
          "Bersyukur atas nikmat mata, telinga, tangan, dan akal yang Allah berikan."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Di CP 020/2026, materi Akidah semester 2 berfokus penuh pada IMAN KEPADA ALLAH SWT. melalui pengamatan keteraturan alam semesta.",
          subBab: [
            {
              subJudul: "A. Allah Maha Pencipta (Al-Khāliq)",
              ilustrasi: "eco",
              uraian: "Jika ada meja, pasti ada pengrajin yang membuatnya. Jika ada lukisan, pasti ada pelukisnya. Begitu pula dengan langit yang biru tanpa tiang penyangga, bintang-bintang yang berkelap-kelip di malam hari, dan gunung-gunung yang kokoh—semuanya diciptakan oleh Allah Yang Maha Kuasa."
            },
            {
              subJudul: "B. Bukti Kasih Sayang Allah pada Diri Kita",
              ilustrasi: "asmaul-husna",
              uraian: "Allah memberi kita sepasang mata untuk melihat hal baik, telinga untuk mendengar lantunan Al-Qur'an dan nasihat guru, serta hati untuk menyayangi orang tua dan sesama teman."
            }
          ],
          rangkuman: [
            "Allah ada dan Maha Kuasa, terbukti dari alam semesta ciptaan-Nya.",
            "Semua nikmat anggota badan wajib digunakan untuk beribadah dan kebaikan."
          ],
          budiPekerti: "Menjaga pandangan mata dan pendengaran dari hal-hal yang tidak baik."
        },
        game: {
          id: "game-k1-baru-b7",
          tipe: "knowledge-challenge",
          nama: "Detektif Ciptaan Allah",
          petunjuk: "Pilih mana yang merupakan bukti ciptaan Allah Swt.!",
          questions: [
            {
              tanya: "Benda langit yang diciptakan Allah untuk menerangi bumi di siang hari adalah...",
              opsi: ["Matahari", "Lampu neon", "Lilin"],
              benar: 0,
              alasan: "Matahari adalah ciptaan Allah yang luar biasa menerangi seluruh bumi."
            }
          ]
        }
      },

      {
        id: "k1-baru-bab-8",
        bab: 8,
        elemen: "Akhlak",
        judul: "Akhlak terhadap Allah: Memuji-Nya (Tahmid)",
        icon: "tahmid",
        fokusCP: "Menerapkan pujian kepada Allah dengan kalimat Tahmid (Alhamdulillah) serta berterima kasih kepada sesama.",
        tujuan: [
          "Melafalkan kalimat Tahmid 'Alhamdulillah' dengan benar beserta artinya.",
          "Mengetahui bahwa segala puji dan kebaikan bersumber dari karunia Allah Swt.",
          "Membiasakan mengucap terima kasih kepada orang tua, bapak/ibu guru, dan teman."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Pada CP 020/2026, materi akhlak semester 2 berpasangan dengan semester 1. Jika semester 1 adalah Menyucikan Allah (Tasbih), maka semester 2 adalah MEMUJI ALLAH (Tahmid 'Alhamdulillah').",
          subBab: [
            {
              subJudul: "A. Mengenal Kalimat Tahmid",
              ilustrasi: "tahmid",
              lafal: {
                arab: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                latin: "Al-ḥamdu lillāhi rabbil-'ālamīn",
                arti: "Segala puji bagi Allah, Tuhan seluruh alam."
              },
              uraian: "Manusia yang mendapat pujian tidak boleh sombong, karena kelebihan yang ia miliki adalah titipan dari Allah Swt."
            },
            {
              subJudul: "B. Momen Membaca Tahmid & Terima Kasih",
              ilustrasi: "tasbih",
              uraian: "1. Selesai makan dan minum, 2. Saat bersin (membaca Alhamdulillah, dan yang mendengar menjawab Yarhamukallah), 3. Saat sembuh dari sakit atau mendapat nilai baik di sekolah, 4. Berterima kasih kepada orang yang membantu kita."
            }
          ],
          rangkuman: [
            "Kalimat tahmid adalah 'Alhamdulillah'.",
            "Segala pujian sesungguhnya hanya milik Allah Swt.",
            "Anak saleh selalu berterima kasih kepada orang tua dan guru."
          ],
          budiPekerti: "Mengucap Alhamdulillah dan tersenyum saat menerima rapor hasil belajar."
        },
        game: {
          id: "game-k1-baru-b8",
          tipe: "kalimat-thayyibah-match",
          nama: "Pohon Tahmid Bersyukur",
          petunjuk: "Pilih ucapan yang tepat untuk setiap momen syukur!",
          situasi: [
            {
              momen: "Ketika kamu bersin di kelas, sunnah membaca...",
              pilihan: ["Alhamdulillah", "Subhanallah", "Bismillah"],
              jawabanBenar: "Alhamdulillah"
            },
            {
              momen: "Mendengar teman bersin mengucap Alhamdulillah, kita membalas dengan doa...",
              pilihan: ["Yarhamukallāh", "Astaghfirullah", "Sama-sama"],
              jawabanBenar: "Yarhamukallāh"
            }
          ]
        }
      },

      {
        id: "k1-baru-bab-9",
        bab: 9,
        elemen: "Fikih",
        judul: "Tata Cara Bersuci: Wudu, Tayamum & Istinja",
        icon: "bersuci",
        fokusCP: "Menerapkan tata cara bersuci (Wudu, Tayamum, dan Adab Istinja) secara benar dan higienis.",
        tujuan: [
          "Mengetahui adab buang air dan tata cara istinja (membersihkan najis setelah buang air kecil/besar).",
          "Mempraktikkan langkah-langkah berwudu secara urut dan tertib.",
          "Mengenal tata cara tayamum menggunakan debu suci saat tidak ada air atau sakit."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Di CP 020/2026, materi Fikih semester 2 secara khusus memasukkan materi ADAB ISTINJA (membersihkan diri setelah buang air) agar anak-anak mandiri dan menjaga kebersihan pakaiannya dari najis kencing.",
          subBab: [
            {
              subJudul: "A. Mengenal Adab Istinja yang Higienis",
              ilustrasi: "bersuci",
              uraian: "Istinja artinya membersihkan kotoran yang keluar dari qubul (depan) atau dubur (belakang). Adab buang air dalam Islam:",
              adabIstinja: [
                "Masuk kamar mandi mendahulukan kaki kiri dan membaca doa masuk kamar mandi.",
                "Buang air sambil jongkok atau duduk (tidak boleh sambil berdiri bagi anak laki-laki).",
                "Membersihkan kemaluan dengan air bersih menggunakan tangan kiri sampai bersih dan tidak berbau.",
                "Keluar kamar mandi mendahulukan kaki kanan dan membaca doa keluar kamar mandi."
              ]
            },
            {
              subJudul: "B. Praktik Wudu dan Tayamum",
              ilustrasi: "wudhu",
              uraian: "Wudu membasuh wajah, tangan, kepala, dan kaki. Jika tidak ada air atau sedang sakit keras tidak boleh terkena air, wudu digantikan dengan tayamum menggunakan debu bersih dengan mengusap wajah dan kedua tangan."
            }
          ],
          rangkuman: [
            "Istinja adalah membersihkan najis setelah buang air menggunakan air bersih dan tangan kiri.",
            "Wudu dan tayamum adalah cara menyucikan diri sebelum salat."
          ],
          budiPekerti: "Selalu menyiram toilet sampai bersih dan mencuci tangan dengan sabun setelah dari kamar mandi."
        },
        game: {
          id: "game-k1-baru-b9",
          tipe: "wudhu-step-builder",
          nama: "Petualangan Bersuci Cerdas",
          petunjuk: "Urutkan tata cara wudu dan bersuci yang tepat!",
          steps: [
            { step: 1, nama: "Mencuci telapak tangan & basmalah" },
            { step: 2, nama: "Berkumur-kumur" },
            { step: 3, nama: "Membasuh lubang hidung" },
            { step: 4, nama: "Membasuh seluruh wajah" },
            { step: 5, nama: "Membasuh tangan sampai siku" },
            { step: 6, nama: "Mengusap sebagian kepala" },
            { step: 7, nama: "Mengusap daun telinga" },
            { step: 8, nama: "Membasuh kaki sampai mata kaki" },
            { step: 9, nama: "Tertib dan berdoa" }
          ]
        }
      },

      {
        id: "k1-baru-bab-10",
        bab: 10,
        elemen: "Sejarah Peradaban Islam",
        judul: "Kisah Keteladanan Nabi Idris a.s.",
        icon: "nabi-idris",
        fokusCP: "Menceritakan keteladanan Nabi Idris a.s. dalam hal ketekunan belajar, kecerdasan, dan kepandaian berinovasi.",
        tujuan: [
          "Mengenal Nabi Idris a.s. sebagai nabi kedua dari 25 nabi Allah.",
          "Mengetahui keistimewaan Nabi Idris a.s. sebagai manusia pertama yang pandai menulis dengan pena dan menjahit pakaian.",
          "Meneladani semangat Nabi Idris a.s. yang rajin belajar, tekun membaca lembaran wahyu, dan selalu berzikir.",
          "Menjadi murid yang gemar membaca buku dan bersemangat ke sekolah."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Di CP 020/2026, materi sejarah semester 2 RESMI BERUBAH dari Nabi Ibrahim menjadi KISAH KETELADANAN NABI IDRIS A.S. Sosok Nabi Idris a.s. sangat cocok menjadi teladan anak kelas 1 yang baru belajar membaca dan menulis.",
          subBab: [
            {
              subJudul: "A. Siapakah Nabi Idris a.s.?",
              ilustrasi: "nabi-idris",
              uraian: "Nabi Idris a.s. adalah keturunan Nabi Adam a.s. Beliau dinamakan 'Idris' yang berasal dari kata 'Darasa' yang artinya rajin belajar dan mengkaji ilmu wahyu Allah."
            },
            {
              subJudul: "B. Manusia Pertama yang Menulis dan Menjahit",
              ilustrasi: "nabi-idris",
              uraian: "Sebelum Nabi Idris a.s., manusia memakai pakaian dari kulit binatang yang kasar. Allah memberi ilham kecerdasan kepada Nabi Idris untuk merajut kain dan menjahit pakaian yang rapi. Beliau juga manusia pertama yang menggunakan pena untuk menulis ilmu pengetahuan."
            },
            {
              subJudul: "C. Selalu Berzikir di Setiap Tusukan Jarum",
              ilustrasi: "tasbih",
              uraian: "Setiap kali menusukkan jarum saat menjahit pakaian, bibir Nabi Idris a.s. selalu bertasbih mengucap 'Subhanallah', dan saat menarik benang beliau bertahmid 'Alhamdulillah'. Beliau sangat dicintai Allah karena tidak pernah menyia-nyiakan waktu."
            }
          ],
          rangkuman: [
            "Nabi Idris a.s. adalah manusia pertama yang menulis dengan pena dan menjahit baju.",
            "Nabi Idris dinamai Idris karena tekun mengkaji ilmu.",
            "Teladan utama: Rajin membaca, menulis rapi, dan senantiasa berzikir."
          ],
          budiPekerti: "Menyiapkan buku dan pensil sendiri di tas sebelum tidur untuk sekolah esok hari."
        },
        game: {
          id: "game-k1-baru-b10",
          tipe: "knowledge-challenge",
          nama: "Kuis Pintar Nabi Idris a.s.",
          petunjuk: "Jawablah teka-teki kepintaran Nabi Idris a.s.!",
          questions: [
            {
              tanya: "Nabi Idris a.s. adalah manusia pertama yang pandai...",
              opsi: ["Menulis dengan pena dan menjahit pakaian", "Mengendarai mobil", "Membuat pesawat"],
              benar: 0,
              alasan: "Nabi Idris dianugerahi Allah kepandaian menulis dengan pena dan menjahit baju."
            },
            {
              tanya: "Kalimat apa yang selalu diucapkan Nabi Idris saat menusukkan jarum jahit?",
              opsi: ["Subhanallah (Maha Suci Allah)", "Mengeluh capek", "Diam saja"],
              benar: 0,
              alasan: "Nabi Idris selalu bertasbih menyucikan Allah di setiap tusukan jarumnya."
            }
          ]
        }
      }
    ]
  }
};
