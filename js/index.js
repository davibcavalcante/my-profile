const body = document.querySelector('body')
const menuOff = document.querySelector('.menu-off')
const menuOn = document.querySelector('.menu-on')

body.addEventListener('click', (e) => {
    const targetClick = e.target
    console.log(targetClick)
    if (targetClick.classList.contains('menu-btn')) {
        menuOff.classList.toggle('hide')
        menuOn.classList.toggle('hide')
    }
})