//alert("Hello World!");


$('.slideshow-slides').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  arrows: false,
  responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
});

$(document).ready(function() {
  $('.burger-btn').on('click', function() {
    $('#wrapper, #burger-inner').toggleClass('show');
  });
});
/*
$('.mask').on('click', function() {
$('#wrapper,#burger-inner').removeClass('show');
});
*/
$(".fadeInUpTrigger").on('inview', function(event, isInView) {
  if (isInView) {
    $(this).addClass('animate__animated animate__fadeInUp');
  }
  /*else{
  $(this).removeClass('animate__animated animate__fadeInUp');
}*/
});

$(".fadeInTrigger").on('inview', function(event, isInView) {
  if (isInView) {
    $(this).addClass('animate__animated animate__fadeIn');
  }
});

$(window).scroll(function() {
  $(".fadeUpTrigger").each(function() {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });
});
