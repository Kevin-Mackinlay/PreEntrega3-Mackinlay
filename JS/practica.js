//Arrays

// const numeros = [1,2,3,4,5,6,7,8,9];

//  for (let i = 0; i < 9 ; i++){
//     console.log(numeros[i])
//  }

//  const nombres = ['pedro', 'jose', 'maria', 'luis'];
// console.log(`El array tiene ${nombres.length} elementos`);

// const numeros = [1,2,3,4,5,6,7,8,9];

// numeros.push(10);
// console.log(numeros);
// numeros.push('11'); //se puede agregar string
// console.log(numeros);

// numeros.unshift(0);
// console.log(numeros);

// numeros.shift();
// console.log(numeros);

// numeros.pop();
// console.log(numeros);

// numeros.splice(1,2); //primer parametro es la ubicacion- 2do parametro es el elementos
// console.log(numeros);

//  const nombres = ["pedro", "jose", "maria", "luis"];
//  console.log(nombres.join('-'));
//  alert(nombres.join("\n"));

//  const nombres = ["pedro", "jose", "maria", "luis"];
//  const nombres2 = ["carlos", "cesar", "juan"];
//  const listaNombres = nombres.concat(nombres2);
//  console.log(listaNombres);

// const femeninos = nombres.slice(2,3);
// console.log(`los nombres son ${nombres} y la unica mujer es ${nombres.slice(2,3)}`);

// console.log(nombres.indexOf('luis'));

// console.log(nombres.includes('maria'));

//   const numeros = [1,2,3,4,5,6,7,8,9];

//   for ( let i = 0 ; i < numeros.length ; i++) {
//     alert(numeros[i]);
//   }

// const listaNombres = [];
// let cantidad = 5;

// do{
//     let entrada = prompt("ingresar nombre");
//     listaNombres.push(entrada.toUpperCase());
//     console.log(listaNombres.length);
// } while (listaNombres.length != cantidad)

// alert(listaNombres.join("\n"))

// const listaNombres = [];
// let cantidad = 5;

// do{
//     let entrada = prompt('Ingrese nombre');
//     listaNombres.push(entrada.toUpperCase());
//     console.log(listaNombres.length);
// } while (listaNombres.length != cantidad);

// const nuevaLista = listaNombres.concat(['ANA', 'EVA']);

// alert(nuevaLista.join("\n"));

// const listaPersonas = [];
// let cantidad = 5;

// do{
//     let entrada = prompt('Ingrese su nombre');
//     listaPersonas.push(entrada.toUpperCase());
//     console.log(listaPersonas.length);
// }while (listaPersonas.length != cantidad)

// const nuevaLista = listaPersonas.concat(['ana', 'eva']);

// alert(nuevaLista.join("\n"));

//  const nombres = ["pedro", "jose", "maria", "luis"];

//  const eliminar = (nombre) => {
//     let index = nombres.indexOf(nombre)

//     if (index != -1) {
//         nombres.splice(index,1)
//     }
//  }

//  eliminar('pedro');
//  console.log(nombres);

// const productos = [
//   { id: 1, producto: "arroz" },
//   { id: 2, producto: "fideo" },
//   { id: 3, producto: "queso" },
// ];

// for (const producto of productos) {
//     console.log(producto.id);
//     console.log(producto.producto);
// }

class producto {
  constructor(nombre, precio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.vendido = false;
  }

  sumaIva() {
    this.precio = this.precio * 1.21;
  }
}

const productos = [];

productos.push(new Producto("lavandina", "200"));
productos.push(new Producto("manteca", "180"));
productos.push(new Producto("sal", "100"));

for (const producto of productos) producto.sumaIva();
console.log(productos);

//este ultimo codigo no esta funcionando ver!!