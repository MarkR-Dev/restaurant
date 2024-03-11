import '../css/reset.css';
import '../css/style.css';
import createHomePage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");

homeBtn.addEventListener("click", () => {
    content.textContent = "";
    content.appendChild(createHomePage());
});

menuBtn.addEventListener("click", () => {
    content.textContent = "";
    content.appendChild(createMenuPage());
});

contactBtn.addEventListener("click", () => {
    content.textContent = "";
    content.appendChild(createContactPage());
});

window.addEventListener("load", () => {
    content.appendChild(createHomePage());
});



