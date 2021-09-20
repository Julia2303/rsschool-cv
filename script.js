'use strict'

const hamburger = document.querySelector('.menu__icon');
const menuList = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__link');

hamburger.addEventListener('click', openMenu);

function openMenu() {
    hamburger.classList.toggle('active');
    menuList.classList.toggle('active');
}

menuLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    hamburger.classList.remove('active');
    menuList.classList.remove('active');
}