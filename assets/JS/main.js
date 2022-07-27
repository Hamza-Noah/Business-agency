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
let started = false; // Function Started ? No


window.onscroll = function () {
  nums.forEach((num) => {
    startCount(num);
  });
};

function startCount(num) {
  let goal = num.dataset.goal;
  let count = setInterval(() => {
    num.textContent++;
    if (num.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
