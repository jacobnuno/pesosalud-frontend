'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// const cookies = require('../cookies');

var Users = function () {
  function Users() {
    _classCallCheck(this, Users);

    // const this.apiUrl = 'ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000';
    this.apiUrl = 'ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000';

    // obtener la cookie
    // document.cookie
    // this.token = asdfasdf

    // setear el token
    // this.headers = new Headers();
  }

  _createClass(Users, null, [{
    key: 'login',
    value: async function login() {
      return await fetch(this.apiUrl + '/users/login', {
        method: 'POST',
        headers: {
          // 'Content-Type': 'application/x-www-form-urlencoded'
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: 'ceoe1996@hotmail.com',
          password: 1234
        })
      }).then(function (response) {

        // this.headers.set('Authorization', 'Bearer' + this.token);
        // return response.json();
        console.log(response.json());
      });
    }
  }, {
    key: 'getAll',
    value: async function getAll() {
      return await fetch(this.apiUrl + '/' + this.endpoint + '/asdfasd', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer' + this.token,
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        return response.json();
      });
    }
  }, {
    key: 'create',
    value: async function create(form) {
      data = await fetch(this.apiUrl + '/' + this.endpoint, {
        method: 'post',
        body: new FormData(form)
      }).then(function (response) {});

      document.cookie = 'credentials' + "=" + data.token + ";path=/;expires=" + d.toGMTString();
    }
  }]);

  return Users;
}();

module.exports = new Users();