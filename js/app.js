const carrito = document.querySelector('#carrito');
const botones = document.querySelectorAll('.btn-primary');
const template = document.querySelector('#template');

const agregarProductoAlCarrito = (e) => {
    console.log('me diste click');
};

botones.forEach((item) => {
    item.addEventListener('click', agregarProductoAlCarrito);
});