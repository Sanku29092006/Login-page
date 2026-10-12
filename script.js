const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "Hide";
    } else {
        password.type = "password";
        togglePassword.textContent = "Show";
    }
});

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const passwordValue = password.value;

    if (email !== "" && passwordValue !== "") {
        message.textContent = "Login successful! Redirecting...";
        setTimeout(function () {
            window.location.href = "sans.html";
        }, 1000);
    }
});


document.getElementById("forgotPassword").addEventListener("click", function (event) {
    event.preventDefault();
    message.textContent = "Please contact support to reset your password.";
});


document.getElementById("signupLink").addEventListener("click", function (event) {
    event.preventDefault();
    message.textContent = "Sign-up functionality is not available yet.";
});

