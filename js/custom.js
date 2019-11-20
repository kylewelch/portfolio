

$main = $('#desktop');

$one = $('.one');
$two = $('.two');
$three = $('.three');
$four = $('.four');
$five = $('.five');
$six = $('.six');

$pulses = $('.one, .two, .three, .four, .five, .six');


$lines = $('.research, .psychology, .analysis, .interface, .interaction, .code');

function hidePulse() {
    $pulses.addClass('invisible');
}


/*
$act = $('#interaction');

$img.on('click', function() {
    this.src = 'images/interaction.png';
});
 */

$('.research, .one').hover(function(){
    $main.attr('src', 'images/research.png');
    hidePulse();
    $one.removeClass('invisible');
});



$('.psychology, .two').hover(function(){
    $main.attr('src', 'images/psychology.png');
    hidePulse();
    $two.removeClass('invisible');
});



$('.analysis, .three').hover(function(){
    $main.attr('src', 'images/psychology.png');
    hidePulse();
    $three.removeClass('invisible');
});



$('.interface, .four').hover(function(){
    $main.attr('src', 'images/main.png');
    hidePulse();
    $four.removeClass('invisible');
});



$('.interaction, .five').hover(function(){
    $main.attr('src', 'images/interaction.png');
    hidePulse();
    $five.removeClass('invisible');
});



$('.code, .six').hover(function(){
    $main.attr('src', 'images/code.png');
    hidePulse();
    $six.removeClass('invisible');
});




