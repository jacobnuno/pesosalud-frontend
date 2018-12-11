import Validator from './validator.js';
import Users from './api/users.js';

const closeBtn = document.getElementById('close');

function goBack() {
  window.history.go(-1);
}

window.onload = function () {
  Users.showOne();

  closeBtn.onclick = function () {
    goBack();
  };
};
