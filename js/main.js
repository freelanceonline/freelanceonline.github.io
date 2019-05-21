var i = 1;
$('a#viewpass').on('click', function(){
    $('input#password').removeAttr('type');
    if( i == 1 ){
        $('input#password').attr('type', 'password');
        i++;
    }
    else{
        $('input#password').attr('type', 'text');
        i--;
    }
});