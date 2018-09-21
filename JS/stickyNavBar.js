window.onscroll = function() {stickNavbar()};

var navbarHor = document.getElementById("navbarHor");
var navbarHorContent = document.getElementById("navbarHorCont");
var stickyHOR = navbarHor.offsetTop;

function stickNavbar() {

  if (window.pageYOffset >= stickyHOR) {
    navbarHor.classList.add("stickyHor");
    navbarHorContent.style.padding = "1vw";
  } else {
    navbarHor.classList.remove("stickyHor");
    navbarHorContent.style.padding = "3vw";
  }
}
