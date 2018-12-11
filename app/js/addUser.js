import Validator from './validator.js';
import Users from './api/users.js';

window.onload = function () {
  const buttonSubmit = document.querySelector('button[data-type=submit]');
  const form = buttonSubmit.parentNode;

  buttonSubmit.onclick = function () {
    const hasErrors = Validator.validate(form);
    if (!hasErrors) {
      Users.create(form);
    }
  };
};
