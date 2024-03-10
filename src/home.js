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

    homeDiv.appendChild(homeBurgerImg);
    homeDiv.appendChild(homeTagline);
    
    return homeDiv;
}

export default createHomePage;