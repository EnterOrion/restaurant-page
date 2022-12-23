function homePage(){
    const mainImage = document.createElement("img");
    mainImage.src = "images/cafe.jpg";
    mainImage.alt = "Cafe with lights";

    const content = document.querySelector('#main');
    content.textContent = "";
    const titleHeader = document.createElement("h1");
    titleHeader.textContent = "Cosmic Time Cafe";
    const infoPara = createParagraph("Have you ever been to a cafe that changed your life? Cosmic Time Cafe strives to offer the optimal cafe experience. We have a view of the milky way out of our window and we are a very popular choice for time travelers to visit. Interested in what the future looks like? Stop on by today!");

    content.appendChild(titleHeader);
    content.appendChild(mainImage);
    content.appendChild(infoPara);
 }

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
} 

  
export default homePage;