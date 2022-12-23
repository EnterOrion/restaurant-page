function homePage(){
    const mainImage = document.createElement("img");
    mainImage.src = "images/starry.jpg";
    mainImage.alt = "Starry sky";

    const nav = document.createElement("nav");
    const nav1 = document.createElement("button");
    const nav2 = document.createElement("button");
    const nav3 = document.createElement("button");
        
    nav1.textContent = "Home";
    nav2.textContent = "Menu";
    nav3.textContent = "Contact";

    nav.appendChild(nav1);
    nav.appendChild(nav2);
    nav.appendChild(nav3);

    const content = document.querySelector('#content');
    const titleHeader = document.createElement("h1");
    titleHeader.textContent = "Cosmic Time Cafe";
    const infoPara = createParagraph("This is the greatest restaurant of all time. Furthermore, we are the greatest restaurant in all of the alternate realities!");

    content.appendChild(nav);
    content.appendChild(titleHeader);
    content.appendChild (mainImage);
    content.appendChild(infoPara);
 }

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
} 

  
export default homePage;