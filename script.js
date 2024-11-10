function validateForm() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    
    if (username === "" || password === "") {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please fill out all fields.";
    } else {
        errorMessage.style.display = "none";
        alert("Form submitted successfully!");
    }
}