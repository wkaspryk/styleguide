// Image 3D Hover Effects
$(document).ready(function(){
  $(".project").hover3d({
    selector: ".project_card",
    sensitivity: 100,
    shine: false,
    // perspective: 1600,
		// hoverInClass: "transition: .3s ease-out",
		// hoverOutClass: "transition: .3s ease-in",
		// hoverClass: "transition: 0.4s ease;"
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
var transition= document.getElementById('blind');
        setTimeout(function() {
            transition.classList.add('close');
            document.body.style.overflowY= "visible";
        }, 4000);



