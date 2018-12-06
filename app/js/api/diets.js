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
  

}

export default Diets;
