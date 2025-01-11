const setErrorFor = (input, message) => {
  const inputControl = input.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");

  return false;
};

const setSuccessFor = (input) => {
  const inputControl = input.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");

  return true;
};

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validateUsername = (usernameValue, username) => {
  if (usernameValue === "") {
    return setErrorFor(username, "Username is required.");
  } else if (usernameValue.length < 3) {
    return setErrorFor(username, "Username must be at least 3 characters long.");
  } else {
    return setSuccessFor(username);
  }
};

export const validateEmail = (emailValue, email) => {
  if (emailValue === "") {
    return setErrorFor(email, "Email is required.");
  } else if (!isValidEmail(emailValue)) {
    return setErrorFor(email, "Enter a valid email address.");
  } else {
    return setSuccessFor(email);
  }
};

export const validatePassword = (passwordValue, password) => {
  if (passwordValue === "") {
    return setErrorFor(password, "Password is required.");
  } else if (passwordValue.length < 8) {
    return setErrorFor(password, "Password must be at least 8 characters long.");
  } else {
    return setSuccessFor(password);
  }
};

export const validateConfirmPassword = (
  confirmPasswordValue,
  confirmPassword,
  passwordValue
) => {
  if (confirmPasswordValue === "") {
    return setErrorFor(confirmPassword, "Please confirm your password.");
  } else if (confirmPasswordValue !== passwordValue) {
    return setErrorFor(confirmPassword, "Passwords do not match.");
  } else {
    return setSuccessFor(confirmPassword);
  }
};
