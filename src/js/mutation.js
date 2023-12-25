const targetNode = document.querySelector(".testi__swiper .swiper-wrapper");
const mainImgPreview = document.querySelector('.testi__mainPreview img');
const config = { attributes: true };
const imgsTable = {
    "Tref Griffiths": "../../assets/testimonials/tref-griffiths.webp",
    "Nick Konechny": "../../assets/testimonials/nick-konechny.webp",
    "Zia Mahmood": "../../assets/testimonials/zia-mahmood.webp",
    "Tony Nealon": "../../assets/testimonials/tony-nealon.webp",
    "Scott Etherington": "../../assets/testimonials/scott-etherington.webp",
    "Mukul Verma": "../../assets/testimonials/mukul-verma.webp",
    "Jack Parkin": "../../assets/testimonials/jack-parkin.webp",
    "Imogen Venn":"../../assets/testimonials/imogen-venn.svg",

};
const swiperObserver = new MutationObserver(() => {
  setTimeout(()=>{
    const empName = targetNode.querySelector('.swiper-slide-active').dataset.employeename;
    mainImgPreview.src = imgsTable[empName]
  }, 100)
});

swiperObserver.observe(targetNode, config);

