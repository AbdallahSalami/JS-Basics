
const passwordInput = document.getElementById("password");
const confirmationInput = document.getElementById("confirmation");


function validatePasswords() {
  const password = passwordInput.value;
  const confirmation = confirmationInput.value;


  if (password === confirmation) {
 
    passwordInput.style.border = "";
    confirmationInput.style.border = "";
  } else {    passwordInput.style.border = "1px solid red";
    confirmationInput.style.border = "1px solid red";
  }
}


const testButton = document.querySelector("button");
testButton.addEventListener("click", validatePasswords);
