$(document).ready(function () {

  // ============================================================== dropdown
  // var logged = $("#my_account").hasClass("logged");

  // var myAccountLink = document.querySelector('.my_account_link');
  // var dropdownBgStripe = document.querySelector('.dropdown_bg_stripe');
  // var secondNavA = document.querySelectorAll('.second_nav a');

  // closeOpenSubmenu();

  // window.addEventListener('resize', function () {
  //   closeOpenSubmenu();
  // })

  // function closeOpenSubmenu() {

  //   if (logged && getComputedStyle(document.querySelector('.hamburger')).display == 'none') {
  //     dropdownBgStripe.style.display = 'block';
  //     myAccountLink.classList.add('my_accont_hover-bg');
  //   }
  // };

  // =============================================================== hamburger
  $('.hamburger').on('click', function () {
    $(this).toggleClass('is-active');
    if ($(this).hasClass('is-active')) {
      $('.box-mobile-nav').fadeIn(200);
      var bodyWidthBefore = document.body.clientWidth;
      $('body').css({
        'overflow-y': 'hidden'
      })
      var bodyWidthAfter = document.body.clientWidth;
      var padding = bodyWidthAfter - bodyWidthBefore;
      document.body.style.paddingRight = padding + 'px';
    } else {
      $('.box-mobile-nav').fadeOut(200);
      $('body').css({
        'overflow-y': ''
      });
      document.body.style.paddingRight = '';
    }
  });

  $('.box-mobile-nav').on('click', function (e) {
    if (e.target.classList.contains('box-mobile-nav')) {
      $('.hamburger').removeClass('is-active');
      $('.box-mobile-nav').fadeOut(200);
      $('body').css({
        'overflow-y': ''
      });
      document.body.style.paddingRight = '';
    }
  })

  $(window).resize(function () {
    if ($('.first_nav ul').css('display') === 'flex') {
      $('.hamburger').removeClass('is-active');
      $('body').css({
        'overflow-y': ''
      })
      $('.box-mobile-nav').fadeOut(200);
      document.body.style.paddingRight = '';
    }
  });

  $('.my_account_link_mobile').on('click', function () {
    var dropdownMobile = $('.dropdown_mobile');
    if (dropdownMobile.css('display') == 'none') {
      dropdownMobile.slideDown();
    } else {
      dropdownMobile.slideUp();
    }
  });


  // ======================================================= ather
  if (document.querySelector('.standart_h2') &&
    document.querySelector('.standart_h2').textContent.toLowerCase() ===
    'actualtests exam engine features') {
    document.querySelector('.container.standart_block:last-child').style.paddingBottom = '40px';
  }

  if (!document.querySelector('.vendor_certifications') && document.querySelector('.container_product_custom_padding')) {
    document.querySelector('.container_product').classList.add('container_product_pb_mod');
  }

  // ==================================================== vendors_title_letter
  if (document.querySelector('.single')) {
    var main = document.querySelector('#main');
    main.style.display = 'flex';
    main.style.flexDirection = 'column';
  }

  $(".cvv_what_is_this").click(function () {
    $(".cvv").fadeToggle();
  });

  // ==================================================== slick-slaider
  $('.slider-exam').slick({
    // variableWidth: true,
    accessibility: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    centerMode: true,
    centerPadding: '230px',
    responsive: [{
        breakpoint: 992,
        settings: {
          centerPadding: '150px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '100px'
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: '50px'
        }
      },
      {
        breakpoint: 450,
        settings: {
          centerPadding: '30px'
        }
      },

    ]
  });

  // ====================================================================================
  var vendorStripeAr = document.querySelectorAll('.vendor_stripe a');

  // if(vendorStripeAr) {
  //   for(var i = 0; i < vendorStripeAr.length; i++) {
  //     vendorStripeAr[i].addEventListener('click', function() {
  //       if ($("#reviews").hasClass("sr_not_active")) {
  //         $("#slides").addClass("sr_not_active");
  //         $("#slides").removeClass("sr_active");
  //         $("#reviews").removeClass("sr_not_active");
  //         $(".slider").toggle();
  //         $(".product_reviews").toggle();
  //         }
  //     })
  //   }
  // }

  var vendorBoxContour = document.querySelector('.vendor_box_contour');
  if (vendorBoxContour) {
    vendorBoxContour.addEventListener('click', function (e) {
      if (e.target.classList.contains('allcerts')) {
        if ($("#reviews").hasClass("sr_not_active")) {
          $("#slides").addClass("sr_not_active");
          $("#slides").removeClass("sr_active");
          $("#reviews").removeClass("sr_not_active");
          $(".slider").toggle();
          $(".product_reviews").toggle();
        }
      }
    })
  }

  var allCerts = document.querySelector('.allcerts');
  if (allCerts) {
    allCerts.addEventListener('click', function () {
      if ($("#reviews").hasClass("sr_not_active")) {
        $("#slides").addClass("sr_not_active");
        $("#slides").removeClass("sr_active");
        $("#reviews").removeClass("sr_not_active");
        $(".slider").toggle();
        $(".product_reviews").toggle();
      }
    })
  }

  // ========================================================== promocode_form
  var promocodeForm = document.querySelector('.promocode_form');

  if (promocodeForm) {
    var promocodeInput = document.querySelector('.promocode_input');

    promocodeForm.addEventListener('submit', function (e) {
      e.preventDefault();

      if (promocodeInput.value.trim() == '') {
        promocodeInput.style.outlineColor = 'red';
        promocodeInput.focus();
        promocodeInput.addEventListener('input', function () {
          promocodeInput.style.outlineColor = '';
        });
        promocodeInput.addEventListener('blur', function () {
          promocodeInput.style.outlineColor = '';
        })
      } else {
        promocodeForm.submit();
      }
    })
  }


  /*To top button*/
  $(function () {

    $(window).scroll(function () {
      if ($(this).scrollTop() > 1300) {
        $('#to_top').fadeIn();
      } else {
        $('#to_top').fadeOut();
      }
    });
    $('#to_top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
    });
  });


  /*old browser alert stripe*/
  $("#horse").click(function () {
    $(".browsehappy").css("display", "none");
  });

  /*slider-review toggle*/

  $('.slide_reviews._first').click(function () {
    $(this).addClass('sr_active');
    $('.slide_reviews._second').removeClass('sr_active');
    $('.shell._content_second').hide();
    $('.shell._content_first').fadeIn();
  })

  $('.slide_reviews._second').click(function () {
    $(this).addClass('sr_active');
    $('.slide_reviews._first').removeClass('sr_active');
    $('.shell._content_first').hide();
    $('.shell._content_second').fadeIn();
    $(".slider-exam").slick('slickSetOption', 'adaptiveHeight', true, true);
  })

  /*~~~~~~~CHECKOUT~~~~~~~~`*/
  $("#remove_subscr").click(function () {
    $(".checkout_total_sum").html("Total Cost: $149");
    $("#year_subscr").css("display", "none");
    $(".total_sum_container").css("border", "none");
  });

  /*~~~~~~~CHECKBOXES~~~~~~~~`*/
  /*$('input').iCheck({

  });*/
  /*~~~~~~~cart~radiobuttons~~~~~~~~`*/

  $(".c12").click(function () {
    $(".bg_label").removeClass("active");
    $(".bg_label.c12").addClass("active");
    //       $(".buttonblock p").html( "Total Cost: $338" );
  });

  $(".c12 .iCheck-helper").click(function () {
    $(".bg_label").removeClass("active");
    $(".bg_label.c12").addClass("active");
    //       $(".buttonblock p").html( "Total Cost: $338" );
  });


  $(".c6").click(function () {
    $(".bg_label").removeClass("active");
    $(".bg_label.c6").addClass("active");
    //       $(".buttonblock p").html( "Total Cost: $268" );
  });

  $(".c6 .iCheck-helper").click(function () {
    $(".bg_label").removeClass("active");
    $(".bg_label.c6").addClass("active");
    //       $(".buttonblock p").html( "Total Cost: $268" );
  });

  $(".c0").click(function () {
    $(".bg_label").removeClass("active");
    $(".bg_label.c0").addClass("active");
    //       $(".buttonblock p").html( "Total Cost: $149" );
  });

  $(".c0 .iCheck-helper").click(function () {
    $(".bg_label").removeClass("active");
    $(".bg_label.c0").addClass("active");
    //       $(".buttonblock p").html( "Total Cost: $149" );

  });

  /*~~~~~~~wrap all exams with no-brake~~~~~~~~`*/
  $(".level_for_a ul li a").wrap("<nobr></nobr>");


  //remove placegolder on focus
  $("input").focus(function () {
    var inputTitle = $(this).attr("placeholder");
    $(this).attr("placeholder", " ");
    $(this).focusout(function () {
      $(this).attr("placeholder", inputTitle);
    });
  });
  //online chat

  $(".online_support").on({
    click: function () {
      $(".online_support_container").fadeIn(100);
    },
    mouseenter: function () {
      $(".online_support_container").fadeIn(100);
    },
    mouseleave: function () {
      $(".online_support_container").fadeOut(500);
    }

  });

  $(".need_help_a").on({
    click: function () {
      $(".online_support_container").fadeIn(100);
    },
    mouseenter: function () {
      $(".online_support_container").fadeIn(100);
    },
    mouseleave: function () {
      $(".online_support_container").fadeOut(500);
    }

  });

  /*~~~~~~~close_popup~~~~~~~~~*/
  $(".close_y").click(function () {
    $(".popup_bg").css("display", "none");
  });

  $('.popup_bg').click(function (event) {
    if (event.target.classList.contains('popup_bg')) {
      $(".popup_bg").fadeOut();
    }
  });

  $(".close_x").click(function () {
    $(".popup_bg_second").css("display", "none");
  });

  $('.popup_bg_second').click(function (event) {
    if (event.target.classList.contains('popup_bg_second')) {
      $(".popup_bg_second").fadeOut();
    }
  });

});
// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});
  while (length--) {
    method = methods[length];
    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
// Place any jQuery/helper plugins in here.


// ======================================= filter exams
var filterDropdown = document.querySelector('.filter_dropdown');

// if(filterDropdown) {
//   filterDropdown.addEventListener('change', function() {
//     removelibraryNavs();
//   })
// }

removelibraryNavs();

function removelibraryNavs() {
  if(filterDropdown) {
    if (filterDropdown.value.toLowerCase() !== 'all vendors') {
      var libraryNavs = document.querySelectorAll('.library_nav');
      for (var i = 0; i < libraryNavs.length; i++) {
        libraryNavs[i].style.display = 'none';
      }
    }
  }
}


// ============================================================ footer
(function () {
  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  if (isIE11) {
    stickFooter();
    window.addEventListener('resize', stickFooter);
  }

  function stickFooter() {
    var FOOTER = document.querySelector('#footer');
    var MAIN = document.querySelector('#main');
    var BODY = document.querySelector('#wrapper');
    var footerHeight = FOOTER.offsetHeight;
    BODY.style.position = 'relative';
    MAIN.style.marginBottom = footerHeight + 'px';
    FOOTER.style.position = 'absolute';
    FOOTER.style.bottom = '0';
    FOOTER.style.left = '0';
    FOOTER.style.width = '100%';
  };

})();
