document.getElementById("submitBtn").addEventListener("click", function() {
        
    document.getElementById("popupFirstName").textContent = document.getElementById("firstName").value;
    document.getElementById("popupLastName").textContent = document.getElementById("lastName").value;
    document.getElementById("popupDateofBirth").textContent = document.getElementById("dob").value;
    document.getElementById("popupCountry").textContent = document.getElementById("country").value;
    document.getElementById("popupGender").textContent = document.getElementById("male").value;

    // document.getElementById("popupGender").textContent = document.getElementById("female").value;
    // document.getElementById("popupGender").textContent = document.getElementById("other").value;
    document.getElementById("popupProfession").textContent = document.getElementById("profession").value;
    document.getElementById("popupEmail").textContent = document.getElementById("email").value;
    document.getElementById("popupMobileNumber").textContent = document.getElementById("mobile").value;
    

    document.getElementById("popup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function() {
   
    document.getElementById("surveyForm").reset();
    
    document.getElementById("popup").style.display = "none";
});

document.getElementById("resetBtn").addEventListener("click", function() {
  
    document.getElementById("surveyForm").reset();
});