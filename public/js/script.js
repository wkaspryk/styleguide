
(function() {

  var logoRecommendTitle = $('.section-inner h1'),
      logoRecommendTitleOffset = $('.logo-recommend').offset().top*0.8,
      viewTop = $(document);

  viewTop.on('scroll', function() {
      if ( viewTop.scrollTop() > logoRecommendTitleOffset) logoRecommendTitle.addClass('show-text');
  });
 });



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
    sensitivity: 120,
    shine: false,
    perspective: 1600,
    // invert: true,
  });
});
 
// Section Colour - Color Circle Events
// Color 1 - Click Events
$( ".c1" ).click(function() {
	
	if ($( this).hasClass("color-show")) {
    $( this ).siblings().removeClass("color-hide");
		$( this ).removeClass("color-show");
	}
	
	else{
    $( this ).siblings().addClass("color-hide");
		$( this ).addClass("color-show");
	}
});

// Color 2 - Click Events
$( ".c2" ).click(function() {
	
	if ($( this).hasClass("color-show")) {
    $( this ).siblings().removeClass("color-hide");
		$( this ).removeClass("color-show");
	}
	
	else{
    $( this ).siblings().addClass("color-hide");
		$( this ).addClass("color-show");
	}
});

// Color 3 - Click Events
$( ".c3" ).click(function() {
	
	if ($( this).hasClass("color-show")) {
    $( this ).siblings().removeClass("color-hide");
		$( this ).removeClass("color-show");
	}
	
	else{
    $( this ).siblings().addClass("color-hide");
		$( this ).addClass("color-show");
	}
});

// Color 4
$( ".c4" ).click(function() {
	
	if ($(".c4").hasClass("color-show")) {
    $( this ).siblings().removeClass("color-hide");
		$( this ).removeClass("color-show");
	}
	
	else{
    $( this ).siblings().addClass("color-hide");
		$( this ).addClass("color-show");
	}
});



