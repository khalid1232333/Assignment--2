/* ===========================================================
   script.js — Assignment 2
   Author: Khalid Al-Anazi
   Purpose: Add interactivity, theme memory, search, and animations.
   =========================================================== */

// ----------- GREETING MESSAGE -----------
const greeting = document.getElementById("greeting");

// Function to update greeting text based on time of day
function updateGreeting() {
  const hour = new Date().getHours();
  let message = "Hi, I'm Khalid 👋";

  if (hour >= 5 && hour < 12) {
    message = "Good morning, I'm Khalid ☀️";
  } else if (hour >= 12 && hour < 18) {
    message = "Good afternoon, I'm Khalid 🌤️";
  } else {
    message = "Good evening, I'm Khalid 🌙";
  }

  greeting.textContent = message;
}

updateGreeting(); // Run once at load


// ----------- DARK/LIGHT THEME TOGGLE -----------
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load theme from localStorage if saved
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  themeToggle.setAttribute("aria-pressed", "true");
}

// When user clicks the toggle button
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.setAttribute("aria-pressed", isDark);
});


// ----------- LIVE PROJECT SEARCH -----------
const searchBar = document.getElementById("search-bar");
const projects = document.querySelectorAll(".project");
const emptyMsg = document.getElementById("empty-message");

searchBar.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  let visibleCount = 0;

  projects.forEach((proj) => {
    const title = proj.querySelector("h3").textContent.toLowerCase();
    if (title.includes(query)) {
      proj.style.display = "block";
      visibleCount++;
    } else {
      proj.style.display = "none";
    }
  });

  // Show "No projects found" if nothing matches
  emptyMsg.classList.toggle("hidden", visibleCount > 0);
});


// ----------- CONTACT FORM VALIDATION -----------
const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop real submission for this demo

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    statusMsg.textContent = "⚠️ Please fill out all fields.";
    statusMsg.style.color = "red";
    return;
  }

  // Basic email validation
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    statusMsg.textContent = "⚠️ Enter a valid email.";
    statusMsg.style.color = "red";
    return;
  }

  // Simulate "sending" with a loading message
  statusMsg.textContent = "⏳ Sending...";
  statusMsg.style.color = "var(--purple)";

  setTimeout(() => {
    statusMsg.textContent = "✅ Message sent successfully!";
    statusMsg.style.color = "green";
    form.reset();
  }, 1500);
});


// ----------- FADE-IN ANIMATION ON SCROLL -----------
const fadeElems = document.querySelectorAll(".fade");

function handleScroll() {
  fadeElems.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScroll);
handleScroll(); // Run once at start


// ----------- FOOTER YEAR UPDATE -----------
document.getElementById("year").textContent = new Date().getFullYear();
