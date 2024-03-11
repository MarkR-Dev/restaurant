import BurgerImg from '../assets/burger.jpg';

function createHomePage(){
    const homeBtn = document.querySelector("#home");
    const menuBtn = document.querySelector("#menu");
    const contactBtn = document.querySelector("#contact");
    homeBtn.classList.add("selected");
    menuBtn.classList.remove("selected");
    contactBtn.classList.remove("selected");

    const homePageDiv = document.createElement("div");
    homePageDiv.classList.add("home-page");

    const homeBurgerImg = new Image();
    homeBurgerImg.src = BurgerImg;
    homeBurgerImg.classList.add("home-img");

    const homeTagline = document.createElement("h2");
    homeTagline.textContent = `"Life's Too Short For Small Burgers!"`;
    homeTagline.classList.add("home-tagline");

    homePageDiv.appendChild(homeBurgerImg);
    homePageDiv.appendChild(homeTagline);
    
    return homePageDiv;
}

export default createHomePage;