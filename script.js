// script.js

// === 1. Highlight active nav link on scroll ===
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// === 2. Reveal sections on scroll (basic fade-in) ===
const revealElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

revealElements.forEach((el) => observer.observe(el));

// === 3. Mobile nav toggle logic (if you add burger menu later) ===
// const menuToggle = document.querySelector(".menu-toggle");
// const nav = document.querySelector("nav ul");

// menuToggle.addEventListener("click", () => {
//   nav.classList.toggle("show-menu");
// });
