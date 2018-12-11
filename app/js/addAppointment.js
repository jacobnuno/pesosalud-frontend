import Validator from './validator.js';
import Appointment from './api/appointment.js';

const buttonSubmit = document.querySelector('button[id="btnAdd"]');
const form = buttonSubmit.parentNode;

buttonSubmit.onclick = function () {
  const hasErrors = Validator.validate(form);
  if (!hasErrors) {
      console.log("add");
    Appointment.add(form);
  }
};
