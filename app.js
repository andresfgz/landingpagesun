const btn = document.querySelector('#burger-menu');
const menu = document.querySelector('#menu-items');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
})