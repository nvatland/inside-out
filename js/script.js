$(document).ready(function() {
// 	var color1 = '#fff';
// 	var color2 = '#000';
// 	var yellow = ['#FDD001', '#FBBC16'];
// 	var blue = ['#3A77A8', '#211A55'];
// 	var red = ['#E02222', '#C90E11'];
// 	// $('section').css({
// 	// 	'background': '-moz-radial-gradient(center, ellipse cover, ' + color1 +' 0%, ' + color2 +' 100%)',
// 	// 	'background': '-webkit-radial-gradient(center, ellipse cover, ' + color1 +' 0%, ' + color2 +' 100%)',
// 	// 	'background': 'radial-gradient(ellipse at center, ' + color1 +' 0%, ' + color2 +' 100%)',
// 	// });
// // $('section').css('background', '#000');
// 	$('button').click(function(event) {
// 		/* Act on the event */
// 		event.preventDefault();
// 		switch($(this).data('color')) {
// 			case 'joy':
// 				color1 = yellow[0];
// 				color2 = yellow[1];
// 				break;
// 			case 'sadness':
// 				color1 = blue[0];
// 				color2 = blue[1];
// 				break;
// 			case 'anger':
// 				color1 = red[0];
// 				color2 = red[1];
// 				break;
// 			default:
// 				color1 = '#fff';
// 				color2 = '#000';
// 		}
// 		$('section').css({
// 		'background-color': color1
// 	});
// 	});
var home = '0%',
	green = '22%',
	yellow = '48%',
	blue = '80%',
	red = '63%',
	purple = '96%',
	delay = 1000;

	$('.button').click(function(event) {
		/* Act on the event */
		var color = $(this).data('color');
		$('.navigation').animate({top:'20vh'}, 500);
		$('canvas').css('opacity', '0.05');
		switch(color) {
			case 'yellow':
				color = yellow;
				delay = 2000;
				$('#joy,#fear,#sadness,#anger,#disgust').removeClass('active');
				$('#joy h1,#fear h1,#sadness h1,#anger h1,#disgust h1').css('opacity', 0);
				$('#joy').addClass('active');
				$('.header-text').animate({top:'-500px'}, 500);
				$('#joy.active h1').delay(delay).animate({opacity:1}, 500);
				break;
			case 'blue':
				color = blue;
				delay = 2600;
				$('#joy,#fear,#sadness,#anger,#disgust').removeClass('active');
				$('#joy h1,#fear h1,#sadness h1,#anger h1,#disgust h1').css('opacity', 0);
				$('#sadness').addClass('active');
				$('.header-text').animate({top:'-500px'}, 500);
				$('#sadness.active h1').delay(delay).animate({opacity:1}, 500);
				break;
			case 'red':
				color = red;
				delay  = 2300;
				$('#joy,#fear,#sadness,#anger,#disgust').removeClass('active');
				$('#joy h1,#fear h1,#sadness h1,#anger h1,#disgust h1').css('opacity', 0);
				$('#anger').addClass('active');
				$('.header-text').animate({top:'-500px'}, 500);
				$('#anger.active h1').delay(delay).animate({opacity:1}, 500);
				break;
			case 'green':
				color = green;
				delay = 1700;
				$('#joy,#fear,#sadness,#anger,#disgust').removeClass('active');
				$('#joy h1,#fear h1,#sadness h1,#anger h1,#disgust h1').css('opacity', 0);
				$('#disgust').addClass('active');
				$('.header-text').animate({top:'-500px'}, 500);
				$('#disgust.active h1').delay(delay).animate({opacity:1}, 500);
				break;
			case 'purple':
				color = purple;
				delay = 2900;
				$('#joy,#fear,#sadness,#anger,#disgust').removeClass('active');
				$('#joy h1,#fear h1,#sadness h1,#anger h1,#disgust h1').css('opacity', 0);
				$('#fear').addClass('active');
				$('.header-text').animate({top:'-500px'}, 500);
				$('#fear.active h1').delay(delay).animate({opacity:1}, 500);
				break;
			default:
				color = home;
				delay = 3200;
				$('#joy,#fear,#sadness,#anger,#disgust').removeClass('active');
				$('#joy h1,#fear h1,#sadness h1,#anger h1,#disgust h1').css('opacity', 0);
				$('.header-text').delay(delay).animate({top:'0'}, 1200);
		}
		$('#home').animate({'background-position': color}, 800);
	});
});