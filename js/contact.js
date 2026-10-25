document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const alertBox = document.getElementById("formAlert");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("cName").value.trim();
      const email = document.getElementById("cEmail").value.trim();
      const message = document.getElementById("cMessage").value.trim();

      if (!name || !email || !message) {
        alertBox.className = "alert alert-danger mt-3";
        alertBox.innerText = "Please complete all required fields.";
        alertBox.classList.remove("d-none");
        return;
      }

      // Success UX Feedback
      alertBox.className = "alert alert-success mt-3";
      alertBox.innerText = `Thank you, ${name}! Your inquiry has been submitted. Our team will contact you at ${email} shortly.`;
      alertBox.classList.remove("d-none");
      contactForm.reset();
    });
  }
});
