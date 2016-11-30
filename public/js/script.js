
if ($(window).scrollTop() > 60) {
  $('h1:after').css('transform', 'scaleX(0)');
} else {
  $('h1:after').css('transform', 'scaleX(1)');
}