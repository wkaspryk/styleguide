
(function() {

  var logoRecommendTitle = $('.section-inner h1'),
      logoRecommendTitleOffset = $('.logo-recommend').offset().top*0.8,
      viewTop = $(document);

  viewTop.on('scroll', function() {
      if ( viewTop.scrollTop() > logoRecommendTitleOffset) logoRecommendTitle.addClass('show-text');
  });
 })();



// $(".img-hover").hover3d({
//     selector: ".img-hover_card";
//     // perspective:
//     hoverInClass: ".hover-in";
//     hoverOutClass: ".hover-out";
// });



// Image 3D Hover Effects
$(document).ready(function(){
  $(".project").hover3d({
    selector: ".project_card",
    shine: true,
    // invert: true,
  });
});


// is on screen

AOS.init({
  duration: 3200
}); 