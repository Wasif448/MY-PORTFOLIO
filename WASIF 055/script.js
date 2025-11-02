document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;
  const yearSpan = document.getElementById("year");
  const navLinks = document.querySelectorAll(".nav-link");

  // Show current year
  yearSpan.textContent = new Date().getFullYear();

  // Theme toggle
  const stored = localStorage.getItem("theme");
  if (stored === "dark") body.classList.add("dark");

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
    themeToggle.textContent = body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
  });

  // Smooth scroll
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Simple form feedback
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type='submit']");
    const original = btn.textContent;
    btn.textContent = "Message Sent!";
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      form.reset();
    }, 1500);
  });
});
