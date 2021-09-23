function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();
function Sibg(){
	$.each($('.Sibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('data-lazy')+'")');
		}
	});
}
Sibg();
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__body,.burger-fixed,.header__burger,.menu-header__menu').toggleClass('active');
	});
});
$(document).ready(function(){
	$('.menu-header__menu a[href^="#"]').click(function(){
		$('.menu-header__menu a[href^="#"]').removeClass('menu-header__link_active');
		$(this).addClass('menu-header__link_active');
	});
	$('.menu-header__link:first').click();
});
