import { buildSanityUrl } from './config.js'

const works = {
  container: null,
  loaded: false,

  init(containerId) {
    this.container = document.getElementById(containerId)
  },

  async load() {
    if (this.loaded) return

    this.container.innerHTML = ''

    const query = '*[_type == "artwork"] | order(_createdAt desc){title,description,url}'
    const url = buildSanityUrl(query)

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const json = await response.json()
      const data = json.result

      if (data && data.length > 0) {
        data.forEach(item => {
          const li = document.createElement('li')
          li.innerHTML = `
            <strong>${item.title || 'Judul tidak tersedia'}</strong>
            ${item.description ? `<p>${item.description}</p>` : ''}
            ${item.url ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer">Lihat detail</a>` : ''}
          `
          this.container.appendChild(li)
        })
        this.loaded = true
      } else {
        this.container.innerHTML = '<li>Belum ada karya. Tambahkan konten di Sanity Studio.</li>'
      }
    } catch (error) {
      this.container.innerHTML = '<li>Gagal memuat data. Periksa koneksi Sanity atau konfigurasi project.</li>'
      console.error('Sanity API Error:', error)
    }
  }
}

export default works
