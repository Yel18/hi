const button = document.getElementById('button');
const noButton = document.getElementById('no-button');

button.addEventListener('click', () => {
  alert('Yay! I am so happy!');
  noButton.style.display = 'none';
});

noButton.addEventListener('click', () => {
  noButton.style.position = 'absolute';
  noButton.style.left = Math.random() * window.innerWidth + 'px';
  noButton.style.top = Math.random() * window.innerHeight + 'px';
});
