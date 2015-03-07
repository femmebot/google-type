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

	// the lamp scripts
	function litlamp()
	{
		$('.section-the-lamp').toggleClass('lit');
	}

	function randRange(data)
	{
       var newTime = data[Math.floor(data.length * Math.random())];
       return newTime;
	}

	function toggleSomething()
	{
		//var timeArray = new Array(200, 400, 600, 1200, 1400, 1600, 4000);
		var timeArray = new Array(50, 80, 50, 1000, 600, 150, 1200);
		
		litlamp();
		clearInterval(timer);
		timer = setInterval(toggleSomething, randRange(timeArray));
	}

	var timer = setInterval(toggleSomething, 1000);

	//end of the lamp scripts

});