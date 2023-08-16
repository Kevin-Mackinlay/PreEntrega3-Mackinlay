//llamamos elementos
const productosEl = document.querySelector(".productos");
const carritoItemsEl = document.querySelector(".cart-items");
const carritoItemel = document.querySelector(".cart-item");
const subtotalEl = document.querySelector(".subtotal");

//mostramos productos
const mostrarProductos = () => {
  productosEl.innerHTML = " ";
  productos.forEach((producto, index) => {
    let productoBox = document.createElement("div");
    productoBox.innerHTML = ` 
      <div class="card" id="tarjeta" style="width: 18rem">
        <h4>${producto.nombre}</h4>
        <h6>Precio:${producto.precio}</h6>
        <p>Stock: ${producto.stock}</p>
        <img src="${producto.imgSrc}" alt="">
      </div>
      `;
    productosEl.appendChild(productoBox);

    let btnAgregar = document.createElement("button");
    btnAgregar.innerHTML = `
     
        <button class=" btn btn-success"> Agregar </button>
      `;
    productoBox.appendChild(btnAgregar);


    btnAgregar.onclick = () => agregarCarrito(index);

    

    btnAgregar.addEventListener("click", () => {
      swal.fire({
        title: "Genial",
        text: "Haz agregado estre producto al carrito",
        icon: "success",
        confirmButtonText: "ok",
      });
    });

    
  

    let btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = `
     
        <button class=" btn btn-danger"> Eliminar </button>
      `;
    productoBox.appendChild(btnEliminar);

    btnEliminar.onclick = () => eliminarItemCarrito(index);

    btnEliminar.addEventListener("click", () => {
      Toastify({
        text: "Producto eliminado!",
        duration: 2000,
        gravity: "top",
        position: "right",
        style: {
          background: "linear-gradient(to right, #ed754a,  #e9a187 ",
        },
      }).showToast();
    })
  });
};

mostrarProductos();

//carrito array
let carrito;

if (localStorage.getItem("carrito") === null) {
  carrito = [];
} else {
  carrito = JSON.parse(localStorage.getItem("carrito"));
}

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
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  actualizarCarrito();
}

// actualizar carrito

function actualizarCarrito() {
  mostrarCarritoItems();
  mostrarSubtotal();
}

//calcular subtotal

function mostrarSubtotal() {
  let precioTotal = 0;

  carrito.forEach((item) => {
    precioTotal += item.precio;
  });
  subtotalEl.innerHTML = `Subtotal: $${precioTotal}`;
}

//funcion mostrar carrito
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

//funcion Eliminar
function eliminarItemCarrito(id) {
  carrito = carrito.filter((item) => item.id !== productos[id].id);

  actualizarCarrito();
}
