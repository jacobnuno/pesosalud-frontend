import Users from './api/users.js';

const form = document.getElementsByTagName('form')[0];
const closeBtn = document.getElementById('close');

function goBack() {
  window.history.go(-1);
}

window.onload = function () {
  Users.getOne(form);

  closeBtn.onclick = function () {
    goBack();
  };
};
