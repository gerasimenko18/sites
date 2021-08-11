/* TABS */

$('.card').on('click',function(){
    var currTab = $(this).parent().index();

    $('.card').removeClass('card-active');
    $(this).addClass('card-active');

    $('.tab-content').removeClass('active');
    $('.tab-content').eq(currTab).addClass('active');
})

/* HAMBURGER */

$('.hamburger').on('click',function(){
    $('.head__menu').toggle();
})

$('#closeMenu').on('click',function(){
    $('.head__menu').hide();
});


/* PARALLAX */

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

/* SLIDER */
var mySwiper = new Swiper ('.swiper-container', {
    direction : 'horizontal',
    spaceBetween : 50,
    slidesPerView: 3,
    loop : true,
    stopOnLastSlide : false,
    autoplay : {
        delay: 2000
    }
})

/* Валидация */

$.validator.addMethod("regex", function(value, element, regexp) {
    var regExsp = new RegExp(regexp);
    return regExsp.test(value);
},"Please check your input."
);

$("form").validate({
rules: {
    firstName: {
        required: true,
        regex : "[A-Za-z]{1,32}"   
    },
    phoneNumber: {
        digits : true,
        required: true,
        minlength: 10,
        maxlength: 11,
        regex: "[0-9]+"
    }
},
messages: {
    firstName: "Введите ваше имя правильно",
    phoneNumber: "Введите ваш номер"
}
});

/* Карта */

ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [56.31, 44.01],
            zoom: 10,
            controls: ['zoomControl','geolocationControl']
        });

        var myPlacemark = new ymaps.Placemark([56.31,44.01],{} , {
            iconImageSize : [32, 40]
        })

        myMap.balloon.open([51,85, 38,37], 'Содержание балуна', {
            closeButton: false
        })

        myMap.geoObjects.add(myPlacemark);
    }