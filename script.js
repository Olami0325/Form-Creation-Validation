document.addEventListener('DOMContentLoaded', () => {
  // Select form and feedback
  const form = document.getElementById('registration-form');
  const feedback = document.getElementById('form-feedback');

  // Listen when form is submitted
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get values and trim them
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation checks
    let isValid = true;
    let messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 letters long');
    }
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push('Please enter a valid email');
    }
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 letters long');
    }

    // Display messages
    feedback.style.display = "block";

    if (isValid) {
      feedback.textContent = "Registration successful!";
      feedback.style.color = "#28a745";
    } else {
      feedback.innerHTML = messages.join('<br>');
      feedback.style.color = "#dc3545";
    }
  });
});
