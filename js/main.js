"use strict";

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


