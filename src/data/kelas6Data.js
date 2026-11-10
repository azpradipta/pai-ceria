// Data Materi & Games PAI Kelas 6 SD (Fase C)
// Terbagi jelas antara CP LAMA (Buku Siswa Kemdikbud) dan CP BARU (Revisi BSKAP 020/2026 Word Docx)

export const kelas6Data = {
  kelas: 6,
  namaFase: "Fase C (Kelas 6 SD)",

  // =========================================================================
  // 1. KURIKULUM CP LAMA (Berdasarkan Buku Siswa Kemdikbud Cetak)
  // =========================================================================
  cpLama: {
    deskripsi: "Kurikulum berdasarkan Buku Siswa PAI & Budi Pekerti Kelas 6 Kemdikbud (CP 046/2025). Terdiri dari 10 Bab.",
    semester1: [
      {
        id: "k6-lama-bab-1",
        bab: 1,
        elemen: "Al-Qur'an dan Hadis",
        judul: "Belajar Al-Qur'an dan Hadis (Q.S. Aḍ-Ḍuḥā & Al-Kāfirūn)",
        icon: "quran",
        fokusCP: "Membaca, menulis, dan memahami pesan pokok Q.S. Ad-Duha dan hadis toleransi.",
        tujuan: [
          "Membaca Q.S. Ad-Duha dengan tartil dan fasih.",
          "Menulis kalimat dalam Q.S. Ad-Duha secara benar.",
          "Memahami pesan pokok Surah Ad-Duha: larangan menzalimi anak yatim dan menghardik pengemis.",
          "Meneladani sikap saling menghargai sesama manusia."
        ],
        materi: {
          pengantar: "Surah Ad-Duha adalah surah ke-93 yang terdiri dari 11 ayat. Surah ini diturunkan di Makkah sebagai penenang hati Rasulullah saw. dari ejekan orang kafir saat wahyu sempat terhenti sementara waktu.",
          subBab: [
            {
              subJudul: "A. Membaca dan Menulis Surah Ad-Duha",
              ilustrasi: "quran",
              ayatList: [
                { no: 1, arab: "وَالضُّحَىٰ", latin: "Waḍ-ḍuḥā", arti: "Demi waktu dhuha (ketika matahari naik sepenggalah)," },
                { no: 2, arab: "وَاللَّيْلِ إِذَا سَجَىٰ", latin: "Wal-laili iżā sajā", arti: "dan demi malam apabila telah sunyi," },
                { no: 3, arab: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ", latin: "Mā wadda'aka Rabbuka wa mā qalā", arti: "Tuhanmu tidak meninggalkan engkau (Muhammad) dan tidak (pula) membenci-mu," },
                { no: 9, arab: "فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ", latin: "Fa ammal-yatīma falā taqhar", arti: "Maka terhadap anak yatim janganlah engkau berlaku sewenang-wenang," },
                { no: 10, arab: "وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ", latin: "Wa ammas-sā'ila falā tanhar", arti: "Dan terhadap orang yang meminta-minta janganlah engkau menghardik(nya)," },
                { no: 11, arab: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ", latin: "Wa ammā bini'mati Rabbika faḥaddiṡ", arti: "Dan terhadap nikmat Tuhanmu hendaklah engkau nyatakan (dengan bersyukur)." }
              ]
            }
          ],
          rangkuman: [
            "Surah Ad-Duha mengajarkan harapan dan rasa syukur atas pemeliharaan Allah.",
            "Dilarang berlaku sewenang-wenang kepada anak yatim dan menghardik orang miskin."
          ],
          budiPekerti: "Memberi santunan dan berkata sopan kepada pengemis yang datang ke rumah."
        },
        game: {
          id: "game-k6-lama-b1",
          tipe: "knowledge-challenge",
          nama: "Kuis Surah Ad-Duha Ceria",
          petunjuk: "Jawablah seputar pesan pokok Surah Ad-Duha!",
          questions: [
            {
              tanya: "Bagaimanakah sikap yang diperintahkan terhadap anak yatim dalam Surah Ad-Duha?",
              opsi: ["Jangan berlaku sewenang-wenang / menghardik", "Dibiarkan saja", "Menjauhinya"],
              benar: 0,
              alasan: "Ayat ke-9 Surah Ad-Duha melarang kita berlaku sewenang-wenang kepada anak yatim."
            }
          ]
        }
      },

      {
        id: "k6-lama-bab-2",
        bab: 2,
        elemen: "Akidah",
        judul: "Allah Swt. Maha Segalanya (Al-Gaffār, Al-'Afuw, Al-Wāḥid, Aṣ-Ṣamad)",
        icon: "asmaul-husna",
        fokusCP: "Memahami 4 Asmaulhusna tentang ampunan dan keesaan Allah.",
        tujuan: [
          "Menjelaskan makna Asmaulhusna al-Gaffār (Maha Pengampun).",
          "Menjelaskan makna Asmaulhusna al-‘Afuw (Maha Pemaaf).",
          "Menjelaskan makna Asmaulhusna al-Wāḥid (Maha Tunggal) dan aṣ-Ṣamad (Maha Dibutuhkan).",
          "Mengetahui cara dan syarat untuk mendapatkan ampunan dari Allah Swt."
        ],
        materi: {
          pengantar: "Buku Siswa Kelas 6 membahas empat nama agung Allah yang membimbing kita untuk selalu bertaubat dan hanya bergantung kepada-Nya.",
          subBab: [
            {
              subJudul: "A. Empat Asmaul Husna",
              ilustrasi: "asmaul-husna",
              daftarAsmaul: [
                { nama: "1. Al-Gaffār (الْغَفَّارُ)", arti: "Maha Pengampun: Menutupi dosa hamba-Nya dan tidak membeberkannya di dunia maupun akhirat." },
                { nama: "2. Al-‘Afuw (الْعَفُوُّ)", arti: "Maha Pemaaf: Menghapus seluruh berkas dan akibat dosa hamba-Nya yang bertaubat sungguh-sungguh." },
                { nama: "3. Al-Wāḥid (الْوَاحِدُ)", arti: "Maha Tunggal: Allah Maha Esa, tidak memiliki sekutu atau tandingan." },
                { nama: "4. Aṣ-Ṣamad (الصَّمَدُ)", arti: "Maha Dibutuhkan: Tempat seluruh makhluk bergantung memohon pertolongan." }
              ]
            }
          ],
          rangkuman: [
            "Al-Ghaffar menutupi dosa; Al-'Afuw menghapuskan catatan dosa.",
            "Al-Wahid menegaskan keesaan Allah; Ash-Shamad tempat meminta segala urusan."
          ],
          budiPekerti: "Membiasakan membaca istighfar 'Astaghfirullahal 'Adzim' setiap hari."
        },
        game: {
          id: "game-k6-lama-b2",
          tipe: "memory-card",
          nama: "Galaksi Asmaul Husna Buku",
          petunjuk: "Cocokkan nama Asmaul Husna dengan artinya!",
          cards: [
            { id: 1, pairId: "gaffar", label: "الْغَفَّارُ (Al-Gaffār)" },
            { id: 2, pairId: "gaffar", label: "Maha Pengampun" },
            { id: 3, pairId: "samad", label: "الصَّمَدُ (Aṣ-Ṣamad)" },
            { id: 4, pairId: "samad", label: "Maha Dibutuhkan" }
          ]
        }
      },

      {
        id: "k6-lama-bab-3",
        bab: 3,
        elemen: "Akhlak",
        judul: "Hidup Damai dengan Saling Memaafkan",
        icon: "sahabat",
        fokusCP: "Menerapkan sikap pemaaf dan toleransi terhadap non-muslim.",
        tujuan: [
          "Menjelaskan pengertian maaf dan pentingnya menyatakan penyesalan.",
          "Mengetahui keutamaan orang yang memberi maaf terlebih dahulu.",
          "Menerapkan kerukunan hidup berdampingan dengan warga non-muslim."
        ],
        materi: {
          pengantar: "Memaafkan adalah ciri orang bertakwa. Menyimpan dendam hanya akan membuat hati resah, sedangkan memaafkan melapangkan dada dan mendatangkan cinta Allah.",
          subBab: [
            {
              subJudul: "A. Keutamaan Memberi Maaf",
              ilustrasi: "sahabat",
              uraian: "Rasulullah saw. bersabda bahwa orang yang memaafkan kesalahan orang lain tidak akan menjadi rendah, melainkan Allah akan menambah kemuliaan derajatnya."
            }
          ],
          rangkuman: [
            "Memaafkan adalah akhlak mulia para nabi.",
            "Hidup rukun dengan tetangga yang berbeda keyakinan menciptakan kedamaian."
          ],
          budiPekerti: "Langsung memaafkan teman yang tidak sengaja merusakkan barang kita."
        },
        game: {
          id: "game-k6-lama-b3",
          tipe: "knowledge-challenge",
          nama: "Taman Kedamaian Hati",
          petunjuk: "Pilih sikap yang menciptakan perdamaian!",
          questions: [
            {
              tanya: "Apakah balasan dari Allah bagi orang yang memaafkan kesalahan orang lain?",
              opsi: ["Allah menambah kemuliaan derajatnya", "Allah menghukumnya", "Menjadi orang yang rugi"],
              benar: 0,
              alasan: "Rasulullah bersabda memaafkan akan menambah kemuliaan hamba di sisi Allah."
            }
          ]
        }
      },

      {
        id: "k6-lama-bab-4",
        bab: 4,
        elemen: "Fikih",
        judul: "Hukum Halal dan Haram",
        icon: "halal",
        fokusCP: "Memahami definisi, dasar hukum, dan sebab halal-haram dalam makanan dan perbuatan.",
        tujuan: [
          "Menjelaskan pengertian halal dan haram menurut syariat Islam.",
          "Mengetahui dasar hukum halal dan haram dalam Al-Qur'an dan Sunnah.",
          "Menganalisis sebab-sebab suatu makanan menjadi haram dikonsumsi."
        ],
        materi: {
          pengantar: "Buku Siswa Kelas 6 membahas aturan halal dan haram secara mendalam agar siswa mampu menjaga kesucian diri dan makanannya di era modern.",
          subBab: [
            {
              subJudul: "A. Definisi Halal dan Haram",
              ilustrasi: "halal",
              uraian: "Halal adalah segala sesuatu yang diizinkan dan dibolehkan oleh syariat untuk dikonsumsi atau dikerjakan. Haram adalah segala hal yang dilarang keras dan berdosa jika dilakukan."
            }
          ],
          rangkuman: [
            "Konsumsi halal membawa kesehatan jasmani dan ketenteraman rohani.",
            "Makanan haram merusak akhlak dan menghalangi terkabulnya doa."
          ],
          budiPekerti: "Selalu meneliti label halal BPJPH/MUI saat membeli makanan ringan di swalayan."
        },
        game: {
          id: "game-k6-lama-b4",
          tipe: "knowledge-challenge",
          nama: "Uji Cerdas Halal Haram",
          petunjuk: "Tentukan status hukum perkara berikut!",
          questions: [
            {
              tanya: "Bangkai ayam yang mati karena tertabrak kendaraan hukum memakannya adalah...",
              opsi: ["Haram", "Halal", "Mubah"],
              benar: 0,
              alasan: "Bangkai selain ikan dan belalang haram dimakan."
            }
          ]
        }
      },

      {
        id: "k6-lama-bab-5",
        bab: 5,
        elemen: "Sejarah Peradaban Islam",
        judul: "Jasa Khulafaurrasyidin untuk Dunia (Abu Bakar & Umar)",
        icon: "khulafaur-rasyidin",
        fokusCP: "Menceritakan biografi dan perjuangan kepemimpinan Abu Bakar as-Siddiq dan Umar bin Khattab.",
        tujuan: [
          "Menceritakan jasa Khalifah Abu Bakar: Memerangi nabi palsu dan mengumpulkan mushaf Al-Qur'an.",
          "Menceritakan jasa Khalifah Umar: Menetapkan kalender Hijriah dan administrasi Baitul Mal.",
          "Meneladani kejujuran as-Siddiq dan ketegasan al-Faruq."
        ],
        materi: {
          pengantar: "Abu Bakar ash-Shiddiq dan Umar bin Khattab adalah dua pilar kepemimpinan awal setelah wafatnya Rasulullah saw. yang berhasil menjaga keutuhan akidah Islam dan memperluas peradaban dunia.",
          subBab: [
            {
              subJudul: "A. Abu Bakar aṣ-Ṣiddīq r.a.",
              ilustrasi: "khulafaur-rasyidin",
              uraian: "Menumpas nabi palsu (Musailamah al-Kadzdzab) dan memprakarsai pengumpulan lembaran-lembaran Al-Qur'an yang dipimpin oleh Zaid bin Tsabit."
            },
            {
              subJudul: "B. Umar bin Khaṭṭāb r.a.",
              ilustrasi: "khulafaur-rasyidin",
              uraian: "Menata sistem tata negara modern, mendirikan Baitul Mal untuk kesejahteraan rakyat, dan menetapkan penanggalan Kalender Hijriah."
            }
          ],
          rangkuman: [
            "Abu Bakar menyelamatkan akidah umat dan mengumpulkan lembaran Al-Qur'an.",
            "Umar bin Khattab memajukan administrasi negara dan menetapkan Kalender Hijriah."
          ],
          budiPekerti: "Bersikap jujur dan berani membela teman yang dizalimi."
        },
        game: {
          id: "game-k6-lama-b5",
          tipe: "knowledge-challenge",
          nama: "Jejak Khalifah Agung",
          petunjuk: "Jawablah seputar jasa besar Abu Bakar dan Umar!",
          questions: [
            {
              tanya: "Sahabat yang ditunjuk Abu Bakar sebagai ketua panitia pengumpulan Al-Qur'an adalah...",
              opsi: ["Zaid bin Tsabit", "Ali bin Abi Thalib", "Bilal bin Rabah"],
              benar: 0,
              alasan: "Zaid bin Tsabit adalah sahabat cerdas penghafal dan sekretaris wahyu Nabi saw."
            }
          ]
        }
      }
    ],

    semester2: [
      {
        id: "k6-lama-bab-6",
        bab: 6,
        elemen: "Al-Qur'an dan Hadis",
        judul: "Mengaji Al-Qur'an Surah Al-A‘lā & Al-Ḥujurāt",
        icon: "quran",
        fokusCP: "Membaca, menulis, dan memahami pesan pokok Surah Al-A'la.",
        tujuan: [
          "Membaca Surah Al-A'la dengan tartil dan benar.",
          "Mengetahui pesan menyucikan nama Allah Yang Maha Tinggi.",
          "Memahami Q.S. Al-Hujurat: 13 tentang keragaman suku bangsa."
        ],
        materi: {
          pengantar: "Surah Al-A'la sering dibaca oleh Rasulullah saw. dalam salat Witir dan salat hari raya. Surah ini menyeru agar kita selalu menyucikan nama Allah Yang Maha Tinggi.",
          subBab: [
            {
              subJudul: "A. Surah Al-A'la",
              ilustrasi: "quran",
              dalil: {
                arab: "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى",
                latin: "Sabbiḥisma Rabbikal-A'lā",
                arti: "Sucikanlah nama Tuhanmu Yang Mahatinggi."
              }
            }
          ],
          rangkuman: [
            "Al-A'la artinya Yang Maha Tinggi.",
            "Kita wajib bertasbih menyucikan Allah dan mendahulukan kehidupan akhirat."
          ],
          budiPekerti: "Rajin melaksanakan salat berjamaah di masjid."
        },
        game: {
          id: "game-k6-lama-b6",
          tipe: "knowledge-challenge",
          nama: "Kuis Surah Al-A'la",
          petunjuk: "Pilih jawaban yang tepat seputar Surah Al-A'la!",
          questions: [
            {
              tanya: "Apakah arti dari kata 'Al-A'lā'?",
              opsi: ["Yang Maha Tinggi", "Maha Kuasa", "Maha Mengetahui"],
              benar: 0,
              alasan: "Al-A'la artinya Yang Maha Tinggi."
            }
          ]
        }
      },

      {
        id: "k6-lama-bab-7",
        bab: 7,
        elemen: "Akidah",
        judul: "Indahnya Ketetapan Allah (Qada dan Qadar)",
        icon: "qada-qadar",
        fokusCP: "Memahami makna beriman kepada qada dan kadar serta jenis-jenis takdir.",
        tujuan: [
          "Menjelaskan pengertian Qada dan Qadar.",
          "Membedakan Takdir Mubram dan Takdir Mu'allaq.",
          "Menjelaskan hikmah beriman kepada takdir Allah."
        ],
        materi: {
          pengantar: "Beriman kepada takdir membuat hati menjadi tenang dan tidak mudah cemas. Kita percaya bahwa apa pun yang ditakdirkan Allah bagi kita pasti membawa kebaikan.",
          subBab: [
            {
              subJudul: "A. Pengertian dan Jenis Takdir",
              ilustrasi: "qada-qadar",
              uraian: "Takdir Mubram adalah ketentuan pasti yang tidak dapat diubah (seperti kematian). Takdir Mu'allaq adalah takdir yang dikaitkan dengan ikhtiar dan doa (seperti kepandaian dan kesehatan)."
            }
          ],
          rangkuman: [
            "Qada rencana azali; Qadar perwujudan takdir.",
            "Takdir Mubram pasti; Takdir Mu'allaq bisa diupayakan dengan doa dan belajar."
          ],
          budiPekerti: "Tetap bersabar saat sakit dan rajin berobat serta berdoa memohon kesembuhan."
        },
        game: {
          id: "game-k6-lama-b7",
          tipe: "knowledge-challenge",
          nama: "Timbangan Takdir Hidup",
          petunjuk: "Klasifikasikan peristiwa ke dalam Takdir Mubram atau Mu'allaq!",
          questions: [
            {
              tanya: "Waktu kematian seseorang yang telah ditentukan ajalnya termasuk...",
              opsi: ["Takdir Mubram (Pasti)", "Takdir Mu'allaq (Bisa diupayakan)", "Bukan Takdir"],
              benar: 0,
              alasan: "Ajal adalah takdir mubram yang pasti terjadi dan tidak bisa diundur."
            }
          ]
        }
      },

      {
        id: "k6-lama-bab-8",
        bab: 8,
        elemen: "Akhlak",
        judul: "Peduli Lingkungan Hidup",
        icon: "eco",
        fokusCP: "Menerapkan sikap peduli terhadap kelestarian lingkungan dan menyayangi hewan.",
        tujuan: [
          "Memahami tugas manusia sebagai khalifah pemakmur bumi.",
          "Mengetahui manfaat menjaga kebersihan dan kelestarian alam.",
          "Mempraktikkan sikap ramah lingkungan: membuang sampah pada tempatnya dan hemat air."
        ],
        materi: {
          pengantar: "Bumi adalah amanah dari Allah. Manusia dilarang membuat kerusakan (fasad) di darat maupun di laut.",
          subBab: [
            {
              subJudul: "A. Menjaga Kebersihan dan Kelestarian Alam",
              ilustrasi: "eco",
              uraian: "Islam melarang mencemari sumber air minum, melarang menebang pohon sembarangan yang menyebabkan banjir, dan memerintahkan penghijauan."
            }
          ],
          rangkuman: [
            "Menjaga lingkungan adalah bagian dari ibadah.",
            "Menanam pohon bernilai sedekah jariyah."
          ],
          budiPekerti: "Menghemat penggunaan kertas dan mematikan lampu kamar yang tidak digunakan."
        },
        game: {
          id: "game-k6-lama-b8",
          tipe: "knowledge-challenge",
          nama: "Pahlawan Penjaga Bumi",
          petunjuk: "Pilih tindakan yang menjaga kelestarian lingkungan!",
          questions: [
            {
              tanya: "Saat berwudu di tempat wudu, sikap yang benar adalah...",
              opsi: ["Membuka kran air secukupnya dan mematikan setelah selesai", "Membuka kran sebesar-besarnya", "Membiarkan air meluber"],
              benar: 0,
              alasan: "Rasulullah saw. melarang boros air saat berwudu."
            }
          ]
        }
      },

      {
        id: "k6-lama-bab-9",
        bab: 9,
        elemen: "Fikih",
        judul: "Mengamalkan Puasa Sunah",
        icon: "puasa",
        fokusCP: "Memahami ketentuan dan hikmah macam-macam puasa sunah.",
        tujuan: [
          "Menjelaskan pengertian puasa sunah.",
          "Mengetahui jenis dan waktu pelaksanaan puasa sunah.",
          "Menjelaskan keutamaan dan hikmah puasa sunah."
        ],
        materi: {
          pengantar: "Puasa sunah adalah amalan tambahan yang sangat dicintai Allah Swt. untuk menyempurnakan kekurangan pada puasa wajib.",
          subBab: [
            {
              subJudul: "A. Jenis-Jenis Puasa Sunah",
              ilustrasi: "puasa",
              uraian: "Puasa Senin-Kamis, puasa Ayyamul Bidh (13, 14, 15 tiap bulan Hijriah), puasa 6 hari bulan Syawal, dan puasa hari Arafah."
            }
          ],
          rangkuman: [
            "Puasa sunah melatih keikhlasan dan menjaga kesehatan pencernaan.",
            "Puasa Arafah menghapus dosa setahun yang lalu dan setahun yang akan datang."
          ],
          budiPekerti: "Mencoba berpuasa sunah hari Senin bersama orang tua."
        },
        game: {
          id: "game-k6-lama-b9",
          tipe: "knowledge-challenge",
          nama: "Kuis Hikmah Puasa Sunah",
          petunjuk: "Jawablah seputar puasa-puasa sunah!",
          questions: [
            {
              tanya: "Puasa sunah yang pahalanya seperti berpuasa satu tahun penuh adalah...",
              opsi: ["Puasa 6 hari di bulan Syawal", "Puasa satu hari", "Puasa hari Jumat saja"],
              benar: 0,
              alasan: "Puasa Ramadan diiringi 6 hari Syawal bernilai pahala puasa setahun penuh."
            }
          ]
        }
      },

      {
        id: "k6-lama-bab-10",
        bab: 10,
        elemen: "Sejarah Peradaban Islam",
        judul: "Meneladani Khalifah Uṡmān bin ‘Affān dan ‘Alī bin Abī Ṭālib",
        icon: "khulafaur-rasyidin",
        fokusCP: "Menceritakan biografi, jasa kodifikasi mushaf, dan kepahlawanan Usman dan Ali.",
        tujuan: [
          "Mengenal kepribadian Khalifah Usman bin Affan yang dermawan dan pemalu.",
          "Mengetahui jasa monumental Usman: Standardisasi penulisan Mushaf Usmani.",
          "Mengenal kepribadian Khalifah Ali bin Abi Talib sebagai gerbang ilmu dan ksatria pemberani."
        ],
        materi: {
          pengantar: "Dua khalifah terakhir Khulafaur Rasyidin adalah Utsman bin Affan yang menjabat selama 12 tahun dan Ali bin Abi Thalib yang dikenal sangat cerdas dan zuhud.",
          subBab: [
            {
              subJudul: "A. Khalifah Usman bin Affan r.a.",
              ilustrasi: "khulafaur-rasyidin",
              uraian: "Usman digelari Dzun Nurain (pemilik dua cahaya). Beliau menyatukan umat Islam dengan membukukan Al-Qur'an dalam satu mushaf resmi (Mushaf Usmani) dan menyebarkannya ke berbagai wilayah."
            },
            {
              subJudul: "B. Khalifah Ali bin Abi Talib r.a.",
              ilustrasi: "khulafaur-rasyidin",
              uraian: "Ali adalah anak muda pertama yang memeluk Islam dan digelari Babul 'Ilmi (Pintu Gerbang Ilmu). Beliau memajukan ilmu tata bahasa Arab (Nahwu) agar umat non-Arab mudah membaca Al-Qur'an."
            }
          ],
          rangkuman: [
            "Usman bin Affan berjasa besar menyeragamkan bacaan Mushaf Usmani.",
            "Ali bin Abi Talib adalah sosok pemimpin cerdas dan teladan ksatria sejati."
          ],
          budiPekerti: "Suka membaca buku ilmu pengetahuan dan dermawan membantu teman."
        },
        game: {
          id: "game-k6-lama-b10",
          tipe: "knowledge-challenge",
          nama: "Sahabat Bintang Usman & Ali",
          petunjuk: "Cocokkan gelar dan jasa sahabat Nabi saw.!",
          questions: [
            {
              tanya: "Sahabat yang mendapat gelar 'Dzun Nurain' (Pemilik Dua Cahaya) adalah...",
              opsi: ["Usman bin Affan", "Ali bin Abi Talib", "Abu Bakar"],
              benar: 0,
              alasan: "Usman menikahi dua putri Rasulullah saw., Ruqayyah dan Ummu Kultsum."
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
    deskripsi: "Kurikulum berdasarkan Keputusan BSKAP No. 020/2026 (Perubahan CP Fase C Kelas 6). Memuat materi baru: Tajwid Ghunnah & Tafkhim-Tarqiq, Surah Al-Insyirah, Asmaul Husna Al-Waliy/Hamid/Adl/Shabur, Fikih ZIS, dan Fikih WAKAF.",
    semester1: [
      {
        id: "k6-baru-bab-1",
        bab: 1,
        elemen: "Al-Qur'an dan Hadis",
        judul: "Tajwid Bacaan Ghunnah & Surah al-Insyirāḥ",
        icon: "tajwid",
        fokusCP: "Mempraktikkan bacaan Ghunnah Musyaddadah dan tadabur Surah al-Insyirāḥ tentang motivasi kelapangan dada.",
        tujuan: [
          "Membaca kalimat bersambung 3 kata/lebih dengan tartil.",
          "Menguasai hukum tajwid Ghunnah Musyaddadah (Nun Tasydid & Mim Tasydid).",
          "Membaca, menghafal, dan memahami pesan pokok Surah Al-Insyirāḥ.",
          "Menumbuhkan optimisme tinggi: di balik setiap kesulitan pasti ada kemudahan."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Di CP 020/2026, materi Al-Qur'an semester 1 memuat HUKUM TAJWID GHUNNAH MUSYADDADAH serta tadabur SURAH AL-INSYIRĀḤ (Alam Nasyrah) yang sangat menguatkan mental siswa kelas 6 menjelang kelulusan.",
          subBab: [
            {
              subJudul: "A. Hukum Tajwid Ghunnah Musyaddadah",
              ilustrasi: "tajwid",
              uraian: "Ghunnah artinya dengung. Terjadi apabila ada huruf NUN BERTASYDID (نّ) atau MIM BERTASYDID (مّ). Cara membacanya: ditahan dengan suara dengung yang keluar dari pangkal hidung (Khaisyum) selama 2 sampai 3 harakat.",
              contohGhunnah: [
                { lafal: "إِنَّ الْإِنسَانَ", transliterasi: "Innnna... (Nun Tasydid ditahan 2 harakat)" },
                { lafal: "عَمَّ يَتَسَاءَلُونَ", transliterasi: "'Ammmma... (Mim Tasydid ditahan 2 harakat)" },
                { lafal: "مِنَ الْجِنَّةِ وَالنَّاسِ", transliterasi: "Al-Jinnnnati wan-nāsss" }
              ]
            },
            {
              subJudul: "B. Tadabur Surah Al-Insyirāḥ (Kelapangan Dada)",
              ilustrasi: "quran",
              ayatList: [
                { no: 1, arab: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ", latin: "Alam nasyraḥ laka ṣadrak", arti: "Bukankah Kami telah melapangkan dadamu (Muhammad)?" },
                { no: 2, arab: "وَوَضَعْنَا عَنكَ وِزْرَكَ", latin: "Wa waḍa'nā 'anka wizrak", arti: "dan Kami pun telah menurunkan bebanmu darimu," },
                { no: 5, arab: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", latin: "Fa inna ma'al-'usri yusrā", arti: "Maka sesungguhnya beserta kesulitan ada kemudahan," },
                { no: 6, arab: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", latin: "Inna ma'al-'usri yusrā", arti: "sesungguhnya beserta kesulitan itu ada kemudahan." },
                { no: 7, arab: "فَإِذَا فَرَغْتَ فَانصَبْ", latin: "Fa iżā faragta fanṣab", arti: "Maka apabila engkau telah selesai (dari suatu urusan), tetaplah bekerja keras (untuk urusan yang lain)," },
                { no: 8, arab: "وَإِلَىٰ رَبِّكَ فَارْغَب", latin: "Wa ilā Rabbika fargab", arti: "dan hanya kepada Tuhanmulah engkau berharap." }
              ]
            }
          ],
          rangkuman: [
            "Ghunnah Musyaddadah terjadi pada Nun bertasydid (نّ) dan Mim bertasydid (مّ) dibaca dengung 2 harakat.",
            "Surah Al-Insyirah menjamin: setiap satu kesulitan diiringi dua kemudahan.",
            "Tidak boleh bermalas-malasan setelah selesai mengerjakan satu tugas."
          ],
          budiPekerti: "Tetap tenang dan bersemangat mengerjakan soal latihan ujian tanpa merasa putus asa."
        },
        game: {
          id: "game-k6-baru-b1",
          tipe: "knowledge-challenge",
          nama: "Detektif Dengung Ghunnah",
          petunjuk: "Temukan kata yang wajib dibaca dengung Ghunnah Musyaddadah!",
          questions: [
            {
              tanya: "Kata manakah yang mengandung hukum bacaan Ghunnah Musyaddadah?",
              opsi: ["إِنَّ (Inna)", "قَالَ (Qāla)", "كِتَابٌ (Kitābun)"],
              benar: 0,
              alasan: "Huruf Nun bertasydid (نّ) wajib dibaca dengung Ghunnah."
            },
            {
              tanya: "Pesan utama ayat 'Fa inna ma'al-'usri yusrā' adalah...",
              opsi: ["Bersama setiap kesulitan pasti ada kemudahan", "Jangan belajar", "Bermalas-malas saja"],
              benar: 0,
              alasan: "Allah menjamin bahwa bersama kesulitan pasti selalu ada jalan kemudahan."
            }
          ]
        }
      },

      {
        id: "k6-baru-bab-2",
        bab: 2,
        elemen: "Akidah",
        judul: "Asmaulhusna: al-Waliy, al-Ḥamīd, al-'Adl, aṣ-Ṣabūr",
        icon: "asmaul-husna",
        fokusCP: "Menjelaskan makna dan meneladani sifat al-Waliy, al-Ḥamīd, al-'Adl, dan aṣ-Ṣabūr.",
        tujuan: [
          "Mengartikan Asmaulhusna al-Waliy (Maha Melindungi).",
          "Mengartikan Asmaulhusna al-Ḥamīd (Maha Terpuji).",
          "Mengartikan Asmaulhusna al-'Adl (Maha Adil).",
          "Mengartikan Asmaulhusna aṣ-Ṣabūr (Maha Penyabar).",
          "Menampilkan perilaku adil, sabar, dan selalu memuji Allah."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Di CP 020/2026, materi Asmaul Husna kelas 6 BERUBAH NAMA menjadi al-Waliy, al-Ḥamīd, al-'Adl, dan aṣ-Ṣabūr.",
          subBab: [
            {
              subJudul: "A. Empat Asmaul Husna CP Baru",
              ilustrasi: "asmaul-husna",
              daftarBaru: [
                {
                  nama: "Al-Waliy (الْوَلِيُّ) - Maha Melindungi",
                  makna: "Allah adalah pelindung sejati bagi hamba-hamba-Nya yang beriman dari kegelapan menuju cahaya petunjuk. Teladan: Menjadi teman pelindung bagi yang lemah."
                },
                {
                  nama: "Al-Ḥamīd (الْحَمِيدُ) - Maha Terpuji",
                  makna: "Allah Maha Terpuji dalam segala takdir dan nama-Nya. Teladan: Menjaga lisan dari perkataan kotor dan selalu berakhlak terpuji."
                },
                {
                  nama: "Al-'Adl (الْعَدْلُ) - Maha Adil",
                  makna: "Allah menempatkan segala sesuatu tepat pada tempatnya secara sempurna tanpa ada kezaliman. Teladan: Berlaku adil membagi tugas piket kelas."
                },
                {
                  nama: "Aṣ-Ṣabūr (الصَّبُورُ) - Maha Penyabar",
                  makna: "Allah Maha Sabar tidak tergesa-gesa menghukum orang yang bersalah. Teladan: Sabar saat belajar dan tekun berlatih."
                }
              ]
            }
          ],
          rangkuman: [
            "Al-Waliy: Pelindung orang beriman.",
            "Al-Hamid: Segala puji milik Allah.",
            "Al-'Adl: Berlaku adil tanpa pilih kasih.",
            "Ash-Shabur: Kesabaran tanpa batas."
          ],
          budiPekerti: "Sabar saat mengantre di kantin sekolah dan bersikap adil kepada seluruh teman."
        },
        game: {
          id: "game-k6-baru-b2",
          tipe: "memory-card",
          nama: "Galaksi 4 Asmaul Husna Baru",
          petunjuk: "Cocokkan nama Asmaul Husna dengan teladan pengamalannya!",
          cards: [
            { id: 1, pairId: "waliy", label: "الْوَلِيُّ (Al-Waliy)" },
            { id: 2, pairId: "waliy", label: "Maha Melindungi" },
            { id: 3, pairId: "adl", label: "الْعَدْلُ (Al-'Adl)" },
            { id: 4, pairId: "adl", label: "Maha Adil" },
            { id: 5, pairId: "sabur", label: "الصَّبُورُ (Aṣ-Ṣabūr)" },
            { id: 6, pairId: "sabur", label: "Maha Penyabar" }
          ]
        }
      },

      {
        id: "k6-baru-bab-3",
        bab: 3,
        elemen: "Akhlak",
        judul: "Akhlak terhadap Tetangga dan Kaum Non-Muslim",
        icon: "sahabat",
        fokusCP: "Menerapkan hak-hak tetangga dan etika hidup bermasyarakat majemuk dengan santun.",
        tujuan: [
          "Mengetahui hak-hak tetangga dalam ajaran Islam.",
          "Mengetahui batasan toleransi beragama sesuai Surah Al-Kafirun.",
          "Berbagi makanan dan menjaga ketenteraman lingkungan tetangga."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Di CP 020/2026, materi akhlak semester 1 difokuskan pada AKHLAK TERHADAP TETANGGA DAN NON-MUSLIM.",
          subBab: [
            {
              subJudul: "A. Hak-Hak Tetangga dalam Islam",
              ilustrasi: "sahabat",
              uraian: "Tetangga adalah orang yang paling dekat rumahnya dengan kita. Hak tetangga: 1. Disapa dengan ramah, 2. Tidak menyalakan suara musik yang mengganggu istirahatnya, 3. Membagikan kuah makanan yang lezat bila kita memasak di rumah, 4. Dijenguk saat sakit."
            },
            {
              subJudul: "B. Toleransi Tanpa Mengorbankan Akidah",
              ilustrasi: "mosque",
              dalil: {
                arab: "لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
                latin: "Lakum dīnukum wa liya dīn",
                arti: "Untukmu agamamu, dan untukku agamaku. (Q.S. Al-Kafirun: 6)"
              }
            }
          ],
          rangkuman: [
            "Memuliakan tetangga adalah tanda kesempurnaan iman.",
            "Toleransi sosial seluas-luasnya, tetapi akidah tidak boleh dicampuradukkan."
          ],
          budiPekerti: "Mengecilkan volume speaker saat bermain game agar tetangga yang sedang istirahat tidak terganggu."
        },
        game: {
          id: "game-k6-baru-b3",
          tipe: "knowledge-challenge",
          nama: "Simulasi Tetangga Idaman",
          petunjuk: "Pilih sikap bertetangga yang paling terpuji!",
          questions: [
            {
              tanya: "Bila kita memasak masakan berkuah yang lezat, Rasulullah saw. menganjurkan untuk...",
              opsi: ["Memperbanyak kuahnya dan membagikannya kepada tetangga", "Menghabiskannya sendirian", "Menyembunyikannya"],
              benar: 0,
              alasan: "Rasulullah menganjurkan berbagi makanan kepada tetangga sekitar rumah."
            }
          ]
        }
      },

      {
        id: "k6-baru-bab-4",
        bab: 4,
        elemen: "Fikih",
        judul: "Fikih Zakat, Infak, dan Sedekah (ZIS)",
        icon: "zakat",
        fokusCP: "Menerapkan konsep Zakat, Infak, Sedekah, serta 8 golongan penerima (Mustahiq).",
        tujuan: [
          "Membedakan Zakat (wajib), Infak (sukarela harta), dan Sedekah (segala kebaikan).",
          "Membedakan Zakat Fitrah (jiwa) dan Zakat Mal (harta).",
          "Menghafal 8 golongan penerima zakat (Mustahiq Zakat) menurut Q.S. At-Taubah: 60."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Di CP 020/2026, materi ZAKAT, INFAK, DAN SEDEKAH DIPINDAHKAN dari kelas 5 ke KELAS 6 SEMESTER 1 agar anak kelas 6 yang mulai baligh memahami kewajiban zakat.",
          subBab: [
            {
              subJudul: "A. Pengertian ZIS",
              ilustrasi: "zakat",
              uraian: "Zakat adalah kewajiban mengeluarkan kadar harta tertentu. Infak adalah pengeluaran sukarela berupa harta untuk kemaslahatan umum. Sedekah memiliki cakupan sangat luas, termasuk senyuman manis dan menolong teman."
            },
            {
              subJudul: "B. Delapan Golongan Mustahiq Zakat",
              ilustrasi: "zakat",
              asnafList: [
                "1. Fakir (tidak punya pekerjaan & harta)",
                "2. Miskin (punya pekerjaan tapi tidak cukup)",
                "3. Amil (petugas pengumpul zakat)",
                "4. Mualaf (orang yang baru masuk Islam)",
                "5. Riqab (memerdekakan hamba sahaya)",
                "6. Gharimin (orang yang terlilit hutang untuk kebutuhan hidup halal)",
                "7. Fisabilillah (pejuang dakwah dan pendidikan di jalan Allah)",
                "8. Ibnu Sabil (musafir kehabisan bekal dalam ketaatan)"
              ]
            }
          ],
          rangkuman: [
            "Zakat menyucikan harta; infak dan sedekah melipatgandakan pahala.",
            "Mustahiq zakat ada 8 asnaf tercantum dalam Surah At-Taubah ayat 60."
          ],
          budiPekerti: "Membayar zakat fitrah tepat waktu di sekolah atau masjid sebelum salat Idul Fitri."
        },
        game: {
          id: "game-k6-baru-b4",
          tipe: "knowledge-challenge",
          nama: "Manajer Kotak Berkah ZIS",
          petunjuk: "Salurkan bantuan zakat kepada yang berhak!",
          questions: [
            {
              tanya: "Petugas yang ditunjuk resmi mengumpulkan dan menyalurkan zakat disebut...",
              opsi: ["Amil Zakat", "Muzakki", "Mualaf"],
              benar: 0,
              alasan: "Amil adalah panitia pengelola zakat."
            }
          ]
        }
      },

      {
        id: "k6-baru-bab-5",
        bab: 5,
        elemen: "Sejarah Peradaban Islam",
        judul: "Kisah Keteladanan Abu Bakar aṣ-Ṣiddīq dan Umar bin Khaṭṭāb",
        icon: "khulafaur-rasyidin",
        fokusCP: "Menganalisis kepemimpinan demokratis, ketegasan, dan kesederhanaan Abu Bakar dan Umar.",
        tujuan: [
          "Menganalisis keberhasilan Abu Bakar mengatasi krisis setelah wafatnya Nabi saw.",
          "Menganalisis ketegasan dan kepedulian sosial Umar bin Khattab meronda malam memeriksa rakyatnya.",
          "Meneladani sifat jujur, amanah, dan hidup sederhana kedua sahabat utama."
        ],
        materi: {
          pengantar: "Abu Bakar dan Umar adalah dua sahabat terdekat yang memimpin umat dengan penuh amanah, musyawarah, dan tanpa memikirkan kemewahan pribadi.",
          subBab: [
            {
              subJudul: "A. Abu Bakar Sang Penyelamat Akidah",
              ilustrasi: "khulafaur-rasyidin",
              uraian: "Abu Bakar memimpin selama 2 tahun. Beliau tegas menindak orang yang enggan berzakat dan berhasil mengumpulkan lembaran wahyu Al-Qur'an pertama kali dalam satu bendel mushaf."
            },
            {
              subJudul: "B. Umar bin Khattab Pemimpin yang Merakyat",
              ilustrasi: "khulafaur-rasyidin",
              uraian: "Umar memimpin selama 10 tahun. Beliau sering memanggul sendiri karung gandum untuk keluarga miskin yang ditemuinya saat meronda malam. Beliau mendirikan kas negara (Baitul Mal) dan kepolisian."
            }
          ],
          rangkuman: [
            "Abu Bakar berjasa mengumpulkan lembaran mushaf Al-Qur'an.",
            "Umar bin Khattab memprakarsai sistem administrasi negara modern dan Kalender Hijriah."
          ],
          budiPekerti: "Hidup sederhana dan selalu bersikap jujur dalam setiap perkataan."
        },
        game: {
          id: "game-k6-baru-b5",
          tipe: "knowledge-challenge",
          nama: "Prestasi Agung Abu Bakar & Umar",
          petunjuk: "Jawablah seputar keteladanan dua khalifah pertama!",
          questions: [
            {
              tanya: "Khalifah yang terkenal suka berkeliling memeriksa warganya di malam hari adalah...",
              opsi: ["Umar bin Khattab", "Abu Bakar", "Muawiyah"],
              benar: 0,
              alasan: "Umar bin Khattab rutin meronda malam demi memastikan tidak ada rakyat yang kelaparan."
            }
          ]
        }
      }
    ],

    semester2: [
      {
        id: "k6-baru-bab-6",
        bab: 6,
        elemen: "Al-Qur'an dan Hadis",
        judul: "Tajwid Tafkhim & Tarqiq serta Hadis Menyayangi Teman",
        icon: "tajwid",
        fokusCP: "Menerapkan hukum bacaan tebal (tafkhim) dan tipis (tarqiq) pada Lam Jalalah dan Ra serta mengamalkan hadis teman.",
        tujuan: [
          "Membedakan Lam Jalalah Tafkhim (tebal) dan Lam Jalalah Tarqiq (tipis).",
          "Membedakan huruf Ra Tafkhim dan Ra Tarqiq.",
          "Menghafal dan mengamalkan Hadis: Tidak sempurna iman seseorang hingga mencintai saudaranya seperti mencintai dirinya sendiri."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Di CP 020/2026, materi semester 2 memuat HUKUM TAJWID TAFKHIM & TARQIQ (bacaan tebal dan tipis) serta HADIS MENYAYANGI TEMAN SEPERTI DIRI SENDIRI.",
          subBab: [
            {
              subJudul: "A. Hukum Lam Jalālah (Lafadz Allah)",
              ilustrasi: "tajwid",
              lamRules: [
                { nama: "1. Lam Tafkhim (Tebal)", syarat: "Jika didahului harakat Fathah atau Dammah.", contoh: "قَالَ اللَّهُ (Qālallāhu), عَبْدُ اللَّهِ ('Abdullāhi)" },
                { nama: "2. Lam Tarqiq (Tipis)", syarat: "Jika didahului harakat Kasrah.", contoh: "بِسْمِ اللَّهِ (Bismillāhi)" }
              ]
            },
            {
              subJudul: "B. Hukum Huruf Ra' (ر)",
              ilustrasi: "tajwid",
              raRules: [
                { nama: "1. Ra Tafkhim (Tebal)", syarat: "Ra berharakat fathah/dammah, atau ra sukun didahului fathah/dammah.", contoh: "رَبَّنَا (Rabbanā), قُرْآنٌ (Qur'ān)" },
                { nama: "2. Ra Tarqiq (Tipis)", syarat: "Ra berharakat kasrah, atau ra sukun didahului kasrah asli.", contoh: "رِجَالٌ (Rijāl), فِرْعَوْنَ (Fir'aun)" }
              ]
            },
            {
              subJudul: "C. Hadis Menyayangi Saudara Sebaya",
              ilustrasi: "birrul-walidain",
              dalil: {
                arab: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّىٰ يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
                latin: "Lā yu'minu aḥadukum ḥattā yuḥibba li'akhīhi mā yuḥibbu linafsih",
                arti: "Tidak sempurna iman salah seorang di antara kalian sampai dia mencintai saudaranya sebagaimana dia mencintai dirinya sendiri. (H.R. Bukhari & Muslim)"
              }
            }
          ],
          rangkuman: [
            "Tafkhim artinya tebal; Tarqiq artinya tipis.",
            "Lafadz Allah tebal bila didahului fathah/dammah; tipis bila didahului kasrah.",
            "Bukti keimanan sejati adalah menginginkan kebaikan bagi teman seperti untuk diri sendiri."
          ],
          budiPekerti: "Turut senang dan mengucapkan selamat saat teman meraih prestasi juara."
        },
        game: {
          id: "game-k6-baru-b6",
          tipe: "knowledge-challenge",
          nama: "Timbangan Bunyi Tafkhim & Tarqiq",
          petunjuk: "Tentukan tebal atau tipisnya bacaan tajwid berikut!",
          questions: [
            {
              tanya: "Pada lafal 'بِسْمِ اللَّهِ' (Bismillāh), lafadz Allah dibaca secara...",
              opsi: ["Tarqiq (Tipis mendatar)", "Tafkhim (Tebal)", "Ghunnah"],
              benar: 0,
              alasan: "Karena lafadz Allah didahului oleh huruf berharakat kasrah (mi)."
            },
            {
              tanya: "Pada lafal 'قَالَ اللَّهُ' (Qālallāh), lafadz Allah dibaca secara...",
              opsi: ["Tafkhim (Tebal membulat)", "Tarqiq (Tipis)", "Samar"],
              benar: 0,
              alasan: "Karena lafadz Allah didahului oleh huruf berharakat fathah (la)."
            }
          ]
        }
      },

      {
        id: "k6-baru-bab-7",
        bab: 7,
        elemen: "Akidah",
        judul: "Iman Kepada Qada dan Qadar (Ketetapan & Takdir)",
        icon: "qada-qadar",
        fokusCP: "Menganalisis perbedaan takdir Mubram dan takdir Mu'allaq serta korelasi ikhtiar dan tawakal.",
        tujuan: [
          "Memahami Qada sebagai ketetapan azali dan Qadar sebagai realisasi di alam nyata.",
          "Menganalisis perbedaan Takdir Mubram (pasti) dan Takdir Mu'allaq (bisa diupayakan).",
          "Menjauhi sikap sombong saat sukses dan tidak putus asa saat menghadapi kegagalan."
        ],
        materi: {
          pengantar: "Beriman kepada Qada dan Qadar adalah rukun iman keenam. Pemahaman ini melahirkan ketangguhan mental siswa: rajin berikhtiar tanpa takut gagal dan selalu bersyukur atas takdir Allah.",
          subBab: [
            {
              subJudul: "A. Pengertian Qada dan Qadar",
              ilustrasi: "qada-qadar",
              dalil: {
                arab: "إِنَّا كُلَّ شَيْءٍ خَلَقْنَاهُ بِقَدَرٍ",
                latin: "Innā kulla syai'in khalaqnāhu biqadar",
                arti: "Sungguh, Kami menciptakan segala sesuatu menurut ukuran (takdir). (Q.S. Al-Qamar: 49)"
              }
            },
            {
              subJudul: "B. Membedakan Takdir Mubram dan Mu'allaq",
              ilustrasi: "qada-qadar",
              uraian: "Takdir Mubram tidak dapat diubah (seperti kematian, jenis kelamin saat lahir, peredaran bumi). Takdir Mu'allaq bergantung pada ikhtiar dan doa manusia (seperti kepandaian dengan rajin belajar, kesehatan dengan menjaga pola makan)."
            }
          ],
          rangkuman: [
            "Takdir Mubram pasti; Takdir Mu'allaq dapat diupayakan dengan doa dan kerja keras.",
            "Orang beriman tidak bersedih berlarut-larut atas kegagalan."
          ],
          budiPekerti: "Belajar tekun setiap hari dan tidak menyalahkan takdir sebelum berikhtiar maksimal."
        },
        game: {
          id: "game-k6-baru-b7",
          tipe: "knowledge-challenge",
          nama: "Timbangan Takdir Mubram vs Mu'allaq",
          petunjuk: "Tentukan kategori takdir untuk setiap peristiwa!",
          questions: [
            {
              tanya: "Siswa menjadi juara olimpiade sains karena giat belajar setiap hari adalah contoh...",
              opsi: ["Takdir Mu'allaq (Tergantung Ikhtiar & Doa)", "Takdir Mubram (Pasti)", "Kebetulan semata"],
              benar: 0,
              alasan: "Prestasi dan kepandaian adalah takdir mu'allaq yang bisa diupayakan."
            }
          ]
        }
      },

      {
        id: "k6-baru-bab-8",
        bab: 8,
        elemen: "Akhlak",
        judul: "Akhlak terhadap Hewan dan Kelestarian Lingkungan",
        icon: "eco",
        fokusCP: "Menerapkan peran khalifah fil ardhi dalam menjaga alam, menyayangi binatang, dan menanam pohon.",
        tujuan: [
          "Memahami tugas manusia sebagai khalifah fil ardhi pemakmur bumi.",
          "Mengetahui adab memperlakukan hewan: memberi makan, tidak menyiksa, tidak mengurung tanpa makan.",
          "Mempraktikkan kepedulian lingkungan: menghemat air, memilah sampah, dan menanam pohon."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Di CP 020/2026, materi semester 2 memuat konsep ECO-ISLAM yaitu akhlak menyayangi binatang dan merawat kelestarian alam semesta.",
          subBab: [
            {
              subJudul: "A. Menyayangi Binatang",
              ilustrasi: "eco",
              uraian: "Rasulullah menceritakan seorang wanita disiksa di neraka karena mengurung kucing hingga mati kelaparan, dan sebaliknya seorang pria diampuni dosanya karena memberi minum anjing yang kehausan."
            },
            {
              subJudul: "B. Menanam Pohon Bernilai Sedekah",
              ilustrasi: "eco",
              dalil: {
                arab: "مَا مِنْ مُسْلِمٍ يَغْرِسُ غَرْسًا فَيَأْكُلُ مِنْهُ طَيْرٌ أَوْ إِنْسَانٌ إِلَّا كَانَ لَهُ بِهِ صَدَقَةٌ",
                latin: "Mā min muslimin yagrisu gārsan faya'kulu minhu ṭairun aw insānun illā kāna lahū bihī ṣadaqah",
                arti: "Tidaklah seorang muslim menanam pohon lalu dimakan oleh burung atau manusia, melainkan hal itu bernilai sedekah baginya. (H.R. Bukhari)"
              }
            }
          ],
          rangkuman: [
            "Menyayangi hewan mengundang ampunan Allah.",
            "Menanam pohon adalah sedekah jariyah yang pahalanya mengalir terus."
          ],
          budiPekerti: "Memberi makan kucing liar di sekitar rumah dan merawat tanaman di sekolah."
        },
        game: {
          id: "game-k6-baru-b8",
          tipe: "knowledge-challenge",
          nama: "Pahlawan Sahabat Satwa & Alam",
          petunjuk: "Pilih tindakan yang menyelamatkan lingkungan!",
          questions: [
            {
              tanya: "Setiap buah dari pohon yang kita tanam lalu dimakan burung atau orang lain, bernilai...",
              opsi: ["Sedekah jariyah bagi penanamnya", "Kerugian modal", "Biasa saja"],
              benar: 0,
              alasan: "Rasulullah menegaskan menanam tanaman bernilai pahala sedekah."
            }
          ]
        }
      },

      {
        id: "k6-baru-bab-9",
        bab: 9,
        elemen: "Fikih",
        judul: "Fikih Wakaf: Filantropi Abadi dalam Islam",
        icon: "wakaf",
        fokusCP: "Menganalisis konsep wakaf, rukun wakaf, jenis wakaf produktif, dan pengelolaannya untuk umat.",
        tujuan: [
          "Memahami pengertian Wakaf secara bahasa (menahan) dan syariat.",
          "Mengetahui hadis sedekah jariyah wakaf yang pahalanya tidak pernah terputus.",
          "Mengetahui 4 Rukun Wakaf: Wakif, Mauquf bih, Mauquf 'alaih, dan Sighat.",
          "Mengenal jenis wakaf: benda tidak bergerak (tanah/masjid) dan benda bergerak/produktif (uang/sumur)."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Pada CP 020/2026, materi Fikih semester 2 KELAS 6 SECARA KHUSUS MEMBAHAS WAKAF. Wakaf adalah instrumen filantropi Islam yang mengalirkan pahala abadi meskipun orang yang mewakafkan sudah meninggal dunia.",
          subBab: [
            {
              subJudul: "A. Pengertian dan Hadis Wakaf",
              ilustrasi: "wakaf",
              uraian: "Wakaf artinya menahan pokok harta yang awet dan menyalurkan manfaatnya untuk kepentingan umat di jalan Allah.",
              dalil: {
                arab: "إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلَّا مِنْ ثَلَاثَةٍ: إِلَّا مِنْ صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ",
                latin: "Iżā mātal-insānu inqaṭa'a 'anhu 'amaluhū illā min ṡalāṡin: illā min ṣadaqatin jāriyatin, aw 'ilmin yuntafa'u bihī, aw waladin ṣāliḥin yad'ū lah",
                arti: "Apabila manusia meninggal dunia, maka terputuslah amalnya kecuali tiga perkara: sedekah jariyah (wakaf), ilmu yang bermanfaat, dan anak saleh yang mendoakannya. (H.R. Muslim)"
              }
            },
            {
              subJudul: "B. Empat Rukun Wakaf",
              ilustrasi: "zakat",
              rukunList: [
                { nama: "1. Wāqif", arti: "Orang yang mewakafkan hartanya dengan ikhlas dan berakal sehat." },
                { nama: "2. Mauqūf Bih", arti: "Harta benda yang diwakafkan (harus tahan lama, tidak habis sekali pakai, dan milik sah)." },
                { nama: "3. Mauqūf 'Alaih", arti: "Pihak yang menerima manfaat wakaf (masyarakat umum, madrasah, masjid)." },
                { nama: "4. Ṣīgah", arti: "Ikrar serah terima wakaf baik lisan maupun tertulis di depan saksi." },
                { nama: "Nāẓir (Pengelola)", arti: "Pihak atau lembaga yang diamanahi mengelola dan merawat harta wakaf." }
              ]
            },
            {
              subJudul: "C. Kisah Teladan Sumur Raumah Usman bin Affan",
              ilustrasi: "mosque",
              uraian: "Khalifah Usman bin Affan membeli sumur air tawar milik seorang Yahudi di Madinah seharga 20.000 dirham, lalu mewakafkannya untuk seluruh penduduk Madinah secara gratis. Manfaat sumur dan kebun kurmanya masih lestari dan menghasilkan hingga hari ini di kota Madinah!"
            }
          ],
          rangkuman: [
            "Wakaf adalah sedekah jariyah menahan pokok harta yang tahan lama untuk diambil manfaatnya.",
            "Empat rukun wakaf: Wakif, Harta wakaf, Penerima manfaat, dan Ikrar wakaf.",
            "Pengelola harta wakaf dinamakan Nazhir."
          ],
          budiPekerti: "Mewakafkan buku-buku bacaan bermanfaat ke perpustakaan sekolah agar dibaca adik kelas."
        },
        game: {
          id: "game-k6-baru-b9",
          tipe: "knowledge-challenge",
          nama: "Simulasi Wakaf Kebaikan Abadi",
          petunjuk: "Pilih harta yang sah untuk diwakafkan menurut syariat!",
          questions: [
            {
              tanya: "Manakah harta berikut yang SAH untuk diwakafkan karena sifatnya tahan lama?",
              opsi: ["Tanah untuk gedung sekolah / Masjid", "Sepiring nasi goreng", "Segelas es teh manis"],
              benar: 0,
              alasan: "Harta wakaf harus tahan lama dan tidak habis sekali pakai."
            },
            {
              tanya: "Pihak yang diberi amanah untuk mengelola dan memelihara harta wakaf disebut...",
              opsi: ["Nazhir", "Wakif", "Muzakki"],
              benar: 0,
              alasan: "Nazhir adalah pengelola dan pemelihara harta wakaf."
            }
          ]
        }
      },

      {
        id: "k6-baru-bab-10",
        bab: 10,
        elemen: "Sejarah Peradaban Islam",
        judul: "Kisah Keteladanan Usman bin Affan dan Ali bin Abi Talib",
        icon: "khulafaur-rasyidin",
        fokusCP: "Menganalisis kedermawanan Usman bin Affan dan kepahlawanan kecerdasan Ali bin Abi Talib.",
        tujuan: [
          "Mengetahui jasa monumental Khalifah Usman: Kodifikasi Mushaf Usmani dan sumur Raumah.",
          "Mengetahui jasa monumental Khalifah Ali: Merintis ilmu Nahwu bahasa Arab dan ketegasan hukum.",
          "Meneladani kedermawanan luar biasa Usman dan keberanian ilmu Ali."
        ],
        materi: {
          pengantar: "Usman bin Affan adalah teladan saudagar kaya yang sangat pemalu dan dermawan. Ali bin Abi Talib adalah teladan pemuda cerdas yang dijuluki gerbang ilmu pengetahuan.",
          subBab: [
            {
              subJudul: "A. Khalifah Usman bin Affan r.a.",
              ilustrasi: "khulafaur-rasyidin",
              uraian: "Jasa terbesarnya adalah membukukan Al-Qur'an menjadi satu mushaf standar (Mushaf Usmani) yang menyatukan dialek bacaan umat Islam di seluruh penjuru dunia hingga hari ini."
            },
            {
              subJudul: "B. Khalifah Ali bin Abi Talib r.a.",
              ilustrasi: "khulafaur-rasyidin",
              uraian: "Rasulullah bersabda: 'Aku adalah kotanya ilmu dan Ali adalah gerbang pintunya'. Beliau merintis pemberian tanda harakat dan tata bahasa Arab (Nahwu) bersama Abu al-Aswad ad-Du'ali."
            }
          ],
          rangkuman: [
            "Mushaf Usmani warisan Usman bin Affan menyatukan bacaan Al-Qur'an dunia.",
            "Ali bin Abi Talib adalah teladan kecerdasan, keberanian, dan kesederhanaan."
          ],
          budiPekerti: "Senang menuntut ilmu dan gemar menyumbangkan harta untuk kebaikan umat."
        },
        game: {
          id: "game-k6-baru-b10",
          tipe: "knowledge-challenge",
          nama: "Ksatria Kebajikan Usman & Ali",
          petunjuk: "Jawablah seputar jasa agung Usman dan Ali!",
          questions: [
            {
              tanya: "Jasa monumental Usman bin Affan yang hingga hari ini dinikmati seluruh umat Islam adalah...",
              opsi: ["Membukukan Mushaf Al-Qur'an resmi (Mushaf Usmani)", "Membangun benteng", "Membuat jalan raya"],
              benar: 0,
              alasan: "Standardisasi Mushaf Usmani adalah jasa abadi Khalifah Usman bin Affan."
            }
          ]
        }
      }
    ]
  }
};
