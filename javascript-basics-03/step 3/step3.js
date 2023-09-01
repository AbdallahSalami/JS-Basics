
const greenColor = document.querySelector(".green");
const redColor = document.querySelector(".red");
const blueColor = document.querySelector(".blue");
const textElement = document.getElementById("text");


function changeTextColor(color) {
  textElement.style.color = color;
}


greenColor.addEventListener("click", function () {
  changeTextColor("green");
});

redColor.addEventListener("click", function () {
  changeTextColor("red");
});

blueColor.addEventListener("click", function () {
  changeTextColor("blue");
});
