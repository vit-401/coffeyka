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
        breakpoint: 1451,
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


});