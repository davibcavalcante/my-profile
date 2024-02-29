const scrollToContact = () => {
    const contactContainer = document.querySelector('#contact-container')
    const containerTop = contactContainer.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: containerTop, behavior: "smooth" })

    const contacts = contactContainer.querySelector('p')
    contacts.classList.add('alert')
    setTimeout(() => {
        contacts.classList.remove('alert')
    }, 1000)
}

window.addEventListener('load', () => {
    const contactButton = document.querySelector('#contact-btn')

    contactButton.addEventListener('click', scrollToContact)
})