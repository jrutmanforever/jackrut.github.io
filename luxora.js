// luxora.js

// PRELOADER
window.addEventListener("load", () => {

  const preloader = document.getElementById("preloader");

  setTimeout(() => {
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);

  }, 600);

});

// MOBILE NAV
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// DARK MODE
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");

});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// SCROLL PROGRESS
window.addEventListener("scroll", () => {

  const scrollTop = window.scrollY;
  const docHeight =
    document.body.scrollHeight - window.innerHeight;

  const progress = (scrollTop / docHeight) * 100;

  document.getElementById("progress-bar").style.width =
    `${progress}%`;

});

// BACK TO TOP
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

// REVEAL ANIMATION
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }

  });

}, {
  threshold: 0.15
});

revealElements.forEach((element) => {
  observer.observe(element);
});

// COUNTERS
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      const counter = entry.target;
      const target = +counter.dataset.target;

      let current = 0;

      const increment = target / 80;

      const updateCounter = () => {

        current += increment;

        if (current < target) {

          counter.innerText = Math.ceil(current);

          requestAnimationFrame(updateCounter);

        } else {

          counter.innerText = target;

        }

      };

      updateCounter();

      counterObserver.unobserve(counter);

    }

  });

}, {
  threshold: 0.6
});

counters.forEach((counter) => {
  counterObserver.observe(counter);
});
