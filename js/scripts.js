var open = document.querySelector(".page-header__menu-toggle");
var close = document.querySelector(".page-header__menu-close");
var menu = document.querySelector(".main-nav--closed");
var main_menu = document.querySelector(".main-nav");

main_menu.classList.add("main-nav--closed");
open.classList.add("page-header__menu-toggle--display");

    open.addEventListener("click", function(event){
    event.preventDefault();
    main_menu.classList.add("main-nav--opened");
    open.classList.remove("page-header__menu-toggle--display");    
});

close.addEventListener("click", function(event){
    event.preventDefault();
    main_menu.classList.remove("main-nav--opened");
    open.classList.add("page-header__menu-toggle--display");
});


    ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [34.857613,-111.792908],
            zoom: 8,
            controls:['zoomControl']    
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Седона',
            balloonContent: 'Седона'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../../img/icon-map-marker.svg',
            // Размеры метки.
            iconImageSize: [27, 27],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-3, -42]
        });

    myMap.geoObjects.add(myPlacemark);
});

