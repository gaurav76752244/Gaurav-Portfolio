document.addEventListener("DOMContentLoaded", () => {
  // Contact form
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thanks for contacting me! I will get back to you soon.");
      form.reset();
    });
  }

  // Dark mode toggle
  const toggle = document.getElementById("dark-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      // Switch icon between moon and sun
      const icon = toggle.querySelector("i");
      if (document.body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-moon", "fa-sun");
      } else {
        icon.classList.replace("fa-sun", "fa-moon");
      }
    });
  }
});
