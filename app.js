document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Impede o salto direto

    const targetId = this.getAttribute("href").substring(1); // Pega o ID do destino
    const targetElement = document.getElementById(targetId); // Acha o elemento

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Ajuste para compensar navbar fixa, se houver
        behavior: "smooth" // Faz a rolagem suave
      });
    }
  });
});
