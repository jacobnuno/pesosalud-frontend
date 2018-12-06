import Cookies from '../cookies.js';

class Users {
  static login(form) {
    const email = form.querySelector('input[name="email"]').value;
    const pass = form.querySelector('input[name="password"]').value;
    fetch('https://pesoysalud.herokuapp.com/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-wwww-form-urlencoded',
      },
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    })
      .then((response) => {
        console.log('response: ', response);
        return response.json();
      })
      .then((data) => {
        console.log('data: ', data);
        Cookies.setCookie('session-token', data.data.token, 168);
      })
      .catch(err => console.log('err', err));
  }

  // static async getAll() {
  //   return await fetch(`${this.apiUrl}/${this.endpoint}/asdfasd`, {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'Bearer' + this.token,
  //       "Content-Type": "application/json"
  //     }
  //   }).then(function(response) {
  //     return response.json();
  //   });
  // }
  //
  // static async create(form) {
  //   data = await fetch(`${this.apiUrl}/${this.endpoint}`, {
  //     method: 'post',
  //     body: new FormData(form)
  //   }).then(function(response){
  //
  //   })
  //
  //   document.cookie = 'credentials' + "=" + data.token + ";path=/;expires=" + d.toGMTString();
  // }
  //
  // static async userEdit() {
  //     const url = window.location;
  //     const id = url.toString().substring(url.toString().lastIndexOf('=') + 1);
  //     console.log('id: ', id);
  //     fetch(`${apiUrl}/users/${id}`, {
  //     method: 'GET',
  //     mode: 'cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     }
  //   })
  //     .then(function(response) {
  //       console.log('response: ', response);
  //       return response.json();
  //     })
  //     .then(function(data) {
  //       console.log('data: ', data);
  //       let username =
  //       // const tableBody = document.getElementsByTagName('tbody')[0];
  //       // for (i = 0; i < data.data.length; i++) {
  //       //   let tr = document.createElement('tr');
  //       //   let td = document.createElement('td');
  //       //   td.appendChild(document.createTextNode(data.data[i]['id']));
  //       //   tr.appendChild(td);
  //       //   td = document.createElement('td');
  //       //   td.appendChild(document.createTextNode(data.data[i]['name']));
  //       //   tr.appendChild(td);
  //       //   td = document.createElement('td');
  //       //   td.appendChild(document.createTextNode(data.data[i]['email']));
  //
  //     })
  //     .catch(err => console.log('err', err));
  // }
}

export default Users;
