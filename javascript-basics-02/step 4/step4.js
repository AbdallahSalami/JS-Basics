document.addEventListener("DOMContentLoaded", function () {
    
    const nameInput = document.getElementById("name");
    const surnameInput = document.getElementById("surname");
    const cityInput = document.getElementById("city");
    const resetButton = document.querySelector('button[name="button"]');
  
    
    resetButton.addEventListener("click", function () {
      
      const confirmed = confirm("Are you sure you want to reset?");
      
      if (confirmed) {
        
        nameInput.value = "";
        surnameInput.value = "";
        cityInput.value = "";
      }
    });
  });
  