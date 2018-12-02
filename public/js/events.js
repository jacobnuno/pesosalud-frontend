'use strict';

var nextNode = document.getElementById('next');
var prevNode = document.getElementById('prev');

nextNode.onclick = function () {
    Slider.next();
};

prevNode.onclick = function () {
    Slider.prev();
};

setInterval(function () {
    Slider.next();
}, 5000);