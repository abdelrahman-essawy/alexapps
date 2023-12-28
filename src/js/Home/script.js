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
  const currentActiveOption = techOptions.querySelector(".tech__option-active");
  currentActiveOption.classList.remove("tech__option-active");
  e.target.parentElement.classList.add("tech__option-active");

  const currentActiveList = document.querySelector(".tech__tools-active");

  const refClickedList = e.target.dataset.techlistid;

  const requiredList = document.getElementById(refClickedList);

  currentActiveList?.classList.remove("tech__tools-active");
  requiredList.classList.add("tech__tools-active");
  setTimeout(() => {
    currentActiveList?.classList.remove("show");
    requiredList.classList.add("show");
  }, 100);
});

// FOR VALIDATION;
const inputType = {
  text: true,
  email: true,
  textarea: true,
  number: true,
};
const selectOptions = {
  budget: ["0-1000", "1000-5000", "5000-10000", "10000-20000", "20000+"],
  region: [
    "africa",
    "asia",
    "europe",
    "austrlia",
    "north-america",
    "south-america",
  ],
  service: [
    "mobile-app-development",
    "ar-development",
    "vr-development",
    "web-development",
    "game-development",
    "enterprise-solutions",
    "startup-mvp",
    "other",
  ],
  "heared-about-us": [
    "google",
    "clutch",
    "people-per-hour",
    "goodfirms",
    "personal-reference",
    "social-media",
    "other",
  ],
};
const variableErrorMessages = {
  email: {
    empty: "The email is required and cannot be empty",
    wrong: "Please enter a valid email",
  },
  contactNumber: {
    empty: "The Contact number is required please enter a valid number",
    wrong: "Only numbers are valid",
    short: "Contact number should be atleast 10-12 digit",
  },
};
const theForm = document.getElementById("contact-form");
const formInputs = theForm.querySelectorAll("input");
const formSelects = theForm.querySelectorAll("select");
const textarea = theForm.querySelector("textarea");
const allFields = [...formInputs, ...formSelects, textarea];

const validateInputs = (inputField) => {
  const fieldNames = [
    "name",
    "email",
    "contactNumber",
    "companyName",
    "message",
  ];
  const ourSelects = ["budget", "region", "service", "heared-about-us"];
  const { name, value, type } = inputField;

  if (type === "select-one") {
    const isNameValid = ourSelects.includes(name);
    const isValueValid = selectOptions[name].includes(value);

    return isNameValid && isValueValid;
  }

  const isNameValid = fieldNames.includes(name);
  const notEmpty = value.trim().length > 0;

  if (name === "email" && notEmpty) {
    return isEmailValid(value.trim());
  }
  if (name === "contactNumber" && notEmpty) {
    return !isNaN(+value);
  }
  return isNameValid && notEmpty;
};

// ON SUBMIT VALIDATION
theForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const errorsList = {};

  allFields.forEach((field) => {
    const passed = validateInputs(field);
    if (!passed) {
      errorsList[field.name] = true;
    }
  });

  const errorNodes = theForm.querySelectorAll("small");

  if (!Object.keys(errorsList).length) {
    theForm.submit();
  }
  Object.keys(errorsList).forEach((error) => {
    Array.from(errorNodes)
      .find((node) => node.dataset.inputname === error)
      .classList.add("showError");
  });
});

//  LIVE VALIDATION
// NAME INPUT
formInputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    const errorHolder = input.nextElementSibling;
    if (input.name === "email" && !isEmailValid(input.value)) {
      errorHolder.textContent =
        input.value.length > 0
          ? variableErrorMessages.email.wrong
          : variableErrorMessages.email.empty;
      errorHolder.classList.add("showError");
      return;
    }
    if (input.name === "contactNumber") {
      errorHolder.textContent =
        input.value.length === 0
          ? variableErrorMessages.contactNumber.empty
          : input.value.length >= 10 && input.value.length <= 12
          ? ""
          : variableErrorMessages.contactNumber.short;
      errorHolder.classList.add("showError");
      return;
    }
    toggleErrors(!isEmpty(input), errorHolder);
  });
});
formSelects.forEach((select) => {
  select.addEventListener("change", () => {
    const errorHolder = select.nextElementSibling;
    toggleErrors(isSelectValid(select), errorHolder);
  });
});
textarea.addEventListener("keyup", () => {
  toggleErrors(!isEmpty(textarea), textarea.nextElementSibling);
});
const isEmpty = (field) => {
  return !(field.value.trim().length > 0);
};
const isEmailValid = (value) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regex.test(value);
};
const isSelectValid = (select) => {
  const { name, value } = select;
  return selectOptions[name].includes(value);
};

const toggleErrors = (check, errorHolder) => {
  if (check) {
    errorHolder.classList.remove("showError");
  } else {
    errorHolder.classList.add("showError");
  }
};
