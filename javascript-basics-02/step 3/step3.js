
const divElement = document.getElementById("output");
const inputElement = document.getElementById("name");


inputElement.addEventListener("input", function () {

  divElement.textContent = inputElement.value;


});
