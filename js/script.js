$(document).ready(function() {
	var home = '0%',
		green = '22%',
		yellow = '48%',
		blue = '80%',
		red = '63%',
		purple = '96%',
		delay = 1000;

	$('.overlay').hide();
	$('.overlay__content').hide();

	$('.icons__icon').click(function(event) {
		var content = $(this).data('content');
		var emotion = $(this).data('emotion');
		$('.overlay__' + emotion).fadeIn(400, function() {
			$('.' + content).fadeIn(400);
		});
	});
	$('.close').click(function(event) {
		$('.overlay__content').fadeOut(400, function() {
			$('.overlay').fadeOut(700);
		});
	});

	$('.button').click(function(event) {
		/* Act on the event */
		var color = $(this).data('color');
		$('.navigation').animate({top:'70vh'}, 500);
		$('.floor').fadeOut('fast');
		$('canvas').css('opacity', '0.05');
		switch(color) {
			case 'yellow':
				color = yellow;
				delay = 2000;
				$('#joy,#fear,#sadness,#anger,#disgust').removeClass('active');
				$('#joy h1,#fear h1,#sadness h1,#anger h1,#disgust h1').css('opacity', 0);
				$('#joy').addClass('active').delay(delay).animate({opacity: 1}, 500);
				$('.header-text').animate({top:'-500px'}, 500);
				// $('.icons--joy').delay(delay).animate({top:'-31%', right:'-55%'}, 500);
				// $('.text--joy').delay(delay).animate({top: '-35%', left: '55%'}, 500);
				break;
			case 'blue':
				color = blue;
				delay = 2600;
				$('#joy,#fear,#sadness,#anger,#disgust').removeClass('active').css('opacity', '0');;
				$('#joy h1,#fear h1,#sadness h1,#anger h1,#disgust h1').css('opacity', 0);
				$('#sadness').addClass('active').delay(delay).animate({opacity: 1}, 500);
				$('.header-text').animate({top:'-500px'}, 500);
				$('#sadness.active h1').delay(delay).animate({opacity:1}, 500);
				// $('.icons--sadness').delay(delay).animate({top:'-45%'}, 500);
				// $('.text--sadness').delay(delay).animate({left: '15%'}, 500);
				break;
			case 'red':
				color = red;
				delay  = 2300;
				$('#joy,#fear,#sadness,#anger,#disgust').removeClass('active').css('opacity', '0');;
				$('#joy h1,#fear h1,#sadness h1,#anger h1,#disgust h1').css('opacity', 0);
				$('#anger').addClass('active').delay(delay).animate({opacity: 1}, 500);
				$('.header-text').animate({top:'-500px'}, 500);
				$('#anger.active h1').delay(delay).animate({opacity:1}, 500);
				break;
			case 'green':
				color = green;
				delay = 1700;
				$('#joy,#fear,#sadness,#anger,#disgust').removeClass('active').css('opacity', '0');;
				$('#joy h1,#fear h1,#sadness h1,#anger h1,#disgust h1').css('opacity', 0);
				$('#disgust').addClass('active').delay(delay).animate({opacity: 1}, 500);
				$('.header-text').animate({top:'-500px'}, 500);
				$('#disgust.active h1').delay(delay).animate({opacity:1}, 500);
				break;
			case 'purple':
				color = purple;
				delay = 2900;
				$('#joy,#fear,#sadness,#anger,#disgust').removeClass('active').css('opacity', '0');;
				$('#joy h1,#fear h1,#sadness h1,#anger h1,#disgust h1').css('opacity', 0);
				$('#fear').addClass('active').delay(delay).animate({opacity: 1}, 500);
				$('.header-text').animate({top:'-500px'}, 500);
				$('#fear.active h1').delay(delay).animate({opacity:1}, 500);
				break;
			default:
				color = home;
				delay = 3200;
				$('#joy,#fear,#sadness,#anger,#disgust').removeClass('active').css('opacity', '0');;
				$('#joy h1,#fear h1,#sadness h1,#anger h1,#disgust h1').css('opacity', 0);
				$('.header-text').delay(delay).animate({top:'0'}, 1200);
		}
		$('#home').animate({'background-position': color}, 800);
	});
});