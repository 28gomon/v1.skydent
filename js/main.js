$(function () {

    $('.offer__item h3').equalHeight();
    $('.offer__group-link .offer__item').equalHeight();
    $('.news__item .news__item-title').equalHeight();
    $('.news__item .news__item-detail').equalHeight();


    $('.menu-button').on('click', function() {
        $('.menu').toggleClass('menu_active');
    });

    $("a[href^='#']").click(function(){
        var _href = $(this).attr('href');
        $('html, body').animate({scrollTop: $(_href).offset().top -55 + 'px'});
        return false;
    })

});