// bxslider
$(document).ready(function () {
    $(".pig_slider").bxSlider({
        auto: true,
        mode: 'fade',
        speed: 1000,
        pager: false,
        controls: false
    });
});
// slick
$(function () {
    $('.menu_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 0,
        arrows: false,
        swipe: false,
        cssEase: 'linear',
        pauseOnFocus: false,
        pauseOnHover: false,
    });
});