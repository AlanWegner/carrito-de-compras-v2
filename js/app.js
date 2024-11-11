const carrito = document.querySelector('#carrito');
const botones = document.querySelectorAll('.btn-primary');
const template = document.querySelector('#template');

const agregarProductoAlCarrito = (e) => {
    console.log(e.target.dataset.fruta);
};

botones.forEach((item) => {
    item.addEventListener('click', agregarProductoAlCarrito);
});