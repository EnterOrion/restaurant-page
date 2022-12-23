function homePage(){
    const mainImage = document.createElement("img");
    mainImage.src = "images/cafe.jpg";
    mainImage.alt = "Cafe with lights";

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
    const infoPara = createParagraph("Have you ever been to a cafe that changed your life? Cosmic Time Cafe strives to offer the optimal cafe experience. We have a view of the milky way out of our window and we are a very popular choice for time travelers to visit. Interested in what the future looks like? Stop on by today!");

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