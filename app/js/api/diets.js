import Cookies from '../cookies.js';

class Diets {
  constructor() {
    this.apiUrl = 'https://pesoysalud.herokuapp.com';

    // obtener la cookie
    // document.cookie
    // this.token = asdfasdf

    // setear el token
    // this.headers = new Headers();
  }

  static getOne(form) {
    const dietsId = Cookies.getCookie('diets-id');
    const token = Cookies.getCookie('session-token');
    fetch(`https://pesoysalud.herokuapp.com/diets/${dietsId}`, {
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
