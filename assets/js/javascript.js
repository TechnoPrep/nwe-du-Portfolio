$(document).ready(function(){
    $('.nav-icon').on('click', function(){
        $(this).toggleClass('open');
        $('.nav-menu').toggleClass('open');
        $('.fa-bars').toggleClass('open');
        $('.fa-minus-square').toggleClass('open');
    });
});