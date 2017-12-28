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
    var content = document.getElementsByClassName('content')[0], // Изменённая анимация
        activeMove = document.getElementsByClassName('active-move')[0], // Изменённая анимация
        square = document.createElement('div'), // Обёртка для квадрата
        square1 = document.createElement('div'), // Стены квадрата
        square2 = document.createElement('div'), // Стены квадрата
        square3 = document.createElement('div'), // Стены квадрата
        square4 = document.createElement('div'), // Стены квадрата
        square5 = document.createElement('div'), // Стены квадрата
        square6 = document.createElement('div'); // Стены квадрата

    square.classList.add('square-main');
    square1.classList.add('square');
    square1.classList.add('s1');
    square2.classList.add('square');
    square2.classList.add('s2');
    square3.classList.add('square');
    square3.classList.add('s3');
    square4.classList.add('square');
    square4.classList.add('s4');
    square5.classList.add('square');
    square5.classList.add('s5');
    square6.classList.add('square');
    square6.classList.add('s6');

    content.classList.add('rotate-class');

    activeMove.innerHTML = '';
    square.append(square1, square2, square3, square4, square5, square6);
    activeMove.appendChild(square);
}