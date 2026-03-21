/* ===================================================
   Mandarina Projects — Main JavaScript
   =================================================== */

(function () {
  "use strict";

  /* ---------- Navbar scroll effect ---------- */
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });

  /* ---------- Mobile menu toggle ---------- */
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    // Animate hamburger → X
    const spans = menuToggle.querySelectorAll("span");
    if (isOpen) {
      spans[0].style.transform = "translateY(7px) rotate(45deg)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "translateY(-7px) rotate(-45deg)";
    } else {
      spans[0].style.transform = "";
      spans[1].style.opacity = "";
      spans[2].style.transform = "";
    }
  });

  // Close menu on link click
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      const spans = menuToggle.querySelectorAll("span");
      spans[0].style.transform = "";
      spans[1].style.opacity = "";
      spans[2].style.transform = "";
    });
  });

  /* ---------- Intersection Observer — fade-in on scroll ---------- */
  const observerOptions = { threshold: 0.12 };
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        fadeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(
    ".service-card, .project-card, .about__card, .contact__form"
  ).forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    el.classList.add("fade-target");
    fadeObserver.observe(el);
  });

  // Apply visible state via CSS class
  const style = document.createElement("style");
  style.textContent = ".fade-target.visible { opacity: 1 !important; transform: translateY(0) !important; }";
  document.head.appendChild(style);

  /* ---------- Contact form validation ---------- */
  const form = document.getElementById("contact-form");
  const formSuccess = document.getElementById("form-success");

  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + "-error");
    field.classList.add("is-invalid");
    error.textContent = message;
  }

  function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + "-error");
    field.classList.remove("is-invalid");
    error.textContent = "";
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Reset errors
    ["name", "email", "message"].forEach(clearError);
    formSuccess.hidden = true;

    if (!name) {
      showError("name", "Por favor ingresa tu nombre.");
      valid = false;
    }
    if (!email) {
      showError("email", "Por favor ingresa tu correo electrónico.");
      valid = false;
    } else if (!validateEmail(email)) {
      showError("email", "Ingresa un correo electrónico válido.");
      valid = false;
    }
    if (!message) {
      showError("message", "Por favor escribe un mensaje.");
      valid = false;
    }

    if (valid) {
      const submitBtn = form.querySelector("[type='submit']");
      submitBtn.disabled = true;
      submitBtn.textContent = "Enviando…";

      // Simulate async submit
      setTimeout(() => {
        form.reset();
        formSuccess.hidden = false;
        submitBtn.disabled = false;
        submitBtn.textContent = "Enviar Mensaje";
      }, 1000);
    }
  });

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
