import BurgerImg from './assets/burger.jpg';

function createHomePage(){
    const homeBtn = document.querySelector("#home");
    const menuBtn = document.querySelector("#menu");
    const contactBtn = document.querySelector("#contact");
    homeBtn.classList.add("selected");
    menuBtn.classList.remove("selected");
    contactBtn.classList.remove("selected");

    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home");

    const homeBurgerImg = new Image();
    homeBurgerImg.src = BurgerImg;
    homeBurgerImg.classList.add("home-img");

    const homeTagline = document.createElement("h2");
    homeTagline.textContent = `"Life's Too Short for Small Burgers!"`;
    homeTagline.classList.add("home-tagline");

    const homeButtonsDiv = document.createElement("div");
    homeButtonsDiv.classList.add("home-buttons-div")

    const homeBtnTable = document.createElement("button");
    homeBtnTable.setAttribute("type", "button");
    homeBtnTable.textContent = "Book Table";
    homeButtonsDiv.appendChild(homeBtnTable);

    const homeBtnDeliver = document.createElement("button");
    homeBtnDeliver.setAttribute("type", "button");
    homeBtnDeliver.textContent = "Order Delivery";
    homeButtonsDiv.appendChild(homeBtnDeliver);

    homeDiv.appendChild(homeBurgerImg);
    homeDiv.appendChild(homeTagline);
    homeDiv.appendChild(homeButtonsDiv);
    
    return homeDiv;
}

export default createHomePage;