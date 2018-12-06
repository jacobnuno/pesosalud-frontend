import Validator from './validator.js';
import Appointment from './api/appointment.js';

window.onload = function () {
  const buttonSubmit = document.querySelector('button[data-type=submit]');
  const form = buttonSubmit.parentNode;

  buttonSubmit.onclick = function () {
    const hasErrors = Validator.validate(form);
    if (!hasErrors) {
      Appointment.create(form);
    }
  };
};
