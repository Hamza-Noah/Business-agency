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

// Incrementing

let nums = document.querySelectorAll(".num .number");
let section = document.getElementById("section");
let started = false;

function StartCount(el) {
  let goal = el.getAttribute("data-goals");
  let interval = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(interval);
    }
  }, 3000 / goal);
}
window.addEventListener("scroll", function () {
  if (window.scrollY > section.offsetTop - 50) {
    if (!started) {
      nums.forEach((el) => {
        StartCount(el);
      });
    }
  }
});

$("#blog-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
