window.onscroll = function() {stickNavbar()};

var navbarHor = document.getElementById("navbarHor");
var navbarVer = document.getElementById("navbarVer");
var stickyVER = navbarVer.offsetTop;
var stickyHOR = navbarHor.offsetTop;

function stickNavbar() {
  // if (window.pageYOffset >= stickyVER-85) {
  //   navbarVer.classList.add("stickyVer");
  // } else {
  //   navbarVer.classList.remove("stickyVer");
  // }

  if (window.pageYOffset >= stickyHOR) {
    navbarHor.classList.add("stickyHor");
    // navbarVer.classList.add("stickyVer");
  } else {
    navbarHor.classList.remove("stickyHor");
    // navbarVer.classList.remove("stickyVer");
  }
}
