const nextNode = document.getElementById('next');
const prevNode = document.getElementById('prev');

nextNode.onclick = function () {
    Slider.next();
};

prevNode.onclick = function () {
    Slider.prev();
};

setInterval(() => {
    Slider.next();
}, 5000);

toggleMenu.onclick = function () {
  let menu = document.getElementById("menuResponsive");
  if (menu.style.display == "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
