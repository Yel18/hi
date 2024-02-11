const valentineButton = document.getElementById("valentine-button");
const valentineButtonInner = document.getElementById("valentine-button-inner");
const responseContainer = document.getElementById("response-container");
const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const image = document.getElementById("image");

valentineButtonInner.addEventListener("click", () => {
  responseContainer.style.display = "block";
  image.style.display = "block";
  valentineButton.style.display = "none";
});

noButton.addEventListener("click", () => {
  responseContainer.style.display = "none";
  image.style.display = "none";
  valentineButton.style.display = "block";
});

yesButton.addEventListener("click", () => {
  responseContainer.style.display = "none";
  image.style.display = "none";
  valentineButton.style.display = "block";
});
