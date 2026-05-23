import navigation from './navigation.js'
import site from './site.js'
import works from './works.js'

document.addEventListener('DOMContentLoaded', () => {
  navigation.init()
  site.init()
  works.init('works-container')

  const navLinks = document.querySelectorAll('a[data-page]')
  navLinks.forEach(link => {
    link.addEventListener('click', async () => {
      const targetPage = link.getAttribute('data-page')
      if (targetPage === 'works') {
        await works.load()
      }
    })
  })
})
