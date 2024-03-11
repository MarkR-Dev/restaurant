function createMenuItem(name, desc, price){
    const menuItemDiv = document.createElement("div");
    menuItemDiv.classList.add("menu-item");

    const menuItemInfo = document.createElement("div");
    menuItemInfo.classList.add("item-info");

    const itemName = document.createElement("h3");
    itemName.textContent = name;
    itemName.classList.add("item-name");
    const itemDesc = document.createElement("p");
    itemDesc.textContent = desc;
    itemDesc.classList.add("item-desc");

    menuItemInfo.appendChild(itemName);
    menuItemInfo.appendChild(itemDesc);

    const itemPrice = document.createElement("p");
    itemPrice.textContent = price;
    itemPrice.classList.add("item-price");

    menuItemDiv.appendChild(menuItemInfo);
    menuItemDiv.appendChild(itemPrice);

    return menuItemDiv;
}

function createMenuPage(){
    const homeBtn = document.querySelector("#home");
    const menuBtn = document.querySelector("#menu");
    const contactBtn = document.querySelector("#contact");
    menuBtn.classList.add("selected");
    homeBtn.classList.remove("selected");
    contactBtn.classList.remove("selected");

    const menuPageDiv = document.createElement("div");
    menuPageDiv.classList.add("menu-page");

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");

    const menuTitle = document.createElement("h2");
    menuTitle.textContent = "Menu";
    menuTitle.classList.add("menu-title");
    menuDiv.appendChild(menuTitle);

    menuDiv.appendChild(createMenuItem("The Classic", "Beef, cheese, bread, sauce, done.", "£7"));
    menuDiv.appendChild(createMenuItem("The Chicken", "Chicken, lettuce, bread, mayo.", "£6"));
    menuDiv.appendChild(createMenuItem("The Dirty", "Beef, bacon, cheese, onion, bread, BBQ sauce.", "£9"));
    menuDiv.appendChild(createMenuItem("The Surprise", "Chef's selection!", "£8"));
    menuDiv.appendChild(createMenuItem("The Everything", "Everything we've got, in a burger.", "£10"));
    
    menuPageDiv.appendChild(menuDiv);

    const menuTagline = document.createElement("h2");
    menuTagline.textContent = `"Big Appetites, Big Burgers!"`;
    menuTagline.classList.add("menu-tagline");
    menuPageDiv.appendChild(menuTagline);

    return menuPageDiv;
}

export default createMenuPage;