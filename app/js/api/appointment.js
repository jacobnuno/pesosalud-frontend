import Cookies from '../cookies.js';

class Appointment {
  static async create(form) {
    data = await fetch(`${this.apiUrl}/${this.endpoint}`, {
      method: 'post',
      body: new FormData(form)
    }).then(function(response){
    })
    document.cookie = 'credentials' + "=" + data.token + ";path=/;expires=" + d.toGMTString();
  }

  static getOne(form) {
    const appointmentId = Cookies.getCookie('appointment-id');
    const token = Cookies.getCookie('session-token');
    fetch(`https://pesoysalud.herokuapp.com/appointment/${appointmentId}`, {
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
        form.querySelector('select[name="service"]').value = data.data[0].service ? data.data[0].service : '';
        form.querySelector('input[name="date"]').value = data.data[0].date ? data.data[0].date : '';
        form.querySelector('input[name="hour"]').value = data.data[0].hour ? data.data[0].hour : '';
        })
      .catch(err => console.log('err', err));
  }
}

export default Appointment;
