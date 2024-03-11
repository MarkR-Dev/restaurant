import LocationImg from '../assets/loc.png';

function createContactItem(method, data){
    const contactItemDiv = document.createElement("div");
    contactItemDiv.classList.add("contact-item");

    const contactMethod = document.createElement("h3");
    contactMethod.textContent = method;
    contactMethod.classList.add("contact-method");

    const contactData = document.createElement("p");
    contactData.textContent = data;
    contactData.classList.add("contact-data");

    contactItemDiv.appendChild(contactMethod);
    contactItemDiv.appendChild(contactData);

    return contactItemDiv;
}

function createContactPage(){
    const homeBtn = document.querySelector("#home");
    const menuBtn = document.querySelector("#menu");
    const contactBtn = document.querySelector("#contact");
    homeBtn.classList.remove("selected");
    menuBtn.classList.remove("selected");
    contactBtn.classList.add("selected");

    const contactPageDiv = document.createElement("div");
    contactPageDiv.classList.add("contact-page");

    const contactPage = document.createElement("div");
    contactPage.classList.add("contact");

    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Contact";
    contactTitle.classList.add("contact-title");
    contactPage.appendChild(contactTitle);
    
    const contactTelephone = createContactItem("Telephone", "01234 567890");
    contactPage.appendChild(contactTelephone);

    const contactEmail = createContactItem("Email", "bigburger@fake.com");
    contactPage.appendChild(contactEmail);

    const contactLocation = createContactItem("Located", "123 Fake Street, Fakeland");
    contactPage.appendChild(contactLocation);

    const locationImg = new Image();
    locationImg.src = LocationImg;
    locationImg.classList.add("location-img");
    contactPage.appendChild(locationImg);

    const contactTagline = document.createElement("h2");
    contactTagline.textContent = `"Get In Touch, Dont' Be Shy!"`;
    contactTagline.classList.add("contact-tagline");
    
    contactPageDiv.appendChild(contactPage);
    contactPageDiv.appendChild(contactTagline);

    return contactPageDiv;
}

export default createContactPage;