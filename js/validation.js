/* =========================================================================
   Switch Theme Validation
   ========================================================================== */
// Check for saved user preference on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'negative') {
    document.querySelector('.toggle-checkbox').checked = true;
    document.documentElement.classList.add('negative'); // Ensures the class is present
}

// Save preference when user toggles
document.querySelector('.toggle-checkbox').addEventListener('change', (e) => {
    if (e.target.checked) {
        localStorage.setItem('theme', 'negative');
        document.documentElement.classList.add('negative');
    } else {
        localStorage.setItem('theme', 'nocturnal');
        document.documentElement.classList.remove('negative');
    }
});

/* =========================================================================
   Form Validation
   ========================================================================== */
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age= document.getElementById("age").value;
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.innerHTML = ""; // Clear previous error messages
    if (name.trim() === "") {
        errorMsg.textContent += "Please enter your name";
        return false;
    }
    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (!emailPattern.test(email)) {
        errorMsg.textContent += "Please enter a valid email address";
        return false;
    }

    if( age < 1 || age >120 ){
        errorMsg.textContent += "Please enter a valid age between 1 and 120";
        return false;
    }

    //display the success message as an alert
    alert("Form submitted successfully!");
    return true;
}   