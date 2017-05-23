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

$(".presentation__title:eq(0)").addClass("wow fadeInDown");

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

$(document).ready(function(){

  $(".presentation__item").not(":first-child").hide();
  $(".presentation__img").not(":first-child").hide();
  $(".presentation__tab").click(function(){
    $(".presentation__tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".presentation__item").hide().eq($(this).index()).fadeIn();
    $(".presentation__img").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

  $("a").click(function(none){
    none.preventDefault();
  });

  $("li a[href='#features']").click(function(){
    $("body,html").animate({"scrollTop": $(".presentation").offset().top},450);
  });
  $("li a[href='#about']").click(function(){
    $("body,html").animate({"scrollTop": $(".awesome").offset().top},450);
  });
  $("li a[href='#pricing']").click(function(){
    $("body,html").animate({"scrollTop": $(".price").offset().top},450);
  });
  $("li a[href='#reviews']").click(function(){
    $("body,html").animate({"scrollTop": $(".review").offset().top},450);
  });
  $("li a[href='#contact']").click(function(){
    $("body,html").animate({"scrollTop": $(".contact-us").offset().top},450);
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
      $(".scroll-top__arrow").fadeIn();
    } else {
      $(".scroll-top__arrow").fadeOut();
    }
  });

  $(".scroll-top__arrow").click(function(){
    $("body, html").animate({"scrollTop": 0},450);
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
  });

});
