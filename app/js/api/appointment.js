import Cookies from '../cookies.js';

class Appointment {
    static add(form) {
        let status;
        let user = Cookies.getCookie('user-id');
        let token = Cookies.getCookie('session-token');
        console.log(user, token);

        const body = {
            serviceID: form.querySelector('select[id="txtService"]').value,
            userID: user,
            date: form.querySelector('input[id="txtDate"]').value + ' ' + form.querySelector('input[id="txtHour"]').value,
            placeID: '1',
            status: 'scheduled',
        }

        console.log(body);

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

}

export default Appointment;
