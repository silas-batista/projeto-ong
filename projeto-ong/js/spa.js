export function initSPA() {
    const links = document.querySelectorAll('nav a');
    const main = document.querySelector('main');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            fetch(href)
                .then(response => response.text())
                .then(html => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    main.innerHTML = doc.querySelector('main').innerHTML;
                    history.pushState(null, '', href);
                });
        });
    });

    window.addEventListener('popstate', () => {
        fetch(location.pathname)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                main.innerHTML = doc.querySelector('main').innerHTML;
            });
    });
}
