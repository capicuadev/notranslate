const tags = document.querySelectorAll('pre,.highlight,.prettyprint')

const observer = new MutationObserver(() => {
  for (const tag of tags) {
    tag.classList.add('notranslate')
  }
})

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
})
