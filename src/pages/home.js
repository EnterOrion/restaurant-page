function homePage() {
  activeButton("nav1");
  const content = document.querySelector("#main");
  content.textContent = "";

  const mainImage = document.createElement("img");
  mainImage.src = "images/cafe.jpg";
  mainImage.alt = "Cafe with lights";

  const titleHeader = document.createElement("h1");
  titleHeader.textContent = "Cosmic Time Cafe";

  const infoPara = document.createElement("p");
  infoPara.innerText =
    "Have you ever been to a cafe that changed your life? Cosmic Time Cafe strives to offer the optimal cafe experience. We have a view of the milky way out of our window and we are a very popular choice for time travelers to visit. Interested in what the future looks like? Stop on by today!";
    
  content.appendChild(titleHeader);
  content.appendChild(mainImage);
  content.appendChild(infoPara);
}

function activeButton(id) {
  const activeButton = document.querySelector(".tab.active");
  if (activeButton) activeButton.classList.remove("active");

  const homeButton = document.getElementById(id);
  homeButton.classList.add("active");
}

export default homePage;
