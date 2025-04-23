// Navigation Bar Toggle
function togglemenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("nav__links--open");
  
    const toggleButton = document.getElementById("menu-toggle");
    toggleButton.classList.toggle("menu-toggle--open");
}

// Dynamically updated copyright year
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("copyright-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
