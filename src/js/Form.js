import { createElement } from "./Utils";

/**
 * Create an input with the specifications passed by parameter
 * and returns it
 *
 * @param {Object} specs Object containing all the specifications for the input
 * @return {HTMLInputElement} input
 */
function createInput(specs) {
  const { id, type, name, title, regex, styles, inputName, errorMessage } =
    specs;
  const input = createElement("input");

  input.setAttribute("id", id);
  input.setAttribute("type", type);
  input.setAttribute("name", name);
  input.setAttribute("title", title);
  input.setAttribute("regex", regex);
  input.setAttribute("placeholder", " ");
  input.setAttribute("input-name", inputName);
  input.setAttribute("error-message", errorMessage);

  input.classList = styles;

  return input;
}

/**
 * Create and return a div containing basic elements, like
 * error & success icons & a container for an error message
 * of the validation
 *
 * @param {Object} input An object containing the specification for the input and the label text
 * @param {String} styles Styles for the container
 * @return {HTMLDivElement} div
 */
function createInputContainer(input, styles) {
  // Container for the elements
  const div = createElement("div");
  div.classList = styles;

  // Label for the input
  const label = createElement("label");
  label.setAttribute("for", input.id);
  label.innerHTML = input.labelText;
  label.classList = "input__placeholder";

  // -----------------
  // Icons
  const successIcon = createElement("span");
  successIcon.classList = "icon icon--success";

  const errorIcon = createElement("span");
  errorIcon.classList = "icon icon--error";
  // -----------------

  // Feedback message container
  const small = createElement("small");
  small.classList = "feedback-message";
  small.innerHTML = "Default message";

  // Add all the elements previously created to the container
  div.appendChild(createInput(input));
  div.appendChild(label);
  div.appendChild(errorIcon);
  div.appendChild(successIcon);
  div.appendChild(small);

  return div;
}

/**
 * Create a button with the specifications passed by parameter and returns it
 *
 * @param {String} id Button id
 * @param {String} styles Button styles
 * @param {String|HTMLSpanElement} content Content of the button
 * @return {HTMLButtonElement} button
 */
export function createSubmitButton(id, styles, content) {
  const button = createElement("button");

  button.setAttribute("id", id);
  button.classList = styles;

  if (typeof content === "HTMLSpanElement") button.appendChild(content);
  else button.innerHTML = content;

  return button;
}

/**
 * Create a form with the specifications passed by parameter and returns it
 *
 * @param {String} id Form id
 * @param {String} styles Styles for the form
 * @param {Array} fields Object containing the specs for every input
 * @param {HTMLButtonElement} button Submit button
 * @return {HTMLFormElement} form
 */
export function createForm(id, styles, fields, button) {
  const form = createElement("form");

  form.setAttribute("id", id);
  form.classList = styles;
  form.setAttribute("method", "POST");

  // Add every input in the fields object to the form element
  const fieldsLength = fields.length;
  for (let i = 0; i < fieldsLength; i++) {
    form.appendChild(
      createInputContainer(fields[i], "form-element__container")
    );
  }
  form.appendChild(button);

  return form;
}
