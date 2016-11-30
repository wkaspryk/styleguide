
$(document).ready(function() {
	$('.menu').click(function() {
		$(this).toggleClass('active');
    $('.pg-two').css('overflow', 'visible');
		$('.menu').not(this).toggleClass('non-active');
		$('.fixed-menu').toggleClass('display');
	  });

	$('#logo').click(function() {
		$('.logo').toggleClass('display');
	  });

	$('#colour').click(function() {
		$('.colour').toggleClass('display');
	  });

	$('#buttons').click(function() {
		$('.buttons').toggleClass('display');
	  });

	$('#typography').click(function() {
		$('.typography').toggleClass('display');
	  });

	$('#iconography').click(function() {
		$('.iconography').toggleClass('display');
	  });

	$('#photography').click(function() {
		$('.photography').toggleClass('display');
	  });
	$('#logo-menu').click(function() {
		$('.main').removeClass('display');
		$('.logo').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#logo').toggleClass('active');
		$('.menu').not('#logo').toggleClass('non-active');
	  });

	$('#colour-menu').click(function() {
		$('.main').removeClass('display');
		$('.colour').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#colour').toggleClass('active');
		$('.menu').not('#colour').toggleClass('non-active');
	  });

	$('#buttons-menu').click(function() {
		$('.main').removeClass('display');
		$('.buttons').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#buttons').toggleClass('active');
		$('.menu').not('#buttons').toggleClass('non-active');

	  });

	$('#typography-menu').click(function() {
		$('.main').removeClass('display');
		$('.typography').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#typography').toggleClass('active');
		$('.menu').not('#typography').toggleClass('non-active');

	  });

	$('#iconography-menu').click(function() {
		$('.main').removeClass('display');
		$('.iconography').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#iconography').toggleClass('active');
		$('.menu').not('#iconography').toggleClass('non-active');
	  });

	$('#photography-menu').click(function() {
		$('.main').removeClass('display');
		$('.photography').toggleClass('display');
		$('.menu').removeClass('active non-active');
		$('#photography').toggleClass('active');
		$('.menu').not('#photography').toggleClass('non-active');
	  });


  });
