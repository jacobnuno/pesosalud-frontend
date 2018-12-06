"use strict";

var _cookies = _interopRequireDefault(require("./cookies.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiUrl = 'http://ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000'; // const apiUrl = 'http://localhost:3000';

var token = '$2b$04$WaCYQAzeWHZzk8.V/7Mc6uKHmXxpfrFNj0irCM8KxC3ASLUfxeEWa';
var roles = {
  1: 'admin',
  2: 'doctora',
  3: 'recepcionista',
  4: 'paciente'
};
var gender = {
  M: 'Masculino',
  F: 'Femenino'
};

function userGetAll() {
  fetch("".concat(apiUrl, "/users/"), {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    console.log('response: ', response);
    return response.json();
  }).then(function (data) {
    var tableBody = document.getElementsByTagName('tbody')[0];

    for (i = 0; i < data.data.length; i++) {
      var tr = document.createElement('tr');
      var td = document.createElement('td');
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
      tr.appendChild(td); // ver

      td = document.createElement('td');
      var a = document.createElement('a');
      var createAText = document.createTextNode('Ver');
      a.setAttribute('href', "./view.html?id=".concat(data.data[i]['id']));
      a.setAttribute('class', "btn-action btn-green");
      a.appendChild(createAText);
      td.appendChild(a);
      tr.appendChild(td); // editar

      a = document.createElement('a');
      createAText = document.createTextNode('Editar');
      a.setAttribute('href', "./edit.html?id=".concat(data.data[i]['id']));
      a.setAttribute('class', "btn-action btn-orange");
      a.appendChild(createAText);
      td.appendChild(a);
      tr.appendChild(td); // acticar/desactivar
      // a = document.createElement('a');
      // createAText = document.createTextNode(data.data[i]['Active'] ? 'Desactivar' : 'Activar');
      // a.setAttribute('href', "#");
      // a.setAttribute('class', data.data[i]['Active'] ? 'btn-action btn-red' : 'btn-action btn-blue');
      // a.appendChild(createAText);
      // td.appendChild(a);
      // tr.appendChild(td);

      tableBody.appendChild(tr);
    }
  }).catch(function (err) {
    return console.log('err', err);
  });
}

window.onload = function () {
  var functions = {
    userGetAll: userGetAll()
  };
  var table = document.getElementsByTagName('table')[0];
  var method = table.getAttribute('data-method');
  functions[method];
};