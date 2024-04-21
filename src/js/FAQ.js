const accordion = document.querySelector(".FAQ__accordion");

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".FAQ__accordion-panel");
  if (!activePanel) return;
  activePanel.classList.toggle("active");
  //   if (activePanel.classList.contains("active")) {
  //     activePanel.classList.remove("active");
  //     return;
  //   }
  //   const currentActive = document.querySelector(".FAQ__accordion-panel.active");
  //   if (currentActive) {
  //     currentActive.classList.remove("active");
  //   }
  //   activePanel.classList.add("active");
});
