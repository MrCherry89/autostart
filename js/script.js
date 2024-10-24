$(document).ready(function () {
  $(".phone-number-input").inputmask({
    mask: "+7 (999) 999 - 99 - 99",
  });

  $(".send-form").validate({
    errorPlacement: function (error, element) {},
  });

  $(".stock-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".stock-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".stock-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 401,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".img-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 800,
  });

  $(".top-info-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  });

  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");

    // Удаляем активные классы
    $("ul.tabs li").removeClass("active");
    $(".tab-content").removeClass("active");

    // Добавляем активный класс для выбранной вкладки и ее контента
    $(this).addClass("active");
    $("#" + tab_id).addClass("active");
  });

  $(".advantages-info-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 1000,
          speed: 800,
        },
      },
    ],
  });

  $(".wholesale-brends-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1200,
    speed: 800,
  });

  $(".advantages-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 800,
        },
      },
    ],
  });

  $(".reviews-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".reviews-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".reviews-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1451,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".see-all").on("click", function () {
    $(this).closest(".by-brand").find(".info-items").toggleClass("show");
    $(this).find("img").toggleClass("rotate");
    if (!$(".info-items").hasClass("show")) {
      $(".see-all span").text("Смотреть все");
    } else {
      $(".see-all span").text("Скрыть все");
    }
  });
});
