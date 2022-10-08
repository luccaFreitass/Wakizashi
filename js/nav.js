
  window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var bgdark = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= bgdark) {
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("bg-dark");
  }
};

window.onscroll = function() {myFunction2()};
function myFunction2() {
  if (window.pageYOffset <= bgdark) {
    navbar.classList.remove("bg-dark");
  } else {
    navbar.classList.add("bg-dark");
  }
};

