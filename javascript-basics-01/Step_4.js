
document.getElementById("view").style.display = "block";

  

document.getElementById("validate").addEventListener("click", function() {
  const nameInput = document.getElementById("name").value ;
  const surInput = document.getElementById("surname").value ;
  const cityInput = document.getElementById("city").value ;
  if (nameInput) {
    alert(  "Name: "  +nameInput+ "\nSurname: " + surInput +"\nCity: " +cityInput);
    document.getElementById("view").style.display = "none";
  }
});






