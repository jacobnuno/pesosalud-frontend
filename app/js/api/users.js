// const cookies = require('../cookies');

class Users {
  constructor() {
    // const this.apiUrl = 'ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000';
    this.apiUrl = 'ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000';

    // obtener la cookie
    // document.cookie
    // this.token = asdfasdf

    // setear el token
    // this.headers = new Headers();
  }

  static async login(form) {
    const email = form.getElementsById('email').value;
    const pass = form.getElementsById('password').value;
    await fetch(`${this.apiUrl}/users/login`, {
      method: 'POST',
      headers: {
      // 'Content-Type': 'application/x-www-form-urlencoded'
        'Content-Type': 'application/json',
      },
      body: {
        email,
        password: pass,
      },
    })
      .then((response) => {
        console.log('response: ', response);
        return response.json();
      })
      .then((data) => {
        console.log('data: ', data);
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
  //   document.cookie = 'credentials' + "=" + data.token + ";path=/;expires=" + d.toGMTString();
  // }
}

module.exports = new Users();
