const cookies = require('../cookies');

class Users {
  constructor() {
    const this.endpoint = 'character';
    const this.apiUrl = ;

    // obtener la cookie
    // document.cookie
    // this.token = asdfasdf

    // setear el token
    this.headers = new Headers();
    this.headers.set('Authorization', 'Bearer' + this.token)
  }


  function getAll(x) {
    return await fetch(`${this.apiUrl}/${this.endpoint}/asdfasd`, this.headers).then(function(response) {
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
