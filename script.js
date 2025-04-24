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

// Animating Waves
const animatedElements = document.querySelectorAll('.parallax > use');
let allAnimating = true;

animatedElements.forEach(el => {
    el.addEventListener('click', () => {
      allAnimating = !allAnimating;
      animatedElements.forEach(item => {
        if (allAnimating) {
          item.style.animationPlayState = 'running';
        } else {
          item.style.animationPlayState = 'paused';
        }
      });
    });
  });
  