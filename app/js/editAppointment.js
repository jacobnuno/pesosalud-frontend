import Validator from './validator.js';
import Appointment from './api/appointment.js';


  const buttonSubmit = document.querySelector('button[data-type=submit]');
  const form = buttonSubmit.parentNode;
  buttonSubmit.onclick = function () {
    console.log('editApp');
    const hasErrors = Validator.validate(form);
    if (!hasErrors) {
      Appointment.edit(form);
    }
  };
