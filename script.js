// Helper: Smooth scroll detection using requestAnimationFrame
function onScroll(callback) {
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  });
}

// 1. Navigation Bar Toggle
function setupMenuToggle() {
  const toggleButton = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (!toggleButton || !navLinks) return;

  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("nav__links--open");
    toggleButton.classList.toggle("menu-toggle--open");
  });
}

// 2. Dynamic Copyright Year
function setCurrentYear() {
  const yearSpan = document.getElementById("copyright-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// 3. Secondary Navigation Highlight on Scroll
function setupSectionHighlighter() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".project-nav a");
  let activeLink = null;

  const getOffsetTop = el => el.getBoundingClientRect().top + window.scrollY;

  const highlightNav = () => {
    let currentId = null;

    for (const section of sections) {
      if (scrollY >= getOffsetTop(section) - 60) {
        currentId = section.id;
      } else {
        break;
      }
    }

    if (currentId) {
      for (const link of navLinks) {
        const isMatch = link.getAttribute("href") === `#${currentId}`;
        if (isMatch && link !== activeLink) {
          if (activeLink) activeLink.classList.remove("active");
          link.classList.add("active");
          activeLink = link;
        }
      }
    } else if (activeLink) {
      activeLink.classList.remove("active");
      activeLink = null;
    }
  };

  onScroll(highlightNav);
}

// 4. Animate Hand Wave
function setupHandWave() {
  // Select all elements with the 'hand-wave' class
  const waveElements = document.querySelectorAll('.hand-wave');

  // Function to trigger the hand wave animation
  function triggerWave(waveEmoji) {
    // Remove the animation class to reset the animation
    waveEmoji.classList.remove('waving');

    // Force a reflow so the animation can restart
    void waveEmoji.offsetWidth;

    // Add the class to start the animation
    waveEmoji.classList.add('waving');
  }

  waveElements.forEach((waveElement) => {

    // Wave once automatically when the page loads
    triggerWave(waveElement);

    // Wave again whenever the user clicks
    waveElement.addEventListener('click', () => {
      triggerWave(waveElement);
    });

  });
}

// 5. Scroll back to the top
function setupBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}


// Initialize all on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  setupMenuToggle();
  setCurrentYear();
  setupBackToTop();
  setupSectionHighlighter();
  setupHandWave();
});
