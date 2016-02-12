$(document).ready(function(){

	var popUpModule=(function(){
		$('#add-templ').on('click',function(event){
			event.preventDefault ? event.preventDefault() : (event.returnValue=false);
			$('.popup-wrap').show();
			$('.popup-content').show();

		});
		$(document).keydown(function(e) {
	       	if (e.keyCode == 27 && $('.popup-wrap')) {
	    		hidePopup();
	    	}
		});

		$('.popup-wrap, .popup-close').on('click',function(event){
			hidePopup();
		});


		function hidePopup(){
			$('.popup-content').hide();
			$('.popup-wrap').hide();
		}

		function fileField(){
			$('.file-stand-in').click(function(){
				$('.file-upload').click();
				return(false);
			});
			$('.file-upload').change(function(){
				$('.file-stand-in-text').val($('.file-upload').val());
				var text= $('.file-stand-in-text').val();
				text = text.replace("C:\\fakepath\\", "");
				$('.file-stand-in-text').val(text);
            }).change();// .change() в конце для того чтобы событие сработало при обновлении страницы

		}

		fileField();
	})();
//// МОДУЛЬ

})
