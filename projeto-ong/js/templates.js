export function renderCard(project) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${project.img}" alt="${project.alt}">
        <div class="card-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
    `;
    return card;
}

export function renderProjects(projects, container) {
    container.innerHTML = '';
    projects.forEach(project => container.appendChild(renderCard(project)));
}
