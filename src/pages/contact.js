function contactPage() {
  activeButton("nav3");
  const content = document.querySelector("#main");
  content.textContent = "";

  const contactHeader = document.createElement("h2");
  const numberHeader = document.createElement("h3");
  const mailHeader = document.createElement("h3");
  const addressHeader = document.createElement("h3");

  contactHeader.textContent = "Contact";  
  numberHeader.textContent = "Phone";
  mailHeader.textContent = "E-mail";
  addressHeader.textContent = "Address";

  const numberParagraph = document.createElement("p");
  const mailParagraph = document.createElement("p");
  const addressParagraph = document.createElement("p");
  const addressParagraph2 = document.createElement("p");

  numberParagraph.textContent = "(123) - 456 - 7890";
  mailParagraph.textContent = "anemail@gmail.com";
  addressParagraph.textContent =
  "Location of the cafe: At the top of the Great Pyramid of Giza";
  addressParagraph2.textContent =
  "For those coming from space, parking is located out back.";

  const everythingDiv = document.createElement("div");
  const locationContainer = document.createElement("div");


  numberParagraph.setAttribute("id", "phone-contact");
  mailParagraph.setAttribute("id", "mail-contact");
  everythingDiv.setAttribute("id", "grid-div");
  locationContainer.setAttribute("id", "loc-holder");
  addressParagraph.setAttribute("id", "address-contact");
  addressParagraph2.setAttribute("id", "address-contact2");

  const locationImage = document.createElement("img");
  locationImage.setAttribute("id", "location");
  locationImage.src = "images/location.png";
  locationImage.alt = "Location of cafe: Great Pyramid of Giza";
  locationContainer.appendChild(locationImage);

  const phoneContainer = document.createElement("div");
  phoneContainer.setAttribute("id", "phone-box");
  phoneContainer.appendChild(numberHeader);
  phoneContainer.appendChild(numberParagraph);

  const mailContainer = document.createElement("div");
  mailContainer.setAttribute("id", "mail-box");
  mailContainer.appendChild(mailHeader);
  mailContainer.appendChild(mailParagraph);

  const addressContainer = document.createElement("div");
  addressContainer.setAttribute("id", "address-box");
  addressContainer.appendChild(addressHeader);
  addressContainer.appendChild(addressParagraph);
  addressContainer.appendChild(addressParagraph2);

  const column1 = document.createElement("div");
  const column2 = document.createElement("div");

  column1.setAttribute("id", "column1");
  column2.setAttribute("id", "column2");

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
  const activeButton = document.querySelector(".tab.active");
  if (activeButton) activeButton.classList.remove("active");

  const homeButton = document.getElementById(id);
  homeButton.classList.add("active");
}

export default contactPage;
