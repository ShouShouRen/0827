$(document).ready(function () {
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
    
    $('.nav-link,a').click(function () {
      var t = $(this).attr('href');
      var st = $(t).offset().top - 100;
      $('html,body').animate({
        scrollTop: st
      }, 500);
    });
    
    $('.submit').click(function() {
      $('input').val('');
    })

    $('.price-box').submit(function () {
      alert('目前尚無網路 請稍後再試')
      $('.price-box input').val();
      return false
    });
});