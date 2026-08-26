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

// 4. Pause/Play Hero GIF on Click
function setupHeroGifToggle() {
  const gif = document.getElementById("hero-gif");
  if (!gif) return;

  const canvas = document.createElement("canvas");
  canvas.setAttribute("aria-hidden", "true");
  canvas.style.display = "none";
  gif.insertAdjacentElement("afterend", canvas);

  const ctx = canvas.getContext("2d");
  let paused = false;

  function pauseGif() {
    canvas.width = gif.naturalWidth;
    canvas.height = gif.naturalHeight;
    ctx.drawImage(gif, 0, 0);
    canvas.style.display = "block";
    gif.style.visibility = "hidden";
  }

  function playGif() {
    canvas.style.display = "none";
    gif.style.visibility = "visible";
  }

  function toggleGif() {
    paused = !paused;
    paused ? pauseGif() : playGif();
  }

  gif.addEventListener("click", toggleGif);
  canvas.addEventListener("click", toggleGif);
}

// 5. Animate Hand Wave
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

// 6. Cycle hero role title
function setupRoleCycler() {
  const el = document.getElementById("roleCycle");
  if (!el) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const roles = ["Product Designer", "UI/UX Designer", "UX Researcher", "UX Strategist"];
  let index = 0;
  let intervalId = null;

  function advance() {
    el.classList.add("role-cycle--fade");

    setTimeout(() => {
      index = (index + 1) % roles.length;
      el.textContent = roles[index];
      el.classList.remove("role-cycle--fade");

      // Stop once the cycle loops back around to "Product Designer"
      if (index === 0) stopCycle();
    }, 400);
  }

  function startCycle() {
    if (intervalId || reduceMotion) return;
    intervalId = setInterval(advance, 2400);
  }

  function stopCycle() {
    clearInterval(intervalId);
    intervalId = null;
  }

  el.addEventListener("click", () => {
    intervalId ? stopCycle() : startCycle();
  });

  startCycle();
}

// 7. Scroll back to the top
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
  setupHeroGifToggle();
  setupHandWave();
  setupRoleCycler();
});
