$(document).ready(function(){

	var popUpModule=(function(){

		function init() {
			popUpListeners()
		}
		function popUpListeners() {
			$('.popup-init').on('click',function(event){
				showPopup()
			});
			$(document).keydown(function(event) {
		       	if (event.keyCode == 27 && $('.popup-wrap').length) {
		    		hidePopup();
		    	}
			});
			if($('.popup-content').prev('.popup-wrap').length==0) {
				$('.wrap-main').on('click','.popup-close',function(event){
					hidePopup();
				});
			}

		}

		function showPopup(){
			event.preventDefault ? event.preventDefault() : (event.returnValue=false);
			$('.popup-content').before("<div class='popup-wrap popup-close'></div>");
			$('.popup-content').show();
		}

		function hidePopup(){
			if($('.popup-content').find('form').length) {
				$('.popup-content').find('form').trigger('reset');
			}
			$('.popup-content').hide();
			$('.popup-wrap').remove();

		}


		return {
			init: init
		}

	})();

if($('.popup-init').length) {
	popUpModule.init();
}

})
