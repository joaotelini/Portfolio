document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navItems = document.querySelector(".nav-items");
  const mediaQuery = window.matchMedia("(max-width: 770px)");

  // Alterna o menu ao clicar no botão
  menuToggle.addEventListener("click", function () {
    navItems.classList.toggle("active");
  });

  // Fecha o menu quando um link for clicado (mobile)
  document.querySelectorAll(".nav-items a").forEach((link) => {
    link.addEventListener("click", function () {
      if (mediaQuery.matches) {
        navItems.classList.remove("active");
      }
    });
  });
});
