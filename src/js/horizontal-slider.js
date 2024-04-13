const copy = document.querySelector(".horizontal-track").cloneNode(true);
document
  .querySelector(".horizontal-slider")
  .insertBefore(copy, document.querySelector(".horizontal-slider").firstChild);

console.log(document.querySelector(".horizontal-slider").firstChild);
