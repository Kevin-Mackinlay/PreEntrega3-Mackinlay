//llamamos elementos
const productosEl = document.querySelector(".productos");
const carritoItemsEl = document.querySelector(".cart-items");
const carritoItemel = document.querySelector(".cart-item");

//mostramos productos
function mostrarProductos() {
  productos.forEach((producto) => {
    productosEl.innerHTML += ` 
      <div class="card" id="tarjeta" style="width: 18rem">
        <h4>${producto.nombre}</h4>
        <h6>Precio:${producto.precio}</h6>
        <p>Stock: ${producto.stock}</p>
        <img src="${producto.imgSrc}" alt="">
      </div>
      <div class="add-to-cart" onclick="agregarCarrito(${producto.id})">
      <button class=" btn btn-success"> Agregar </button>
      </div>
    `;
  });
}

mostrarProductos();

//carrito array
let carrito = [];

// agregar funcion

function agregarCarrito(id) {
  //chequeamos si el id del producto existe
  if (carrito.some((item) => item.id === id)) {
    alert("Este producto ya esta en el carrito!");
  } else {
    const item = productos.find((producto) => producto.id === id);
    carrito.push({
      ...item,
      numberOfUnits: 1,
    });
  }
  actualizarCarrito();
}

// actualizar carrito

function actualizarCarrito() {
  mostrarCarritoItems();
  // mostrarSubtotal();
}

function mostrarCarritoItems() {
  carritoItemsEl.innerHTML = ""; // borra el elemento del carrito
  carrito.forEach((item) => {
    carritoItemsEl.innerHTML += `
      <div class="cart-item"  style="width: 10rem">
              <h4>${item.nombre}</h4>
              <h6>Precio:${item.precio}</h6>
      </div>
    
`;
  });
}
// // selecciono Elementos
// const productosEl = document.querySelector(".productos");
// const carritoEl = document.querySelector("#carrito");

// // array de objetos
// let productos = [
//   { id: 0, nombre: "Reishi", precio: 100, stock: 10 },
//   { id: 1, nombre: "Cordyceps", precio: 150, stock: 20 },
//   { id: 2, nombre: "Shiitake", precio: 150, stock: 20 },
//   { id: 3, nombre: "Melena", precio: 200, stock: 15 },
// ];

// let carrito;

// //verificamos si no existe una clave llamada carrito y si nos devuelve NUll, entonces la creamos
// if (localStorage.getItem("carrito") === null) {
//   carrito = [];
// } else {
//   carrito = JSON.parse(localStorage.getItem("carrito"));
// }

// //realizo funcion para mostrar productos

// const mostrarProductos= () => {
//   productosEl.innerHTML = " ";
//   productos.forEach((producto, index) => {
//     let productoBox = document.createElement("div");
//     productoBox.innerHTML += `
//       <div class="card" id="tarjeta" style="width: 18rem">
//             <h4>${producto.nombre}</h4>
//             <h6>Precio:${producto.precio}</h6>
//             <p>Stock: ${producto.stock}</p>
//        </div>
//        `;
//     productosEl.appendChild(productoBox);

//     //agrego btn agregar
//     let btnAgregar = document.createElement("button");
//     btnAgregar.innerHTML = "Agregar";
//     productoBox.appendChild(btnAgregar);

//     btnAgregar.onclick = () => agregarProducto(index);
//   });
// }

// //funcion para agregar producto
// const agregarProducto = (index) => {
//   //agregamos la cantidad del contador
//   productos[index].cantidad = contador; //variable contador de archivo contador.js

//   //verificamos que haya cantidad y que no supere el stock
//   if (contador > productos[index].stock) {
//     return alert(`no hay stock suficiente el màximo de productos es ${productos[index].stock}`);
//   }

//   //validamos que el usuario agregue mìnimo 1 producto
//   if (contador === 0) {
//     return alert("debe agregar al menos 2 producto al carrito");
//   }

//   // parse el carrito data del localStorage
//   carrito = JSON.parse(localStorage.getItem("carrito"));

//   // Agregamos el producto al carrito con su cantidad tomada del contador general
//   carrito.push(productos[index]);

//   //guardamos el carrito en el localstorage psandolo a JSON
//   localStorage.setItem("carrito", JSON.stringify(carrito));

//   // descontamos el stock del producto
//   productos[index].stock -= contador;

//   //ponemos el contador en 0 y lo actualizamos
//   contador = 0;
//   actualizarContador(); //funcion de archivo contador.js

//   //mostramos los productos y el carritp actualizado
//   mostrarProductos();
//   mostrarCarrito();
// };

// const mostrarCarrito = () => {

//   carritoEl.innerHTML = " ";

//   //traemos el carrito del localstorage y lo parseamos para que lo pueda leer javascript
//   carrito = JSON.parse(localStorage.getItem("carrito"));

//   if (carrito === null) {
//     return; //hacer exit si la funcion carrito es null
//   }

//   carrito.forEach((producto) => {
//     let productoBox = document.createElement("div");
//     productoBox.innerHTML = `

//             <p>${producto.nombre}</p>
//             <p>Precio:${producto.precio}</p>
//             <p>Cantidad:${producto.cantidad}</p>
//             <p>Subtotal:${producto.precio * producto.cantidad}</p>

//        `;
//     carritoEl.appendChild(productoBox);
//   });

//   //agregamos un boton para vaciar el carrito
//   let vaciarCarrito = document.createElement("button");
//   vaciarCarrito.innerHTML = "Vaciar carrito";
//   carritoEl.appendChild(vaciarCarrito);

//   vaciarCarrito.onclick = () => {
//     carrito = [];
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//     mostrarCarrito();
//   }
// };

// mostrarProductos();
// mostrarCarrito();
