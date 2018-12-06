// const cookies = require('../cookies');

class Appointment {
  constructor() {
    // const this.apiUrl = 'ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000';
    this.apiUrl = 'https://pesoysalud.herokuapp.com';
  }

  static async create(form) {
    const service = form.getElementById('service').value;
    const hour = form.getElementById('hour').value;
    const date = form.getElementById('date').value;

    await fetch(`${this.apiUrl}/appointment/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':
      },
      body: {
        service,
        hour,
        date,
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

  static async edit() {
  }

  static async findById() {
  }
}

module.exports = new Appointment();
