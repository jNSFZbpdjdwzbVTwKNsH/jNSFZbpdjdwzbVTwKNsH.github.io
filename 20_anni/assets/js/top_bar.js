let prevScrollPos = window.pageYOffset;
let isNavbarVisible = true;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos && !isNavbarVisible) {
    document.getElementById("topnav").style.top = "20px";
    isNavbarVisible = true;
  } else if (prevScrollPos < currentScrollPos && isNavbarVisible) {
    document.getElementById("topnav").style.top = "-60px"; // Adjust this value based on navbar height
    isNavbarVisible = false;
  }
  
  prevScrollPos = currentScrollPos;
};

