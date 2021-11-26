function random(min, max) {
  return min + Math.random() * (max - min);
}

$(document).keydown(function(ev){
	if( ev.which == 27 ){
		alert('Отмена!');
	}
});

$('.ball').on('click', function () {
	let side;
	let ballPos = $('.ball').position();
	const rand = (random(1, 88));
	let vertPos = (Math.round(rand) + 'vh');
	$.playSound('ball_sound.mp3');

	if(ballPos.left < 60) {
		side = '92vw';
	} else {side = '.2vw';};

	$('.ball').animate({top: vertPos, left: side}, 1000, 'easeOutCirc');

	if (vertPos > '38vh' && vertPos < '45vh') {
		setTimeout(() => {
			$.playSound('goal_sound.mp3');
		}, 800);
		setTimeout(() => {
			alert('Гооол!!!');
		}, 900);
	}
});
