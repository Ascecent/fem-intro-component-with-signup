import { regexTypes, fieldsNames } from "./Data";

/**
 * Validate if every element value in the fieldsName object is set to true
 * @returns {Boolean} validation
 */
const checkBtn = () =>
  Object.values(fieldsNames).every((field) => field === true);

/**
 * Control the submit button state based in the checkBtn value
 */
const controlBtn = () => {
  checkBtn() ? successBtnState() : errorBtnState();
};

/**
 * Set the error class to the input passed by parameter and adds the message
 * @param {HTMLElement} input
 * @param {String} message
 */
function setError(input, message) {
  const formControl = input.parentElement;

  formControl.querySelector(".feedback-message").innerText = message;
  formControl.className = "form-element__container error";
}

/**
 * Set the success class to the input passed by parameter
 * @param {HTMLElement} input
 */
function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-element__container success";
}

/**
 * Set the success state to the submit button
 */
function successBtnState() {
  submit.disabled = false;
  submit.classList.remove("disabled");
}

/**
 * Set the error state to the submit button
 */
function errorBtnState() {
  submit.disabled = true;
  submit.classList.add("disabled");
}

/**
 * Reset the class name of the controls passed by parameter also the validation object
 *
 * @param {NodeList} controls
 */
function resetFormControls(controls) {
  const controlsLength = controls.length;

  for (let i = 0; i < controlsLength; i++)
    controls[i].classList = "form-element__container";

  resetInputsCheck();
}

/**
 * Make all the elements in the fieldsNames object false
 */
function resetInputsCheck() {
  const fieldsNamesArray = Object.keys(fieldsNames);
  const fieldsNamesLength = fieldsNamesArray.length;

  for (let i = 0; i < fieldsNamesLength; i++)
    fieldsNames[fieldsNamesArray[i]] = false;
}

/**
 * Validate if the input is empty or not and handle the result
 */
function handleEmptyInput(target) {
  const validation = target.value.trim() === "";
  const inputName = target.getAttribute("input-name");

  if (validation) {
    setError(target, inputName + " cannot be empty");
    setFieldBoolean(target.name, false);
  }

  return validation;
}

/**
 * Validate a target value with the regex passed by parameter
 */
function handleRegexValidation(e) {
  const target = e.target;
  const regexType = target.getAttribute("regex");
  const messageText = target.getAttribute("error-message");

  if (!handleEmptyInput(target)) {
    const validation = regexTypes[regexType].test(target.value);
    validation ? setSuccess(target) : setError(target, messageText);
    setFieldBoolean(target.name, validation);
  }

  controlBtn();
}

// Set the value for a property of the object fieldsNames
function setFieldBoolean(field_name, value) {
  if (fieldsNames.hasOwnProperty(field_name))
    if (typeof value === "boolean") fieldsNames[field_name] = value;
}

export {
  checkBtn,
  resetFormControls,
  handleRegexValidation,
  resetInputsCheck,
  controlBtn,
};
