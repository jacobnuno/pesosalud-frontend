// import { getCookie } from './cookies.js';

const apiUrl = 'https://pesoysalud.herokuapp.com';
// const apiUrl = 'http://localhost:3000';
const token =  '$2b$04$QGDNAm02qJKs8k3tYXeg9OfLNNuw2SfrAPIOtMv9RePuiKhn6f6qm'; //modify token
const roles = {
  1: 'admin',
  2: 'doctora',
  3: 'recepcionista',
  4: 'paciente',
}

function appointmentEdit() {
    const url = window.location;
    const id = url.toString().substring(url.toString().lastIndexOf('=') + 1);
    console.log('id: ', id);
    fetch(`${apiUrl}/appointment/${id}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  })
    .then(function(response) {
      console.log('response: ', response);
      return response.json();
    })
    .then(function(data) {
      console.log('dtaat: ', data);
    .catch(err => console.log('err', err));
}

window.onload = function () {
  const functions = {
    appointmentEdit: appointmentEdit(),
  };
  const div = document.querySelector('div.main');
  const view = div.getAttribute('data-view');
  functions[view];
};
