// Get a reference to the image element by its ID
const imageElement = document.getElementById("image1");

function addRedBorder() {
  imageElement.style.border = "3px solid red";
}

function removeBorder() {
  imageElement.style.border = "none";
}

imageElement.addEventListener("mouseover", addRedBorder);
imageElement.addEventListener("mouseout", removeBorder);
