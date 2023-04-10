let close = document.querySelector('.close');
let open = document.querySelector('.open');
let nav = document.querySelector('#nav');
let section = document.querySelector('section');

open.addEventListener('click', () => {
    nav.style.width = '200px';
    section.style.marginLeft = '200px';
});

close.addEventListener('click', () => {
    nav.style.width = '0';
    section.style.marginLeft = '0';
});
