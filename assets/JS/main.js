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

let nums = document.querySelectorAll(".num");
let section = document.querySelector(".statistics");
let started = false;


window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = +el.dataset.goal;
  let interval = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      console.log(goal);
      clearInterval(interval);
    }
  }, 300 / goal);
}



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
