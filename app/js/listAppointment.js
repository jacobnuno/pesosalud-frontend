import Cookies from './cookies.js';

function appointmentGet() {
    const token = Cookies.getCookie('session-token');
    const user = Cookies.getCookie('user-id');
    fetch(`https://pesoysalud.herokuapp.com/appointments/user/${user}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
  })
    .then(function(response) {
      console.log('response: ', response);
      return response.json();
    })
    .then(function(data) {
      const tableBody = document.getElementsByTagName('tbody')[0];
      console.log(data);
      for (var i = 0; i < data.data.length; i++) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(data.data[i]['date']));
        tr.appendChild(td);
        td = document.createElement('td');
        td.appendChild(document.createTextNode(data.data[i]['serviceID']));
        tr.appendChild(td);
        td = document.createElement('td');
        td.appendChild(document.createTextNode(data.data[i]['status']));
        tr.appendChild(td);
        td = document.createElement('td');
        tr.appendChild(td);

        tableBody.appendChild(tr);
      }
    })
    .catch(err => console.log('err', err));
}

window.onload = function () {
  const functions = {
    appointmentGet: appointmentGet(),
  };
  const table = document.getElementsByTagName('table')[0];
  const method = table.getAttribute('data-method');
  functions[method];
};
