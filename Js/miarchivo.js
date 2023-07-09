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

alert("Bienvenido a la tienda FUNGI");

let nombreUsuario = prompt("Ingrese su nombre");

const productos = [
  {
    nombre: "reishi",
    precio: 100,
  },

  {
    nombre: "cordyceps",
    precio: 150,
  },

  {
    nombre: "shiitake",
    precio: 120,
  },
  {
    nombre: "Melena de Leon",
    precio: 180,
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
  let losProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
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
        break;
      case "cordyceps":
        precio = 150;
        break;
      case "shiitake":
        precio = 120;
        break;
      case "Melena de leon":
        precio = 180;
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
