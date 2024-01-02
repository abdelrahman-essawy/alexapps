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
