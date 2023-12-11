/*Добавление класса по нажатию */

let getConteiner = document.getElementById('activeMenu');
let toggleElement = getConteiner.querySelector('.close');

toggleElement.onclick = function() {
    getConteiner.classList.toggle('activeBlock');
};