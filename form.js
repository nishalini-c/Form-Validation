// Selecting form and input elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmpassword");

const passToggleBtn = document.getElementById("pass-toggle-btn");

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Retrieving input elements
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    // const genderInput = document.getElementById("gender");

    // Getting trimmed values from input fields
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // Regular expression pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$^&*]).{8,}$/;

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Performing validation checks
    if (fullname === "") {
        showError(fullnameInput, "Username can't be blank");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Email is not valid.");
    }
    if (!passwordPattern.test(password)) {
        showError(passwordInput, "Password must have at least 8 characters, including 1 lowercase character, 1 uppercase character, 1 number, and 1 special character in (@#$^&*)");
    }
    if (confirmPassword === "" || confirmPassword !== password) {
        showError(confirmPasswordInput, "Password Confirmation does not match");
    }
    // if (gender === "") {
    //     showError(genderInput, "Select your gender");
    // }

    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Submitting the form
    form.submit();
}

// Toggling password visibility for both password and confirm password fields
passToggleBtn.addEventListener('click', () => {
    if (passwordInput.type === "password") {
        passToggleBtn.className = "fa-solid fa-eye-slash";
        passwordInput.type = "text";
        confirmPasswordInput.type = "text";
    } else {
        passToggleBtn.className = "fa-solid fa-eye";
        passwordInput.type = "password";
        confirmPasswordInput.type = "password";
    }
});

// Handling form submission event
form.addEventListener("submit", handleFormData);
