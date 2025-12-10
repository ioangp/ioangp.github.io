(function () {
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
})();
