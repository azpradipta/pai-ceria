// Data Materi & Games PAI Kelas 5 SD (Fase C)
// Terbagi jelas antara CP LAMA (Buku Siswa Kemdikbud) dan CP BARU (Revisi BSKAP 020/2026 Word Docx)

export const kelas5Data = {
  kelas: 5,
  namaFase: "Fase C (Kelas 5 SD)",

  // =========================================================================
  // 1. KURIKULUM CP LAMA (Berdasarkan Buku Siswa Kemdikbud Cetak)
  // =========================================================================
  cpLama: {
    deskripsi: "Kurikulum berdasarkan Buku Siswa PAI & Budi Pekerti Kelas 5 Kemdikbud (CP 046/2025). Terdiri dari 10 Bab.",
    semester1: [
      {
        id: "k5-lama-bab-1",
        bab: 1,
        elemen: "Al-Qur'an dan Hadis",
        judul: "Menyayangi Anak Yatim (Surah Al-Mā'ūn)",
        icon: "quran",
        fokusCP: "Membaca, menulis, menghafal, dan memahami pesan pokok Q.S. al-Mā'ūn tentang kepedulian sosial.",
        tujuan: [
          "Membaca Q.S. Al-Mā'ūn ayat 1-7 dengan tartil dan fasih sesuai kaidah tajwid.",
          "Menuliskan kembali ayat-ayat Q.S. Al-Mā'ūn dengan kaidah khat yang benar.",
          "Menghafal Surah Al-Mā'ūn dengan lancar di depan kelas.",
          "Menjelaskan ciri-ciri orang yang mendustakan agama menurut Surah Al-Mā'ūn."
        ],
        materi: {
          pengantar: "Surah Al-Mā'ūn adalah surah ke-107 dalam Al-Qur'an yang terdiri atas 7 ayat. Surah ini tergolong Makkiyah. Al-Mā'ūn artinya barang-barang yang berguna. Surah ini memberikan peringatan keras kepada orang-orang yang mengaku beragama tetapi tindakannya menelantarkan kaum yang lemah.",
          subBab: [
            {
              subJudul: "A. Membaca dan Menulis Surah Al-Mā'ūn",
              ilustrasi: "quran",
              ayatPenting: [
                { no: 1, arab: "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ", latin: "Ara'aitallażī yukażżibu bid-dīn", arti: "Tahukah kamu (orang) yang mendustakan agama?" },
                { no: 2, arab: "فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ", latin: "Fażālikallażī yadu''ul-yatīm", arti: "Maka itulah orang yang menghardik anak yatim," },
                { no: 3, arab: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ", latin: "Wa lā yaḥuḍḍu 'alā ṭa'āmil-miskīn", arti: "dan tidak mendorong memberi makan orang miskin." },
                { no: 4, arab: "فَوَيْلٌ لِّلْمُصَلِّينَ", latin: "Fa wailul lil-muṣallīn", arti: "Maka celakalah bagi orang-orang yang salat," },
                { no: 5, arab: "الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ", latin: "Allażīna hum 'an ṣalātihim sāhūn", arti: "(yaitu) orang-orang yang lalai terhadap salatnya," },
                { no: 6, arab: "الَّذِينَ هُمْ يُرَاءُونَ", latin: "Allażīna hum yurā'ūn", arti: "orang-orang yang berbuat riya," },
                { no: 7, arab: "وَيَمْنَعُونَ الْمَاعُونَ", latin: "Wa yamna'ūnal-mā'ūn", arti: "dan enggan (memberikan) bantuan barang berguna." }
              ]
            },
            {
              subJudul: "B. Pesan Pokok: Ciri-Ciri Pendusta Agama",
              ilustrasi: "mosque",
              uraian: "Surah Al-Mā'ūn menyebutkan 5 sifat orang yang mendustakan agama:",
              ciriList: [
                "1. Menghardik anak yatim (membentak, menzalimi haknya, atau tidak menyayangi mereka).",
                "2. Tidak menganjurkan memberi makan orang miskin.",
                "3. Lalai dari salatnya (menunda-nunda waktu salat dan malas-malasan).",
                "4. Berbuat riya (beribadah hanya ingin dilihat dan dipuji manusia).",
                "5. Enggan menolong dengan barang yang berguna (pelit meminjamkan barang sepele)."
              ]
            },
            {
              subJudul: "C. Hadis Keutamaan Menyayangi Anak Yatim",
              ilustrasi: "tahmid",
              dalil: {
                arab: "أَنَا وَكَافِلُ الْيَتِيمِ فِي الْجَنَّةِ هَكَذَا وَأَشَارَ بِالسَّبَّابَةِ وَالْوُسْطَى",
                latin: "Anā wa kāfilul-yatīmi fil-jannati hākażā (wa asyāra bis-sabbābati wal-wusṭā)",
                arti: "Aku dan orang yang memelihara anak yatim di surga bagaikan ini (beliau merapatkan jari telunjuk dan jari tengahnya). (H.R. Bukhari)"
              }
            }
          ],
          rangkuman: [
            "Al-Mā'ūn artinya barang-barang yang berguna.",
            "Ciri pendusta agama: menghardik anak yatim, lalai salat, berbuat riya, dan kikir.",
            "Penyantun anak yatim akan berdampingan dekat dengan Rasulullah di surga."
          ],
          budiPekerti: "Menyisihkan uang saku untuk kotak infak anak yatim di hari Jumat."
        },
        game: {
          id: "game-k5-lama-b1",
          tipe: "knowledge-challenge",
          nama: "Kuis Detektif Surah Al-Ma'un",
          petunjuk: "Jawablah pertanyaan penting seputar kandungan Surah Al-Mā'ūn!",
          questions: [
            {
              tanya: "Apakah arti dari kata 'Al-Mā'ūn'?",
              opsi: ["Barang-barang yang berguna", "Anak yatim", "Hari kiamat"],
              benar: 0,
              alasan: "Al-Ma'un artinya barang-barang yang berguna yang enggan dipinjamkan oleh orang kikir."
            },
            {
              tanya: "Salah satu ciri pendusta agama menurut Surah Al-Mā'ūn adalah orang yang salatnya...",
              opsi: ["Lalai dan berbuat riya (ingin dipuji)", "Khusyuk dan tepat waktu", "Berjamaah di masjid"],
              benar: 0,
              alasan: "Surah Al-Ma'un mengecam orang yang lalai salat dan hanya ingin pamer (riya)."
            }
          ]
        }
      },

      {
        id: "k5-lama-bab-2",
        bab: 2,
        elemen: "Akidah",
        judul: "Lebih Dekat dengan Nama-Nama Allah (Asmaulhusna)",
        icon: "asmaul-husna",
        fokusCP: "Mengenal 5 Asmaulhusna: al-Bā'iś, al-Qawiyyu, al-Muḥyi, al-Mumīt, dan al-Qayyūm.",
        tujuan: [
          "Menjelaskan makna Asmaulhusna al-Bā'iś, al-Qawiyyu, al-Muḥyi, al-Mumīt, dan al-Qayyūm.",
          "Menyebutkan bukti kebesaran kekuasaan Allah yang menghidupkan dan mematikan.",
          "Meneladani sikap mandiri (al-Qayyum) dan kuat fisik-mental (al-Qawiyyu) dalam belajar."
        ],
        materi: {
          pengantar: "Buku Siswa Kelas 5 membahas lima Asmaul Husna yang menggambarkan keagungan, kekuasaan tak terbatas, dan kemandirian Allah Swt.",
          subBab: [
            {
              subJudul: "A. Makna Kelima Asmaul Husna",
              ilustrasi: "asmaul-husna",
              daftarAsmaul: [
                {
                  nama: "1. Al-Bā'iś (الْبَاعِثُ) - Maha Membangkitkan",
                  makna: "Allah akan membangkitkan kembali seluruh manusia yang telah mati dari alam kubur di hari kiamat kelak untuk mempertanggungjawabkan perbuatannya."
                },
                {
                  nama: "2. Al-Qawiyyu (الْقَوِيُّ) - Maha Kuat",
                  makna: "Kekuatan Allah tiada bandingannya. Tidak ada makhluk yang dapat mengalahkan kehendak Allah Swt. Kita harus menjadi mukmin yang kuat iman, akal, dan fisik."
                },
                {
                  nama: "3. Al-Muḥyī (الْمُحْيِي) - Maha Menghidupkan",
                  makna: "Allah yang meniupkan ruh dan memberi kehidupan kepada manusia, hewan, serta menghidupkan tanah yang gersang dengan curahan air hujan."
                },
                {
                  nama: "4. Al-Mumīt (الْمُمِيتُ) - Maha Mematikan",
                  makna: "Allah yang menentukan ajal setiap makhluk bernyawa. Tidak ada satu pun manusia yang dapat lari dari kematian bila ajalnya telah tiba."
                },
                {
                  nama: "5. Al-Qayyūm (الْقَيُّومُ) - Maha Mandiri / Berdiri Sendiri",
                  makna: "Allah mengurus seluruh alam semesta tanpa membutuhkan bantuan siapa pun dan tidak pernah mengantuk ataupun tidur."
                }
              ]
            }
          ],
          rangkuman: [
            "Al-Bā'iś: Membangkitkan manusia dari kubur.",
            "Al-Qawiyyu: Kekuatan mutlak tanpa batas.",
            "Al-Muḥyī & Al-Mumīt: Menghidupkan dan mematikan makhluk.",
            "Al-Qayyūm: Berdiri sendiri tanpa bergantung pada makhluk."
          ],
          budiPekerti: "Belajar mandiri menyiapkan buku pelajaran sendiri tanpa bergantung terus pada orang tua."
        },
        game: {
          id: "game-k5-lama-b2",
          tipe: "memory-card",
          nama: "Kartu Pasangan 5 Nama Agung Allah",
          petunjuk: "Cocokkan nama Asmaul Husna dengan arti kekuasaan-Nya!",
          cards: [
            { id: 1, pairId: "baits", label: "الْبَاعِثُ (Al-Bā'iś)" },
            { id: 2, pairId: "baits", label: "Maha Membangkitkan" },
            { id: 3, pairId: "qawiyyu", label: "الْقَوِيُّ (Al-Qawiyyu)" },
            { id: 4, pairId: "qawiyyu", label: "Maha Kuat" },
            { id: 5, pairId: "qayyum", label: "الْقَيُّومُ (Al-Qayyūm)" },
            { id: 6, pairId: "qayyum", label: "Maha Mandiri" }
          ]
        }
      },

      {
        id: "k5-lama-bab-3",
        bab: 3,
        elemen: "Akhlak",
        judul: "Aku Anak Saleh (Menghargai Keragaman)",
        icon: "sahabat",
        fokusCP: "Menerapkan sikap saling menghargai keragaman suku bangsa serta adab berdoa.",
        tujuan: [
          "Menjelaskan konsep keragaman sebagai sunnatullah (ketetapan Allah).",
          "Menunjukkan sikap toleran dan berteman tanpa membeda-bedakan suku atau warna kulit.",
          "Mempraktikkan adab berdoa dan sikap tawakal kepada Allah."
        ],
        materi: {
          pengantar: "Indonesia adalah bangsa yang kaya akan suku, budaya, bahasa, dan agama. Allah menciptakan keragaman ini agar manusia saling mengenal (lita'arafu) dan saling tolong-menolong dalam kebaikan.",
          subBab: [
            {
              subJudul: "A. Keragaman adalah Sunnatullah",
              ilustrasi: "sahabat",
              dalil: {
                arab: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا",
                latin: "Yā ayyuhan-nāsu innā khalaqnākum min żakariw wa unṡā wa ja'alnākum syu'ūbaw wa qabā'ila lita'ārafū",
                arti: "Wahai manusia! Sungguh, Kami telah menciptakan kamu dari seorang laki-laki dan seorang perempuan, kemudian Kami jadikan kamu berbangsa-bangsa dan bersuku-suku agar kamu saling mengenal. (Q.S. Al-Hujurat: 13)"
              }
            },
            {
              subJudul: "B. Sikap Anak Saleh dalam Kebersamaan",
              ilustrasi: "tahmid",
              uraian: "Anak saleh tidak mengejek logat bahasa teman, tidak membeda-bedakan teman bermain, serta selalu menghormati teman yang sedang beribadah."
            }
          ],
          rangkuman: [
            "Keragaman manusia diciptakan Allah agar saling mengenal dan bekerja sama.",
            "Yang paling mulia di sisi Allah adalah orang yang paling bertakwa."
          ],
          budiPekerti: "Bermain bersama seluruh teman di kelas dengan rukun dan adil."
        },
        game: {
          id: "game-k5-lama-b3",
          tipe: "knowledge-challenge",
          nama: "Pohon Persaudaraan Anak Saleh",
          petunjuk: "Tentukan sikap yang mencerminkan akhlak anak saleh!",
          questions: [
            {
              tanya: "Mengapa Allah menciptakan manusia berbangsa-bangsa dan bersuku-suku?",
              opsi: ["Agar saling mengenal dan tolong-menolong", "Agar bermusuhan", "Agar merasa sukunya paling hebat"],
              benar: 0,
              alasan: "Al-Qur'an menegaskan keragaman diciptakan untuk saling mengenal (lita'arafu)."
            }
          ]
        }
      },

      {
        id: "k5-lama-bab-4",
        bab: 4,
        elemen: "Fikih",
        judul: "Hidup Lapang dengan Berbagi (Zakat, Infak, Sedekah)",
        icon: "zakat",
        fokusCP: "Memahami konsep zakat, infak, sedekah, serta puasa-puasa sunah.",
        tujuan: [
          "Memahami keutamaan berbagi rezeki kepada sesama yang membutuhkan.",
          "Mengenal perbedaan mendasar Zakat Fitrah dan Zakat Mal.",
          "Mengenal macam-macam puasa sunah yang dianjurkan Rasulullah saw."
        ],
        materi: {
          pengantar: "Berbagi tidak akan membuat seseorang menjadi miskin. Justru dengan bersedekah, harta menjadi berkah dan dilipatgandakan oleh Allah Swt.",
          subBab: [
            {
              subJudul: "A. Zakat Pembersih Jiwa dan Harta",
              ilustrasi: "zakat",
              uraian: "Zakat Fitrah dikeluarkan di bulan Ramadan berupa makanan pokok (beras 2,5 kg) untuk menyucikan jiwa orang yang berpuasa. Zakat Mal dikeluarkan dari harta kekayaan bila sudah mencapai nisab dan haul."
            },
            {
              subJudul: "B. Mengenal Puasa-Puasa Sunah",
              ilustrasi: "puasa",
              uraian: "Puasa sunah yang diajarkan Nabi: Puasa Senin dan Kamis, Puasa 6 hari di bulan Syawal, Puasa Arafah (9 Zulhijjah), dan Puasa Asyura (10 Muharram)."
            }
          ],
          rangkuman: [
            "Zakat hukumnya wajib bagi yang mampu.",
            "Puasa sunah mendatangkan pahala tambahan dan menyehatkan tubuh."
          ],
          budiPekerti: "Gemar menyisihkan sebagian rezeki untuk kaum fakir dan miskin."
        },
        game: {
          id: "game-k5-lama-b4",
          tipe: "knowledge-challenge",
          nama: "Kotak Berbagi Berkah",
          petunjuk: "Pilih jawaban yang benar seputar zakat dan puasa sunah!",
          questions: [
            {
              tanya: "Berapa takaran beras Zakat Fitrah yang wajib dikeluarkan per orang?",
              opsi: ["2,5 kg (atau 3,5 liter) beras", "10 kg beras", "1 kg beras"],
              benar: 0,
              alasan: "Takaran zakat fitrah per jiwa adalah 1 sha' atau setara 2,5 kg beras."
            }
          ]
        }
      },

      {
        id: "k5-lama-bab-5",
        bab: 5,
        elemen: "Sejarah Peradaban Islam",
        judul: "Meneladani Perjuangan Rasulullah Membangun Madinah",
        icon: "mosque",
        fokusCP: "Menceritakan kisah keteladanan Nabi Muhammad saw. membangun kota Madinah.",
        tujuan: [
          "Menceritakan peristiwa hijrahnya Nabi saw. dari Makkah ke Madinah.",
          "Mengetahui peran Masjid Nabawi sebagai pusat peradaban dan ibadah.",
          "Meneladani persaudaraan tulus antara kaum Muhajirin dan kaum Ansar."
        ],
        materi: {
          pengantar: "Setibanya di Madinah (Yatsrib), Rasulullah saw. meletakkan dasar-dasar masyarakat madani yang adil, bersatu, dan makmur.",
          subBab: [
            {
              subJudul: "A. Pembangunan Masjid Nabawi",
              ilustrasi: "mosque",
              uraian: "Langkah pertama yang dilakukan Nabi saw. adalah mendirikan Masjid Nabawi. Tanah dibeli dari dua anak yatim bernama Sahl dan Suhail. Masjid digunakan untuk salat, bermusyawarah, dan majelis ilmu."
            },
            {
              subJudul: "B. Persaudaraan Muhajirin dan Ansar",
              ilustrasi: "sahabat",
              uraian: "Kaum Muhajirin yang datang dari Makkah tidak membawa harta. Kaum Ansar menyambut mereka dengan penuh keikhlasan, membagi rumah, tanah, dan kebun kurma mereka atas dasar tali persaudaraan iman."
            }
          ],
          rangkuman: [
            "Masjid Nabawi adalah sentra utama peradaban Islam di Madinah.",
            "Ukhuwah Islamiyah mempersatukan kaum Muhajirin dan Ansar melampaui ikatan darah."
          ],
          budiPekerti: "Suka menolong teman baru yang pindah dari sekolah lain agar merasa nyaman."
        },
        game: {
          id: "game-k5-lama-b5",
          tipe: "knowledge-challenge",
          nama: "Petualangan Hijrah Madinah",
          petunjuk: "Pilih fakta sejarah pembangunan kota Madinah!",
          questions: [
            {
              tanya: "Kaum muslimin asli Madinah yang menolong kaum Muhajirin disebut...",
              opsi: ["Kaum Ansar", "Kaum Quraisy", "Kaum Romawi"],
              benar: 0,
              alasan: "Ansar artinya para penolong, yaitu penduduk muslim asli kota Madinah."
            }
          ]
        }
      }
    ],

    semester2: [
      {
        id: "k5-lama-bab-6",
        bab: 6,
        elemen: "Al-Qur'an dan Hadis",
        judul: "Hidup Damai dalam Kebersamaan (Q.S. Ar-Rūm & Al-Baqarah)",
        icon: "quran",
        fokusCP: "Memahami makna Q.S. ar-Rūm: 22 dan al-Baqarah: 256 tentang toleransi tanpa paksaan.",
        tujuan: [
          "Membaca Q.S. ar-Rūm: 22 tentang tanda kekuasaan Allah pada bahasa dan warna kulit.",
          "Memahami Q.S. al-Baqarah: 256 bahwa tidak ada paksaan dalam memeluk agama Islam.",
          "Menunjukkan sikap toleransi dan menghormati peribadatan agama lain."
        ],
        materi: {
          pengantar: "Islam mengajarkan perdamaian. Perbedaan ras, bahasa, dan agama bukanlah alasan untuk bermusuhan, melainkan kesempatan untuk saling berlomba dalam kebaikan.",
          subBab: [
            {
              subJudul: "A. Keragaman Bahasa dan Warna Kulit (Q.S. Ar-Rūm: 22)",
              ilustrasi: "quran",
              dalil: {
                arab: "وَمِنْ آيَاتِهِ خَلْقُ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافُ أَلْسِنَتِكُمْ وَأَلْوَانِكُمْ",
                latin: "Wa min āyātihī khalqus-samāwāti wal-arḍi wakhtilāfu alsinatikum wa alwānikum",
                arti: "Dan di antara tanda-tanda (kebesaran)-Nya ialah penciptaan langit dan bumi, perbedaan bahasa-bahasamu dan warna kulitmu. (Q.S. Ar-Rum: 22)"
              }
            },
            {
              subJudul: "B. Tidak Ada Paksaan dalam Agama (Q.S. Al-Baqarah: 256)",
              ilustrasi: "mosque",
              dalil: {
                arab: "لَا إِكْرَاهَ فِي الدِّينِ ۖ قَد تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّ",
                latin: "Lā ikrāha fid-dīn, qad tabayyanar-rusydu minal-gayy",
                arti: "Tidak ada paksaan dalam (menganut) agama (Islam); sungguh telah jelas jalan yang benar dari jalan yang sesat."
              }
            }
          ],
          rangkuman: [
            "Perbedaan bahasa dan warna kulit adalah tanda kebesaran Allah.",
            "Islam tidak memaksakan keyakinan kepada orang lain."
          ],
          budiPekerti: "Tidak mengganggu tetangga yang sedang menjalankan ibadah agamanya."
        },
        game: {
          id: "game-k5-lama-b6",
          tipe: "knowledge-challenge",
          nama: "Cahaya Toleransi Damai",
          petunjuk: "Pilih sikap yang sesuai dengan prinsip toleransi Islam!",
          questions: [
            {
              tanya: "Arti dari potongan ayat 'Lā ikrāha fid-dīn' adalah...",
              opsi: ["Tidak ada paksaan dalam menganut agama", "Semua manusia sama saja", "Perangilah orang lain"],
              benar: 0,
              alasan: "Islam melarang pemaksaan agama kepada siapa pun."
            }
          ]
        }
      },

      {
        id: "k5-lama-bab-7",
        bab: 7,
        elemen: "Akidah",
        judul: "Ketika Kehidupan Telah Berhenti (Hari Akhir)",
        icon: "qada-qadar",
        fokusCP: "Memahami makna beriman kepada hari akhir, kiamat sugra dan kubra.",
        tujuan: [
          "Menjelaskan pengertian hari akhir (kiamat).",
          "Membedakan Kiamat Sugra (kecil) dan Kiamat Kubra (besar).",
          "Meyakini adanya hari pembalasan amal perbuatan."
        ],
        materi: {
          pengantar: "Kehidupan dunia ini tidak kekal. Suatu saat alam semesta beserta seluruh isinya akan hancur lebur, dan seluruh manusia akan dibangkitkan untuk mempertanggungjawabkan perbuatannya.",
          subBab: [
            {
              subJudul: "A. Kiamat Sugra dan Kiamat Kubra",
              ilustrasi: "qada-qadar",
              uraian: "Kiamat Sugra adalah kematian seseorang atau bencana alam (tsunami, gempa). Kiamat Kubra adalah hancurnya seluruh alam semesta saat sangkakala pertama ditiup oleh Malaikat Israfil."
            }
          ],
          rangkuman: [
            "Hari kiamat pasti terjadi dan hanya Allah yang tahu waktunya.",
            "Kiamat sugra berupa kematian; kiamat kubra kehancuran total jagat raya."
          ],
          budiPekerti: "Memperbanyak amal saleh dan memohon ampunan setiap hari."
        },
        game: {
          id: "game-k5-lama-b7",
          tipe: "knowledge-challenge",
          nama: "Tantangan Hari Akhir",
          petunjuk: "Jawablah seputar tanda dan peristiwa hari akhir!",
          questions: [
            {
              tanya: "Kematian seseorang dan terjadinya bencana gempa bumi termasuk contoh...",
              opsi: ["Kiamat Sugra (Kecil)", "Kiamat Kubra (Besar)", "Kiamat Abadi"],
              benar: 0,
              alasan: "Kematian dan bencana lokal merupakan Kiamat Sugra."
            }
          ]
        }
      },

      {
        id: "k5-lama-bab-8",
        bab: 8,
        elemen: "Akhlak",
        judul: "Senangnya Berteman (Adab Bergaul)",
        icon: "sahabat",
        fokusCP: "Menerapkan adab bergaul dengan teman sebaya dan tetangga.",
        tujuan: [
          "Mengetahui adab berteman dalam Islam.",
          "Menghindari perbuatan mencela, ghibah, dan menyakiti hati teman.",
          "Saling tolong-menolong dalam kebaikan."
        ],
        materi: {
          pengantar: "Teman yang baik adalah rezeki dari Allah. Teman yang saleh akan mengajak kita rajin salat, belajar tekun, dan mengingatkan saat kita lupa.",
          subBab: [
            {
              subJudul: "A. Adab Berteman yang Santun",
              ilustrasi: "sahabat",
              uraian: "Tersenyum saat bertemu, memanggil dengan nama yang baik, tidak membicarakan kejelekan teman di belakang (ghibah), dan saling memaafkan."
            }
          ],
          rangkuman: [
            "Teman yang baik saling mengajak ke jalan Allah.",
            "Dilarang mengejek kekurangan fisik teman."
          ],
          budiPekerti: "Membela teman yang sedang di-bully dan mengajaknya bermain bersama."
        },
        game: {
          id: "game-k5-lama-b8",
          tipe: "knowledge-challenge",
          nama: "Benteng Sahabat Sejati",
          petunjuk: "Pilih sikap yang mempererat persahabatan!",
          questions: [
            {
              tanya: "Ketika teman kita melakukan kesalahan dan meminta maaf, sikap kita adalah...",
              opsi: ["Memaafkannya dengan ikhlas dan tersenyum", "Mendiamkannya selamanya", "Membalas dendam"],
              benar: 0,
              alasan: "Islam memerintahkan kita untuk menjadi orang yang pemaaf."
            }
          ]
        }
      },

      {
        id: "k5-lama-bab-9",
        bab: 9,
        elemen: "Fikih",
        judul: "Ibadah Haji dan Kurban",
        icon: "mosque",
        fokusCP: "Memahami ketentuan ibadah haji dan kurban.",
        tujuan: [
          "Menjelaskan pengertian ibadah haji sebagai rukun Islam kelima.",
          "Mengetahui tempat-tempat bersejarah haji (Ka'bah, Arafah, Muzdalifah, Mina).",
          "Memahami makna ibadah kurban meneladani Nabi Ibrahim dan Nabi Ismail a.s."
        ],
        materi: {
          pengantar: "Ibadah haji dilaksanakan pada bulan Zulhijjah di tanah suci Makkah bagi yang mampu secara fisik dan biaya. Kurban mengajarkan keikhlasan dan kepedulian berbagi daging kepada sesama.",
          subBab: [
            {
              subJudul: "A. Ibadah Haji ke Baitullah",
              ilustrasi: "mosque",
              uraian: "Rukun haji meliputi: Ihram disertai niat, Wukuf di padang Arafah, Tawaf mengelilingi Ka'bah 7 putaran, Sa'i antara bukit Shafa dan Marwah, Tahallul (mencukur rambut), dan Tertib."
            },
            {
              subJudul: "B. Ibadah Kurban Penuh Pengorbanan",
              ilustrasi: "zakat",
              uraian: "Kurban dilaksanakan pada hari raya Idul Adha (10 Zulhijjah) dan hari Tasyrik (11, 12, 13 Zulhijjah) dengan menyembelih hewan ternak (kambing, domba, sapi, unta)."
            }
          ],
          rangkuman: [
            "Haji adalah rukun Islam kelima bagi yang mampu.",
            "Kurban meneladani ketaatan Nabi Ibrahim dan keikhlasan Nabi Ismail a.s."
          ],
          budiPekerti: "Belajar ikhlas berbagi rezeki seperti keikhlasan Nabi Ibrahim a.s."
        },
        game: {
          id: "game-k5-lama-b9",
          tipe: "knowledge-challenge",
          nama: "Manasik Pintar Haji & Kurban",
          petunjuk: "Jawablah pertanyaan seputar haji dan kurban!",
          questions: [
            {
              tanya: "Mengelilingi Ka'bah sebanyak 7 kali dalam ibadah haji disebut...",
              opsi: ["Tawaf", "Sa'i", "Wukuf"],
              benar: 0,
              alasan: "Tawaf adalah berjalan mengelilingi Ka'bah berlawanan arah jarum jam sebanyak 7 kali."
            }
          ]
        }
      },

      {
        id: "k5-lama-bab-10",
        bab: 10,
        elemen: "Sejarah Peradaban Islam",
        judul: "Keteladanan Khulafaurasyidin",
        icon: "khulafaur-rasyidin",
        fokusCP: "Menceritakan keteladanan empat khalifah utama: Abu Bakar, Umar, Usman, dan Ali.",
        tujuan: [
          "Mengenal 4 Khulafaur Rasyidin pengganti Rasulullah saw.",
          "Mengetahui jasa monumental masing-masing khalifah bagi kemajuan Islam.",
          "Meneladani sifat jujur, adil, dermawan, dan keberanian para sahabat utama."
        ],
        materi: {
          pengantar: "Khulafaur Rasyidin adalah para pemimpin yang lurus dan mendapat petunjuk. Terdiri dari Abu Bakar ash-Shiddiq, Umar bin Khattab, Utsman bin Affan, dan Ali bin Abi Thalib.",
          subBab: [
            {
              subJudul: "A. Empat Sahabat Mulia",
              ilustrasi: "khulafaur-rasyidin",
              uraian: "1. Abu Bakar (jujur, mengumpulkan lembaran Al-Qur'an), 2. Umar bin Khattab (tegas, adil, merintis kalender Hijriah), 3. Utsman bin Affan (dermawan, membukukan Mushaf Usmani), 4. Ali bin Abi Thalib (cerdas, ksatria pemberani)."
            }
          ],
          rangkuman: [
            "Khulafaur Rasyidin memimpin dengan musyawarah dan keadilan tinggi.",
            "Keempat sahabat hidup bersahaja dan mendahulukan kepentingan umat."
          ],
          budiPekerti: "Berani berkata jujur dan membela kebenaran dalam musyawarah kelas."
        },
        game: {
          id: "game-k5-lama-b10",
          tipe: "knowledge-challenge",
          nama: "Bintang 4 Khulafaur Rasyidin",
          petunjuk: "Cocokkan jasa kepemimpinan sahabat Nabi saw.!",
          questions: [
            {
              tanya: "Khalifah yang memelopori penetapan Kalender Hijriah adalah...",
              opsi: ["Umar bin Khattab", "Abu Bakar", "Ali bin Abi Thalib"],
              benar: 0,
              alasan: "Umar bin Khattab menetapkan kalender Hijriah diawali dari peristiwa hijrah Nabi saw."
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
    deskripsi: "Kurikulum berdasarkan Keputusan BSKAP No. 020/2026 (Perubahan CP Fase C Kelas 5). Memuat materi baru: Tajwid Mim Sukun & Qalqalah terstruktur, Surah Al-'Asr, Asmaul Husna Al-Halim/Syakur/Hakim/Wadud, Fikih Puasa Wajib/Sunah, dan Makanan Halal-Haram.",
    semester1: [
      {
        id: "k5-baru-bab-1",
        bab: 1,
        elemen: "Al-Qur'an dan Hadis",
        judul: "Huruf Bersambung, Tajwid Mim Sukun & Surah al-'Aṣr",
        icon: "tajwid",
        fokusCP: "Membaca huruf bersambung 3 kata/lebih, praktik tajwid 3 hukum Mim Sukun, dan tadabur Surah al-'Aṣr.",
        tujuan: [
          "Membaca kalimat bersambung 3 kata atau lebih dengan lancar sesuai makhraj.",
          "Menguasai 3 hukum bacaan Mim Sukun: Ikhfa Syafawi, Idgham Mimi, dan Idzhar Syafawi.",
          "Membaca dan menghafal Surah Al-'Aṣr secara tartil.",
          "Memahami 4 kunci agar terhindar dari kerugian hidup menurut Surah Al-'Aṣr."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Di CP 020/2026, materi semester 1 difokuskan pada penguasaan HUKUM MIM SUKUN (مْ) dan tadabur SURAH AL-'AṢR yang mengajarkan disiplin waktu dan amal saleh.",
          subBab: [
            {
              subJudul: "A. Praktik Tajwid: Tiga Hukum Mim Sukun (مْ)",
              ilustrasi: "mim-sukun",
              uraian: "Jika ada huruf Mim Sukun (مْ) bertemu huruf hijaiah, terdapat 3 hukum bacaan:",
              hukumMim: [
                {
                  nama: "1. Ikhfa Syafawi (إِخْفَاء شَفَوِي)",
                  aturan: "Mim Sukun (مْ) bertemu dengan huruf Ba (ب).",
                  caraBaca: "Disamarkan di bibir disertai dengung (gunnah) 2 harakat.",
                  contoh: "تَرْمِيهِم بِحِجَارَةٍ (Tarmiihim biḥijārah)"
                },
                {
                  nama: "2. Idgham Mimi / Mutamatsilain (إِدْغَام مِثْلَيْنِ)",
                  aturan: "Mim Sukun (مْ) bertemu dengan sesama huruf Mim (م).",
                  caraBaca: "Dileburkan ke mim kedua disertai dengung 2 harakat.",
                  contoh: "أَطْعَمَهُم مِّن جُوعٍ (Aṭ'amahum min joo')"
                },
                {
                  nama: "3. Idzhar Syafawi (إِظْهَار شَفَوِي)",
                  aturan: "Mim Sukun (مْ) bertemu 26 huruf hijaiah SELAIN Mim dan Ba.",
                  caraBaca: "Dibaca jelas di bibir tanpa dengung sama sekali.",
                  contoh: "أَلَمْ تَرَ (Alam tara), هُمْ فِيهَا (Hum fīhā)"
                }
              ]
            },
            {
              subJudul: "B. Tadabur Surah Al-'Aṣr (Demi Masa)",
              ilustrasi: "quran",
              dalil: {
                arab: "وَالْعَصْرِ ۙ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ ۙ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
                latin: "Wal-'aṣr. Innal-insāna lafī khusr. Illallażīna āmanū wa 'amiluṣ-ṣāliḥāti wa tawāṣau bil-ḥaqqi wa tawāṣau biṣ-ṣabr.",
                arti: "Demi masa. Sungguh, manusia berada dalam kerugian, kecuali orang-orang yang beriman dan mengerjakan kebajikan serta saling menasihati untuk kebenaran dan saling menasihati untuk kesabaran."
              },
              uraian: "Empat sifat agar terbebas dari kerugian: 1. Beriman kepada Allah, 2. Beramal saleh, 3. Saling menasihati dalam kebenaran, 4. Saling menasihati dalam kesabaran."
            }
          ],
          rangkuman: [
            "Hukum Mim Sukun ada 3: Ikhfa Syafawi (ke Ba), Idgham Mimi (ke Mim), Idzhar Syafawi (ke 26 huruf lainnya).",
            "Surah Al-'Asr mengingatkan manusia agar tidak membuang waktu secara sia-sia."
          ],
          budiPekerti: "Membuat jadwal kegiatan belajar di rumah dan menepatinya secara disiplin."
        },
        game: {
          id: "game-k5-baru-b1",
          tipe: "tajwid-detective",
          nama: "Detektif Tajwid Mim Sukun",
          petunjuk: "Temukan hukum Mim Sukun pada penggalan ayat Al-Qur'an berikut!",
          soalList: [
            {
              potonganAyat: "تَرْمِيهِم بِحِجَارَةٍ",
              tanya: "Mim sukun (مْ) bertemu huruf Ba (ب). Hukum bacaannya adalah...",
              pilihan: ["Ikhfa Syafawi", "Idgham Mimi", "Idzhar Syafawi"],
              kunci: "Ikhfa Syafawi",
              alasan: "Mim Sukun bertemu Ba dibaca samar berdehem di bibir (Ikhfa Syafawi)."
            },
            {
              potonganAyat: "أَطْعَمَهُم مِّن جُوعٍ",
              tanya: "Mim sukun (مْ) bertemu huruf Mim (م). Hukum bacaannya adalah...",
              pilihan: ["Idgham Mimi", "Idzhar Syafawi", "Ikhfa Syafawi"],
              kunci: "Idgham Mimi",
              alasan: "Mim sukun bertemu sesama mim dileburkan dengan dengung."
            },
            {
              potonganAyat: "أَلَمْ تَرَ كَيْفَ",
              tanya: "Mim sukun (مْ) bertemu huruf Ta (ت). Hukum bacaannya adalah...",
              pilihan: ["Idzhar Syafawi", "Ikhfa Syafawi", "Idgham Mimi"],
              kunci: "Idzhar Syafawi",
              alasan: "Ta bukan mim dan bukan ba, maka dibaca jelas (Idzhar Syafawi)."
            }
          ]
        }
      },

      {
        id: "k5-baru-bab-2",
        bab: 2,
        elemen: "Akidah",
        judul: "Asmaulhusna: al-Ḥalīm, asy-Syakūr, al-Ḥakīm, al-Wadūd",
        icon: "asmaul-husna",
        fokusCP: "Menjelaskan makna dan meneladani keluhuran sifat al-Ḥalīm, asy-Syakūr, al-Ḥakīm, dan al-Wadūd.",
        tujuan: [
          "Mengartikan Asmaulhusna al-Ḥalīm (Maha Penyantun).",
          "Mengartikan Asmaulhusna asy-Syakūr (Maha Menghargai / Mensyukuri).",
          "Mengartikan Asmaulhusna al-Ḥakīm (Maha Bijaksana).",
          "Mengartikan Asmaulhusna al-Wadūd (Maha Mencintai / Mengasihi).",
          "Meneladani sifat-sifat mulia tersebut dalam interaksi pertemanan di sekolah."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Di CP 020/2026, materi Asmaul Husna kelas 5 BERGANTI NAMA menjadi al-Ḥalīm, asy-Syakūr, al-Ḥakīm, dan al-Wadūd. Nama-nama ini mengedepankan pembentukan budi pekerti kasih sayang, kesantunan, dan kebijaksanaan.",
          subBab: [
            {
              subJudul: "A. Empat Asmaul Husna CP Baru",
              ilustrasi: "asmaul-husna",
              daftarBaru: [
                {
                  nama: "Al-Ḥalīm (الْحَلِيمُ) - Maha Penyantun & Pemaaf",
                  penjelasan: "Allah tidak terburu-buru menurunkan siksa bagi hamba-Nya yang berbuat dosa, melainkan memberi kesempatan untuk bertaubat. Teladan kita: Menahan amarah dan tidak cepat membalas dendam saat diejek teman."
                },
                {
                  nama: "Asy-Syakūr (الشَّكُورُ) - Maha Menghargai Kebaikan",
                  penjelasan: "Allah membalas amal kebaikan kecil dengan pahala berlipat ganda. Teladan kita: Selalu menghargai dan mengucapkan terima kasih atas bantuan sekecil apa pun dari teman."
                },
                {
                  nama: "Al-Ḥakīm (الْحَكِيمُ) - Maha Bijaksana",
                  penjelasan: "Segala ciptaan dan takdir Allah penuh hikmah dan tidak ada yang sia-sia. Teladan kita: Berpikir matang dan adil sebelum mengambil keputusan."
                },
                {
                  nama: "Al-Wadūd (الْوَدُودُ) - Maha Penuh Kasih Sayang",
                  penjelasan: "Allah mencintai hamba-hamba-Nya yang beriman dan melimpahkan ketenteraman hati. Teladan kita: Menebarkan kasih sayang, ramah, dan mendamaikan teman yang berselisih."
                }
              ]
            }
          ],
          rangkuman: [
            "Al-Halim: Teladan santun dan tidak pemarah.",
            "Asy-Syakur: Teladan suka memuji dan menghargai kebaikan orang lain.",
            "Al-Hakim: Teladan bertindak bijaksana.",
            "Al-Wadud: Teladan penuh cinta dan persaudaraan."
          ],
          budiPekerti: "Tersenyum dan memaafkan teman yang tidak sengaja menyenggol meja kita."
        },
        game: {
          id: "game-k5-baru-b2",
          tipe: "memory-card",
          nama: "Taman Bintang Asmaul Husna Baru",
          petunjuk: "Cocokkan nama Asmaul Husna dengan teladan karakternya!",
          cards: [
            { id: 1, pairId: "halim", label: "الْحَلِيمُ (Al-Halim)" },
            { id: 2, pairId: "halim", label: "Maha Penyantun (Sabar)" },
            { id: 3, pairId: "syakur", label: "الشَّكُورُ (Asy-Syakur)" },
            { id: 4, pairId: "syakur", label: "Maha Menghargai" },
            { id: 5, pairId: "wadud", label: "الْوَدُودُ (Al-Wadud)" },
            { id: 6, pairId: "wadud", label: "Maha Mengasihi" }
          ]
        }
      },

      {
        id: "k5-baru-bab-3",
        bab: 3,
        elemen: "Akhlak",
        judul: "Akhlak terhadap Allah: Berdoa dan Bertawakal",
        icon: "tahmid",
        fokusCP: "Menerapkan kepasrahan dan optimisme melalui adab berdoa serta sikap tawakal setelah ikhtiar.",
        tujuan: [
          "Memahami doa sebagai ibadah dan senjata utama seorang mukmin.",
          "Mengetahui adab dan waktu-waktu mustajab terkabulnya doa.",
          "Memahami hubungan antara Ikhtiar (usaha maksimal) dan Tawakal (berserah diri).",
          "Menjauhi sikap putus asa ketika doa belum terwujud."
        ],
        materi: {
          pengantar: "Doa dan tawakal adalah dua pilar ketenangan jiwa. Manusia diperintahkan untuk berusaha sekuat tenaga, lalu berserah diri sepenuhnya kepada ketetapan Allah Yang Maha Mengetahui yang terbaik.",
          subBab: [
            {
              subJudul: "A. Hakikat Doa dan Adabnya",
              ilustrasi: "tahmid",
              dalil: {
                arab: "وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ",
                latin: "Wa qāla Rabbukumud'ūnī astajib lakum",
                arti: "Dan Tuhanmu berfirman, 'Berdoalah kepada-Ku, niscaya akan Kuperkenankan bagimu.' (Q.S. Gafir: 60)"
              },
              uraian: "Adab berdoa: Menghadap kiblat, dalam keadaan suci, mengawali dengan tahmid dan salawat nabi, merendahkan suara, khusyuk, dan yakin Allah akan mengabulkannya."
            },
            {
              subJudul: "B. Keseimbangan Ikhtiar dan Tawakal",
              ilustrasi: "qada-qadar",
              uraian: "Ikhtiar artinya berusaha sungguh-sungguh menggunakan akal dan tenaga. Tawakal artinya menyerahkan hasil akhir kepada Allah. Seseorang tidak boleh hanya berdoa tanpa belajar saat ingin lulus ujian."
            }
          ],
          rangkuman: [
            "Doa adalah senjata orang beriman.",
            "Tawakal dilakukan setelah ikhtiar sungguh-sungguh, bukan sebelum berusaha."
          ],
          budiPekerti: "Belajar sungguh-sungguh setiap malam menjelang ujian, lalu berdoa memohon kemudahan."
        },
        game: {
          id: "game-k5-baru-b3",
          tipe: "knowledge-challenge",
          nama: "Jembatan Ikhtiar & Tawakal",
          petunjuk: "Tentukan apakah pernyataan berikut termasuk Ikhtiar atau Tawakal!",
          questions: [
            {
              tanya: "Mengerjakan latihan soal matematika dan belajar tekun setiap malam adalah bentuk...",
              opsi: ["Ikhtiar (Usaha Nyata)", "Tawakal (Berserah Diri)", "Takdir Mubram"],
              benar: 0,
              alasan: "Belajar dan berlatih adalah usaha nyata (ikhtiar) manusia."
            },
            {
              tanya: "Menerima nilai hasil ujian dengan lapang dada dan ikhlas setelah belajar keras adalah bentuk...",
              opsi: ["Tawakal (Berserah Diri)", "Ikhtiar", "Sombong"],
              benar: 0,
              alasan: "Tawakal adalah menerima ketetapan Allah setelah mengerahkan usaha maksimal."
            }
          ]
        }
      },

      {
        id: "k5-baru-bab-4",
        bab: 4,
        elemen: "Fikih",
        judul: "Fikih Puasa: Puasa Wajib dan Puasa Sunah",
        icon: "puasa",
        fokusCP: "Menerapkan ketentuan puasa wajib Ramadan serta puasa-puasa sunah yang dianjurkan syariat.",
        tujuan: [
          "Memahami pengertian puasa, rukun puasa, syarat sah, dan hal yang membatalkan puasa.",
          "Mengenal 4 macam puasa wajib: Puasa Ramadan, Qadha, Nazar, dan Kifarat.",
          "Mengenal puasa sunah: Senin-Kamis, Ayyamul Bidh, 6 hari Syawal, dan Arafah.",
          "Merasakan hikmah puasa: menumbuhkan empati dhuafa dan melatih kejujuran."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Pada CP 020/2026, materi Fikih semester 1 membahas FIKIH PUASA SECARA LENGKAP mencakup puasa wajib (Ramadan) dan puasa sunah.",
          subBab: [
            {
              subJudul: "A. Pengertian dan Rukun Puasa",
              ilustrasi: "puasa",
              uraian: "Puasa (ash-Shiyam) artinya menahan diri dari makan, minum, dan segala hal yang membatalkannya mulai dari terbit fajar shadiq (subuh) hingga terbenam matahari (magrib) disertai niat ikhlas karena Allah Swt."
            },
            {
              subJudul: "B. Macam Puasa Wajib dan Sunah",
              ilustrasi: "puasa",
              uraian: "Puasa Wajib: 1. Ramadan (sebulan penuh), 2. Qadha (pengganti hari sakit/safar), 3. Nazar (janji kebaikan), 4. Kifarat (denda). Puasa Sunah: Senin-Kamis, Ayyamul Bidh (13, 14, 15 Hijriah), Syawal (6 hari), dan Arafah (9 Zulhijjah)."
            }
          ],
          rangkuman: [
            "Rukun puasa: Niat dan menahan diri sejak subuh hingga magrib.",
            "Puasa wajib: Ramadan, Qadha, Nazar, Kifarat.",
            "Puasa sunah melipatgandakan pahala dan menyehatkan tubuh."
          ],
          budiPekerti: "Berlatih puasa sunah hari Senin atau puasa penuh di bulan Ramadan dengan sabar."
        },
        game: {
          id: "game-k5-baru-b4",
          tipe: "knowledge-challenge",
          nama: "Pilah Keranjang Puasa Wajib vs Sunah",
          petunjuk: "Pilih kategori puasa dengan tepat!",
          questions: [
            {
              tanya: "Puasa yang dilaksanakan pada hari Senin dan Kamis hukumnya adalah...",
              opsi: ["Sunah", "Wajib", "Makruh"],
              benar: 0,
              alasan: "Puasa Senin-Kamis adalah puasa sunah yang rutin dikerjakan Rasulullah saw."
            },
            {
              tanya: "Puasa untuk mengganti puasa Ramadan yang tertinggal karena sakit disebut...",
              opsi: ["Puasa Qadha (Wajib)", "Puasa Syawal", "Puasa Arafah"],
              benar: 0,
              alasan: "Puasa Qadha wajib ditunaikan sebelum datang Ramadan berikutnya."
            }
          ]
        }
      },

      {
        id: "k5-baru-bab-5",
        bab: 5,
        elemen: "Sejarah Peradaban Islam",
        judul: "Kepemimpinan Nabi Muhammad saw. di Madinah",
        icon: "mosque",
        fokusCP: "Menganalisis prinsip keadilan, toleransi, dan piagam Madinah dalam kepemimpinan Rasulullah saw.",
        tujuan: [
          "Menjelaskan isi dan makna historis Piagam Madinah (Sahifatul Madinah).",
          "Menganalisis cara Nabi saw. memimpin masyarakat majemuk yang terdiri dari suku dan agama berbeda.",
          "Meneladani keadilan dan sikap musyawarah Rasulullah saw. dalam kepemimpinan."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Di CP 020/2026, materi sejarah kelas 5 difokuskan pada KEPEMIMPINAN NABI DI MADINAH, khususnya Piagam Madinah sebagai percontohan masyarakat madani yang toleran dan adil.",
          subBab: [
            {
              subJudul: "A. Piagam Madinah: Konstitusi Tertulis Pertama Dunia",
              ilustrasi: "mosque",
              uraian: "Piagam Madinah disepakati bersama oleh kaum muslim, kaum Yahudi, dan suku-suku Arab Madinah. Isi pentingnya: 1. Semua warga Madinah wajib saling membela jika kota diserang musuh, 2. Kebebasan beragama dijamin tanpa paksaan, 3. Penegakan hukum yang adil tanpa memandang suku atau strata sosial."
            },
            {
              subJudul: "B. Karakter Pemimpin Sejati",
              ilustrasi: "khulafaur-rasyidin",
              uraian: "Rasulullah memimpin tidak seperti raja yang sewenang-wenang. Beliau selalu bermusyawarah dengan para sahabat, mendengar pendapat anak muda, dan hidup bersahaja."
            }
          ],
          rangkuman: [
            "Piagam Madinah menjamin kebebasan beragama dan persamaan hak di depan hukum.",
            "Rasulullah saw. memimpin dengan musyawarah, kasih sayang, dan keadilan."
          ],
          budiPekerti: "Menghormati keputusan musyawarah pemilihan ketua kelas dan melaksanakannya bersama."
        },
        game: {
          id: "game-k5-baru-b5",
          tipe: "knowledge-challenge",
          nama: "Diplomasi Agung Piagam Madinah",
          petunjuk: "Jawablah seputar prinsip kepemimpinan Nabi di Madinah!",
          questions: [
            {
              tanya: "Salah satu prinsip penting dalam Piagam Madinah terhadap kaum non-muslim adalah...",
              opsi: ["Menjamin kebebasan beragama dan hak keamanan bersama", "Mengusir mereka", "Memaksa mereka masuk Islam"],
              benar: 0,
              alasan: "Piagam Madinah secara tegas menjamin kebebasan memeluk keyakinan masing-masing."
            }
          ]
        }
      }
    ],

    semester2: [
      {
        id: "k5-baru-bab-6",
        bab: 6,
        elemen: "Al-Qur'an dan Hadis",
        judul: "Tajwid Qalqalah & Hadis Berbakti kepada Orang Tua dan Guru",
        icon: "qalqalah",
        fokusCP: "Mempraktikkan bacaan Qalqalah Sugra & Kubra serta mengamalkan hadis Birrul Walidain.",
        tujuan: [
          "Mengenal 5 huruf Qalqalah (Ba, Jim, Dal, Tha, Qaf / disingkat Ba-Ju-Di-To-Qo).",
          "Membedakan cara membaca Qalqalah Sugra (pantulan kecil di tengah) dan Qalqalah Kubra (pantulan besar di waqaf).",
          "Menghafal dan mengamalkan Hadis tentang ridha Allah terletak pada ridha kedua orang tua."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Di CP 020/2026, materi semester 2 memuat HUKUM TAJWID QALQALAH secara mendalam serta HADIS BIRRUL WALIDAIN (berbakti kepada orang tua dan guru).",
          subBab: [
            {
              subJudul: "A. Hukum Tajwid Qalqalah (قَلْقَلَة)",
              ilustrasi: "qalqalah",
              uraian: "Qalqalah artinya memantul. Hurufnya ada lima: ق, ط, ب, ج, د. Terbagi dua:",
              jenisQalqalah: [
                {
                  nama: "1. Qalqalah Sugra (Kecil)",
                  ket: "Huruf qalqalah berharakat sukun ASLI di tengah kata.",
                  contoh: "يَطْمَعُ (Yaṭma'u), أَبْصَارِهِمْ (Abṣārihim), يَجْعَلْ (Yaj'al)"
                },
                {
                  nama: "2. Qalqalah Kubra (Besar)",
                  ket: "Huruf qalqalah di akhir kata dan disukunkan karena waqaf (berhenti).",
                  contoh: "الْفَلَقِ ۙ (Al-Falaq!), أَحَدٌ ۙ (Ahad!), وَتَبَّ ۙ (Wa tabb!)"
                }
              ]
            },
            {
              subJudul: "B. Hadis Berbakti kepada Orang Tua dan Guru",
              ilustrasi: "birrul-walidain",
              dalil: {
                arab: "رِضَى الرَّبِّ فِي رِضَى الْوَالِدَيْنِ وَسَخَطُ الرَّبِّ فِي سَخَطِ الْوَالِدَيْنِ",
                latin: "Riḍār-Rabbi fī riḍāl-wālidaini wa sakhaṭur-Rabbi fī sakhaṭil-wālidain",
                arti: "Ridha Allah terletak pada ridha kedua orang tua, dan murka Allah terletak pada kemurkaan kedua orang tua. (H.R. Tirmizi)"
              }
            }
          ],
          rangkuman: [
            "Huruf qalqalah: Ba, Jim, Dal, Tha, Qaf.",
            "Qalqalah Sugra memantul ringan di tengah kata; Qalqalah Kubra memantul kuat saat waqaf.",
            "Ridha Allah bergantung pada ridha kedua orang tua kita."
          ],
          budiPekerti: "Mencium tangan kedua orang tua saat berpamitan berangkat sekolah dan mendoakannya."
        },
        game: {
          id: "game-k5-baru-b6",
          tipe: "knowledge-challenge",
          nama: "Pantulan Indah Qalqalah",
          petunjuk: "Tentukan jenis Qalqalah pada kata berikut!",
          questions: [
            {
              tanya: "Pada kata 'يَجْعَلْ' (Yaj'al), huruf Jim sukun berada di tengah kata. Hukumnya adalah...",
              opsi: ["Qalqalah Sugra (Kecil)", "Qalqalah Kubra (Besar)", "Bukan Qalqalah"],
              benar: 0,
              alasan: "Huruf qalqalah sukun di tengah kata disebut Qalqalah Sugra."
            },
            {
              tanya: "Pada akhir ayat 'قُلْ هُوَ اللَّهُ أَحَدٌ ۙ', huruf Dal diwaqafkan. Hukumnya adalah...",
              opsi: ["Qalqalah Kubra (Besar)", "Qalqalah Sugra", "Iqlab"],
              benar: 0,
              alasan: "Huruf qalqalah di akhir kalimat yang dibaca berhenti memantul kuat (Qalqalah Kubra)."
            }
          ]
        }
      },

      {
        id: "k5-baru-bab-7",
        bab: 7,
        elemen: "Akidah",
        judul: "Iman kepada Hari Akhir (Tahapan Alam Akhirat)",
        icon: "qada-qadar",
        fokusCP: "Menjelaskan peristiwa dan tahapan hari akhir serta meyakini pertanggungjawaban amal di hadapan Allah.",
        tujuan: [
          "Menjelaskan pengertian rukun iman kelima: Iman kepada Hari Akhir.",
          "Mengetahui tahapan perjalanan manusia setelah wafat: Alam Barzakh, Yaumul Ba'ats, Mahsyar, Hisab, Mizan, Sirath, hingga Surga/Neraka.",
          "Menumbuhkan kesadaran bahwa seluruh amal perbuatan akan dipertanggungjawabkan."
        ],
        materi: {
          pengantar: "Kiamat adalah keniscayaan. Iman kepada hari akhir membentuk pribadi anak yang berakhlak mulia karena sadar bahwa setiap kebaikan dan keburukan sekecil biji zarrah pun akan ditimbang secara adil.",
          subBab: [
            {
              subJudul: "A. Tahapan Perjalanan Hari Akhir",
              ilustrasi: "qada-qadar",
              tahapanList: [
                { nama: "1. Alam Barzakh (Kubur)", ket: "Pintu gerbang penantian antara dunia dan akhirat." },
                { nama: "2. Yaumul Ba'ats", ket: "Hari dibangkitkannya seluruh manusia dari dalam kubur." },
                { nama: "3. Padang Mahsyar", ket: "Hari dikumpulkannya seluruh umat manusia di hadapan Allah." },
                { nama: "4. Yaumul Hisab & Mizan", ket: "Hari perhitungan dan penimbangan seluruh amal perbuatan." },
                { nama: "5. As-Sirath & Pembalasan", ket: "Jembatan penyeberangan menuju Surga kenikmatan atau Neraka siksaan." }
              ]
            }
          ],
          rangkuman: [
            "Hari kiamat pasti datang dan tidak ada yang mengetahui waktunya kecuali Allah.",
            "Timbangan kebaikan (Mizan) akan menentukan balasan surga atau neraka."
          ],
          budiPekerti: "Menghindari perbuatan curang atau mengganggu teman karena takut dosa di akhirat."
        },
        game: {
          id: "game-k5-baru-b7",
          tipe: "knowledge-challenge",
          nama: "Jejak Langkah Hari Akhir",
          petunjuk: "Pilih tahapan perjalanan hari akhir yang tepat!",
          questions: [
            {
              tanya: "Hari dibangkitkannya manusia dari dalam kubur disebut...",
              opsi: ["Yaumul Ba'ats", "Yaumul Hisab", "Yaumul Mizan"],
              benar: 0,
              alasan: "Yaumul Ba'ats artinya hari kebangkitan dari kubur."
            }
          ]
        }
      },

      {
        id: "k5-baru-bab-8",
        bab: 8,
        elemen: "Akhlak",
        judul: "Akhlak terhadap Teman (Anti-Bullying & Menjaga Lisan)",
        icon: "sahabat",
        fokusCP: "Menerapkan sikap setia kawan, menjauhi perundungan (bullying), dan menjaga rahasia sahabat.",
        tujuan: [
          "Mengetahui hak dan kewajiban dalam pertemanan Islami.",
          "Mengetahui larangan perundungan (bullying fisik, verbal, maupun siber).",
          "Membiasakan saling memaafkan dan menjaga nama baik sahabat."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Pada CP 020/2026, materi semester 2 ditekankan secara spesifik pada AKHLAK TERHADAP TEMAN (mencegah perundungan dan membina empati sebaya).",
          subBab: [
            {
              subJudul: "A. Larangan Menyakiti dan Mengolok-olok Teman",
              ilustrasi: "sahabat",
              dalil: {
                arab: "يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَسْخَرْ قَوْمٌ مِّن قَوْمٍ عَسَىٰ أَن يَكُونُوا خَيْرًا مِّنْهُمْ",
                latin: "Yā ayyuhallażīna āmanū lā yaskhar qaumum min qaumin 'asā ay yakūnū khairam minhum",
                arti: "Wahai orang-orang yang beriman! Janganlah suatu kaum mengolok-olok kaum yang lain (karena) boleh jadi mereka (yang diperolok-olokkan) lebih baik dari mereka. (Q.S. Al-Hujurat: 11)"
              }
            },
            {
              subJudul: "B. Tiga Pilar Stop Perundungan di Sekolah",
              ilustrasi: "mosque",
              uraian: "1. Tidak memanggil teman dengan julukan yang menyakitkan hati, 2. Tidak mengucilkan teman yang pendiam, 3. Berani melapor kepada bapak/ibu guru jika melihat perundungan terjadi di lingkungan sekolah."
            }
          ],
          rangkuman: [
            "Menyakiti teman dengan lisan atau fisik dilarang keras dalam Islam.",
            "Sahabat sejati adalah yang saling menasihati dalam kebaikan dan menutup aib temannya."
          ],
          budiPekerti: "Mengajak teman yang menyendiri untuk ikut bermain bola atau membaca buku bersama."
        },
        game: {
          id: "game-k5-baru-b8",
          tipe: "knowledge-challenge",
          nama: "Pahlawan Ramah Anti-Bullying",
          petunjuk: "Pilih sikap pahlawan kebaikan di sekolah!",
          questions: [
            {
              tanya: "Jika melihat ada teman yang diejek karena bajunya kotor terkena cipratan air hujan, sikap kita...",
              opsi: ["Membantunya membersihkan dan menegur yang mengejek", "Ikut menertawakannya", "Merekam dengan HP"],
              benar: 0,
              alasan: "Anak berakhlak mulia selalu menolong teman yang kesusahan."
            }
          ]
        }
      },

      {
        id: "k5-baru-bab-9",
        bab: 9,
        elemen: "Fikih",
        judul: "Makanan dan Minuman yang Halal dan Haram",
        icon: "halal",
        fokusCP: "Menganalisis kriteria makanan dan minuman halal thayyiban serta bahaya mengonsumsi yang haram.",
        tujuan: [
          "Memahami arti Halalan Thayyiban (halal syariatnya dan baik/bergizi zatnya).",
          "Mengetahui binatang yang halal dan binatang yang diharamkan dalam Islam.",
          "Membedakan haram li-dzatihi (zatnya haram) dan haram li-ghairihi (cara memperolehnya haram).",
          "Membiasakan memeriksa sertifikasi logo Halal saat membeli makanan jajanan."
        ],
        materi: {
          pengantar: "Catatan CP Baru: Pada CP 020/2026, materi MAKANAN & MINUMAN HALAL HARAM DIPINDAHKAN dari kelas 6 ke KELAS 5 SEMESTER 2. Makanan yang masuk ke tubuh akan menjadi darah daging dan memengaruhi akhlak serta diterimanya doa.",
          subBab: [
            {
              subJudul: "A. Konsep Halalan Thayyiban",
              ilustrasi: "halal",
              dalil: {
                arab: "يَا أَيُّهَا النَّاسُ كُلُوا مِمَّا فِي الْأَرْضِ حَلَالًا طَيِّبًا",
                latin: "Yā ayyuhan-nāsu kulū mimmā fil-arḍi ḥalālan ṭayyibā",
                arti: "Wahai manusia! Makanlah dari (makanan) yang halal dan baik yang terdapat di bumi. (Q.S. Al-Baqarah: 168)"
              }
            },
            {
              subJudul: "B. Hewan yang Diharamkan dalam Islam",
              ilustrasi: "halal",
              uraian: "1. Bangkai (kecuali bangkai ikan dan belalang), 2. Darah yang mengalir, 3. Daging babi dan olahannya, 4. Hewan yang disembelih tanpa menyebut nama Allah, 5. Hewan bertaring buas (singa, harimau, serigala), 6. Burung berkuku cengkeram tajam (elang), 7. Hewan yang hidup di dua alam (katak), 8. Segala minuman keras yang memabukkan (khamr, alkohol, narkoba)."
            }
          ],
          rangkuman: [
            "Halal artinya diizinkan syariat; thayyib artinya sehat, bersih, dan bergizi.",
            "Makanan haram merusak kesehatan tubuh dan menghalangi terkabulnya doa."
          ],
          budiPekerti: "Membaca basmalah sebelum makan dan memilih jajanan yang bersih dan bersertifikat halal."
        },
        game: {
          id: "game-k5-baru-b9",
          tipe: "knowledge-challenge",
          nama: "Keranjang Halal Thayyib Express",
          petunjuk: "Pilah makanan yang halal dan thayyib untuk tubuh!",
          questions: [
            {
              tanya: "Bangkai hewan yang HALAL dimakan tanpa perlu disembelih adalah...",
              opsi: ["Ikan laut dan Belalang", "Ayam dan Sapi", "Burung pipit"],
              benar: 0,
              alasan: "Rasulullah saw. menegaskan bahwa bangkai ikan dan belalang dihalalkan bagi umat Islam."
            },
            {
              tanya: "Minuman yang memabukkan dan merusak akal (khamr) hukumnya adalah...",
              opsi: ["Haram", "Halal", "Makruh"],
              benar: 0,
              alasan: "Khamr dan segala yang memabukkan tegas diharamkan dalam Al-Qur'an."
            }
          ]
        }
      },

      {
        id: "k5-baru-bab-10",
        bab: 10,
        elemen: "Sejarah Peradaban Islam",
        judul: "Perjanjian Hudaibiah, Fathu Makkah, dan Haji Wada'",
        icon: "khulafaur-rasyidin",
        fokusCP: "Menganalisis strategi diplomasi damai Rasulullah saw. dan keteladanan sifat pemaaf saat Fathu Makkah.",
        tujuan: [
          "Menceritakan latar belakang Perjanjian Hudaibiah sebagai jalan diplomasi damai.",
          "Mengetahui peristiwa Fathu Makkah yang dimenangkan tanpa pertumpahan darah.",
          "Meneladani keagungan sikap pemaaf Rasulullah kepada kaum Quraisy yang dahulu memusuhi.",
          "Memahami pesan persaudaraan dan kesetaraan dalam khutbah Haji Wada'."
        ],
        materi: {
          pengantar: "Dakwah Islam mencapai puncak kejayaannya bukan dengan pedang dan kekerasan, melainkan dengan diplomasi damai dan keagungan budi pekerti Rasulullah yang memaafkan seluruh musuh-musuhnya.",
          subBab: [
            {
              subJudul: "A. Perjanjian Hudaibiah (Tahun 6 H)",
              ilustrasi: "mosque",
              uraian: "Perjanjian gencatan senjata selama 10 tahun antara kaum muslim dan kafir Quraisy. Meskipun terkesan merugikan di awal, perjanjian ini membuka jalan dakwah Islam tersebar luas dengan damai ke seluruh penjuru jazirah Arab."
            },
            {
              subJudul: "B. Fathu Makkah: Kemenangan Tanpa Darah (Tahun 8 H)",
              ilustrasi: "khulafaur-rasyidin",
              uraian: "Rasulullah memimpin 10.000 pasukan memasuki Makkah dengan damai. Berhala dihancurkan. Rasulullah mengumumkan pengampunan umum dengan sabdanya: 'Pergilah kalian semua, hari ini tidak ada cercaan atas kalian, kalian bebas!'."
            },
            {
              subJudul: "C. Haji Wada' (Haji Perpisahan)",
              ilustrasi: "mosque",
              uraian: "Haji terakhir Rasulullah saw. bersama ratusan ribu sahabat. Nabi berpesan agar tidak menzalimi sesama, memuliakan wanita, dan berpegang teguh pada dua pusaka: Al-Qur'an dan Sunnah."
            }
          ],
          rangkuman: [
            "Perjanjian Hudaibiah mengajarkan pentingnya diplomasi damai.",
            "Fathu Makkah membuktikan bahwa Islam menang dengan cinta dan pengampunan.",
            "Pesan Haji Wada': Semua manusia setara, hanya takwa yang membedakan di hadapan Allah."
          ],
          budiPekerti: "Tidak membalas perlakuan buruk orang lain dengan keburukan, melainkan membalasnya dengan senyuman dan kebaikan."
        },
        game: {
          id: "game-k5-baru-b10",
          tipe: "knowledge-challenge",
          nama: "Napak Tilas Fathu Makkah",
          petunjuk: "Jawablah seputar peristiwa agung Fathu Makkah!",
          questions: [
            {
              tanya: "Bagaimanakah sikap Rasulullah saw. kepada kaum musyrikin Quraisy saat penaklukan kota Makkah?",
              opsi: ["Memaafkan dan membebaskan mereka semua tanpa dendam", "Memenjarakan mereka", "Mengusir mereka"],
              benar: 0,
              alasan: "Rasulullah menunjukkan akhlak agung dengan memaafkan dan membebaskan seluruh penduduk Makkah."
            }
          ]
        }
      }
    ]
  }
};
