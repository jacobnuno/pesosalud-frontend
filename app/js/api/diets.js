// const cookies = require('../cookies');

class Diets {
  constructor() {
    // const this.apiUrl = 'ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000';
    this.apiUrl = 'https://pesoysalud.herokuapp.com/diets/';
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
      method: 'POST',
      body: new FormData(form)
    }).then(function(response){

    })

    document.cookie = 'credentials' + "=" + data.token + ";path=/;expires=" + d.toGMTString();
  }

  static async edit(form) {
    data = await fetch(`${this.apiUrl}/${this.endpoint}`, {
      method: 'PUT',
      body: new FormData(form)
    }).then(function(response){

    })
    document.cookie = 'credentials' + "=" + data.token + ";path=/;expires=" + d.toGMTString();
  }
}

module.exports = new Diets();
