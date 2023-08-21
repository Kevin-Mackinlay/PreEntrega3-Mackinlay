const productsEl = document.querySelector(".products");
const cartItemsEl = document.getElementById("cartItems");
const cartItemEl = document.querySelector(".cart");
const subtotalEl = document.querySelector(".subtotal");
const totalPriceEl = document.querySelector("#totalPrice");
const clearCartEl = document.getElementById("clear");


const renderProducts = () => {
  productsEl.innerHTML = " ";
  fetch("/products.json")
    .then((resp) => resp.json())
    .then((data) => {
      data.forEach((product) => {
        let productBox = document.createElement("div");
        productBox.innerHTML = `
          <div class="product medium-4 columns" data-name=${product.name} data-price=${product.price} data-id=${product.id}>
            <img src=${product.imgSrc} alt=${product.name} />
            <h3>${product.name}</h3>
            <input type="text" class="count" value="${product.stock}" />
            <button class="tiny" ${product.stock <= 0 ? "disabled" : ""}>Add to cart</button>
            <button class="tiny eliminate">Eliminate</button>
          </div>`;
        productsEl.appendChild(productBox);

        let btnAdd = productBox.querySelector(".tiny:not(.eliminate)");
        btnAdd.onclick = () => addToCart(product.id);
        btnAdd.addEventListener("click", () => {
          if (product.stock <= 0) {
            alert("This product is out of stock.");
            return;
          }
          Toastify({
            text: "Added product!",
            duration: 2000,
            gravity: "center",
            position: "right",
            style: {
              background: "linear-gradient(to right, #5bce51 ,  #bcedb8  ",
            },
          }).showToast();
        });

        let btnEliminate = productBox.querySelector(".eliminate");
        btnEliminate.addEventListener("click", () => {
          eliminateFromCart(product.id);
          Toastify({
            text: "Item eliminated",
            duration: 2000,
            gravity: "center",
            position: "right",
            style: {
              background: "linear-gradient(to right, #ea3e3e  ,  #dd8080  ",
            },
          }).showToast();
        });
      });
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
};

renderProducts();


// array cart
let cart;

if (localStorage.getItem("cart") === null) {
  cart = [];
} else {
  cart = JSON.parse(localStorage.getItem("cart"));
}

const eliminateFromCart = (id) => {
  cart = cart.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  renderProducts();
};

// const countRemainingStock = () => {
//   products.forEach((product) => {
//     let remainingStock = product.stock;

//     cart.forEach((item) => {
//       if (item.id === product.id) {
//         remainingStock -= item.numberOfUnits;
//       }
//     });

//     product.remainingStock = remainingStock;
//   });
// };

const updateCart = () => {
  //   countRemainingStock();
  renderTotalPrice();
};

const addToCart = (id) => {
  console.log("addToCart called");
  const item = products.find((product) => product.id === id);
  console.log("Item stock:", item.stock);
  if (item.stock <= 0) {
    alert("this product is out of stock.");
  } else {
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Cart updated:", cart);
  }
  updateCart();
  //   countRemainingStock();
};

const clearCart = () => {
  cart = [];
  localStorage.removeItem("cart");
  renderTotalPrice();
};
clearCartEl.addEventListener("click", clearCart);

const renderTotalPrice = () => {
  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
  });
  console.log("TOTAL Price:", totalPrice);
  totalPriceEl.textContent = `${totalPrice} $`;
};

renderTotalPrice();

// //llamamos elementos
// const productosEl = document.querySelector(".productos");
// const carritoItemsEl = document.querySelector(".cart-items");
// const carritoItemel = document.querySelector(".cart-item");
// const subtotalEl = document.querySelector(".subtotal");

// //mostramos productos
// const mostrarProductos = () => {
//   productosEl.innerHTML = " ";
//   productos.forEach((producto, index) => {
//     let productoBox = document.createElement("div");
//     productoBox.innerHTML = `
//       <div class="card" id="tarjeta" style="width: 18rem">
//         <h4>${producto.nombre}</h4>
//         <h6>Precio:${producto.precio}</h6>
//         <p>Stock: ${producto.stock}</p>
//         <img src="${producto.imgSrc}" alt="">
//       </div>
//       `;
//     productosEl.appendChild(productoBox);

//     let btnAgregar = document.createElement("button");
//     btnAgregar.innerHTML = `

//         <button class=" btn btn-success"> Agregar </button>
//       `;
//     productoBox.appendChild(btnAgregar);

//     btnAgregar.onclick = () => agregarCarrito(index);

//     btnAgregar.addEventListener("click", () => {
//       swal.fire({
//         title: "Genial",
//         text: "Haz agregado estre producto al carrito",
//         icon: "success",
//         confirmButtonText: "ok",
//       });
//     });

//     let btnEliminar = document.createElement("button");
//     btnEliminar.innerHTML = `

//         <button class=" btn btn-danger"> Eliminar </button>
//       `;
//     productoBox.appendChild(btnEliminar);

//     btnEliminar.onclick = () => eliminarItemCarrito(index);

//     btnEliminar.addEventListener("click", () => {
//       Toastify({
//         text: "Producto eliminado!",
//         duration: 2000,
//         gravity: "top",
//         position: "right",
//         style: {
//           background: "linear-gradient(to right, #ed754a,  #e9a187 ",
//         },
//       }).showToast();
//     })
//   });
// };

// mostrarProductos();

// //carrito array
// let carrito;

// if (localStorage.getItem("carrito") === null) {
//   carrito = [];
// } else {
//   carrito = JSON.parse(localStorage.getItem("carrito"));
// }

// // agregar funcion

// function agregarCarrito(id) {
//   //chequeamos si el id del producto existe
//   if (carrito.some((item) => item.id === id)) {
//     alert("Este producto ya esta en el carrito!");
//   } else {
//     const item = productos.find((producto) => producto.id === id);
//     carrito.push({
//       ...item,
//       numberOfUnits: 1,
//     });
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//   }
//   actualizarCarrito();
// }

// // actualizar carrito

// function actualizarCarrito() {
//   mostrarCarritoItems();
//   mostrarSubtotal();
// }

// //calcular subtotal

// function mostrarSubtotal() {
//   let precioTotal = 0;

//   carrito.forEach((item) => {
//     precioTotal += item.precio;
//   });
//   subtotalEl.innerHTML = `Subtotal: $${precioTotal}`;
// }

// //funcion mostrar carrito
// function mostrarCarritoItems() {
//   carritoItemsEl.innerHTML = ""; // borra el elemento del carrito
//   carrito.forEach((item) => {
//     carritoItemsEl.innerHTML += `
//       <div class="cart-item"  style="width: 10rem">
//               <h4>${item.nombre}</h4>
//               <h6>Precio:${item.precio}</h6>
//       </div>

// `;
//   });
// }

// //funcion Eliminar
// function eliminarItemCarrito(id) {
//   carrito = carrito.filter((item) => item.id !== productos[id].id);

//   actualizarCarrito();
// }
