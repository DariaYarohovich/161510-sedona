var open = document.querySelector(".page-header__menu-toggle");
var close = document.querySelector(".page-header__menu-close");
var menu = document.querySelector(".main-nav--closed");

open.addEventListener("click", function(event){
    event.preventDefault();
    menu.classList.add("main-nav--opened");
});

close.addEventListener("click", function(event){
    event.preventDefault();
    menu.classList.remove("main-nav--opened");
});