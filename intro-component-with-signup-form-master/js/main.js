const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email-address");
const password = document.getElementById("password");

const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const firstNameError = document.getElementById("firstName-error");
const lastNameError = document.getElementById("lastName-error");
const form = document.querySelector(".form");

const showError = () => {
  if (email.validity.valueMissing) {
    emailError.textContent = "Please enter an email address";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Looks like this is not an email";
  }
  if (firstName.validity.valueMissing) {
    firstNameError.textContent = "First Name cannot be empty";
  }
  if (lastName.validity.valueMissing) {
    lastNameError.textContent = "Last Name cannot be empty";
  }
  if (password.validity.valueMissing) {
    passwordError.textContent = "Password cannot be empty";
  }
  emailError.className = "error active";
};

form.addEventListener("submit", (event) => {
  if (!email.validity.valid || !password.validity.valid) {
    event.preventDefault();
    showError();
  }
});
