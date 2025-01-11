import {
  validateConfirmPassword,
  validatePassword,
  validateEmail,
  validateUsername,
} from "./validation.js";

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const validateForm = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  const isUsernameValid = validateUsername(usernameValue, username);
  const isEmailValid = validateEmail(emailValue, email);
  const isPasswordValid = validatePassword(passwordValue, password);
  const isConfirmPasswordValid = validateConfirmPassword(
    confirmPasswordValue,
    confirmPassword,
    passwordValue
  );

  return (
    isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid
  );
};

const main = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted successfully!");
      form.reset();
    } else {
      console.log("Form validation failed.");
    }
  });
};

main();
