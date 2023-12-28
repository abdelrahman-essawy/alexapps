const targetNode = document.querySelector(".testi__swiper .swiper-wrapper");
const mainImgPreview = document.querySelector(".testi__mainPreview img");
const config = { attributes: true };
const imgsTable = {
  "Tref Griffiths": "../../../assets/Home/testimonials/tref-griffiths.webp",
  "Nick Konechny": "../../../assets/Home/testimonials/nick-konechny.webp",
  "Zia Mahmood": "../../../assets/Home/testimonials/zia-mahmood.webp",
  "Tony Nealon": "../../../assets/Home/testimonials/tony-nealon.webp",
  "Scott Etherington": "../../../assets/Home/testimonials/scott-etherington.webp",
  "Mukul Verma": "../../../assets/Home/testimonials/mukul-verma.webp",
  "Jack Parkin": "../../../assets/Home/testimonials/jack-parkin.webp",
  "Imogen Venn": "../../assets/Home/testimonials/imogen-venn.svg",
};
const swiperObserver = new MutationObserver(() => {
  setTimeout(() => {
    const empName = targetNode.querySelector(".swiper-slide-active").dataset
      .employeename;
    mainImgPreview.src = imgsTable[empName];
  }, 100);
});

swiperObserver.observe(targetNode, config);
