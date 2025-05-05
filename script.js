// Button click, double click & long press
const button = document.getElementById('magicButton');
let pressTimer;

button.addEventListener('click', () => {
  button.textContent = "You clicked me!";
  button.style.backgroundColor = "lightgreen";
});

button.addEventListener('dblclick', () => {
  alert("Double-click secret unlocked!");
});

button.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    alert("Long press secret unlocked!");
  }, 1000);
});

button.addEventListener('mouseup', () => clearTimeout(pressTimer));

// Keypress detection
document.addEventListener('keydown', (e) => {
  console.log(`You pressed: ${e.key}`);
});

// Image gallery logic
const images = [
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300/ff7f7f",
  "https://via.placeholder.com/300/87cefa"
];
let index = 0;

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  document.getElementById('galleryImage').src = images[index];
});

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % images.length;
  document.getElementById('galleryImage').src = images[index];
});

// Tab functionality
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    contents.forEach(c => c.classList.add('hidden'));
    document.getElementById(tab.dataset.target).classList.remove('hidden');
  });
});

// Form validation with real-time feedback
const email = document.getElementById('email');
const emailFeedback = document.getElementById('emailFeedback');
const password = document.getElementById('password');
const passwordFeedback = document.getElementById('passwordFeedback');

email.addEventListener('input', () => {
  const valid = /\S+@\S+\.\S+/.test(email.value);
  emailFeedback.textContent = valid ? "Valid email ✔️" : "Invalid email ❌";
  emailFeedback.className = valid ? "valid" : "";
});

password.addEventListener('input', () => {
  const valid = password.value.length >= 8;
  passwordFeedback.textContent = valid ? "Strong password ✔️" : "Password too short ❌";
  passwordFeedback.className = valid ? "valid" : "";
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
  if (!email.checkValidity() || password.value.length < 8) {
    e.preventDefault();
    alert("Please fix form errors first!");
  }
});
