import navigation from './navigation.js'
import works from './works.js'

document.addEventListener('DOMContentLoaded', () => {
  navigation.init()
  works.init('works-container')

  const navLinks = document.querySelectorAll('a[data-page]')
  navLinks.forEach(link => {
    link.addEventListener('click', async (e) => {
      const targetPage = link.getAttribute('data-page')
      if (targetPage === 'works') {
        await works.load()
      }
    })
  })
})
