$(document).ready(function() {
    $('#email').tooltip('hide')

    $('.app-tooltip').tooltip({
      placement: 'top'
    });

    $("#login").click(function() {
      $("#arrow-box").toggle('fast')
    })

    var viewportWidth = $(window).width();
    if (viewportWidth < 1000) {
      $("div").remove('#arrow-box')
    }

    $("#search").click(function() {
      $(".search-bar").toggle()
    })

    $(".close-button").click(function() {
      $(".search-input").val("")
    })

    function validation(){
      var email = $("#email").val()

      function validateEmail(email) {
       var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
       return emailReg.test( email );
      }

      if(!validateEmail(email)) {
        $(".email").css('color', 'red')
        $('#email').tooltip('show')
      } else {
        $('#full-name').val('')
        $('#email').val('')
        $(".email").css('color', '#999')
        $('.loading').show().delay(1000).hide(0)

        function showMessage() {
          var index = Math.floor(Math.random() * 2);
          if(index == 1) {
            $('.success-message').show().delay(3000).hide(0)
          } else {
            $('.error-message').show().delay(3000).hide(0)
          }
        }

        setTimeout(showMessage, 1000)
      }
    }

    $('#submit').click(function(evt) {
      evt.preventDefault();

      validation();
    })

    function validation2(){
      var email = $("#email-2").val()

      function validateEmail(email) {
       var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
       return emailReg.test( email );
      }

      if(!validateEmail(email)) {
        $("#email-2").css('color', 'red')
        $('#email-2').tooltip('show')
      } else {
        $('#full-name-2').val('')
        $('#email-2').val('')
        $("#email-2").css('color', '#999')
        $('.loading-2').show().delay(1000).hide(0)

        function showMessage() {
          var index = Math.floor(Math.random() * 2);
          if(index == 1) {
            $('.success-message-2').show().delay(3000).hide(0)
          } else {
            $('.error-message-2').show().delay(3000).hide(0)
          }
        }

        setTimeout(showMessage, 1000)
      }
    }

    $('#submit-2').click(function(evt) {
      evt.preventDefault();

      validation2();
    })

    var $container = $('.portfolio-container');
      $container.isotope({
          filter: '*',
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
    });

    $('.portfolio-category li').click(function(){
      $('.portfolio-category .current').removeClass('current');
      $(this).addClass('current');

      var selector = $(this).attr('data-filter');
      $container.isotope({
          filter: selector,
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
       });
      return false;
    });

    $('.app-tooltip').hover(function() {
      $('.tooltip-inner').css('background-color', 'black')
    })
});
