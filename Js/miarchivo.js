//SIMULADOR  ↓↓

alert("Bienvenido a la tienda FUNGI");

class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

const mostrarProductos = (productos) => {
  console.clear();

  productos.forEach((producto) => console.log(producto));
};

const productos = [new Producto(1, "reishi", 100, 3), new Producto(2, "cordyceps", 150, 5), new Producto(3, "shiitake", 120, 3), new Producto(4, "melena de leon", 200, 10)];

mostrarProductos(productos);

const productoExistente = () => {
  let idProducto = parseInt(prompt("Ingrese el codigo del producto"));

  let indice = productos.findIndex((producto) => producto.id === idProducto);

  if (indice === -1) {
    return alert(`el producto ${idProducto} no existe`);
  }

  return productos[indice];
};

const eliminarProducto = () => {
  const productoCarrito = productoExistente();

  if (!productoCarrito) return;

  const confirmacion = confirm(`Estas seguro que deseas borrar este ${productoCarrito.nombre} de tu carrito?`);

  if (confirmacion) {
    productos = productos.filter((producto) => producto.nombre.toLowerCase() !== productoCarrito.nombre.toLowerCase());
    mostrarProductos(productos);
  } else {
    alert("eliminacion cancelada");
  }
};


let carrito = [];

const totalCarrito = () => {
  let total = 0;
  carrito.forEach((producto) => {
    total += producto.precio;
  });
  return total;
};

let seleccion = prompt("Desea comprar alguno de nuestros productos si o no?");

while (seleccion !== "si" && seleccion != "no") {
  alert("si o no?");
  seleccion = prompt("Desea comprar si o no?");
}

if (seleccion == "si") {
  alert("ok, estos son los productos disponibles");
  let losProductos = productos.map((producto) => producto.id + "- " + producto.nombre + " - " + "$" + producto.precio + " - " + "(" + producto.stock + " en stock)");
  alert(losProductos.join(" \n "));
} else if (seleccion == "no") {
  alert("gracias por visitarnos!");
}

while (seleccion != "no") {
  let producto = parseInt(prompt("Por favor elija el codigo del producto que desea agregar al carrito"));
  let precio = 0;
  if (producto == "reishi" || producto == "cordyceps" || producto == "shiitake" || producto == "Melena de leon") {
    switch (producto) {
      case "reishi":
        id = 1;
        precio = 100;
        stock = 10;
        break;
      case "cordyceps":
        id = 2;
        precio = 150;
        stock = 10;
        break;
      case "shiitake":
        id = 3;
        precio = 120;
        stock = 10;
        break;
      case "melena de leon":
        id = 4;
        precio = 180;
        stock = 10;
        break;
      default:
        break;
    }
    carrito.push({ producto, precio });
  } else {
    ("no tenemos ese producto");
  }
  seleccion = prompt("desea seguir comprando?");

  while (seleccion == "no") {
    alert("Menú:\n1 - Eliminar un producto\n2 - Pagar\n3 - Salir");
    let opcion = parseInt(prompt("Ingrese una opción"));

    switch (opcion) {
      case 1:
        eliminarProducto();
        break;
      case 2:
        totalCarrito();
        break;
      case 3:
        salir();
        break;
      default:
        alert("Ingrese una opcion correcta");
        break
    }
  }
}

// sumarProducto(precio) {
//   this.precio += precio;
// }

// carrito.forEach((carritoFinal) => {
//   console.log(`producto: ${carritoFinal.producto} total a pagar = $${carritoFinal.precio} pesos`);
// });
// break;

// const comprarProducto = () => {
//   let nombre = prompt("Ingrese el producto que desea")

// }

//Esto es para añadir en el futuro Eugenia! ↓↓

//Es la ultima actividad que nos dieron en clase, la deje comentada, se que no es una buena práctica.

// function verificarStock() {
//   if (producto.stock < 0) {
//     alert("tenemos stock");
//   } else {
//     alert("no tenemos màs stock");
//   }
// }

// verificarStock();

// class Producto {
//   constructor(nombre, precio, stock) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
//   }
//   comprar() {
//     if (this.stock > 0) {
//       this.stock--;
//       console.log("tenemos stock");
//     } else {
//       console.log("no tenemos màs stock");
//     }
//   }
// }

// const producto1 = new Producto("cubensis", 1000, 10);
// console.log(producto1);

// const producto2 = new Producto("portobello", 100, 5);
// console.log(producto2);

// const productos = [
//   {
//     id: 1,
//     nombre: "reishi",
//     precio: 100,
//     stock: 3,
//   },

//   {
//     id: 2,
//     nombre: "cordyceps",
//     precio: 150,
//     stock: 4,
//   },

//   {
//     id: 3,
//     nombre: "shiitake",
//     precio: 120,
//     stock: 3,
//   },
//   {
//     id: 4,
//     nombre: "melena de Leon",
//     precio: 180,
//     stock: 5,
//   },
// ];
