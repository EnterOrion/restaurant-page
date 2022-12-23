function contactPage() {
    activeButton('nav3');
    const content = document.querySelector('#main');
    content.textContent = "";
    const paragraph = document.createElement("p");
    paragraph.textContent = "Contact";
    content.appendChild(paragraph);
}

function activeButton(id) {
    const activeButton = document.querySelector('.tab.active');
    if (activeButton) activeButton.classList.remove('active');
  
    const homeButton = document.getElementById(id);
    homeButton.classList.add('active');
}

export default contactPage;