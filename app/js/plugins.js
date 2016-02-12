$(document).ready(function(){
	var CheckModuleAndToolTips = (function() {
	var forms = $('.req_form'),
	reqInputs = forms.find('.rfield'),
	reqFileInputs=forms.find('.rfield-file');

	function CheckInputs(form) {
//  	var
//			reqInputs = forms.find('.rfield');
//
	var  check=true;
	reqInputs.each(function() {
		if ($(this).val() === '') {
			addToolTip($(this));
			check=false;
		}
	});
		return check;

	}

function addToolTip(emptyInput) {
	if (emptyInput.attr('tooltip-data')) {
		var textOfToolTip = emptyInput.attr('tooltip-data');
		var block = "<div class='tooltip-block'><p>" + textOfToolTip + "</p></div>";
		emptyInput.before(block);
	}
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
		emptyInput.prev('.tooltip-block')
		.css('top',paramTopVal)
		.css('margin-top',margin);
	}

}

function removeToolTip(curInput) {
	curInput.parent().hasClass('requiredField-error') ? curInput.parent().removeClass('requiredField-error') :curInput.removeClass('requiredField-error');
	curInput.prev('.tooltip-block').remove();

}
function removeAllToolTips(){
	$('.tooltip-block').remove();
	$('.requiredField-error').removeClass('requiredField-error');
}
//  return {
//	init: CheckInputs
//}
forms.on('submit',function(event) {
	event.preventDefault();
	if (!CheckInputs()) {
      //connect(data);
  }
});


reqFileInputs.on('click',function(){
	removeToolTip($(this));
});

reqInputs.on('keypress', function() {
	removeToolTip($(this));
});

forms.on('reset',function() {
	removeAllToolTips();
});

})();




})