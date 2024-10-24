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

  var isMobile = window.matchMedia("(max-width: 1025px)").matches;

  if (!isMobile) {
    // Включаем эффект hover для десктопов
    $(".menu-item").hover(function () {
      var tabId = $(this).data("tab");

      // Удаляем активные классы
      $(".menu-item").removeClass("active");
      $(".tab-contents .item").removeClass("active");

      // Добавляем активные классы для выбранного таба
      $(this).addClass("active");
      $('.tab-contents .item[data-tab="' + tabId + '"]').addClass("active");
    });
  }

  // Включаем эффект клика для мобильных устройств
  $(".menu1 .menu-item").on("click", function () {
    var tabId = $(this).data("tab");

    $(".arrow1").addClass("show");

    // Удаляем активные классы
    $(".menu-item").removeClass("active");
    $(".tab-contents .item").removeClass("active");

    // Добавляем активные классы для выбранного таба
    $(this).addClass("active");
    $('.tab-contents .item[data-tab="' + tabId + '"]').addClass("active");

    // Прячем меню и показываем контент для мобильных устройств
    $(this).closest(".tab-menus").addClass("hide");
    $(".tab-contents").addClass("show");
  });

  $(".tab-contents .item .info h3").on("click", function () {
    // $(".tab-contents .item a").removeClass("show");
    $(this).closest(".info").find("a").addClass("show");
  });

  $(".arrow1").on("click", function () {
    $(this).removeClass("show");
    $(".tab-contents").removeClass("show");
    $(".tab-menus").removeClass("hide");
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

  $(".header .catalog-btn").on("click", function (e) {
    e.preventDefault();
    $(".menu-wrap").addClass("open");
    $("body, html").addClass("overflow");
  });

  $(".menu-wrap .close").on("click", function (e) {
    e.preventDefault();
    $(".menu-wrap").removeClass("open");
    $("body, html").removeClass("overflow");
  });
});
