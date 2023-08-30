

    document.getElementById("dialog").style.display = "block";

  

  document.getElementById("closeDialog").addEventListener("click", function() {
    document.getElementById("dialog").style.display = "none";
  });
  

  document.getElementById("submitName").addEventListener("click", function() {
    const nameInput = document.getElementById("nameInput").value;
    if (nameInput) {
      alert("Hello, " + nameInput + "!");
      document.getElementById("dialog").style.display = "none";
    }
  });
  