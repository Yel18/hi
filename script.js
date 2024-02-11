const button = document.getElementById('button');
const noButton = document.getElementById('no-button');
const heart = document.getElementById('heart');
const message = document.getElementById('message');

const noButtonTexts = [
  "Sure?",
  "Sure nagyud?",
  "Pleasee:<",
  ":<",
  "ma sad ko :<",
  "di ko makatug unya",
  ":<, ok muundang nako",
  "joke, yes na pls",
  "wa na nihilak nako"
];
let noButtonTextIndex = 0;

button.addEventListener('click', () => {
  heart.src = "https://media1.tenor.com/m/XZGm-kKjguMAAAAC/kawaii-bunny.gif";
  message.innerText = "Yay!!!";
  message.style.fontWeight = "bold";
  message.style.fontSize = "3rem";
  button.style.display = 'none';
  noButton.style.display = 'none';
});

noButton.addEventListener('click', () => {
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;
  const randomX = Math.floor(Math.random() * (maxX + 1));
  const randomY = Math.floor(Math.random() * (maxY + 1));
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
  if (noButtonTextIndex >= noButtonTexts.length) {
    noButtonTextIndex = 0;
  }
  noButton.innerText = noButtonTexts[noButtonTextIndex];
  noButtonTextIndex++;
});

// Make the buttons rounder
button.style.borderRadius = '50%';
noButton.style.borderRadius = '50%';

// Prevent scrolling when the no button is moved
const originalBodyOverflow = document.body.style.overflow;
noButton.addEventListener('mousedown', () => {
  document.body
