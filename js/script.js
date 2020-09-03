function random(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

$('.ball').on('click', function () {
    $.playSound('sounds/ball_sound.mp3');
    let side;
    let ballPos = $('.ball').position();
		console.log('left: ' + Math.floor(ballPos.left) + 'px');
    const rand = (random(.5, 86));
    let vertPos = (Math.round(rand) + 'vh');

    if (ballPos.left < 60) {
        side = '92vw';
    } else {
        side = '.1vw';
    }

		console.log(vertPos);

    $('.ball').animate({
        top: vertPos,
        left: side
    }, 900, 'easeOutCirc');

    if (vertPos >= '39vh' && vertPos <= '44vh') {
        setTimeout(() => {
            $.playSound('sounds/goal_sound.mp3');
        }, 800);
        setTimeout(() => {
            alert('Гооол!!!');
        }, 900);
    }

		if (vertPos > '30vh' && vertPos < '39vh' ||
		vertPos > '44vh' && vertPos < '54vh') {
			setTimeout(() => {
				$.playSound('sounds/shtanga.mp3');
			}, 650);

			vertPos = '';
		}
});
