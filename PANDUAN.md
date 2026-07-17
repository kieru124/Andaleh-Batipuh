# Panduan Web Desa

## Bagian A — Setup awal (sekali saja, butuh ±30 menit)

### 1. Upload ke GitHub
1. Buat akun gratis di github.com (kalau belum punya)
2. Buat repository baru, misal namanya `web-desa` (public)
3. Upload semua isi folder ini ke repository tersebut
   (bisa lewat tombol "Add file → Upload files" di halaman repo)

### 2. Hubungkan ke Netlify
1. Buat akun gratis di netlify.com, login pakai akun GitHub
2. Klik "Add new site → Import an existing project" → pilih repo `web-desa`
3. Build command dan publish folder terdeteksi otomatis dari netlify.toml
   (build: `npm run build`, publish: `_site`) → klik Deploy
4. Web langsung online di alamat acak seperti `random-name.netlify.app`

### 3. Sambungkan domain .my.id
1. Beli domain di registrar mana saja (misal idwebhost, rumahweb, dll) ±Rp15rb/tahun
2. Di Netlify: Site settings → Domain management → Add custom domain →
   masukkan domain kamu
3. Di panel registrar domain: arahkan nameserver ke nameserver Netlify
   yang ditampilkan (dns1.p0X.nsone.net, dst)
4. Tunggu 1-24 jam sampai aktif. HTTPS otomatis gratis.

### 4. Aktifkan login admin (DecapBridge)
1. Buka decapbridge.com → daftar gratis → "Add site"
2. Ikuti wizardnya: sambungkan ke repo GitHub `web-desa` kamu
3. DecapBridge akan menampilkan konfigurasi backend (identity_url dll)
4. Buka file `src/admin/config.yml` di repo, ganti bagian `backend:`
   sesuai yang ditampilkan DecapBridge (ada penanda GANTI_... di file)
5. Ganti juga `site_url` dengan domain desa kamu
6. Simpan (commit) → Netlify otomatis build ulang

### 5. Undang perangkat desa
Di dashboard DecapBridge: Invite user → masukkan email perangkat desa.
Mereka akan menerima email untuk membuat password. Selesai —
mereka TIDAK perlu akun GitHub.

---

## Bagian B — Cara pakai sehari-hari (untuk perangkat desa)

### Menambah berita
1. Buka `namadesa.my.id/admin` di HP atau laptop
2. Login dengan email dan password
3. Klik **Berita → New Berita**
4. Isi judul, tanggal, foto (opsional), dan isi berita
5. Klik **Publish → Publish now**
6. Tunggu 1-2 menit, berita muncul di web

### Mengedit atau menghapus berita
Klik berita yang mau diubah dari daftar → edit → Publish.
Untuk hapus: buka berita → Delete entry.

### Catatan
- Foto sebaiknya di bawah 1 MB agar web tetap cepat
- Perubahan butuh 1-2 menit untuk tampil (web di-build ulang otomatis)

---

## Mengganti nama desa dan data profil
Data contoh (Desa Sukamaju, jumlah penduduk, alamat, dll) ada di:
- `src/index.njk` — beranda dan angka profil
- `src/_includes/base.njk` — nama desa di header dan kontak di footer

Edit langsung di GitHub (klik file → ikon pensil → commit),
atau minta bantuan Claude lagi untuk menggantinya.
