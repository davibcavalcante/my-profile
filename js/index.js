const menu = document.querySelector('.menu')
const mobileNav = document.querySelector('.mobile-navigation')

menu.addEventListener('click', () => {
    menu.classList.toggle('active')
})

const nextProjectButton = document.querySelector('#next-project-btn')
const prevProjectButton = document.querySelector('#prev-project-btn')
const projectsContainer = document.querySelector('.projects')
const projects = projectsContainer.querySelectorAll('iframe')

const projectsLength = projects.length

let currentProject = 1

nextProjectButton.addEventListener('click', nextProject)
prevProjectButton.addEventListener('click', prevProject)

function nextProject() {
    if (currentProject < projectsLength) {
        projectsContainer.style.transform = `translateX(-${100 * currentProject}%)`
        currentProject++
        getNameProject()
    }
}

function prevProject() {
    if (currentProject > 1) {
        currentProject--
        projectsContainer.style.transform = `translateX(-${100 * (currentProject - 1)}%)`
        getNameProject()
    }
}

function setLink(name) {
    const link = document.querySelector('#visit-project-btn')
    link.href = `https://davibcavalcante.github.io/${name}/`
    link.rel = 'external'
    link.target = '_blank'
}

function getNameProject() {
    const index = currentProject - 1
    const project = projects[index]
    const nameProject = project.classList[0]

    setLink(nameProject)
}

getNameProject()