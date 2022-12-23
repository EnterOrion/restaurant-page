function menuPage() {
    activeButton('nav2');
    const content = document.querySelector('#main');
    content.textContent = "";
    const menuHeader = document.createElement("h2");
    const foodHeader = document.createElement("h4");
    const drinkHeader = document.createElement("h4");

    menuHeader.textContent = "Menu";
    foodHeader.textContent = "Food";
    drinkHeader.textContent = "Beverages";
    const menuItems = createDiv("menu");
    const item1 = createDiv("item1");
    const item2 = createDiv("item2");
    const item3 = createDiv("item3");
    const item4 = createDiv("item4");
    const item5 = createDiv("item5");


    const image1 = createImage("image1", "images/latte.jpg", "A latte");
    const image2 = createImage("image2", "images/iceLatte.jpg", "An iced latte");
    const image3 = createImage("image3", "images/matcha.jpg", "A matcha latte");
    const image4 = createImage("image4", "images/toast.jpg", "Toast with jam");
    const image5 = createImage("image5", "images/cookies.jpg", "Plate of cookies");

    item1.appendChild(image1);
    item2.appendChild(image2);
    item3.appendChild(image3);
    item4.appendChild(image4);
    item5.appendChild(image5);
    

    content.appendChild(menuHeader);
    content.appendChild(drinkHeader);
    menuItems.appendChild(item1);
    menuItems.appendChild(item2);
    menuItems.appendChild(item3);
    menuItems.appendChild(foodHeader);
    menuItems.appendChild(item4);
    menuItems.appendChild(item5);
    content.appendChild(menuItems);
}

function createDiv(id) {
    const divItem = document.createElement("div");
    divItem.setAttribute('id', id);
    return divItem;
}

function createImage(id, src, alt) {
    const imgItem = document.createElement("img");
    imgItem.setAttribute('id', id);
    imgItem.src = src;
    imgItem.alt = alt;
    return imgItem;
}


function activeButton(id) {
    const activeButton = document.querySelector('.tab.active');
    if (activeButton) activeButton.classList.remove('active');
  
    const homeButton = document.getElementById(id);
    homeButton.classList.add('active');
}

export default menuPage;