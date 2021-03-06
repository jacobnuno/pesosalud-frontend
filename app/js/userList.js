import Cookies from './cookies.js';

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

function userGetAll() {
    const token = Cookies.getCookie('session-token');
    fetch('https://pesoysalud.herokuapp.com/users/', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  })
    .then(function(response) {
      console.log('response: ', response);
      if (Number(response.status) === 403) {
        window.location = window.location + '#openModal';
      }
      return response.json();
    })
    .then(function(data) {
      const tableBody = document.getElementsByTagName('tbody')[0];
      for (var i = 0; i < data.data.length; i++) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(data.data[i]['id']));
        tr.appendChild(td);
        td = document.createElement('td');
        td.appendChild(document.createTextNode(data.data[i]['name']));
        tr.appendChild(td);
        td = document.createElement('td');
        td.appendChild(document.createTextNode(data.data[i]['email']));
        tr.appendChild(td);
        td = document.createElement('td');
        td.appendChild(document.createTextNode(gender[data.data[i]['gender']]));
        tr.appendChild(td);
        td = document.createElement('td');
        td.appendChild(document.createTextNode(data.data[i]['phone']));
        tr.appendChild(td);
        td = document.createElement('td');
        td.appendChild(document.createTextNode(roles[data.data[i]['UserType']]));
        tr.appendChild(td);
        // ver
        td = document.createElement('td');
        let a = document.createElement('a');
        let createAText = document.createTextNode('Ver');
        a.setAttribute('href', `./view.html?id=${data.data[i]['id']}`);
        a.setAttribute('class', "btn-action btn-green");
        a.appendChild(createAText);
        td.appendChild(a);
        tr.appendChild(td);
        // editar
        a = document.createElement('a');
        createAText = document.createTextNode('Editar');
        a.setAttribute('href', `./edit.html?id=${data.data[i]['id']}`);
        a.setAttribute('class', "btn-action btn-orange");
        a.appendChild(createAText);
        td.appendChild(a);
        tr.appendChild(td);
        // acticar/desactivar
        // a = document.createElement('a');
        // createAText = document.createTextNode(data.data[i]['Active'] ? 'Desactivar' : 'Activar');
        // a.setAttribute('href', "#");
        // a.setAttribute('class', data.data[i]['Active'] ? 'btn-action btn-red' : 'btn-action btn-blue');
        // a.appendChild(createAText);
        // td.appendChild(a);
        // tr.appendChild(td);

        tableBody.appendChild(tr);
      }
    })
    .catch(err => console.log('err', err));
}

window.onload = function () {
  const functions = {
    userGetAll: userGetAll(),
  };
  const table = document.getElementsByTagName('table')[0];
  const method = table.getAttribute('data-method');
  functions[method];
};
