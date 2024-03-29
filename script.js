// Get DOM elements
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Update image source based on color
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Apply dark mode styles
function applyDarkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMode("dark");
}

// Apply light mode styles
function applyLightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageMode("light");
}

// Switch theme dynamically
/**
 * Switches the theme between light and dark based on the event target's checked value.
 * Updates the data-theme attribute of the document element and stores the theme in local storage.
 * Applies the corresponding CSS styles for the selected theme.
 * @param {Event} event - The event object triggered by the theme switch.
 */
function switchTheme(event) {
  const theme = event.target.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  if (theme === "dark") {
    applyDarkMode();
  } else {
    applyLightMode();
  }
}

// Add event listener
toggleSwitch.addEventListener("change", switchTheme);
