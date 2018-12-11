import Cookies from '../cookies.js';

class Users {
  constructor() {
    // const this.apiUrl = 'ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000';
    this.apiUrl = 'https://pesoysalud.herokuapp.com';

    // obtener la cookie
    // document.cookie
    // this.token = asdfasdf

    // setear el token
    // this.headers = new Headers();
  }

  static async login() {
    return await fetch(`${apiUrl}/users/login`, {
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
        if (data.token !== undefined) {
          Cookies.setCookie('session-token', data.token, 168);
          Cookies.setCookie('user-id', data.id, 168);
          Cookies.setCookie('user-role', data.role, 168);
          window.location.replace('../index.html');
        }
        const errorSpan = form.querySelector('span.has-error');
        console.log(errorSpan)
        if (errorSpan) {
          form.removeChild(errorSpan);
        }
        const newSpan = document.createElement('span');
        newSpan.appendChild(document.createTextNode('Email or password are incorrect'));
        newSpan.classList.add('has-error');
        form.appendChild(newSpan);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }

  static getOne(form) {
    const userId = Cookies.getCookie('user-id');
    const token = Cookies.getCookie('session-token');
    const gender = {
      M: 'Masculino',
      F: 'Femenino',
    }
    fetch(`https://pesoysalud.herokuapp.com/users/${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log('response: ', response);
        return response.json();
      })
      .then((data) => {
        console.log('data: ', data);
        form.querySelector('input[name="name"]').value = data.data[0].name ? data.data[0].name : '';
        form.querySelector('input[name="email"]').value = data.data[0].email ? data.data[0].email : '';
        form.querySelector('input[name="phone"]').value = data.data[0].phone ? data.data[0].phone : '';
        form.querySelector('input[name="height"]').value = data.data[0].Height ? data.data[0].Height : '';
        form.querySelector('input[name="gender"]').value = data.data[0].gender ? gender[data.data[0].gender] : '';
        form.querySelector('textarea[name="coments"]').value = data.data[0].Coments ? data.data[0].Coments : '';
      })
      .catch(err => console.log('err', err));
  }

  static create(form) {
       let status;
       fetch(`https://pesoysalud.herokuapp.com/users/`, {
           method: 'POST',
           mode: 'cors',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({
               Email: form.querySelector('input[id="txtEmail"]').value,
               Gender: form.querySelector('select[id="txtGender"]').value,
               Name: form.querySelector('input[id="txtName"]').value,
               Password: form.querySelector('input[id="txtPass"]').value,
               Phone: form.querySelector('input[id="txtPhone"]').value,
               Height: form.querySelector('input[id="txtHeight"]').value,
               BirthDate: form.querySelector('input[id="txtBirthdate"]').value,
               Comments: form.querySelector('textarea[id="txtComments"]').value,
               UserType: '4',
           }),
       })
       .then((response) => {
           console.log('response =', response);
           status = response.status;
           return response.json();
         })
       .then(function(data) {
           console.log('data = ', data);
           alert(data.message);
         })
       .catch(function(err) {
         console.log('err', err);
       });
   }

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

  // static getAll() {
  //   const userId = Cookies.getCookie('user-id');
  //   const token = Cookies.getCookie('session-token');
  //   const roles = {
  //     1: 'admin',
  //     2: 'doctora',
  //     3: 'recepcionista',
  //     4: 'paciente',
  //   }
  //   const gender = {
  //     M: 'Masculino',
  //     F: 'Femenino',
  //   }
  //   fetch(`https://pesoysalud.herokuapp.com/users/`, {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Bearer ${token}`,
  //       "Content-Type": "application/json"
  //     }
  //   })
  //     .then((response) => {
  //       console.log('response: ', response);
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log('data: ', data);
  //       const tableBody = document.getElementsByTagName('tbody')[0];
  //       for (i = 0; i < data.data.length; i++) {
  //         let tr = document.createElement('tr');
  //         let td = document.createElement('td');
  //         td.appendChild(document.createTextNode(data.data[i]['id']));
  //         tr.appendChild(td);
  //         td = document.createElement('td');
  //         td.appendChild(document.createTextNode(data.data[i]['name']));
  //         tr.appendChild(td);
  //         td = document.createElement('td');
  //         td.appendChild(document.createTextNode(data.data[i]['email']));
  //         tr.appendChild(td);
  //         td = document.createElement('td');
  //         td.appendChild(document.createTextNode(gender[data.data[i]['gender']]));
  //         tr.appendChild(td);
  //         td = document.createElement('td');
  //         td.appendChild(document.createTextNode(data.data[i]['phone']));
  //         tr.appendChild(td);
  //         td = document.createElement('td');
  //         td.appendChild(document.createTextNode(roles[data.data[i]['UserType']]));
  //         tr.appendChild(td);
  //         // ver
  //         td = document.createElement('td');
  //         let a = document.createElement('a');
  //         let createAText = document.createTextNode('Ver');
  //         a.setAttribute('href', `./view.html?id=${data.data[i]['id']}`);
  //         a.setAttribute('class', "btn-action btn-green");
  //         a.appendChild(createAText);
  //         td.appendChild(a);
  //         tr.appendChild(td);
  //         // editar
  //         a = document.createElement('a');
  //         createAText = document.createTextNode('Editar');
  //         a.setAttribute('href', `./edit.html?id=${data.data[i]['id']}`);
  //         a.setAttribute('class', "btn-action btn-orange");
  //         a.appendChild(createAText);
  //         td.appendChild(a);
  //         tr.appendChild(td);
  //         // acticar/desactivar
  //         // a = document.createElement('a');
  //         // createAText = document.createTextNode(data.data[i]['Active'] ? 'Desactivar' : 'Activar');
  //         // a.setAttribute('href', "#");
  //         // a.setAttribute('class', data.data[i]['Active'] ? 'btn-action btn-red' : 'btn-action btn-blue');
  //         // a.appendChild(createAText);
  //         // td.appendChild(a);
  //         // tr.appendChild(td);
  //
  //         tableBody.appendChild(tr);
  //       }
  //     })
  //     .catch(err => console.log('err', err));
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
