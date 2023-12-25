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
    el: ".process__pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
  },
});

const testimonials = new Swiper(".testi__swiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".testi__swiper-pagination",
    clickable: true,
  },
});

const imgsButtons = document.querySelectorAll(".testi__img");
const testiPagination = document.querySelectorAll(
  ".testi__swiper-pagination .swiper-pagination-bullet"
);
console.log(testiPagination);
imgsButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn.dataset.quoteindex);
    const clickedImgIndex = btn.dataset.quoteindex - 1
    testiPagination[clickedImgIndex].click();
  });
});