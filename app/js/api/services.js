class Services { 
  constructor() {
    this.apiUrl = '';
  }
  static async create(form) {
    data = await fetch( `${this.apiUrl}/${this.endpoint}`, {
      method: 'POST',
      body: new FormData(form)
    }).then(function(response){

    })

    document.cookie = 'credentials' + "=" + data.token + ";path=/;expires=" + d.toGMTString();
  }

  static async servicesEdit(form){
    data = await fetch(`${this.apiUrl}/${this.endpoint}`, {
      method: 'POST',
      body: new FormData(form)
    }).then(function(response){

    })

    document.cookie = 'credentials' + "=" + data.token + ";path=/;expires=" + d.toGMTString();
  }

  static async servicesGetAll(){
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

}//End Class

module.exports = new Services();
