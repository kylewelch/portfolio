/**
 * Created by kylewelch on 4/20/17.
 */
$('#one').click(function(){
    $('.first').addClass('hidden');
    hidePulse();
    $('.firstAnswer').removeClass('hidden');
});

$('#two').click(function(){
    $('.first').addClass('hidden');
    hidePulse();
    $('.secondAnswer').removeClass('hidden');
});

$('#three').click(function(){
    $('.second').addClass('hidden');
    hidePulse();
    $('.thirdAnswer').removeClass('hidden');
});

$('#four').click(function(){
    $('.second').addClass('hidden');
    hidePulse();
    $('.fourthAnswer').removeClass('hidden');
});

$('#five').click(function(){
    $('.third').addClass('hidden');
    hidePulse();
    $('.fifthAnswer').removeClass('hidden');
});

$('#six').click(function(){
    $('.third').addClass('hidden');
    hidePulse();
    $('.sixthAnswer').removeClass('hidden');
});