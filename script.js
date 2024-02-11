const noButton = document.getElementById('no-button');

function moveNoButton() {
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

function handleNoButtonClick() {
  noButton.style.display = 'none';
  document.body.style.overflow = 'hidden';
  moveNoButton();
  document.body.style.overflow = 'auto';
}

noButton.addEventListener('click', handleNoButtonClick);

function handleScroll() {
  if (window.scrollY === 0) {
    noButton.style.display = 'none';
  } else {
    noButton.style.display = 'block';
    moveNoButton();
  }
}

window.addEventListener('scroll', handleScroll);
