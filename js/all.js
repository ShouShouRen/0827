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