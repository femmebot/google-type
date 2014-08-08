$(document).ready(function() {

	// the fox and the grapes scripts
	var width = $(window).width() - 250;
	var height = $(window).height() - 250;

	function run() {
		var top = Math.random() * height;
		var left = Math.random() * width;
		$('#grapes').css('top', top + 'px').css('left', left + 'px');
		$('#grapes').removeClass('shake');
	}
	$('#grapes').mouseover(run);
	// end the fox and the grapes scripts

});