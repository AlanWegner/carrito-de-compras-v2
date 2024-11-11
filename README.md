# Este es mi carrito de compras v2

## Sobre el proyecto

Este carrito de compras lo hice con mucho 🤍. Esta vez se utiliza un arreglo para almacenar los productos.

## Template

```html
<template id="template">
  <li
    class="p-2 w-100 list-group-item d-flex justify-content-between align-items-center"
  >
    <span class="lead">Fruta</span>
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
</template>
```

## Código JS

```js
const carrito = document.querySelector("#carrito");
const botones = document.querySelectorAll(".btn-primary");
const template = document.querySelector("#template");
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

  if (posicion === -1) {
    carritoArray.push(producto);
  } else {
    carritoArray[posicion].cantidad++;
  }
  mostrarCarrito();
};

const mostrarCarrito = () => {
  carrito.textContent = "";

  carritoArray.forEach((item) => {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".lead").texContent = item.titulo;
    clone.querySelector(".badge").texContent = item.cantidad;

    fragment.appendChild(clone);
  });

  carrito.appendChild(fragment);
};

botones.forEach((item) => {
  item.addEventListener("click", agregarProductoAlCarrito);
});
```
