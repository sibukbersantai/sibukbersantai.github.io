import { fetchJson } from './config.js'

const works = {
  container: null,
  loaded: false,

  init(containerId) {
    this.container = document.getElementById(containerId)
  },

  async load() {
    if (this.loaded) return

    this.container.innerHTML = ''

    try {
      const data = await fetchJson('data/works.json')

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
        this.container.innerHTML = '<li>Belum ada karya. Tambahkan konten di <code>/admin</code>.</li>'
      }
    } catch (error) {
      this.container.innerHTML = '<li>Gagal memuat data. Periksa file <code>data/works.json</code>.</li>'
      console.error('Error loading works:', error)
    }
  }
}

export default works
