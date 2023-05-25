const ptButton = document.querySelector('#pt-btn')
const enButton = document.querySelector('#en-btn')

const aboutPt = document.querySelector('.pt-br')
const aboutEn = document.querySelector('.en')

ptButton.addEventListener('click', () => {
    aboutPt.classList.remove('hide')
    aboutEn.classList.add('hide')
})

enButton.addEventListener('click', () => {
    aboutEn.classList.remove('hide')
    aboutPt.classList.add('hide')
})