const scrollToContact = () => {
    const contactContainer = document.querySelector('#contact-container');
    const containerTop = contactContainer.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: containerTop, behavior: "smooth" });

    const contacts = contactContainer.querySelector('p');
    contacts.classList.add('alert');
    setTimeout(() => {
        contacts.classList.remove('alert');
    }, 2000);
}

window.addEventListener('load', () => {
    const contactButtons = document.querySelectorAll('.contact-btn');
    console.log(contactButtons)
    contactButtons.forEach((button) => {
        button.addEventListener('click', scrollToContact);
    });
})