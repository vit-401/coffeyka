$(function(){
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 1,
    slidesPerView: 4,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    renderFraction: function (currentClass, totalClass) {
      return '<span class="' + currentClass + '">-</span>' +
              '<span class="tes">-</span> ' +
              '<span class="' + totalClass + '">-</span>';
  }
  });
  
});