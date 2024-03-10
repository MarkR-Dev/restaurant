import './css/reset.css';
import './css/style.css';
import createHomePage from './home';
import createMenuPage from './menu';

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");

homeBtn.addEventListener("click", () => {
    content.textContent = "";
    content.appendChild(createHomePage());
});

menuBtn.addEventListener("click", () => {
    content.textContent = "";
    content.appendChild(createMenuPage());
})

window.addEventListener("load", () => {
    content.appendChild(createHomePage());
});



