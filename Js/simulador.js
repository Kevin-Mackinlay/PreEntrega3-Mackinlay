alert("Bienvenido a la tienda FUNGI, usted puede seleccionar solo tres prodructos en total");

let nombreUsuario = prompt("Ingrese su nombre");


const productos = [
  {
    id: 1,
    nombre: "reishi",
    precio: 100,
  },

  {
    id: 2,
    nombre: "cordyceps",
    precio: 150,
  },

  {
    id: 3,
    nombre: "shitake",
    precio: 120,
  },
];

function seleccionarProductos () {
    productoSeleccionado = prompt('introduzca el id del producto');

}