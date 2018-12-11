import Validator from './validator.js';
import Appointment from './api/appointment.js';

console.log('editApp');

  const buttonSubmit = document.querySelector('button[id="btnEdit"]');
  const form = buttonSubmit.parentNode;
  buttonSubmit.onclick = function () {
    console.log('editApp');
    const hasErrors = Validator.validate(form);
    if (!hasErrors) {
      Appointment.edit(form);
    }
  };
