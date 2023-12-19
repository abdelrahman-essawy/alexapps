const animateHeader = document.getElementById("mainHeader");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    animateHeader.style.transform = `translateY(-59px)`;
  } else {
    animateHeader.style.transform = `translateY(0px)`;
  }
});
window.addEventListener("DOMContentLoaded", () => {
  if (window.scrollY > 0) {
    animateHeader.style.transform = `translateY(-59px)`;
  } else {
    animateHeader.style.transform = `translateY(0px)`;
  }
});
