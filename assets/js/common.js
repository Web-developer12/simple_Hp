// slide part in service page
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slideActiveClass: "active",
  navigation: {
  nextEl: ".next",
  prevEl: ".prev"
  },
  pagination: {
  el: ".pagination",
  clickable: true
  },
  autoplay: {
  enabled: true,
  delay: 5000
  },
  // Media
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {s
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 4,
  //     spaceBetween: 30
  //   },
  // }
  // brealpoint
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    732: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
  });


// end slide part in service page




function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
$(".open").click(function () {
  var container = $(this).parents(".topic");
  var answer = container.find(".answer");
  var trigger = container.find(".faq-t");

  answer.slideToggle(200);

  if (trigger.hasClass("faq-o")) {
      trigger.removeClass("faq-o");
  } else {
      trigger.addClass("faq-o");
  }

  if (container.hasClass("expanded")) {
      container.removeClass("expanded");
  } else {
      container.addClass("expanded");
  }
});


// slide part in service page

// navbar hide
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
