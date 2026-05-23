# Sibuk Bersantai

Website ini menggunakan Sanity sebagai sumber konten untuk halaman `Works` dan informasi situs.

## Konfigurasi Sanity

- Project ID: `diz7kk6p`
- Dataset: `production`
- API version: `2021-10-21`

## Cara menggunakan Sanity Studio

1. Install Sanity CLI (jika belum):
   ```bash
   npm install -g @sanity/cli
   ```

2. Buat folder studio di luar repositori atau di dalam repositori sesuai kebutuhan:
   ```bash
   mkdir studio
   cd studio
   sanity init --project diz7kk6p --dataset production
   ```

3. Tambahkan CORS origin GitHub Pages:
   - `https://sibukbersantai.github.io`

4. Definisikan schema di `studio/schemas`:
   - `siteSettings` untuk judul situs, intro, email, dan Instagram
   - `artwork` untuk masing-masing karya dengan `title`, `description`, dan `url`

5. Jalankan Studio:
   ```bash
   sanity start
   ```

6. Tambahkan atau perbarui dokumen:
   - `siteSettings` untuk isi beranda dan kontak
   - `artwork` untuk daftar karya

## Struktur konten yang direkomendasikan

### `siteSettings`

- `title` (string)
- `subtitle` (string)
- `intro` (text)
- `contactEmail` (email)
- `instagram` (url)

### `artwork`

- `title` (string)
- `description` (text)
- `url` (url)

## Notes

- Situs ini memuat data dari endpoint Sanity publik.
- Jika tidak ada dokumen di Sanity, halaman akan menampilkan fallback dan informasi default.
- Pastikan dataset `production` sudah berisi dokumen yang benar.
