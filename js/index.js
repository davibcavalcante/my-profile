const navBar = document.querySelector('#nav-bar')

document.addEventListener('click', (e) => {
    const targetClick = e.target
    if (targetClick.classList.contains('menu-btn')) {
        navBar.classList.toggle('fade')
    }
})