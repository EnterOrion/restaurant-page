function createNavHeader() {
    const nav = document.createElement('nav');
    const button1 = createButton('nav1', 'Home');
    const button2 = createButton('nav2', 'Menu');
    const button3 = createButton('nav3', 'Contact');

    nav.appendChild(button1);
    nav.appendChild(button2);
    nav.appendChild(button3);

    return nav;
}

function createButton(id, text) {
    const button = document.createElement('button');
    button.setAttribute('id', id);
    button.textContent = text;
    button.classList.add('tab');
    return button;
}

function createMain(id) {
    const main = document.createElement('main');
    main.setAttribute('id', id);
    return main;
}

function loadPage() {
    const content = document.getElementById('content');
    content.appendChild(createNavHeader());
    const main = createMain('main');
    content.appendChild(main);
}



export default loadPage;

