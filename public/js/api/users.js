"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// const cookies = require('../cookies');
var Users =
/*#__PURE__*/
function () {
  function Users() {
    _classCallCheck(this, Users);

    // const this.apiUrl = 'ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000';
    this.apiUrl = 'ec2-13-58-51-216.us-east-2.compute.amazonaws.com:3000'; // obtener la cookie
    // document.cookie
    // this.token = asdfasdf
    // setear el token
    // this.headers = new Headers();
  }

  _createClass(Users, null, [{
    key: "login",
    value: function () {
      var _login = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("".concat(apiUrl, "/users/login"), {
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

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login() {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: "getAll",
    value: function () {
      var _getAll = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch("".concat(this.apiUrl, "/").concat(this.endpoint, "/asdfasd"), {
                  method: 'GET',
                  headers: {
                    'Authorization': 'Bearer' + this.token,
                    "Content-Type": "application/json"
                  }
                }).then(function (response) {
                  return response.json();
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getAll() {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(form) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch("".concat(this.apiUrl, "/").concat(this.endpoint), {
                  method: 'post',
                  body: new FormData(form)
                }).then(function (response) {});

              case 2:
                data = _context3.sent;
                document.cookie = 'credentials' + "=" + data.token + ";path=/;expires=" + d.toGMTString();

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }]);

  return Users;
}();

module.exports = new Users();