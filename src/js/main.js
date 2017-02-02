;(function(){

	 $("#slidershow").owlCarousel({
	 	items:1,
	 	nav: true,
	 	navText: ['<img src="img/arrow-left.png" alt="arrow">', '<img src="img/arrow-right.png" alt="arrow">'],
	 	smartSpeed: 750,
	 	responsive : {
	 	    0 : {
	 	        nav: false
	 	    },
	 	    576 : {
	 	        nav: true
	 	    }
	 	}
	 });

	 $(window).resize(function(){
	 	if($(window).width() > 767){
	 		$('#menu').show();
	 	} else {
	 		$('#menu').hide();
	 	}
	 })

	 $('#icon_menu').click(function(){
	 	if($('#menu').css('display') === 'none'){
	 		$('#menu').slideDown();
	 	} else {
	 		$('#menu').slideUp();
	 	}
	 })

}());