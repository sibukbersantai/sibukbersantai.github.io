const works = {
  container: null,
  loaded: false,
  projectId: 'diz7kk6p',
  dataset: 'production',
  apiVersion: '2021-10-21',

  init(containerId) {
    this.container = document.getElementById(containerId)
  },

  async load() {
    if (this.loaded) return

    this.container.innerHTML = ''

    const query = '*[_type == "artwork"] | order(_createdAt desc)'
    const url = `https://${this.projectId}.api.sanity.io/v${this.apiVersion}/data/query/${this.dataset}?query=${encodeURIComponent(query)}`

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
