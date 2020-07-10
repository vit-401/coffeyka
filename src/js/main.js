$(function () {
  $('.header__menu-btn').on('click', function () {
    $('.slide__menu').addClass('active');
    $('.header__top-menu').addClass('active');
    $('.header__inner').addClass('active');
  });
  $('.slide__menu-btn').on('click', function () {
    $('.slide__menu').removeClass('active');
    $('.header__top-menu').removeClass('active');
    $('.header__inner').removeClass('active');
  });

  $(".slide__menu-list").on("click", "a", function (event) {
    // event.preventDefault();
    
    // var id = $(this).attr('href'),
    // top = $(id).offset().top;
    // $('body,html').animate({
    //   scrollTop: top
    // }, 100);
    $('.slide__menu').removeClass('active');
  });



  $('.price__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,

    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/Arrow-slide.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/Arrow-slide2.svg" alt=""></button>',
    responsive: [{
        breakpoint: 1501,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 627,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]

  });

  $(".price__slider").on('afterChange', function (event, slick, currentSlide) {
    $(".num__active").text(currentSlide + 1);
  });

  $('.slider__promotion').slick({

    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider__thumbs',
    fade: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-w-prev.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-w-next.svg" alt=""></button>',
    responsive: [{
      breakpoint: 1535,
      settings: {
        arrows: false,
      }
    }]
  });

  $(".slider__promotion").on('afterChange', function (event, slick, currentSlide) {
    $(".promotions-num__active").text(currentSlide + 1);
  });
  $('.slider__thumbs').slick({

    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    focusOnSelect: true,
    asNavFor: '.slider__promotion',
    verticalSwiping: true,
    vertical: true,
    centerMode: true,
    responsive: [{
        breakpoint: 1535,
        settings: {
          vertical: false,
          verticalSwiping: false,
          centerMode: false,
          slidesToShow: 4,
          autoplay: true,
        }
      },
      {
        breakpoint: 1350,
        settings: {
          vertical: false,
          verticalSwiping: false,
          centerMode: false,
          slidesToShow: 3,
          autoplay: true,
        }
      },
      {
        breakpoint: 1050,
        settings: {
          vertical: false,
          verticalSwiping: false,
          centerMode: false,
          slidesToShow: 2,
          autoplay: true,
        }
      },
      {
        breakpoint: 675,
        settings: {
          vertical: false,
          verticalSwiping: false,
          centerMode: false,
          slidesToShow: 1,
          autoplay: true,
        }
      },
    ]
  });
  $(".services__inner").slick({
    slidesToShow: 3,
    swipe: false,
    responsive: [{
        breakpoint: 1431,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          swipe: true,
        }
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          swipe: true,
        }
      },
    ]
  })

  $('.footer__checkb').styler()









  particlesJS("particles-js", {"particles":{"number":{"value":58,"density":{"enable":true,"value_area":961.4383117143238}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":20.029964827381747,"random":true,"anim":{"enable":false,"speed":17.041996348143652,"size_min":10.549807263136547,"sync":true}},"line_linked":{"enable":false,"distance":410.3762044936196,"color":"#ffffff","opacity":0.34724140380229346,"width":1},"move":{"enable":true,"speed":6.409588744762158,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":false});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

});