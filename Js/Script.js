/*
    Autor: Torres Rocha Luis
    Fecha. 3-Octubre-2023
*/

'use strict'

/* Variables para la navegacion del menu hamburguesa, utilizado para que la pagina sea responsiva*/
let menu = document.querySelector('#menu-bar');
let navmenu = document.querySelector('.navmenu');

/* Evento del menu*/
menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navmenu.classList.toggle('active');
});

/* Variable que se utiliza para el carrusel, aqui se encuentran los 2 modos
automatico y manual*/
var swiper = new Swiper(".inicio-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    loop:true,
    autoHeight:true,
    grabCursor:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints:{
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".cTradiciones", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
    delay: 4500,
    disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
}); 
