const setLink = (name) => {
    const link = document.querySelector('#visit-project-btn');

    if (name === 'jubao') {
        link.href = `http://jubaofe.com.br`;
    } else {
        link.href = `https://davibcavalcante.github.io/${name}/`;
    }
    link.rel = 'external';
    link.target = '_blank';
}

const getNameProject = (project) => {
    const nameProject = project.id;

    setLink(nameProject);
}

const moveProject = (container, projectsLength, currentProject, action) => {
    let numCurrent = Number(currentProject.classList[0].substring(7));

    if (action === 'next' && (numCurrent < projectsLength)) {
        container.style.transform = `translateX(-${100 * numCurrent}%)`;
        return true;
    } else if (action === 'prev' && (numCurrent > 1)) {
        numCurrent--;
        container.style.transform = `translateX(-${100 * (numCurrent - 1)}%)`;
        return true;
    }

    return false;
}

const getCurrentProject = () => {
    const projectsContainer = document.querySelector('.projects');
    const projectsLength = projectsContainer.querySelectorAll('iframe').length;
    const currentProject = projectsContainer.querySelector('.selected');

    return { projectsContainer, projectsLength, currentProject };
}

const getDataMove = (action) => {
    const projectsData = getCurrentProject();

    const container = projectsData.projectsContainer;
    const projectsLength = projectsData.projectsLength;
    const currentProject = projectsData.currentProject;

    const result = moveProject(container, projectsLength, currentProject, action);

    if (result) {
        const classCurrentProject = currentProject.classList[0];
        let newCurrent;
        if (action === 'next') {
            newCurrent = parseInt(classCurrentProject.substring(7)) + 1;
        } else {
            newCurrent = parseInt(classCurrentProject.substring(7)) - 1;
        }
        
        const newSelectProject = container.querySelector(`.project${newCurrent}`);
        currentProject.classList.remove('selected');
        newSelectProject.classList.add('selected');

        getNameProject(newSelectProject);
    }
}

const setProjectsEvents = () => {
    const nextProjectButton = document.querySelector('#next-project-btn');
    const prevProjectButton = document.querySelector('#prev-project-btn');

    nextProjectButton.addEventListener('click', () => {
        getDataMove('next');
    })
    prevProjectButton.addEventListener('click', () => {
        getDataMove('prev');
    })

    const defaultProject = document.querySelector('.selected');
    getNameProject(defaultProject);
}

window.addEventListener('load', () => {
    setProjectsEvents();
});