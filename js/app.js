const carrito = document.querySelector('#carrito');
const botones = document.querySelectorAll('.btn-primary');
const template = document.querySelector('#template');
const fragment = document.createDocumentFragment();

const carritoArray = [];

const agregarProductoAlCarrito = (e) => {
    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };
    const posicion = carritoArray.findIndex((item) => {
        return item.titulo === producto.titulo;
    });
    
    if(posicion === -1) {
        carritoArray.push(producto)
    } else {
        carritoArray[posicion].cantidad++;
    };
    mostrarCarrito();
};

const mostrarCarrito = () => {

    carrito.textContent = '';

    carritoArray.forEach((item) => {
        const clone = template.content.cloneNode(true);

        clone.querySelector('.lead').texContent = item.titulo;
        clone.querySelector('.badge').texContent = item.cantidad;

        fragment.appendChild(clone);
    });

    carrito.appendChild(fragment);
};

botones.forEach((item) => {
    item.addEventListener('click', agregarProductoAlCarrito);
});