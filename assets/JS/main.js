$(document).ready(function () {
  $("#brands-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false, 

    responsive: {
      0: {
        items: 1,
        autoplay: true,
        nav: true
      },
      768: {
        items: 2,
        autoplay: true,
        nav: true 
      },
      1000: {
        items: 5,
      },
    },
  });

  $("#blog-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,

    responsive: {
      0: {
        items: 1,
        stagePadding: 30,
      },
      600: {
        items: 2,
        stagePadding: 30,
      },
      1000: {
        items: 3,
      },
    },
  });

  $("#manager-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

// Incrementing

let nums = document.querySelectorAll(".num");
let section = document.querySelector(".statistics");
let plus = document.querySelectorAll(".num .plus");
let started = false;

window.onscroll = function () {
  console.log("window.scrollY", window.scrollY);
  console.log("section.offsetTop", section.offsetTop);
  if (window.scrollY >= section.offsetTop - 650) {
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
      clearInterval(interval);
      plus.textContent += "+";
    }
  }, 3000 / goal);
}

//  Validation

let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let emailInput = document.querySelector("#email");
let emailMessage = document.querySelector("#email-message");

emailInput.addEventListener("blur", function (e) {
  if (regex.test(this.value)) {
  } else {
    emailMessage.style.display = "block";
  }
});

emailInput.addEventListener("input", function (e) {
  emailMessage.style.display = "none";
});


document.getElementById("form").addEventListener("click", function(event){
  event.preventDefault()
});