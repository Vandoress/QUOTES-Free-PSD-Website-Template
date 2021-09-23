$(document).ready(function(){
	$('.slider-main-screen').slick({
		arrows:false,
		dots: true,
		speed: 1000,
		autoplay: true,
		initialSlide:2,
		pauseOnDotsHover: true,
		waitForAnimate:false
	});
});
$(document).ready(function(){
	$('.slider-love').slick({
		arrows:false,
		dots: true,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 2,
		waitForAnimate:false,
		appendDots:$('.item-slider-love__content'),
		responsive:[
			{
				breakpoint: 1200.98,
				settings:{
					rows:2,
					fade:true,
					slidesToShow: 1,
					slidesToScroll: 1,
				}	
			}
		]
	});
});