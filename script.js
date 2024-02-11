const button = document.getElementById('button');
const noButton = document.getElementById('no-button');

button.addEventListener('click', () => {
  alert('Yay! I am so happy!');
});

noButton.addEventListener('click', () => {
  alert('Oh no! I will keep trying!');
});
