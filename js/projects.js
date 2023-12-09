const projectsContainer = document.querySelector('#projects-container')
const projects = ['smart-todo', 'movie-app', 'translator', 'calculator', 'xo-game', 'weather-app', 'guess-the-number','shopping-list', 'cronometro']

projects.forEach((project) => {
    const itemList = createItem(project)

    projectsContainer.appendChild(itemList)
})


function createItem(project) {
    const item = document.createElement('li')
    const link = createLink(project)

    item.appendChild(link)
    return item
}

function createLink(project) {
    const anchor = document.createElement('a')
    anchor.innerText = project.replace('-', ' ')
    anchor.setAttribute('href', `https://davibcavalcante.github.io/${project}`)
    anchor.setAttribute('rel', 'external')
    anchor.setAttribute('target', '_blank')

    return anchor
}