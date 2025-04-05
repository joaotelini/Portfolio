const serviceID = "service_1kvbrfi";
const templateID = "template_anrlz5m";
const pstatus = document.getElementById("p-status");

(function () {
  emailjs.init("ar81o83bD0Ij51w8t");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    pstatus.innerHTML = "";

    emailjs.sendForm(serviceID, templateID, this).then(
      function () {},
      function (error) {
        pstatus.innerHTML = "Error sending message. Please try again later.";
        console.log("FAILED...", error);
      }
    );

    this.reset();
    pstatus.innerHTML = "Sending...";
    setTimeout(() => {
      pstatus.innerHTML = "Message sent!";
    }, 3000);
  });
