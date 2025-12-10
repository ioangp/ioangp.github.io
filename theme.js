(function () {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");

  // Load saved theme
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    root.classList.add("dark");
  }

  if (!btn) return;

  btn.addEventListener("click", () => {
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
})();
