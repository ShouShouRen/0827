$(window).scroll(function () {
  if ($(window).width() < 768) {
    $("#navbarNav a").click(function () {
      $("#navbarNav").collapse('hide');
    });
    $(window).scroll(function () {
      $("#navbarNav").collapse('hide');
    });
  }
})


var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
$('.nav-link,a').click(function () {
  var t = $(this).attr('href');
  var st = $(t).offset().top - 100;
  $('html,body').animate({
    scrollTop: st
  }, 500);
});