const translateButton = document.querySelector('#translate-btn')
const firstParagraph = document.querySelector('.first-paragraph')
const secondParagraph = document.querySelector('.second-paragraph')
let isTrasnlated = false

translateButton.addEventListener('click', () => {
    if (!isTrasnlated) {
        firstParagraph.innerText = `Eu sou Davi, tenho 18 anos e desde criança, sou apaixonado por tecnologia. Sempre imaginei trabalhar na área, assim, iniciei a minha carreira com Design Gráfico, trabalhando para uma agência de marketing.`

        secondParagraph.innerText = `Esse foi o período em que decidi me tornar programador. A partir daí, optei por ser desenvolvedor web, iniciando pelo Frontend aproveitando alguns conhecimentos de design e experiência do usuário.`

        isTrasnlated = true
    } else if (isTrasnlated) {
        firstParagraph.innerText = `I'm Davi, I am 18 years old, and I have been passionate about technology since I was a child. I have always envisioned working in the field, so I started my career in Graphic Design. I worked as a Social Media at marketing agency for almost 1 year. That was the period when I decided to become a programmer. `

        secondParagraph.innerText = `From that point on, I chose to be a web developer, starting with Frontend and leveraging some design knowledge and user experience.`

        isTrasnlated = false
    }
})