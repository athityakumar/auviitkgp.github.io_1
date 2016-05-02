

   $(document).ready(function(){

     $("img").addClass('lazy');
/* $(".modal img").removeClass('lazy');
*/    $(".lazy").lazy({
         effect: 'fadeIn',
         placeholder: "images/loading.gif"
/*         appendScroll: $('.modal')
*/     });
$(document).addClass('animated');
$(document).addClass('bounce');
     $('.slider').slider({full_width: true});
 $('ul.tabs').tabs();
      $(".dropdown-button").dropdown();
        Materialize.updateTextFields();
$('.modal-trigger').leanModal();

         

  $('select').material_select('destroy');
          $('.materialboxed').materialbox();
        $('.carousel').carousel({
          dist: 0
        });
       $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');
      $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
      $('.button-collapse').sideNav({
      menuWidth: 240, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
$('.blink_me1').textillate({
        // the default selector to use when detecting multiple texts to animate
        selector: '.blink_me1',

        // enable looping
        loop: true,

        // sets the minimum display time for each text before it is replaced
        minDisplayTime: 2000,

        // sets the initial delay before starting the animation
        // (note that depending on the in effect you may need to manually apply 
        // visibility: hidden to the element before running this plugin)
        initialDelay: 0,

        // set whether or not to automatically start animating
        autoStart: true,

        // custom set of 'in' effects. This effects whether or not the 
        // character is shown/hidden before or after an animation  
        inEffects: [],

        // custom set of 'out' effects
        outEffects: [],

        // in animation settings
        in: {
        // set the effect name
        effect: 'bounceIn',

        // set the delay factor applied to each consecutive character
        delayScale: 1.5,

        // set the delay between each character
        delay: 30,

        // set to true to animate all the characters at the same time
        sync: false,

        // randomize the character sequence 
        // (note that shuffle doesn't make sense with sync = true)
        shuffle: false,

        // reverse the character sequence 
        // (note that reverse doesn't make sense with sync = true)
        reverse: false,

        // callback that executes once the animation has finished
        callback: function () {}
        },

        // out animation settings.
        out: {
        effect: 'bounceOut',
        delayScale: 1.5,
        delay: 30,
        sync: false,
        shuffle: false,
        reverse: false,
        callback: function () {}
        },

        // callback that executes once textillate has finished 
        callback: function () {},

        // set the type of token to animate (available types: 'char' and 'word')
        type: 'char'
      });

    });

   $(".scroll").click(function (event) {
  event.preventDefault();
          //calculate destination place
          var dest = 0;
          if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height() + 100;
          } else {
            dest = $(this.hash).offset().top + 10;
          }
          //go to destination
          $('html,body').animate({
            scrollTop: dest
          }, 600, 'swing');
          dest = dest - 70;
          $('html,body').animate({
            scrollTop: dest
          }, 300, 'swing');

        });

   // makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
  jQuery("#status").fadeOut();
        // will fade out the whole DIV that covers the website.
  jQuery("#preloader").delay(1000).fadeOut("slow");
  jQuery("#aboutus").delay(3000).fadeIn("slow");

})

/*
var lastPosition = -110;

var scrollTimer = null;
var scrollPosition = null;
var busy = false;

$( document ).ready(function() {
  var scrollTimer = null;
  $('.wrapper').height($('.smooth').height()+20);

  $(window).scroll(function () {
    scrollPosition = window.pageYOffset;
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(requestAnimFram, 10)
  });
 $(window).resize(function () {     
    $('.wrapper').height($('.smooth').height());
  });
});

function requestAnimFram(){
  if(busy)return;
  busy = true;
  window.requestAnimationFrame(scrollerize);
}

function scrollerize() {

    $(".smooth").clearQueue().css({
      transform: 'translate3d(0px, -' + scrollPosition + 'px, 0px)'
    });
    busy = false;
}*/
