$(document).ready(function() {

		// Init AOS
    AOS.init();

	$('.menu').click(function() {
		$(this).toggleClass('active');
    $('.styleguide-body').css('overflow', 'visible');
		$('.menu').not(this).toggleClass('non-active');
		$('.fixed-menu').toggleClass('display');
		$('.scrolldown').toggleClass('scrolldisplay');
	  });

	$('#logo').click(function () {
		$('.logo').toggleClass('display');
				if ($('.main').hasClass("display")) {
			AOS.init();
		}
	});

	$('#colour').click(function () {
		$('.colour').toggleClass('display');
		if ($('.main').hasClass("display")) {
			AOS.init();

			// ===== Reset color circle when switching back from other sections =====
			$( '.c1, .c2, .c3 , .c4' ).removeClass('color-hide');
			$( '.c1, .c2, .c3 , .c4' ).removeClass('color-show');
			$( '.color' ).css("transition-delay", "1s");	
		}
	});

	$('#buttons').click(function () {
		$('#section-buttons').toggleClass('display');
		// if ($('.main').hasClass("display")) {
			// AOS.init();
			// AOS.refresh();
		// 	AOS.refreshHard();
		// }

		// window.addEventListener('resize', debounce(refresh, 50, true));
		// AOS.init();
		AOS.refresh();
		// debounce(refresh, 50, true);
		// AOS.refreshHard();
		
	});

	$('#typography').click(function () {
		$('.typography').toggleClass('display');
		if ($('.main').hasClass("display")) {
			AOS.init();
		}
	});

	$('#iconography').click(function () {
		$('.iconography').toggleClass('display');
		if ($('.main').hasClass("display")) {
			AOS.init();
		}
	});

	$('#photography').click(function () {
		$('.photography').toggleClass('display');
		if ($('.main').hasClass("display")) {
			AOS.init();
		}
	});

	$('#logo-menu').click(function() {
		$('.main').removeClass('display');
		$('.logo').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#logo').toggleClass('active');
		$('.menu').not('#logo').toggleClass('non-active');
		if ($('.main').hasClass("display")) {
			AOS.init();
		}
	  });

	$('#colour-menu').click(function() {
		$('.main').removeClass('display');
		$('.colour').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#colour').toggleClass('active');
		$('.menu').not('#colour').toggleClass('non-active');

		// ===== Reset color circle when switching back from other sections =====
		$( '.c1, .c2, .c3 , .c4' ).removeClass('color-hide');
		$( '.c1, .c2, .c3 , .c4' ).removeClass('color-show');
		$( '.color' ).css("transition-delay", "1s");	
		if ($('.main').hasClass("display")) {
			AOS.init();
		}
	  });

	$('#buttons-menu').click(function() {
		$('.main').removeClass('display');
		$('.buttons').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#buttons').toggleClass('active');
		$('.menu').not('#buttons').toggleClass('non-active');
		if ($('.main').hasClass("display")) {
			AOS.init();
		}
	  });

	$('#typography-menu').click(function() {
		$('.main').removeClass('display');
		$('.typography').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#typography').toggleClass('active');
		$('.menu').not('#typography').toggleClass('non-active');
		if ($('.main').hasClass("display")) {
			AOS.init();
		}
	  });

	$('#iconography-menu').click(function() {
		$('.main').removeClass('display');
		$('.iconography').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#iconography').toggleClass('active');
		$('.menu').not('#iconography').toggleClass('non-active');
		if ($('.main').hasClass("display")) {
			AOS.init();
		}
	  });

	$('#photography-menu').click(function() {
		$('.main').removeClass('display');
		$('.photography').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#photography').toggleClass('active');
		$('.menu').not('#photography').toggleClass('non-active');
		if ($('.main').hasClass("display")) {
			AOS.init();
		}
	  });

	var wheight = $(window).height();
	$('.scrolldown').click(function() {
		$('html, body').animate({
	      scrollTop: wheight
	  	}, 500);	
	});
	
	$(window).scroll(function(){
  		if($(window).scrollTop() > $(document).height()*0.12){
    		$('li').css({'color': '#d6d6d6'})
  	}else{
  		$('li').css({'color': '#fff'})
  		}
	});

  });


// AOS.refreshHard();

	// $('.menu').click(function () {
	// 		console.log('test');
	// 		AOS.init(); 
	// });
