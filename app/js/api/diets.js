import Cookies from '../cookies.js';

class Diets {

  static create(form) {
    data = await fetch(`${this.apiUrl}/${this.endpoint}`, {
      method: 'post',
      body: new FormData(form)
    }).then(function(response){

    })

    document.cookie = 'credentials' + "=" + data.token + ";path=/;expires=" + d.toGMTString();
  }
  static getOne(form) {
    const dietId = Cookies.getCookie('diet-id');
    const token = Cookies.getCookie('session-token');
    fetch(`https://pesoysalud.herokuapp.com/appointment/${dietId}`, {
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
        form.querySelector('input[name="description"]').value = data.data[0].description ? data.data[0].description : '';
        })
      .catch(err => console.log('err', err));
  }
}

export default Diets;
