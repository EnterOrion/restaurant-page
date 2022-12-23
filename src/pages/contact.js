function contactPage() {
    activeButton('nav3');
    const content = document.querySelector('#main');
    content.textContent = "";
    const contactHeader = document.createElement("h2");
    contactHeader.textContent = "Contact";
    content.appendChild(contactHeader);
}

function activeButton(id) {
    const activeButton = document.querySelector('.tab.active');
    if (activeButton) activeButton.classList.remove('active');
  
    const homeButton = document.getElementById(id);
    homeButton.classList.add('active');
}

export default contactPage;