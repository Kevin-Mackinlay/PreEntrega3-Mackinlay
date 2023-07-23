//algoritmo con un condicional

// alert('Bienvenido a la Vinoteca virtual!');
// let edad = parseInt(prompt('Ingrese su edad'));
// if(edad < 18){
//     alert('usted es menor de edad y no puede realizar la compra');
// }else{
//     alert('usted es mayor de edad y puede realizar la compra');
// }

//algoritmo utilizando ciclo (while)

// let insertText = prompt("Put a text");
// while (insertText != "ESC") {
//   alert("The user entered " + insertText);
//   insertText = prompt("enter another text");
// }

//algoritmo utilizando (for)

// alert('Bienvenido a los mejores masajes por orden de llegada')

// for(i = 1 ; i <= 4; i++) {
//    let insertNombre = prompt("ingrese un nombre")
//    alert('turno Numero ' + i +  ' nombre:  ' +   insertNombre );

// }

//SIMULADOR  ↓↓

alert("Bienvenido a la tienda FUNGI");

class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  // sumarProducto(precio) {
  //   this.precio += precio;
  // }
}

const mostrarProductos = (productos) => {
  console.log("productos");

  productos.forEach((producto) => console.log(producto));
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

const productoExistente = () => {
  let nombreProducto = prompt("Ingrese nombre del producto");

  let indice = productos.findIndex((producto) => producto.nombre.toLowerCase() === nombreProducto.toLowerCase());

  if (indice === -1) {
    return alert(`el producto ${nombreProducto} no existe`);
  }

  return productos[indice];
};

const productos = [
  {
    id: 1,
    nombre: "reishi",
    precio: 100,
    stock: 3,
  },

  {
    id: 2,
    nombre: "cordyceps",
    precio: 150,
    stock: 4,
  },

  {
    id: 3,
    nombre: "shiitake",
    precio: 120,
    stock: 3,
  },
  {
    id: 4,
    nombre: "melena de Leon",
    precio: 180,
    stock: 5,
  },
];

let carrito = [];
let seleccion = prompt("Desea comprar algun producto si o no?");

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
  let producto = prompt("por favor elija el producto que desea agregar al carrito");
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
    console.log(carrito);
  } else {
    ("no tenemos ese producto");
  }
  seleccion = prompt("desea seguir comprando?");

  while (seleccion == "no") {
    alert("Menú:\n1 - Mostrar productos\n2 - Eliminar un producto\n3 - Pagar");
    let opcion = parseInt(prompt("Ingrese una opción"));

    switch (opcion) {
      case 1:
        mostrarCarrito();
        break;
      case 2:
        eliminarProducto();
        break;
      case 3:
        pagarProductos();
        break;
      default:
        alert("Ingrese una opcion correcta");
    }

    // carrito.forEach((carritoFinal) => {
    //   console.log(`producto: ${carritoFinal.producto} total a pagar = $${carritoFinal.precio} pesos`);
    // });
    // break;
  }
}

alert("Nos vemos pronto!");

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
