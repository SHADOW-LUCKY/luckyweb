document.querySelector('.menu-btn').addEventListener('click', () => {
 document.querySelector('.menu-options').classList.toggle('show')
})

ScrollReveal().reveal('.showcase')
ScrollReveal().reveal('.littlenews', { delay: 500 })
ScrollReveal().reveal('.bannerone', { delay: 500 })
