import Validator from './validator';
import Users from './api/users';

window.onload = function () {
  const buttonSubmit = document.querySelector('button[data-type=submit]');
  const form = buttonSubmit.parentNode;

  buttonSubmit.onclick = function () {
    console.log('login');
    const hasErrors = Validator.validate(form);
    if (!hasErrors) {
      Users.login(form);
    }
  };
};
