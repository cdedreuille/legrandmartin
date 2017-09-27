$(document).ready(function(){

	var loader 	= $('#loader');
	var wrap   	= $('.wrap');
	var bgimage = $('.bgimage');
	var info   	= $('.info');
	var get   	= $('.get');


	var timeline = new TimelineMax();

	timeline.to(loader, 1, {opacity: 0, display: 'none'}, 'funky');
	timeline.from(bgimage, 2, {y: 40}, 'funky');
	timeline.from(info, 1.5, {opacity: 0, y: 20}, 'funky+=2');
	timeline.from(get, 1.5, {x: 100}, 'funky+=3');
	timeline.stop();

	setTimeout(function(){
		timeline.play();
	}, 700);

	

});
