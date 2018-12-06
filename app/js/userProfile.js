import Users from './api/users.js';

const form = document.getElementsByTagName('form')[0];
window.onload = function () {
  Users.getOne(form);
};
