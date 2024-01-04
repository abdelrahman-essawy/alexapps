const iso = new Isotope(".grid", {
  itemSelector: ".element-section",
  layoutMode: "vertical",
});
const filtersElem = document.querySelector(".filters-button-group");
filtersElem.addEventListener("click", function (event) {
  // only work with buttons
  if (!matchesSelector(event.target, "button")) {
    return;
  }
    const filterValue = event.target.getAttribute("data-filter");
    // use matching filter function
    iso.arrange({ filter: filterValue });
});
