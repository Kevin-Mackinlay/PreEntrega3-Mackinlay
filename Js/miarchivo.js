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

const productos = [
  {
    nombre: "reishi",
    precio: 100,
    stock: 3,
  },

  {
    nombre: "cordyceps",
    precio: 150,
    stock: 4,
  },

  {
    nombre: "shiitake",
    precio: 120,
    stock: 3,
  },
  {
    nombre: "melena de Leon",
    precio: 180,
    stock: 5,
  },
];

let carrito = [];

let seleccion = prompt("le gustaria comprar un producto si o no?");

while (seleccion !== "si" && seleccion != "no") {
  alert("si o no?");
  seleccion = prompt("desea comprar algo si o no?");
}

if (seleccion == "si") {
  alert("ok, estos son nuestros productos");
  let losProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$ " + producto.stock + " en stock");
  alert(losProductos.join(" - "));
} else if (seleccion == "no") {
  alert("gracias por visitarnos!");
}

while (seleccion != "no") {
  let producto = prompt("por favor elija el producto que desea para agregar al carrito");
  let precio = 0;

  if (producto == "reishi" || producto == "cordyceps" || producto == "shiitake" || producto == "Melena de leon") {
    switch (producto) {
      case "reishi":
        precio = 100;
        stock = 10;
        break;
      case "cordyceps":
        precio = 150;
        stock = 10;
        break;
      case "shiitake":
        precio = 120;
        stock = 10;
        break;
      case "Melena de leon":
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
    alert("gracias por la compra!");
    carrito.forEach((carritoFinal) => {
      console.log(`producto: ${carritoFinal.producto}, total a pagar por producto ${carritoFinal.precio}`);
    });
    break;
  }
}



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