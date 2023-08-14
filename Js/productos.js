let productos = [
  { id: 0, nombre: "Reishi", precio: 100, stock: 10, imgSrc: "images/shop4.png" },
  { id: 1, nombre: "Cordyceps", precio: 150, stock: 20, imgSrc: "images/shop9.png" },
  { id: 2, nombre: "Shiitake", precio: 150, stock: 20, imgSrc: "images/shop8.png" },
  { id: 3, nombre: "Melena", precio: 200, stock: 5, imgSrc: "images/shop7.png" },
];

// //llamar elemento
// const contadorEl = document.querySelector("#contador");

// // llamar elemento botones
// const sumarBoton = document.querySelector("#sumar");
// const restarBoton = document.querySelector("#restar");

// // variable para almacenar el valor del contador
// let contador = 0;

// // Deshabilitamos boton restar para que no ponga numeros negativos
// restarBoton.disabled = true;

// //funcion para actualizar el contador
// const actualizarContador = () => {
//   //mostramos en el html el valor del contador modificado
//   contadorEl.innerHTML = contador;

//   //verificamos si el contador sigue en 0 sino lo habilitamos para que pueda restar
//   if (contador === 0) {
//     restarBoton.disabled = true;
//   } else {
//     restarBoton.disabled = false;
//   }
// };

// sumarBoton.onclick = () => {
//     // Summamos el contador de 1 en 1 y actualizamos
//     contador++;
//     actualizarContador();
// };

// restarBoton.onclick = () => {
//     //restamos el contador de 1 en 1
//     contador--;
//     actualizarContador();
// }
