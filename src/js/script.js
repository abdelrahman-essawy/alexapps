const animateHeader = document.getElementById("mainHeader");
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0 && window.innerWidth >= 1025) {
    animateHeader.style.transform = `translateY(-59px)`;
  } else {
    animateHeader.style.transform = `translateY(0px)`;
  }
});
window.addEventListener("DOMContentLoaded", () => {
  if (window.scrollY > 0 && window.innerWidth >= 1025) {
    animateHeader.style.transform = `translateY(-59px)`;
  } else {
    animateHeader.style.transform = `translateY(0px)`;
  }
});

const navBarWrapper = document.getElementById("navBarWrapper");
console.log(navBarWrapper);
const navWidthTogglers = document.querySelectorAll(".navWidthTogglers");
navWidthTogglers.forEach((singleToggler) => {
  singleToggler.addEventListener("mouseover", () => {
    navBarWrapper.classList.add("fullWidth");
  });
  singleToggler.addEventListener("mouseleave", () => {
    navBarWrapper.classList.remove("fullWidth");
  });
});

// Disabled links
const disabledLinks = document.querySelectorAll(
  ".navbar__navLinkTag--disabledLink"
);
disabledLinks.forEach((eachDisabledLink) => {
  eachDisabledLink.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
