const carrito = document.querySelector('#carrito');
const botones = document.querySelectorAll('.btn-primary');
const template = document.querySelector('#template');

botones.forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log('Me diste click');
    });
});