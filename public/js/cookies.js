'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cookies = function () {
  function Cookies(cookieName, cookieValue, cookieExdays) {
    _classCallCheck(this, Cookies);

    this.cookieName = cookieName;
    this.cookieValue = cookieValue;
    this.cookieExdays = cookieExdays;
  }

  _createClass(Cookies, null, [{
    key: 'myfn',
    value: function myfn(cookieName, cookieValue, cookieExdays) {
      var d = new Date();
      d.setTime(d.getTime() + cookieExdays * 24 * 60 * 60 * 1000);
      var expires = 'expires=' + d.toUTCString();
      document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
    }
  }, {
    key: 'getCookie',
    value: function getCookie(cookieName) {
      var name = cookieName + '=';
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i += 1) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
    }
  }, {
    key: 'checkCookie',
    value: function checkCookie() {
      var username = getCookie('username');
      if (username != '') {
        alert('Welcome again ' + username);
      } else {
        username = prompt('Please enter your name: ', '');
        if (username != '' && username != null) {
          setCookie('username', username, 365);
        }
      }
    }
  }]);

  return Cookies;
}();

module.exports = new Cookies();