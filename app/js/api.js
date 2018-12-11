import Users from 'api/users';
import Appointment from 'api/appointment';

const buttonSubmit = document.querySelector('button[data-type=submit]');

buttonSubmit.onclick = function () {

};


window.onload = function () {
  const api = {
    userGetAll: userGetAll(),
  };
  const table = document.getElementsByTagName('table')[0];
  const method = table.getAttribute('data-method');
  api[method];
};
