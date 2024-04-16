const buttonClickFirst = document.querySelector('.icon_1');
const buttonClickSecond = document.querySelector('.icon_2');
const catchFirst = document.querySelector('.container');
const catchSecond = document.querySelector('.containerSecond');

buttonClickFirst.addEventListener('click', () => {
    catchFirst.classList.add('displayNone');
    catchSecond.classList.remove('displayNone');
});

buttonClickSecond.addEventListener('click', () => {
    catchSecond.classList.add('displayNone');
    catchFirst.classList.remove('displayNone');
});
