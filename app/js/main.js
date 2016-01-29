$(document).ready(function(){
	console.log('fdfgd');
$('.adaptive-menu-init').click(function(){
		$('.adaptive-menu').fadeToggle();
	})
	/*if (!Modernizr.input['placeholder']) {
	$("input, textarea").placeholder();
	}*/
$(window).resize(function () {

	if (window.innerWidth>=769) {
		console.log('знов більший екран');
		if ($('.header-wrap').find('menu')) {
			$('.adaptive-menu').removeAttr('style');
			$('.adaptive-menu').prependTo("aside");
			$('menu').removeClass('adaptive-menu');
			$('menu').addClass('main-menu');
			console.log('назад');
		}


	}

	if (window.innerWidth>=481 && window.innerWidth<=768) {
		$('.main-menu').appendTo('.header-wrap');
		$('menu').removeClass('main-menu');
		$('menu').addClass('adaptive-menu');
		console.log('кинулу в header');
		}

	if (window.innerWidth<=480) {
		$('.social-bar').appendTo('aside');
		console.log('успешно переставлено');
	}









	})


});

