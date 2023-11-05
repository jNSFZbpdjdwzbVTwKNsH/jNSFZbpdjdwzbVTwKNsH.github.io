let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
	  document.getElementById("navbar").classList.remove("navbar-hidden");
	  isNavbarVisible = false;
  } else if (prevScrollPos < currentScrollPos) {
	  document.getElementById("navbar").classList.add("navbar-hidden");
	  isNavbarVisible = true;
  }
  
  prevScrollPos = currentScrollPos;
};
