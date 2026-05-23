import client from './sanityClient.js'

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
      const query = '*[_type == "artwork"] | order(_createdAt desc)'
      const data = await client.fetch(query)

      if (data && data.length > 0) {
        data.forEach(item => {
          const li = document.createElement('li')
          li.textContent = item.title || 'Judul tidak tersedia'
          this.container.appendChild(li)
        })
        this.loaded = true
      } else {
        this.container.innerHTML = '<li>Belum ada karya.</li>'
      }
    } catch (error) {
      this.container.innerHTML = '<li>Gagal memuat data.</li>'
      console.error('Sanity API Error:', error)
    }
  }
}

export default works
