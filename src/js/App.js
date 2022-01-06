import { createForm, createSubmitButton } from "./Form";

import { getInputs } from "./Utils";

import {
  handleRegexValidation,
  checkBtn,
  resetFormControls,
} from "./Validations";

import { fields } from "./Data";

import Swal from "sweetalert2";

import { controlBtn } from "./Validations";

import "Styles";

// Form container
const formContainer = document.getElementById("signupFormContainer");
formContainer.appendChild(
  createForm(
    "signupForm",
    "intro__form",
    fields,
    createSubmitButton(
      "submit",
      "form-element__submit-button",
      "CLAIM YOUR FREE TRIAL"
    )
  )
);

const formInputs = getInputs("#signupForm .form-element__container > input");
const formControls = getInputs("#signupForm .form-element__container");
document.getElementById("submit").disabled = true;

formInputs.forEach((input) => {
  input.addEventListener("click", handleRegexValidation);
  input.addEventListener("keyup", handleRegexValidation);
  input.addEventListener("blur", handleRegexValidation);
});

const form = document.getElementById("signupForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (checkBtn()) {
    resetFormControls(formControls);

    Swal.fire({
      icon: "success",
      title: "Success signup",
      text: "Congratulations buddy, you are now embarked on the greatest adventure of your life.",
    });

    this.reset();

    controlBtn();
  } else {
    Swal.fire({
      icon: "error",
      title: "Bad signup",
      text: "Wha are you doing buddy? We are going to send the FBI to your home.",
    });
  }
});
