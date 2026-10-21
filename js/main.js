"use strict";

// Hamburgermenyn:

// Hämtar nav och hamburgermenyn
const hamburgerMenu = document.querySelector(".hamburger-menu");
const siteNav = document.querySelector(".site-nav");

// Funktion för att toggla menyn
function toggleMenu() {
    siteNav.classList.toggle("open");

    const menuIsOpen = siteNav.classList.contains("open");

    hamburgerMenu.setAttribute("aria-expanded", menuIsOpen);
}

// Event listener för hamburgermenyn
hamburgerMenu.addEventListener("click", toggleMenu);

// Validering - Formulär: 

// Hämtar formulär och dess inmatningsfält
const contactForm = document.querySelector(".contact-form-layout form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

//  Hämtar elementen som ska visa felmeddelanden  
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");

// Array för felmeddelanden
let errors = [];

// Kontroll för formulärfälten: 
function validateForm() {

 // Tömmer arrayen inför varje ny validering
errors = [];

// Rensa tidigare felmeddelanden
nameError.textContent = "";
emailError.textContent = "";
messageError.textContent = "";

// Hämtar texten från namnfältet
const name = nameInput.value;

// Kontrollerar att fältet inte är tomt
if (name.trim() === "") {
    errors.push("name");
    nameError.textContent = "Fyll i ditt namn.";
}

// Hämtar texten från e-postfältet
const email = emailInput.value.trim();

// Kontrollerar att e-postadressen är ifylld
if (email === "") {
    errors.push("email");
    emailError.textContent = "Fyll i din e-postadress.";

// Kontrollerar att e-postadressen har ett rimligt format
} else if (emailInput.validity.typeMismatch) {
    errors.push("email");
    emailError.textContent = "Ange en giltig e-postadress.";
    
}

// Hämtar texten från meddelandefältet
const message = messageInput.value;

// Kontrollerar att meddelandefältet inte är tomt
if (message.trim() === "") {
    errors.push("message");
    messageError.textContent = "Skriv ett meddelande.";
}

// Returnerar true om inga fel finns
    return errors.length === 0;
}


// Körs när kontaktformuläret skickas
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
// Validera inmatningen
    if (validateForm()) {
}

});










