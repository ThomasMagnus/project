let burger = document.querySelector('.menu__burger');
let menu = document.querySelector('.menu');
let line = document.querySelector('.menu__burger-span')

burger.onclick = function() {
    menu.classList.toggle('active');
    burger.classList.toggle('active__span');
    line.classList.toggle('active__span');
};