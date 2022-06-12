const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu');
      closeElem = document.querySelector('.menu__close')

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


const counters = document.querySelectorAll('.usage__elem-title span'),
    lines = document.querySelectorAll('.usage__scale-yellow');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});