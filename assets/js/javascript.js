$(document).ready(function(){
    $('.nav-icon').on('click', function(){
        $(this).toggleClass('open');
        $('.nav-menu').toggleClass('open');
        $('.fa-bars').toggleClass('open');
        $('.fa-minus-square').toggleClass('open');
        if($('.nav-bg').css('visibility')==='hidden'){
            $('.nav-bg').css('visibility','visible');
        } else $('.nav-bg').css('visibility','hidden');
    });
});

