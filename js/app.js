const carrito = document.querySelector('#carrito');
const botones = document.querySelectorAll('.btn-primary');
const template = document.querySelector('#template');

const carritoArray = [];

const agregarProductoAlCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };
    console.log(producto)
};

botones.forEach((item) => {
    item.addEventListener('click', agregarProductoAlCarrito);
});