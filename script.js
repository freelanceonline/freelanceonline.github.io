$('.closeBtn').on('click', function(){
    $('.windowUp').css('display', 'none');
    $('.windowIn').css('display', 'none');
    $('button.signUp').css('display', 'block');
    $('button.logIn').css('display', 'block');
});
$('button.signUp').on('click', function(){
    $('.windowIn').css('display', 'none');
    $('.windowUp').css('display', 'block');
    $(this).css('display', 'none');
    $('button.logIn').css('display', 'none');
});
$('button.logIn').on('click', function(){
    $('.windowUp').css('display', 'none');
    $('.windowIn').css('display', 'block');
    $(this).css('display', 'none');
    $('button.signUp').css('display', 'none');
});
$('input#password').on('keyup', function(){
var password = $('input#password').val();
var passwordRepeat = $('input#passwordRepeat').val();
    if(password.length >= 6){
        $('.password .fa-times').css('display', 'none');
        $('.password .fa-check').css('display', 'block');
    }
    else{
        $('.password .fa-check').css('display', 'none');
        $('.password .fa-times').css('display', 'block');
    }
    if(passwordRepeat == password){
        $('.passwordRepeat .fa-times').css('display', 'none');
        $('.passwordRepeat .fa-check').css('display', 'block');
    }
    else{
        $('.passwordRepeat .fa-check').css('display', 'none');
        $('.passwordRepeat .fa-times').css('display', 'block');
    }
    if(password.length == 0){
        $('.password .fa-times').css('display', 'none');
        $('.password .fa-check').css('display', 'none');
    }
    if(passwordRepeat.length == 0){
        $('.passwordRepeat .fa-times').css('display', 'none');
        $('.passwordRepeat .fa-check').css('display', 'none');
    }
});
$('input#passwordRepeat').on('keyup', function(){
var password = $('input#password').val();
var passwordRepeat = $('input#passwordRepeat').val();
    if(passwordRepeat == password){
        $('.passwordRepeat .fa-times').css('display', 'none');
        $('.passwordRepeat .fa-check').css('display', 'block');
    }
    else{
        $('.passwordRepeat .fa-check').css('display', 'none');
        $('.passwordRepeat .fa-times').css('display', 'block');
    }
    if(password.length == 0){
        $('.password .fa-times').css('display', 'none');
        $('.password .fa-check').css('display', 'none');
    }
    if(passwordRepeat.length == 0){
        $('.passwordRepeat .fa-times').css('display', 'none');
        $('.passwordRepeat .fa-check').css('display', 'none');
    }
});
$(function(){
var password = $('input#password').val();
var passwordRepeat = $('input#passwordRepeat').val();
    if(password.length == 0){
        $('.password .fa-times').css('display', 'none');
        $('.password .fa-check').css('display', 'none');
    }
    if(passwordRepeat.length == 0){
        $('.passwordRepeat .fa-times').css('display', 'none');
        $('.passwordRepeat .fa-check').css('display', 'none');
    }
});