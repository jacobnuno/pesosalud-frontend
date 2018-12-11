import Cookies from './cookies.js';

function deleteCookie(name) {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

window.onload = function () {
  const session = document.getElementById('session');
  const logOut = document.getElementById('logout');
  const adminPanel = document.getElementById('role');
  const token = Cookies.getCookie('session-token');
  const role = Cookies.getCookie('user-role');

  if (token) {
    session.innerHTML = 'Mi Perfil';
    session.setAttribute('href', 'views/users/index.html');
    logOut.parentNode.classList.toggle('hidden');
  }
  if (Number(role) == 1) {
    adminPanel.parentNode.classList.toggle('hidden');
  }

  logOut.onclick = function () {
    deleteCookie('session-token');
    deleteCookie('user-id');
    deleteCookie('user-role');
    window.location.reload();
  };
};
