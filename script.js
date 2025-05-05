document.addEventListener('DOMContentLoaded', () => {
  // Button click event listener
  const actionButton = document.getElementById('actionButton');
  actionButton.addEventListener('click', () => {
    // Toggle button text and perhaps color
    if (actionButton.textContent === 'Click Me!') {
      actionButton.textContent = 'Clicked!';
      actionButton.style.backgroundColor = 'lightgreen';
    } else {
      actionButton.textContent = 'Click Me!';
      actionButton.style.backgroundColor = '';
    }
  });

  // Keypress detection
  document.addEventListener('keypress', (event) => {
    console.log(`Key pressed: ${event.key}`);
    // Additional functionality based on key
  });

  // Example for form validation
  const myForm = document.getElementById('myForm');
  myForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission for demonstration
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let valid = true;
    
    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      valid = false;
    }
    
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      valid = false;
    }
    
    if (valid) {
      alert("Form submitted successfully!");
    }
  });

  // Bonus: Double-click or long press event
  actionButton.addEventListener('dblclick', () => {
    alert("Secret action triggered by double-click!");
  });
});
