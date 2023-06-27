/*Signature_Menu*/
var swiper = new Swiper(".pink", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
});


var swiper = new Swiper(".store_img", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});