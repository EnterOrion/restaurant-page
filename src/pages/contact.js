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

    const addressHeader = document.createElement("h3");
    addressHeader.textContent = "Address";

    const numberParagraph = document.createElement("p");
    numberParagraph.textContent = "(123) - 456 - 7890"
    const mailParagraph = document.createElement("p");
    mailParagraph.textContent = "anemail@gmail.com"

    numberParagraph.setAttribute('id', "phone-contact");
    mailParagraph.setAttribute('id', "mail-contact");

    const everythingDiv = document.createElement("div");
    everythingDiv.setAttribute('id', "grid-div");

    const locationContainer = document.createElement("div");
    locationContainer.setAttribute('id', "loc-holder");


    const locationImage = document.createElement("img");
    locationImage.setAttribute('id', "location");
    locationImage.src = "images/location.png";
    locationImage.alt = "Location of cafe: Great Pyramid of Giza";

    const addressParagraph = document.createElement("p");
    addressParagraph.textContent = "Location of the cafe: At the top of the Great Pyramid of Giza";
    addressParagraph.setAttribute('id', "address-contact");

    const addressParagraph2 = document.createElement("p");
    addressParagraph2.textContent = "For those coming from space, parking is located out back.";
    addressParagraph2.setAttribute('id', "address-contact2");

    
    const phoneContainer = document.createElement("div");
    phoneContainer.setAttribute('id', "phone-box");
    phoneContainer.appendChild(numberHeader);
    phoneContainer.appendChild(numberParagraph);

    const mailContainer = document.createElement("div");
    mailContainer.setAttribute('id', "mail-box");
    mailContainer.appendChild(mailHeader);
    mailContainer.appendChild(mailParagraph);

    const addressContainer = document.createElement("div");
    addressContainer.setAttribute('id', "address-box");
    addressContainer.appendChild(addressHeader);
    addressContainer.appendChild(addressParagraph);
    addressContainer.appendChild(addressParagraph2);
    
    locationContainer.appendChild(locationImage);

    const column1 = document.createElement("div");
    const column2 = document.createElement("div");

    column1.setAttribute('id', "column1");
    column2.setAttribute('id', "column2");

    column1.appendChild(phoneContainer);
    column1.appendChild(mailContainer);
    column1.appendChild(addressContainer);
    column2.appendChild(locationContainer);

    content.appendChild(contactHeader);
    everythingDiv.appendChild(column1);
    everythingDiv.appendChild(column2);
    content.appendChild(everythingDiv);
    
}

function activeButton(id) {
    const activeButton = document.querySelector('.tab.active');
    if (activeButton) activeButton.classList.remove('active');
  
    const homeButton = document.getElementById(id);
    homeButton.classList.add('active');
}

export default contactPage;