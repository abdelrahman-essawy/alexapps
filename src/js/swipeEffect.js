const values_swiper = new Swiper(".valuesSwiper", {
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

const process_swiper = new Swiper(".process__swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    }
  },
});
