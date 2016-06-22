/*

My Custom JS
============

Author:  Vemula Vamshi Krishna
Updated: April 2016


*/

$(document).ready(function(){
	
	$('#i-nav').click(function(){
	
		$(this).toggleClass('open');
		$('ul#tab-mob-menu').toggleClass('show');
		//alert("hello");

	});

	$('ul#tab-mob-menu li a').click(function(){
		$('ul#tab-mob-menu').toggleClass('show');
		$('#i-nav').toggleClass('open');

		$('ul#tab-mob-menu li a').removeClass("active");
	    $('ul#desktop-menu-left li a').removeClass("active");
		$('ul#desktop-menu-right li a').removeClass("active");
		$(this).addClass("active");
	});


//using master slider hight setting top position to the bodycontent
var x = $( "#masterslider" ).height() + "px";
$("#body-content").css("top", x);




});



// for smooth scrolling and removing #id value in url
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });
});



var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});



(function(){

  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.9;

  window.onscroll = function(){
    [].slice.call(parallax).forEach(function(el,i){

      var windowYOffset = window.pageYOffset,
          elBackgrounPos = "0 " + (windowYOffset * speed) + "px";
      
      el.style.backgroundPosition = elBackgrounPos;

    });
  };

})();

//validations

function telephoneCheck(str) {
  
  if(str!=""){
	document.getElementById('name').style.backgroundColor = "white";
  }

  var a = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(str);
  if(a){
	document.getElementById('err-phone').innerHTML=null;
  }
  else{
	document.getElementById('err-phone').innerHTML="Enter valid phone number";
  }
}

function emailCheck(x) {
    
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        document.getElementById('err-email').innerHTML="Enter valid Email ID";
        return false;
    }
	else{
		document.getElementById('err-email').innerHTML=null;
	}
}

function checkName(str){
if(str==""){
document.getElementById('err-name').innerHTML="Enter Your Name";
}
else{
document.getElementById('err-name').innerHTML=null;
}
}

//-------------------------------------------
function telephoneCheck1(str) {
  
  if(str!=""){
	document.getElementById('name1').style.backgroundColor = "white";
  }

  var a = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(str);
  if(a){
	document.getElementById('err-phone1').innerHTML=null;
  }
  else{
	document.getElementById('err-phone1').innerHTML="Enter valid phone number";
  }
}

function emailCheck1(x) {
    
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        document.getElementById('err-email1').innerHTML="Enter valid Email ID";
        return false;
    }
	else{
		document.getElementById('err-email1').innerHTML=null;
	}
}

function checkName1(str){
if(str==""){
document.getElementById('err-name1').innerHTML="Enter Your Name";
}
else{
document.getElementById('err-name1').innerHTML=null;
}
}



//change the background color of input field after blur

$('input[type=text]').blur(function () {
	if($(this).value !=""){
	    $(this).css({ 'background': 'white', 'color':'black' });
	}
	else{
	   $(this).css({ 'background': '#565656', 'color':'white' });
	}
});
$('input[type=email]').blur(function () {
	if($(this).value !=""){
	    $(this).css({ 'background': 'white', 'color':'black' });
	}
	else{
	   $(this).css({ 'background': '#565656', 'color':'white' });
	}
});
$('textarea').blur(function () {
	if($(this).value !=""){
	    $(this).css({ 'background': 'white', 'color':'black' });
	}
	else{
	   $(this).css({ 'background': '#565656', 'color':'white' });
	}
});



  (function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);




// Hide Header on on scroll down
var didScroll=false;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.mobile-block').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.mobile-block').removeClass('nav-up').addClass('nav-down');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('.mobile-block').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}



//social logo hover effect code
$('img.social').bind('mouseenter mouseleave', function() {
	$(this).attr({
		src: $(this).attr('data-other-src') 
		, 'data-other-src': $(this).attr('src') 
	})
});
$('img.client-logo-images').bind('mouseenter mouseleave', function() {
	$(this).attr({
		src: $(this).attr('data-other-src') 
		, 'data-other-src': $(this).attr('src') 
	})
});



//for counters

$.fn.is_on_screen = function(){
     
    var win = $(window);
     
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
     
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
     
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
     
};

$(window).scroll(function(){ // bind window scroll event
	if( $('#counters-section').length > 0 ) { // if target element exists in DOM
		if( $('#counters-section').is_on_screen() ) { // if target element is visible on screen after DOM loaded
			
			jQuery(function($) {
				$('.clients-count').countTo({
					from: 50,
					to: 2500,
					speed: 3000,
					refreshInterval: 50,
					onComplete: function(value) {
						console.debug(this);
					}
				});
			});

			jQuery(function($) {
				$('.awards-count').countTo({
					from: 0,
					to: 1500,
					speed: 3000,
					refreshInterval: 50,
					onComplete: function(value) {
						console.debug(this);
					}
				});
			});

			jQuery(function($) {
				$('.inspirers-count').countTo({
					from: 50,
					to: 2500,
					speed: 3000,
					refreshInterval: 50,
					onComplete: function(value) {
						console.debug(this);
					}
				});
			});

			jQuery(function($) {
				$('.beers-count').countTo({
					from: 0,
					to: 1500,
					speed: 3000,
					refreshInterval: 50,
					onComplete: function(value) {
						console.debug(this);
					}
				});
			});



		} 
	}
});

