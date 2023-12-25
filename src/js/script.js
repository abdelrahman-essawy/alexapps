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

// TYPE MACHINE EFFECT
let textBase = " ";
let words = ["MISSION?", "VISION?"];
let wordIdx = 0;
let i = 0;
let reverse = false;

function typeWriter() {
  // Generate some random text jitter between 45 and 75 ms to simulate a keyboard
  var textJitter = Math.floor(Math.random() * (70 - 45) + 45);

  // Check if we want to remove text ('reverse'), or add it.
  if (reverse) {
    if (document.getElementById("text").innerHTML.length > textBase.length) {
      // We're still in the process of removing the word
      document.getElementById("text").innerHTML = document
        .getElementById("text")
        .innerHTML.slice(0, -1);
      setTimeout(typeWriter, textJitter);
    } else {
      // deleting done. Set next word, and repeat with typing by
      // setting reverse to false
      wordIdx = (wordIdx + 1) % 2;
      reverse = false;
      setTimeout(typeWriter, 1000);
    }
  } else {
    // We're adding text
    if (i === (textBase + words[wordIdx]).length) {
      // Line is done. Wait and then reverse
      i = textBase.length;
      reverse = true;

      // Wait a second, then start deleting
      setTimeout(typeWriter, 3000);
    } else {
      // Write text like a typewriter
      if (i < (textBase + words[wordIdx]).length) {
        document.getElementById("text").innerHTML =
          document.getElementById("text").innerHTML +
          (textBase + words[wordIdx]).charAt(i);
        i++;
        setTimeout(typeWriter, textJitter);
      }
    }
  }
}

typeWriter();



const techOptions = document.querySelector(".tech__options");

techOptions.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  const currentActiveOption = techOptions.querySelector(
    ".tech__option-active"
  );
  currentActiveOption.classList.remove("tech__option-active");
  e.target.parentElement.classList.add("tech__option-active");

  const currentActiveList = document.querySelector(
    ".tech__tools-active"
  );

  const refClickedList = e.target.dataset.techlistid;

  const requiredList = document.getElementById(refClickedList);

  currentActiveList?.classList.remove("tech__tools-active");
  requiredList.classList.add("tech__tools-active");
  setTimeout(() => {
    currentActiveList?.classList.remove("show");
    requiredList.classList.add("show");
  }, 100);
});
