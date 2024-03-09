import './css/reset.css';
import './css/style.css';
import createHomePage from './home';

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home");

homeBtn.addEventListener("click", () => {
    content.textContent = "";
    content.appendChild(createHomePage());
});

window.addEventListener("load", () => {
    content.appendChild(createHomePage());
});


