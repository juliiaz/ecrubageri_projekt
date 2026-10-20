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

// Körs när kontaktformuläret skickas
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();


// Kontroll för namnfält

// Hämtar texten från namnfältet
const name = nameInput.value;

// Kontrollerar att fältet inte är tomt
    if (name.trim() === "") {
    nameError.textContent = "Fyll i ditt namn.";
} else {
    nameError.textContent = "";
}
});








