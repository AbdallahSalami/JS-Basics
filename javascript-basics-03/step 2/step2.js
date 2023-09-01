
const showAnchor = document.getElementById("show");
const hideAnchor = document.getElementById("hide");
const texteDiv = document.getElementById("texte");


function toggleTextVisibility() {
  if (texteDiv.style.display === "none" || texteDiv.style.display === "") {
    texteDiv.style.display = "block"; 
    showAnchor.style.display = "none"; 
    hideAnchor.style.display = "inline"; 
  } else {
    texteDiv.style.display = "none";
    showAnchor.style.display = "inline"; 
    hideAnchor.style.display = "none"; 
  }
}


showAnchor.style.display = "inline";
hideAnchor.style.display = "none"; 


showAnchor.addEventListener("click", toggleTextVisibility);
hideAnchor.addEventListener("click", toggleTextVisibility);
