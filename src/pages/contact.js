function contactPage() {
    const content = document.querySelector('#main');
    content.textContent = "";
    const paragraph = document.createElement("p");
    paragraph.textContent = "Contact";
    content.appendChild(paragraph);
}

export default contactPage;