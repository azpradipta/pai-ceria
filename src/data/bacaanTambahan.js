// Teks bacaan pendamping: Buku Kelas VI bab 6, halaman cetak 103–107.
// Arti disajikan sebagai makna ringkas untuk pembelajaran.
const ala = [
  ['سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى', 'Sabbiḥisma rabbikal-a‘lā', 'Sucikanlah nama Tuhanmu Yang Mahatinggi.'],
  ['الَّذِي خَلَقَ فَسَوَّى', 'Allażī khalaqa fasawwā', 'Yang menciptakan, lalu menyempurnakan ciptaan-Nya.'],
  ['وَالَّذِي قَدَّرَ فَهَدَى', 'Wallażī qaddara fahadā', 'Yang menentukan ukuran dan memberi petunjuk.'],
  ['وَالَّذِي أَخْرَجَ الْمَرْعَى', 'Wallażī akhrajal-mar‘ā', 'Yang menumbuhkan rerumputan.'],
  ['فَجَعَلَهُ غُثَاءً أَحْوَى', 'Faja‘alahū guṡā’an aḥwā', 'Lalu menjadikannya kering kehitaman.'],
  ['سَنُقْرِئُكَ فَلَا تَنْسَى', 'Sanuqri’uka falā tansā', 'Kami akan membacakan kepadamu sehingga engkau tidak lupa.'],
  ['إِلَّا مَا شَاءَ اللَّهُ إِنَّهُ يَعْلَمُ الْجَهْرَ وَمَا يَخْفَى', 'Illā mā syā’allāh, innahū ya‘lamul-jahra wa mā yakhfā', 'Kecuali apa yang Allah kehendaki. Dia mengetahui yang tampak dan tersembunyi.'],
  ['وَنُيَسِّرُكَ لِلْيُسْرَى', 'Wa nuyassiruka lil-yusrā', 'Kami akan memudahkan bagimu jalan kemudahan.'],
  ['فَذَكِّرْ إِنْ نَفَعَتِ الذِّكْرَى', 'Fażakkir in nafa‘atiż-żikrā', 'Berilah peringatan jika peringatan itu bermanfaat.'],
  ['سَيَذَّكَّرُ مَنْ يَخْشَى', 'Sayażżakkaru may yakhsyā', 'Orang yang takut kepada Allah akan mengambil pelajaran.'],
  ['وَيَتَجَنَّبُهَا الْأَشْقَى', 'Wa yatajannabuhal-asyqā', 'Orang yang paling celaka akan menjauhinya.'],
  ['الَّذِي يَصْلَى النَّارَ الْكُبْرَى', 'Allażī yaṣlan-nāral-kubrā', 'Yaitu orang yang akan masuk ke dalam api yang besar.'],
  ['ثُمَّ لَا يَمُوتُ فِيهَا وَلَا يَحْيَى', 'Ṡumma lā yamūtu fīhā wa lā yaḥyā', 'Kemudian ia tidak mati di dalamnya dan tidak pula hidup dengan baik.'],
  ['قَدْ أَفْلَحَ مَنْ تَزَكَّى', 'Qad aflaḥa man tazakkā', 'Sungguh beruntung orang yang menyucikan diri.'],
  ['وَذَكَرَ اسْمَ رَبِّهِ فَصَلَّى', 'Wa żakarasma rabbihī faṣallā', 'Dan mengingat nama Tuhannya, lalu salat.'],
  ['بَلْ تُؤْثِرُونَ الْحَيَاةَ الدُّنْيَا', 'Bal tu’ṡirūnal-ḥayātad-dun-yā', 'Namun kamu lebih mengutamakan kehidupan dunia.'],
  ['وَالْآخِرَةُ خَيْرٌ وَأَبْقَى', 'Wal-ākhiratu khairuw wa abqā', 'Padahal akhirat lebih baik dan lebih kekal.'],
  ['إِنَّ هَذَا لَفِي الصُّحُفِ الْأُولَى', 'Inna hāżā lafiṣ-ṣuḥufil-ūlā', 'Sesungguhnya ini terdapat dalam suhuf terdahulu.'],
  ['صُحُفِ إِبْرَاهِيمَ وَمُوسَى', 'Ṣuḥufi ibrāhīma wa mūsā', 'Yaitu suhuf Ibrahim dan Musa.'],
];
export const alAlaAyat = ala.map(([arab, latin, arti], index) => ({ no: index + 1, arab, latin, arti }));
export const duhaAyatTambahan = [
  { no: 4, arab: 'وَلَلْآخِرَةُ خَيْرٌ لَكَ مِنَ الْأُولَى', latin: 'Wa lal-ākhiratu khairul laka minal-ūlā', arti: 'Sungguh, yang kemudian itu lebih baik bagimu daripada yang permulaan.' },
  { no: 5, arab: 'وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَى', latin: 'Wa lasaufa yu‘ṭīka rabbuka fatarḍā', arti: 'Kelak Tuhanmu akan memberikan karunia-Nya kepadamu sehingga engkau menjadi puas.' },
  { no: 6, arab: 'أَلَمْ يَجِدْكَ يَتِيمًا فَآوَى', latin: 'Alam yajidka yatīman fa’āwā', arti: 'Bukankah Dia mendapatimu sebagai seorang yatim, lalu Dia melindungimu?' },
  { no: 7, arab: 'وَوَجَدَكَ ضَالًّا فَهَدَى', latin: 'Wa wajadaka ḍāllan fahadā', arti: 'Dia mendapatimu belum mengetahui jalan, lalu Dia memberi petunjuk.' },
  { no: 8, arab: 'وَوَجَدَكَ عَائِلًا فَأَغْنَى', latin: 'Wa wajadaka ‘ā’ilan fa’agnā', arti: 'Dia mendapatimu dalam kekurangan, lalu Dia memberi kecukupan.' },
];
