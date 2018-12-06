// const cookies = require('../cookies');

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
        // 'Content-Type': 'application/x-www-form-urlencoded'
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'ceoe1996@hotmail.com',
        password: 1234
      }),
    }).then(function(response) {

      // this.headers.set('Authorization', 'Bearer' + this.token);
      // return response.json();
      console.log(response.json());
    });

  }

  static async getAll() {
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

  static async create(form) {
    data = await fetch(`${this.apiUrl}/${this.endpoint}`, {
      method: 'post',
      body: new FormData(form)
    }).then(function(response){

    })

    document.cookie = 'credentials' + "=" + data.token + ";path=/;expires=" + d.toGMTString();
  }
}

module.exports = new Users();
