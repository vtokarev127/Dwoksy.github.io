function AnimateRotate(a,b){
    var elem = $(b);

    $({deg: 0}).animate({deg: a}, {
        duration: 450,
        step: function(now){
            elem.css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
}

$(window).resize(function() {
  if($(window).width() > 768) {
    $(".nav").css({
      "display": "block"
    });
  } else {
    $(".nav").css({
      "display": "none"
    });
  }
});

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    navText: [],
  });

  if ($(".header__row").outerHeight() > 107.5) {
    $(".header__logo").css({
      paddingTop: 40,
      paddingBottom: 41,
    });
  };

  $("a").click(function(e){
    e.preventDefault();
  });

  $(window).scroll(function() {
  if ($(this).scrollTop() > 800) {
    $(".scroll-top").fadeIn();
  } else {
    $(".scroll-top").fadeOut();
  }
});

  $("li a[href='#work']").click(function(){
    $("body,html").animate({"scrollTop": $(".work").offset().top - 106},450);
  });
  $("li a[href='#blog']").click(function(){
    $("body,html").animate({"scrollTop": $(".blog").offset().top - 20},450);
  });
  $(".scroll-top").click(function(){
    $("body,html").animate({"scrollTop": 0},450);
  });

  $(".header__toggle").click(function() {
  $(".nav").fadeToggle();
  $(".header__toggle").toggleClass("open");
  if ($(".header__toggle").hasClass("open")) {
    AnimateRotate(45, $(".header__toggle-line_top"));
    $(".header__toggle-line_top").css({
      top: "8px",
    });
    AnimateRotate(-45, $(".header__toggle-line_bottom"));
    $(".header__toggle-line_bottom").css({
      bottom: "8px",
    });
    $(".header__toggle-line_middle").css({
      "background-color": "transparent",
    });
  } else {
    AnimateRotate(180, $(".header__toggle-line_top"));
    $(".header__toggle-line_top").css({
      top: "0px",
    });
    AnimateRotate(-180, $(".header__toggle-line_bottom"));
    $(".header__toggle-line_bottom").css({
      bottom: "0px",
    });
    $(".header__toggle-line_middle").css({
      "background-color": "#fff",
    });
  }
});

$(".nav__link").click(function() {
  if($(window).width() < 769) {
    $(".nav").fadeToggle();
    AnimateRotate(180, $(".header__toggle-line_top"));
    $(".header__toggle-line_top").css({
      top: "0px",
    });
    AnimateRotate(-180, $(".header__toggle-line_bottom"));
    $(".header__toggle-line_bottom").css({
      bottom: "0px",
    });
    $(".header__toggle-line_middle").css({
      "background-color": "#fff",
    });
  }
});

});
