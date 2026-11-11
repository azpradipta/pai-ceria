# PAI Ceria

Aplikasi belajar Pendidikan Agama Islam dan Budi Pekerti SD kelas 1, 5, dan 6 dengan Vue 3, Vue Router, Pinia, Vite, dan PWA.

Tersedia 60 versi bab: 10 bab per kelas untuk CP Lama dan CP Baru. Setiap bab memuat tujuan, materi, aktivitas, latihan dengan pembahasan, refleksi, rujukan, dan permainan. Tanda selesai serta hasil latihan disimpan di browser perangkat.

## Menjalankan

Gunakan Node.js 22 dan pnpm, lalu jalankan dari direktori proyek:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm test
pnpm build
pnpm preview
```

Build produksi berada di `dist/`. Aplikasi tidak memerlukan server API atau database.

## Navigasi kurikulum

Alamat menyatakan versi yang sedang dibaca:

- `/kelas/6/bab/k6-lama-bab-10`
- `/kelas/6/bab/k6-baru-bab-10`
- `/kelas/6/bab/k6-baru-bab-10/game`
- `/kelas/6?cp=cp-baru`

Pilihan CP mengubah URL dan isi materi. Tautan langsung, refresh, serta tombol kembali/maju mengikuti versi dari URL. Perpindahan mempertahankan nomor bab; topik nomor bab yang sama dapat berbeda antarversi. Alamat tidak valid menampilkan halaman tidak ditemukan.

## Sumber dan pengembangan materi

CP Lama mengikuti PDF yang disertakan:

- Kelas I: Muhammad Nurzakun dan Joko Santoso, 2021; halaman cetak 1–184 untuk sepuluh bab.
- Kelas V: `KELAS 5_BUKU SISWA.pdf`, hasil pindai; daftar isi dan halaman rujukan diperiksa secara visual.
- Kelas VI: Nazirwan dan Kholili Abdullah, 2022; halaman cetak 1–192 untuk sepuluh bab.

CP Baru mengikuti lingkup `Perubahan_CP_PAI_Fase_A.docx` dan `Perubahan_CP_PAI_Fase_C.docx`. Fase B disajikan sebagai referensi dalam panduan CP; materi interaktif tersedia untuk kelas 1, 5, dan 6.

Nomor CP 046/2025 dan 020/2026 mengikuti judul DOCX yang disertakan. Buku PDF terbit lebih awal dan tidak dianggap sebagai buku edisi CP 046/2025. Kolom lama DOCX dapat berbeda dari urutan buku. Penjelasan, aktivitas, contoh kasus, dan soal dikembangkan sebagai materi pendamping, bukan kutipan atau pengganti keseluruhan buku.

Materi berada dalam:

- `src/data/kelas1Data.js`, `kelas5Data.js`, `kelas6Data.js`: data dasar dan bacaan.
- `src/data/materiPengayaan.js`: penjelasan tematik, aktivitas, dan soal pengembangan.
- `src/data/enrichChapter.js`: pemetaan topik ke bab, koreksi terhadap PDF, rujukan, serta normalisasi game.
- `src/data/bacaanTambahan.js`: bacaan tambahan Ad-Duha dan Al-A’la.
- `src/data/kurikulumInfo.js`: transkripsi tabel ketiga DOCX.

Untuk mengembangkan materi, baca sumber, perbarui topik dan pemetaan, lalu jalankan `pnpm test` dan `pnpm build`. Cantumkan lokasi rujukan serta pisahkan kutipan dari contoh pengembangan. Bacaan Al-Qur'an mengikuti bimbingan guru; suara pembaca merupakan sintesis teks perangkat, bukan rekaman qari.

Ekspor semua versi materi menjadi JSON untuk ditinjau atau dikembangkan lagi:

```sh
pnpm materi:export
# Atau tentukan lokasi hasil:
node scripts/export-materials.mjs generated/materi-pai.json
```

Untuk mengekstrak ulang sumber lokal, gunakan Python 3.11 atau lebih baru:

```sh
python -m pip install -r scripts/requirements-sources.txt
python scripts/extract-sources.py
```

Hasil ekstraksi berada di `.tools/sources/` berikut hash sumber. Halaman tanpa lapisan teks ditandai. Buku pindai perlu diperiksa visual atau melalui OCR. Ekstraksi tidak otomatis menciptakan materi atau menganggap hasil OCR sudah benar.

## Pengujian browser

Tes browser memeriksa 60 halaman materi dan 60 halaman game, pergantian CP, refresh, riwayat browser, filter kelas, permainan kuis/kartu/urutan, penyimpanan hasil, URL tidak valid, serta lebar layar 360, 390, 768, dan 1365 piksel.

```sh
python -m pip install -r tests/requirements-browser.txt
python -m playwright install chromium
# Jalankan pnpm dev pada terminal lain, kemudian:
python tests/browser_smoke.py http://127.0.0.1:5173
python tests/audio_browser.py http://127.0.0.1:5173
# Setelah pnpm build dan pnpm preview, periksa versi produksi serta offline:
python tests/production_smoke.py http://127.0.0.1:4173
```

Untuk browser yang sudah terpasang, atur `PLAYWRIGHT_CHROMIUM_EXECUTABLE` ke lokasi executable. Pemeriksaan data menggunakan `pnpm test` dan tidak membutuhkan browser.

## Suara belajar

Efek tombol dan game mulai setelah interaksi pertama. Tombol **Suara** di header membuka pengaturan mute, volume, **Coba suara**, dan musik belajar opsional. Pilihan ini tersimpan di browser perangkat. Melodi serta efek disintesis langsung di aplikasi dan tidak memerlukan unduhan audio atau backend. Musik berhenti saat tab disembunyikan dan mengecil selama narasi.

Tombol **Dengarkan pengantar** dan **Dengarkan penjelasan** membaca materi menggunakan suara perangkat, dengan prioritas bahasa Indonesia. Hanya satu narasi diputar sekaligus. Mematikan suara aplikasi menghentikan musik, efek, dan narasi. Ketersediaan narasi mengikuti dukungan bahasa browser/perangkat; jika gagal, aplikasi menampilkan keterangan dan tetap bisa digunakan.

Tes audio memeriksa sinyal keluaran Web Audio, musik, mute, volume, penyimpanan pilihan, serta kontrol pada layar 320–1365 piksel. Pemilihan dan pergantian narasi diuji dengan simulasi suara perangkat; tes otomatis tidak memverifikasi keluaran pengeras suara fisik.

## Deploy

`vercel.json` dan `netlify.toml` menyediakan build `pnpm build`, keluaran `dist`, dan fallback SPA agar alamat bab dapat dibuka langsung. Gunakan salah satu konfigurasi tersebut atau hosting statis lain dengan fallback ke `index.html`.

Rujukan konfigurasi: [Vite pada Vercel](https://vercel.com/docs/frameworks/frontend/vite) dan [rewrite Netlify](https://docs.netlify.com/manage/routing/redirects/rewrites-proxies/).

Sebelum menerbitkan, jalankan `pnpm test` dan `pnpm build`. Unggah hasil `dist/` atau hubungkan repositori ke hosting. Pekerjaan lokal ini tidak otomatis menerbitkan situs. PDF/DOCX di akar repositori tidak disalin ke build; aplikasi menyertakan materi pengembangan dan keterangan rujukan.

## Penyimpanan dan offline

Aplikasi dapat dibuka tanpa akun. Tanda selesai dan hasil latihan tersimpan di localStorage perangkat; membersihkan data browser dapat menghapusnya. Data tidak disinkronkan antarperangkat. Materi produksi dicache setelah service worker berhasil terpasang. Ketersediaan suara dan aksesnya tanpa internet mengikuti perangkat.
