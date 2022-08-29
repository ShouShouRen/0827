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