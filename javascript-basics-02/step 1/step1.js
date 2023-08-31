
const originalImage = document.getElementById("image1");


const newImage = new Image();
newImage.src="images/image1_2.jpg";  


originalImage.addEventListener("mouseover", function() {
  this.parentNode.replaceChild(newImage, this);
});


newImage.addEventListener("mouseout", function() {
  this.parentNode.replaceChild(originalImage, this);
  
});
