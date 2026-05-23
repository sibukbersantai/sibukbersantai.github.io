const navigation = {
  toggle: null,
  navList: null,
  navLinks: null,
  pages: null,

  init() {
    this.toggle = document.getElementById('menuToggle')
    this.navList = document.getElementById('navList')
    this.navLinks = this.navList.querySelectorAll('a')
    this.pages = document.querySelectorAll('.page')

    this.setupEventListeners()
  },

  setupEventListeners() {
    this.toggle.addEventListener('click', () => {
      const isOpen = this.navList.classList.toggle('open')
      this.toggle.setAttribute('aria-expanded', isOpen)
      
      if (!isOpen) {
        const activePageId = document.querySelector('.page.active')?.id
        if (activePageId && activePageId !== 'page-home') {
          this.showPage('home')
        }
      }
    })

    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetPage = link.getAttribute('data-page')
        this.showPage(targetPage)
        this.navList.classList.remove('open')
        this.toggle.setAttribute('aria-expanded', 'false')
      })
    })
  },

  showPage(pageId) {
    this.pages.forEach(page => page.classList.remove('active'))
    const targetPage = document.getElementById(`page-${pageId}`)
    if (targetPage) {
      targetPage.classList.add('active')
    } else {
      document.getElementById('page-home').classList.add('active')
    }
  }
}

export default navigation
