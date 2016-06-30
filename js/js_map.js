 ymaps.ready(function () {
     var myMap = new ymaps.Map("map", {
         center: [34.857613,-111.792908],
         zoom: 8,
         controls:["zoomControl"]    
    }, {
         searchControlProvider: "yandex#search"
    }),
     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: "Седона",
        balloonContent: "Седона"
     }, {
        iconLayout: "default#image",
        iconImageHref: "../img/icon-map-marker.svg",
        iconImageSize: [27, 27],
        iconImageOffset: [-3, -42]
     });

    myMap.geoObjects.add(myPlacemark);
});