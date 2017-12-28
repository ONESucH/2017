'use strict';

/* Снежинки */
window.onload = function () {
    var content = document.getElementsByClassName('content')[0];

    setInterval(function () {
        var widthWindow = window.innerWidth,
            heightWindow = window.innerHeight,
            snow = document.createElement('span'),
            randomXSnowPosition = Math.floor(Math.random() * (widthWindow - 50) + 50);

        snow.className = 'snow';
        
        snow.style.left = randomXSnowPosition + 'px';

        content.append(snow);
        
        /* Удаляем элемент по ID, мы его не указывали */
        setTimeout(function () {
            snow.parentNode.removeChild(snow);
        }, 10500);
    }, 300);
};

/* Создаём блоки */
function createBlock() {
    var content = document.getElementsByClassName('content')[0],
        activeMove = document.getElementsByClassName('active-move')[0];

    content.classList.add('rotate-class');

    activeMove.innerHTML = '';
}