// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Initialize the Swiper
  var swiper = new Swiper('.swiper-container', {
    // Specify the desired options for the Swiper
    // For example:
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  // Add any custom JavaScript code here
  // ...
  // ...
});