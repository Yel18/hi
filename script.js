const button = document.getElementById("valentine-button");
const responseContainer = document.getElementById("response-container");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

button.addEventListener("click", function() {
  responseContainer.style.display = "block";
});

yesButton.addEventListener("click", function() {
  responseContainer.style.display = "none";
  button.textContent = "Yes!";
});

noButton.addEventListener("click", function() {
  responseContainer.style.display = "none";
  button.textContent = "Will you be my Valentine?";
});
