$(function () {

  // slick
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpead: 2000,
  });

  // rateYo
  $(".star").rateYo({
    starWidth: "17px",
    normalFill:"#ccccce",
    ratedFill:"#ffc35b",
    readOnly: true
  });

  // mixitup
  var mixer = mixitup('.article');
});