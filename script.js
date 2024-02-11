const button = document.getElementById("valentine-button");
const responseContainer = document.getElementById("response-container");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const imageContainer = document.getElementById("image-container");
const image = document.getElementById("image");

button.addEventListener("click", function() {
  responseContainer.style.display = "block";
  imageContainer.style.display = "block";
});

yesButton.addEventListener("click", function() {
  responseContainer.style.display = "none";
  button.textContent = "Yes!";

  // Remove the event listener for the "click" event
  yesButton.removeEventListener("click", arguments.callee);
});

noButton.addEventListener("click", function() {
  responseContainer.style.display = "none";
  button.textContent = "Will you be my Valentine?";
});
