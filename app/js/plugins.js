$(document).ready(function(){
	var ValidateFormModule = (function() {

		function CheckInputs(inputs) {
			inputs.each(function() {
				if ($(this).val() === '') {
					addToolTip($(this));
				}
			});
		}

	function addToolTip(emptyInput) {
		// берем текст тултипа при наличии атрибута tooltip-data
		if (emptyInput.attr('tooltip-data')) {
			var textOfToolTip = emptyInput.attr('tooltip-data');
			var block = "<div class='tooltip-block'><p>" + textOfToolTip + "</p></div>";
			emptyInput.before(block);
		}
		// определяем направление тултипа
		if (emptyInput.attr('tooltip-side')) {
			emptyInput.hasClass('rfield-file') ? emptyInput.parent().addClass('requiredField-error') : emptyInput.addClass('requiredField-error');
			var side = emptyInput.attr('tooltip-side');
			var paramTopVal=emptyInput.position().top;
			var margin=(emptyInput.outerHeight()-emptyInput.prev('.tooltip-block').outerHeight())/2;

		switch (side) {
				case 'left':
				emptyInput.prev('.tooltip-block').addClass('tooltip-left');
				break;
				case 'right':
				emptyInput.prev('.tooltip-block').addClass('tooltip-right');
				break;
		}
		// Выравниваем вертикально тултип
			emptyInput.prev('.tooltip-block')
			.css('top',paramTopVal)
			.css('margin-top',margin);
		}

	}

	function removeToolTip(curInput) {
		// проверка на случай наличия фейковый полей-оберток для стилизации FileField
		curInput.parent().hasClass('requiredField-error') ? curInput.parent().removeClass('requiredField-error') : curInput.removeClass('requiredField-error');
		curInput.prev('.tooltip-block').remove();

	}
	function removeAllToolTips(){
		$('.tooltip-block').remove();
		$('.requiredField-error').removeClass('requiredField-error');
	}

	function ValidateFormListeners(form){
		var reqInputs = form.find('.rfield'),
			reqFileInputs=form.find('.rfield-file');

		form.on('submit',function(event) {
			event.preventDefault()
			CheckInputs(reqInputs);
		});

		form.on('reset',function() {
			removeAllToolTips();
		});

		reqFileInputs.on('click',function(){
			removeToolTip($(this));
		});

		reqInputs.on('keypress', function() {
			removeToolTip($(this));
		});
	}

	return {
		formWatching : ValidateFormListeners
	}


})();

/// Функция для очистки filefiled от fakepath
		function fileField(){
			$('.file-stand-in').click(function(){
				$('.file-upload').click();
				return(false);
			});
			$('.file-upload').on('change',function(){
				$('.file-stand-in-text').val($('.file-upload').val());
				var text= $('.file-stand-in-text').val();
				text = text.replace("C:\\fakepath\\", "");
				$('.file-stand-in-text').val(text);
            }).change();// .change() в конце для того чтобы событие сработало при обновлении страницы

		}



//// ВЫЗОВЫ
if($('.req_form').length!=0) {
	ValidateFormModule.formWatching($('.req_form'));
}

if($('.file-stand-in').length) {  // переверка наличия файлового поля с необходимостью замены
	fileField();
}


})