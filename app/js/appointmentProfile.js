import Appointment from './api/appointment.js';

const form = document.getElementsByTagName('form')[0];
window.onload = function () {
  Appointment.getOne(form);
};
