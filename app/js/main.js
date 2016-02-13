$(document).ready(function(){


var adaptiveModule = (function(){
		$('.adaptive-menu-init').click(function(){
			$('.adaptive-menu').fadeToggle();
		});

		$(window).resize(function () {
			if (window.innerWidth>=926) {
				console.log('знов більший екран');
				if ($('.header-wrap').find('menu')) {
					$('.adaptive-menu').removeAttr('style');
					$('.adaptive-menu').prependTo("aside");
					$('menu').removeClass('adaptive-menu');
					$('menu').addClass('main-menu');
					console.log('назад');
				}
			}

			if (window.innerWidth<=925) {
				$('.main-menu').appendTo('.wrap-main');
				$('menu').removeClass('main-menu');
				$('menu').addClass('adaptive-menu');
				console.log('кинулу в header');
			}

			if (window.innerWidth<=480) {

				$('.social-bar').appendTo('aside');
				console.log('успешно переставлено');
			}

			if (window.innerWidth>=481) {
				$('.social-bar').appendTo('.header-wrap');
				console.log('успешно переставлено');
			}

			})
		$(window).trigger('resize');
})();

if (!Modernizr.input['placeholder']) {
	$("input, textarea").placeholder();
	}
});
