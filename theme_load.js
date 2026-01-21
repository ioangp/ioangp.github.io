const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const theme = localStorage.getItem("theme");
if (theme === "dark" || (!theme && prefersDark)) {
  document.documentElement.classList.add("dark");
}