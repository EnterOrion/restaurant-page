function contactPage() {
    activeButton('nav3');
    const content = document.querySelector('#main');
    content.textContent = "";
    const contactHeader = document.createElement("h2");
    contactHeader.textContent = "Contact";

    const numberHeader = document.createElement("h3");
    numberHeader.textContent = "Phone";
    const mailHeader = document.createElement("h3");
    mailHeader.textContent = "E-mail";


    const numberParagraph = document.createElement("p");
    numberParagraph.textContent = "(123) - 456 - 7890"
    const mailParagraph = document.createElement("p");
    mailParagraph.textContent = "anemail@gmail.com"

    numberParagraph.setAttribute('id', "phone-contact");
    mailParagraph.setAttribute('id', "mail-contact");

    

    content.appendChild(contactHeader);
    content.appendChild(numberHeader);
    content.appendChild(numberParagraph);
    content.appendChild(mailHeader);
    content.appendChild(mailParagraph);
    
}

function activeButton(id) {
    const activeButton = document.querySelector('.tab.active');
    if (activeButton) activeButton.classList.remove('active');
  
    const homeButton = document.getElementById(id);
    homeButton.classList.add('active');
}

export default contactPage;