import Cookies from './cookies.js';

window.onload = function () {
  const session = document.getElementById('session');

  const token = Cookies.getCookie('session-token');
  if (token) {
    session.innerHTML = 'Bienvenido';
    session.setAttribute('href', 'views/users/index.html');
  }
};
