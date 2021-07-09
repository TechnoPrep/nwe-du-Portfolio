$(document).ready(function(){
    $('.nav-icon').on('click', function(){
        $(this).toggleClass('open');
        $('.nav-menu').toggleClass('open');
        $('.fa-bars').toggleClass('open');
        $('.fa-minus-square').toggleClass('open');
    });
});

$(document).ready(function(){
    $('.nav-link').on('click', function(){
        $('.nav-icon').toggleClass('open');
        $('.nav-menu').toggleClass('open');
        $('.fa-bars').toggleClass('open');
        $('.fa-minus-square').toggleClass('open');
    });
});