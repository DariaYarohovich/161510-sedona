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


