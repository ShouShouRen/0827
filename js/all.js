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
      $('#contact input').val('');
    })

    $('.modal-footer .clearcart').click(function() {
      alert("感謝您的購買本農場會儘速送達！！！")
      location.reload();
    })
});