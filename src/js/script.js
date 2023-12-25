const animateHeader = document.getElementById("mainHeader");
window.addEventListener("scroll", () => {
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
const navWidthTogglers = document.querySelectorAll(
  ".navbar__listItem-widthToggler"
);
navWidthTogglers.forEach((singleToggler) => {
  singleToggler.addEventListener("mouseover", () => {
    navBarWrapper.classList.add("fullWidth");
  });
  singleToggler.addEventListener("mouseleave", () => {
    navBarWrapper.classList.remove("fullWidth");
  });
});

// Disabled links
const disabledLinks = document.querySelectorAll(".disabledLink");
disabledLinks.forEach((eachDisabledLink) => {
  eachDisabledLink.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

/*** Pull Mobile menus in and out; ***/
// BurgerMenu to pull main menu
const burgerMenu = document.querySelector(".navbar__bars");
const mobileMenu = document.querySelector(".mobileNav");
const triggers = document.querySelectorAll("[data-type=mobileSubMenuSlide]");
const pullOut = document.querySelectorAll("[data-type=slideOut]");

burgerMenu.addEventListener("click", () => {
  if (burgerMenu.classList.contains("activeMenu")) {
    setTimeout(() => {
      burgerMenu.classList.remove("activeMenu");
      pullOut.forEach((e) => {
        const slide = document.getElementById(e.dataset.slideid);
        slide.classList.remove("slideIn");
      });
    }, 200);
    mobileMenu.classList.remove("slideIn");
  } else {
    setTimeout(() => {
      burgerMenu.classList.add("activeMenu");
    }, 200);
    mobileMenu.classList.add("slideIn");
  }
});

// 1- Company Menu
triggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const slide = document.getElementById(trigger.dataset.slideid);
    slide.classList.add("slideIn");
  });
});

pullOut.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const slide = document.getElementById(trigger.dataset.slideid);
    slide.classList.remove("slideIn");
  });
});

// ----------------------
window.addEventListener("resize", () => {
  burgerMenu.classList.remove("activeMenu");
  mobileMenu.classList.remove("slideIn");
});

/* OFFERINGS SECTION */
const menuOptions = document.getElementById("offeringsOptionsMenu");
menuOptions.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  const currentActiveOption = document.querySelector(
    ".offerings__options-activeButton"
  );
  currentActiveOption.classList.remove("offerings__options-activeButton");
  e.target.classList.add("offerings__options-activeButton");

  const currentActiveCard = document.querySelector(
    ".offerings__card-activeCard"
  );

  const refClickedCard = e.target.dataset.card;

  const requiredCard = document.getElementById(refClickedCard);

  currentActiveCard?.classList.remove("offerings__card-activeCard");
  requiredCard.classList.add("offerings__card-activeCard");
  setTimeout(() => {
    currentActiveCard?.classList.remove("show");
    requiredCard.classList.add("show");
  }, 0);
});
