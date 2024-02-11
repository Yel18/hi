const button = document.getElementById('button');
const noButton = document.getElementById('no-button');
const heart = document.getElementById('heart');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  heart.src = "https://media1.tenor.com/m/OqW4q0evlmgAAAAC/frog-frog-love.gif";
  message.innerText = "Yay!!!";
});

noButton.addEventListener('click', () => {
  noButton.style.position = 'absolute';
  let left = Math.random() * (window.innerWidth - noButton.offsetWidth);
  let top = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.left = `${left}px`;
  noButton.style.top = `${top}px`;

  // Prevent scrolling
  document.body.style.overflow = 'hidden';

  // Check if button is outside the screen
  const checkButtonPosition = () => {
    if (noButton.offsetLeft < 0 || noButton.offsetLeft + noButton.offsetWidth > window.innerWidth || noButton.offsetTop < 0 || noButton.offsetTop + noButton.offsetHeight > window.innerHeight) {
      noButton.style.left = `${left}px`;
      noButton.style.top = `${top}px`;
    } else {
      // Remove event listener to prevent infinite loop
      document.removeEventListener('scroll', checkButtonPosition);
      // Allow scrolling
      document.body.style.overflow = 'auto';
    }
  };

  // Check button position on scroll
  document.addEventListener('scroll', checkButtonPosition);
  checkButtonPosition();
});
