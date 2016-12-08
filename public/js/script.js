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
	$( '.color' ).css("transition-delay", "0s");	
	
	if ($( this ).hasClass("color-show")) {
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
	$( '.color' ).css("transition-delay", "0s");	

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
	$( '.color' ).css("transition-delay", "0s");	

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
	
	$( '.color' ).css("transition-delay", "0s");		

	if ($(".c4").hasClass("color-show")) {
    $( this ).siblings().removeClass("color-hide");
		$( this ).removeClass("color-show");
	}
	
	else{
    $( this ).siblings().addClass("color-hide");
		$( this ).addClass("color-show");
	}
});





