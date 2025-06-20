/**
 * Utility function to calculate the current theme setting.
 * Look for a local storage value.
 * Fall back to system setting.
 * Fall back to light mode.
 */
function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

// Utility function to update the button icon svg and title.
function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "Change to light theme" : "Change to dark theme";

  buttonEl.setAttribute("title", newCta);

  let sunIcon = document.querySelector(".sun-icon");
  let moonIcon = document.querySelector(".moon-icon");

  console.log(sunIcon);
  console.log(moonIcon);

  if (isDark) {
    sunIcon.classList.add("btn-icon-hidden");
    moonIcon.classList.remove("btn-icon-hidden");
  } else {
    sunIcon.classList.remove("btn-icon-hidden");
    moonIcon.classList.add("btn-icon-hidden");
  }
}

// Utility function to update the theme setting on the html tag
function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

// On page load:

// 1. Grab what we need from the DOM and system settings on page load
const button = document.querySelector(".theme-btn");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

// 2. Work out the current site settings
let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

// 3. Update the theme setting and button text accoridng to current settings
updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

// 4. Add an event listener to toggle the theme
button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});
