import $ from "jquery";
import slick from "slick-carousel";

// Slick slider

$(document).ready(function () {

    $('.slider-number').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows: $('.arrows-main--number'),
        prevArrow: '<div class="arrow-btn arrow-btn--prev"><svg><use xlink:href="../img/sprite.svg#icon-leftArrow"></use></svg></div>',
        nextArrow: '<div class="arrow-btn arrow-btn--next"><svg><use xlink:href="../img/sprite.svg#icon-rightArrow"></use></svg></div>',
    });



/*SLIDER REVIEWS */
$('.listNavi').slick({
    dots: false,
    arrows: true,
    focusOnSelect: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.sliderTrust',
    appendArrows: $('.bgNavi .sliderArrows'),
    prevArrow: '<span class="arPrev"></span>',
    nextArrow: '<span class="arNext"></span>',
        responsive: [
        {breakpoint: 1230,settings: {slidesToShow: 7,slidesToScroll: 1}},
        {breakpoint: 1150,settings: {slidesToShow: 6,slidesToScroll: 1}},
        {breakpoint: 1050,settings: {slidesToShow: 5,slidesToScroll: 1}},
        {breakpoint: 870,settings: {slidesToShow: 4,slidesToScroll: 1}},
        {breakpoint: 700,settings: {slidesToShow: 3,slidesToScroll: 1}},
        {breakpoint: 550,settings: {slidesToShow: 2,slidesToScroll: 1}},
        {breakpoint: 450,settings: {slidesToShow: 1,slidesToScroll: 1}}]
});
$('.sliderTrust').slick({
    dots: false,
//            autoplay: true,
    arrows: true,
    slidesToShow: 1,			
    adaptiveHeight: true,
    slidesToScroll: 1,
    asNavFor: '.listNavi',
    appendArrows: '.arrows-main--review',
    prevArrow: '<div class="arrow-btn arrow-btn--prev"><svg><use xlink:href="../img/sprite.svg#icon-leftArrow"></use></svg></div>',
    nextArrow: '<div class="arrow-btn arrow-btn--next"><svg><use xlink:href="../img/sprite.svg#icon-rightArrow"></use></svg></div>',
});

$('.sliderReg').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,			
    adaptiveHeight: true,
    slidesToScroll: 1,
    appendArrows: $('.bgReg .sliderArrows'),
    prevArrow: '<div class="arrow-btn arrow-btn--prev"><svg><use xlink:href="../img/sprite.svg#icon-leftArrow"></use></svg></div>',
    nextArrow: '<div class="arrow-btn arrow-btn--next"><svg><use xlink:href="../img/sprite.svg#icon-rightArrow"></use></svg></div>',
        responsive: [
        {breakpoint: 1169,settings: {slidesToShow: 3,slidesToScroll: 1}},
        {breakpoint: 800,settings: {slidesToShow: 2,slidesToScroll: 1}},
        {breakpoint: 520,settings: {slidesToShow: 1,slidesToScroll: 1}}
        ]
});

//TABS 
$(".tabs > span").on('click',function() {
    var id = $(this).data("id");
    $(this).siblings().removeClass("active");
    $(this).addClass('active');
    $('.tabText').removeClass("active").css('display', 'none');
    $('.tabCat').removeClass("active");
    $('.tabText[data-id='+id+']').fadeIn();
    $('.tabCat[data-id='+id+']').addClass("active");
});

$('.ourClients .imgItem').each(function(index) {
    if (index > 13) $(this).fadeOut();
  });

$('.clickMore').on('click',function() {

    $('.ourClients .imgItem').each(function(index) {
      if (index > 13) $(this).fadeToggle().delay(500);
    });
    
    $(this).toggleClass('pushBut');
    if ($(this).hasClass('pushBut')) $(this).html('Скрыть');
    else $(this).html('Показать еще');
  });

  // Menu scroll

  let menu = $('.main-menu'),
    mainSectionHeight = $('.main-screen').height();

  $(document).on('scroll', function () {

    let documentScroll = $(this).scrollTop();

    if (documentScroll > mainSectionHeight) {
      menu.addClass('locked');
    } else {
      menu.removeClass('locked');
    }
  });




});