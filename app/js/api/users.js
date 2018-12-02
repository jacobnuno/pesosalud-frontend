const cookies = require('../cookies');

class Users {
  constructor() {
    const this.apiUrl = '';

    // obtener la cookie
    // document.cookie
    // this.token = asdfasdf

    // setear el token
    this.headers = new Headers();
  }

  function login() {
    return await fetch(`${this.apiUrl}/${this.endpoint}/asdfasd`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(data),
    }).then(function(response) {

      this.headers.set('Authorization', 'Bearer' + this.token);
      return response.json();
    });

  }

  function getAll() {
    return await fetch(`${this.apiUrl}/${this.endpoint}/asdfasd`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer' + this.token,
        "Content-Type": "application/json"
      }
    }).then(function(response) {
      return response.json();
    });
  }

  function create(form) {
    data = await fetch(`${this.apiUrl}/${this.endpoint}`, {
      method: 'post',
      body: new FormData(form)
    }).then(function(response){

    })

    document.cookie = 'credentials' + "=" + data.token + ";path=/;expires=" + d.toGMTString();
  }
}

module.exports = new Users();
