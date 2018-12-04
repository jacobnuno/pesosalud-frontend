// import { getCookie } from './cookies.js';

const apiUrl = 'http://ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000';
// const apiUrl = 'http://localhost:3000';
const token =  '$2b$04$QGDNAm02qJKs8k3tYXeg9OfLNNuw2SfrAPIOtMv9RePuiKhn6f6qm';
const roles = {
  1: 'admin',
  2: 'doctora',
  3: 'recepcionista',
  4: 'paciente',
}
const gender = {
  M: 'Masculino',
  F: 'Femenino',
}

function userEdit() {
    const url = window.location;
    const id = url.toString().substring(url.toString().lastIndexOf('=') + 1);
    console.log('id: ', id);
    fetch(`${apiUrl}/users/${id}`, {
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
      // const tableBody = document.getElementsByTagName('tbody')[0];
      // for (i = 0; i < data.data.length; i++) {
      //   let tr = document.createElement('tr');
      //   let td = document.createElement('td');
      //   td.appendChild(document.createTextNode(data.data[i]['id']));
      //   tr.appendChild(td);
      //   td = document.createElement('td');
      //   td.appendChild(document.createTextNode(data.data[i]['name']));
      //   tr.appendChild(td);
      //   td = document.createElement('td');
      //   td.appendChild(document.createTextNode(data.data[i]['email']));
      //   tr.appendChild(td);
      //   td = document.createElement('td');
      //   td.appendChild(document.createTextNode(gender[data.data[i]['gender']]));
      //   tr.appendChild(td);
      //   td = document.createElement('td');
      //   td.appendChild(document.createTextNode(data.data[i]['phone']));
      //   tr.appendChild(td);
      //   td = document.createElement('td');
      //   td.appendChild(document.createTextNode(roles[data.data[i]['UserType']]));
      //   tr.appendChild(td);
      //   // ver
      //   td = document.createElement('td');
      //   let a = document.createElement('a');
      //   let createAText = document.createTextNode('Ver');
      //   a.setAttribute('href', `./view.html?id=${data.data[i]['id']}`);
      //   a.setAttribute('class', "btn-action btn-green");
      //   a.appendChild(createAText);
      //   td.appendChild(a);
      //   tr.appendChild(td);
      //   // editar
      //   a = document.createElement('a');
      //   createAText = document.createTextNode('Editar');
      //   a.setAttribute('href', `./edit.html?id=${data.data[i]['id']}`);
      //   a.setAttribute('class', "btn-action btn-orange");
      //   a.appendChild(createAText);
      //   td.appendChild(a);
      //   tr.appendChild(td);
      //   // acticar/desactivar
      //   // a = document.createElement('a');
      //   // createAText = document.createTextNode(data.data[i]['Active'] ? 'Desactivar' : 'Activar');
      //   // a.setAttribute('href', "#");
      //   // a.setAttribute('class', data.data[i]['Active'] ? 'btn-action btn-red' : 'btn-action btn-blue');
      //   // a.appendChild(createAText);
      //   // td.appendChild(a);
      //   // tr.appendChild(td);
      //
      //   tableBody.appendChild(tr);
      // }
    })
    .catch(err => console.log('err', err));
}

window.onload = function () {
  const functions = {
    userEdit: userEdit(),
  };
  const div = document.querySelector('div.main');
  const view = div.getAttribute('data-type');
  functions[view];
};
