import { buildSanityUrl } from './config.js'

const site = {
  homeContainer: null,
  contactContainer: null,
  loaded: false,

  init() {
    this.homeContainer = document.getElementById('home-content')
    this.contactContainer = document.getElementById('contact-info')
    this.load()
  },

  async load() {
    if (this.loaded) return

    const query = '*[_type == "siteSettings"][0]{title,subtitle,intro,contactEmail,instagram}'
    const url = buildSanityUrl(query)

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const json = await response.json()
      const data = json.result

      if (data) {
        this.render(data)
      } else {
        this.renderFallback()
      }
      this.loaded = true
    } catch (error) {
      console.error('Sanity API Error:', error)
      this.renderFallback()
    }
  },

  render(data) {
    const title = data.title || 'Sibuk Bersantai'
    const subtitle = data.subtitle || 'Koleksi karya digital dan ide kreatif.'
    const intro = data.intro || 'Temukan konten terbaru yang diupdate lewat Sanity Studio.'

    document.title = title
    this.homeContainer.innerHTML = `
      <h1>${title}</h1>
      <p>${subtitle}</p>
      <p>${intro}</p>
    `

    this.contactContainer.innerHTML = `
      <p>${title}</p>
      <p><a href="mailto:${data.contactEmail || 'hello@sibukbersantai.com'}">${data.contactEmail || 'hello@sibukbersantai.com'}</a></p>
      <p><a href="${data.instagram || 'https://instagram.com'}" target="_blank" rel="noopener noreferrer">${data.instagram || '@sibukbersantai'}</a></p>
    `
  },

  renderFallback() {
    this.homeContainer.innerHTML = `
      <h1>Sibuk Bersantai</h1>
      <p>Konten Sanity belum tersedia. Tambahkan dokumen <code>siteSettings</code> di Sanity Studio.</p>
    `
    this.contactContainer.innerHTML = `
      <p>Sibuk Bersantai</p>
      <p><a href="mailto:hello@sibukbersantai.com">hello@sibukbersantai.com</a></p>
      <p><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">@sibukbersantai</a></p>
    `
  }
}

export default site
