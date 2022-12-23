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


function activeButton(id) {
    const activeButton = document.querySelector('.tab.active');
    if (activeButton) activeButton.classList.remove('active');
  
    const homeButton = document.getElementById(id);
    homeButton.classList.add('active');
}

export default menuPage;