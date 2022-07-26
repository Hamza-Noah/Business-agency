$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      dots: false,
  
      responsive: {
        0: {
          items: 1,
          autoplay: true,
          dots: true,
        },
        768: {
          items: 2,
          autoplay: true,
          dots: true,
        },
        1000: {
          items: 5,
        },
      },
    });
  });