const inputStyles = "form__input form__item";

// Fields object
const fields = [
  {
    id: "firstName",
    type: "text",
    name: "firstName",
    title: "Enter your first name",
    regex: "words",
    styles: inputStyles,
    labelText: "First Name",
    inputName: "First Name",
    errorMessage: "Only words are allowed",
  },
  {
    id: "lastName",
    type: "text",
    name: "lastName",
    title: "Enter your last name",
    regex: "words",
    styles: inputStyles,
    labelText: "Last Name",
    inputName: "Last Name",
    errorMessage: "Only words are allowed",
  },
  {
    id: "email",
    type: "email",
    name: "email",
    title: "Enter your email address",
    regex: "email",
    styles: inputStyles,
    labelText: "Email Address",
    inputName: "Email",
    errorMessage: "Looks like this is not an email",
  },
  {
    id: "password",
    type: "password",
    name: "password",
    title: "Enter a password",
    regex: "password",
    styles: inputStyles,
    labelText: "Password",
    inputName: "Password",
    errorMessage: "Looks like this is not a valid password",
  },
];

Object.freeze(fields);

// Object that contains the inputs names used for validation
const fieldsNames = {
  firstName: false,
  lastName: false,
  email: false,
  password: false,
};

// Avoid fieldsNames object extension
Object.preventExtensions(fieldsNames);

// Regex object
const regexTypes = {
  words: /^([A-Za-z])*$/,
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$!#%*?&]{5,}$$/,
};

// Avoid regexTypes object mutation
Object.freeze(regexTypes);

export { fields, regexTypes, fieldsNames };
