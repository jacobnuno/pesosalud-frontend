'use strict';

var userAPI = require('api/users');

var buttonSubmit = document.querySelector('button[data-type=submit]');

buttonSubmit.onclick = function () {
    userAPI.login();
};