# Setup Decap CMS di GitHub Pages

Decap CMS (formerly Netlify CMS) adalah CMS yang **gratis selamanya** dan menggunakan GitHub sebagai backend.

## ⚙️ Setup Awal (One-time)

### 1. GitHub OAuth App
Anda perlu membuat GitHub OAuth app agar login CMS berfungsi:

1. Buka https://github.com/settings/developers
2. Klik "New OAuth App"
3. Isi form:
   - **Application name**: Sibuk Bersantai CMS
   - **Homepage URL**: `https://srinadia.github.io/sibukbersantai.github.io`
   - **Authorization callback URL**: `https://srinadia.github.io/sibukbersantai.github.io/admin/callback`
4. Copy **Client ID** dan **Client Secret**

### 2. Netlify (Redirect/Gateway untuk OAuth)
Decap CMS butuh gateway OAuth. Gunakan Netlify (gratis):

1. Deploy ke Netlify atau gunakan Netlify redirect
2. Di `admin/config.yml`, update:
   ```yaml
   backend:
     name: github
     repo: srinadia/sibukbersantai.github.io
     base_url: https://your-netlify-domain.netlify.app
     auth_endpoint: auth
   ```

**ALTERNATIF LEBIH MUDAH**: Gunakan **Decap CMS Gateway** (gratis):
- Ubah `base_url` ke: `https://decap-cms-git-master-decaporg.vercel.app`

Atau gunakan service seperti:
- https://github-auth.herokuapp.com (jika masih aktif)
- Deploy sendiri OAuth gateway

### 3. Akses CMS
Setelah setup, akses di: `https://srinadia.github.io/sibukbersantai.github.io/admin/`

## 📝 Menambah/Edit Konten

### Pengaturan Situs
- Judul, Subtitle, Intro
- Email Kontak
- Instagram Link

### Menambah Karya (Works)
CMS akan membuat file baru di `data/works/` dengan format YAML/JSON

## 📂 Struktur File
```
sibukbersantai.github.io/
├── admin/
│   ├── index.html          # CMS interface
│   └── config.yml          # CMS configuration
├── data/
│   ├── settings.json       # Site settings
│   └── works.json          # Works list
├── js/
│   ├── config.js           # Fetch JSON helper
│   ├── site.js             # Home/contact loader
│   └── works.js            # Works loader
└── index.html              # Main website
```

## 🔑 Credentials (simpan di tempat aman)
- Client ID: [simpan di sini]
- Client Secret: [simpan di sini]
- Netlify Site: [jika menggunakan]

## 🚀 Deploy Changes
Setelah edit di CMS, changes otomatis di-commit ke GitHub. Website di-rebuild otomatis oleh GitHub Pages.

## 💡 Tips
- Edit JSON files langsung juga bisa
- Untuk images, upload ke folder `assets/images/`
- Backup repository secara berkala
- Gunakan GitHub Desktop untuk manage commits
