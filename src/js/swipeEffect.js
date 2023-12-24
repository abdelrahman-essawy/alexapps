const valuesSwiper = new Swiper(".valuesSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".valuesPagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
