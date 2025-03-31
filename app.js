document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth"
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: { enable: true, speed: 2, direction: "none", out_mode: "out" }
      },
      interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } },
        modes: { repulse: { distance: 50, duration: 0.8 } }
      }
    });
  }
});

