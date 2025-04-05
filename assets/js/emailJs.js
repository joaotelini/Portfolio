const serviceID = "service_1kvbrfi";
const templateID = "template_anrlz5m";

(function () {
  emailjs.init("ar81o83bD0Ij51w8t");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(serviceID, templateID, this).then(
      function () {
        alert("Your message has been sent successfully!");
      },
      function (error) {
        alert("Failed to send your message. Please try again later.");
        console.error("Error sending email:", error);
      }
    );

    // this.reset();Reset the form after submission
  });
