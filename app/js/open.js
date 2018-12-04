// const apiUrl = 'ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000';
const apiUrl = 'http://localhost:3000';
const token =  '$2b$04$dO7S1wXssTu/ABWIkcPOEefqxtUsdUV8SnIVgznZGFEPWcOoa4G9S';
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
    fetch(`${apiUrl}/users/`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
  })
  .then(function(response) {
      console.log('response: ', response);
      return response.json();
  })
  .then(function(data) {
      const tableBody = document.getElementsByTagName('tbody')[0];
      for (i = 0; i < data.data.length; i++) {
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
          tableBody.appendChild(tr);
      }
  })
  .catch(function(err) {
      console.log('err', err);
  });
}

window.onload = function () {
    userGetAll();
};
