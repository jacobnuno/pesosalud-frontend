import Diets from './api/diets.js';

const form = document.getElementsByTagName('form')[0];
window.onload = function () {
  Diets.getOne(form);
};
