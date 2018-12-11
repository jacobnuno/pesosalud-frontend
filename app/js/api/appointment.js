import Cookies from '../cookies.js';

class Appointment {
    static add(form) {
        let status;
        let user = Cookies.getCookie('user-id');
        let token = Cookies.getCookie('session-token');

        fetch(`https://pesoysalud.herokuapp.com/appointments/`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`,
            },
            body: JSON.stringify({
                serviceID: form.querySelector('select[id="txtService"]').value,
                userID: user,
                date: form.querySelector('input[id="txtDate"]').value + ' ' + form.querySelector('input[id="txtHour"]').value,
                placeID: '1',
                status: 'scheduled',
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


    static edit(form) {
        let status;
        let user = Cookies.getCookie('user-id');
        let token = Cookies.getCookie('session-token');

        const url = window.location;
        const id = url.toString().substring(url.toString().lastIndexOf('=') + 1);
        console.log(id);

        const body = {
            status: form.querySelector('select[id="txtStatus"]').value,
        }

        console.log(body);

        fetch(`https://pesoysalud.herokuapp.com/appointments/${id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${token}`,
            },
            body: JSON.stringify({
                status: form.querySelector('select[id="txtStatus"]').value,
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

  constructor() {
    this.apiUrl = 'https://pesoysalud.herokuapp.com';

    // obtener la cookie
    // document.cookie
    // this.token = asdfasdf

    // setear el token
    // this.headers = new Headers();
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
