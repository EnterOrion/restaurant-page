function menuPage() {
    const content = document.querySelector('#main');
    content.textContent = "";
    const paragraph = document.createElement("p");
    paragraph.textContent = "Menu";
    content.appendChild(paragraph);
}

export default menuPage;