// ===== ScrollMagic & TweenMax =====

// init controller
var controller = new ScrollMagic.Controller();

var imgTl = new TimelineMax()
  .add([
        TweenMax.from("#parallax-1-desc", 1, {y: 100, ease: Linear.easeNone}),
        TweenMax.from("#parallax-1-img", 1, {y: -100, ease: Linear.easeNone}),
        TweenMax.from("#parallax-2-desc", 1, {y: 100, ease: Linear.easeNone}),
        TweenMax.from("#parallax-2-img", 1, {y: -100, ease: Linear.easeNone}),
				TweenMax.from("#parallax-3-desc", 1, {y: 100, ease: Linear.easeNone}),
        TweenMax.from("#parallax-3-img", 1, {y: -100, ease: Linear.easeNone})
      ]);

// build scene
var scene = new ScrollMagic.Scene({
          triggerElement: "#logo-anchor-2",
          offset: 100,
          duration: 1500
        })
        .setTween(imgTl)
        // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
        .addTo(controller);



