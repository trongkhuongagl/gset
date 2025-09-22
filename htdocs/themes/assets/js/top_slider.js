$(function() {
$('.slider').slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 1000,
  infinite: true,
  speed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});

setTimeout(function () {
multipleSlider = new Swiper(".js-multiple-slider",{
  loop: !0,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 0,
//   autoplay: {
//       delay: 2e3,
//       disableOnInteraction: !1
//   },
  breakpoints: {
      560: {
          slidesPerView: 2,
          spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
    },
      992: {
          slidesPerView: 3,
          spaceBetween: 20
      }
      ,
      1200: {
          slidesPerView: 3,
          spaceBetween: 40
      }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
},
pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
}
})
}, 3000);


setTimeout(function () {
    $('.match_txt').matchHeight();
}, 3000);









  const rootSlider1 = new Swiper('.js-topRootSlider', {
    autoplay: {
      delay: 2000,
    },
    loop: true,
    speed: 500,
    spaceBetween: 25,
    slidesPerView: 'auto',
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    pagination: {
      el: '.swiper-pagination1',
      type: 'fraction',
      clickable: true,
      formatFractionCurrent: function (number) {
        return '0' + number;
      },
      formatFractionTotal: function (number) {
        return '0' + number;
      },
    },
    breakpoints: {
      751: {
        spaceBetween: 45,
      }
    },
    on: {
      slideChangeTransitionStart: function () {
        const slideItems = Array.from({ length: 5 }, (_, index) => {
          const slideClass = `.swiper-slide--0${index + 1}`;
          const textClass = `.swiper-slide-txt-item--0${index + 1}`;
          return {
            slide: document.querySelector(slideClass),
            text: document.querySelector(textClass)
          };
        });
        slideItems.forEach(item => {
          if (item.slide && item.slide.classList.contains('swiper-slide-active')) {
            item.text.style.opacity = 1;
            item.text.style.transition = 'opacity 0.5s ease';
          } else {
            item.text.style.opacity = 0;
            item.text.style.transition = 'opacity 0.5s ease';
          }
        });
      },
      slideChangeTransitionEnd: function () {
        
      }
    }
    
  });

  const rootSlider2 = new Swiper('.js-topRootSlider2', {
    autoplay: {
      delay: 2000,
    },
    loop: true,
    speed: 500,
    spaceBetween: 25,
    slidesPerView: 'auto',
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    pagination: {
      el: '.swiper-pagination2',
      type: 'fraction',
      clickable: true,
      formatFractionCurrent: function (number) {
        return '0' + number;
      },
      formatFractionTotal: function (number) {
        return '0' + number;
      },
    },
    breakpoints: {
      751: {
        spaceBetween: 45,
      }
    },
    on: {
      slideChangeTransitionStart: function () {
        const slideItems = Array.from({ length: 6 }, (_, index) => {
          const slideClass = `.swiper-slide-e--0${index + 1}`;
          const textClass = `.swiper-slide-txt-item-e--0${index + 1}`;
          return {
            slide: document.querySelector(slideClass),
            text: document.querySelector(textClass)
          };
        });
        slideItems.forEach(item => {
          if (item.slide && item.slide.classList.contains('swiper-slide-active')) {
            item.text.style.opacity = 1;
            item.text.style.transition = 'opacity 0.5s ease';
          } else {
            item.text.style.opacity = 0;
            item.text.style.transition = 'opacity 0.5s ease';
          }
        });
      },
      slideChangeTransitionEnd: function () {
  
      }
    }
  });


