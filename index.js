// tipos de variables

// declara una variable

var nombre;
let apellido;

// Agregar una variable

// nombre = "Dante";
// console.log(nombre);
// apellido = "Diaz";

// nombre = "Juan";

// variable asignada

// let edad = 40;

// Const

// const pais = "Argentina";

// Camel Case

let kevinMackinlay = "programador javascript";
console.log(kevinMackinlay)


// Salida de datos

// console.log("Hola mundo");
// console.log(apellido);
// console.log("la edad es: " + edad);

// alert("Hola");

// let edad = prompt("Ingrese su edad");
// alert("La edad ingresada es:"  + edad);

//Ejercicio

// let añoDeNacimiento = parseInt(prompt("Ingrese su año de nacimiento"))
// let añoActual = 2023;
// let edadAprox = añoActual - añoDeNacimiento;
// console.log("tu edad aproximada es = " + edadAprox); 

// let edad = parseInt(prompt("Bienvenido al sistema de votación, ingrese su edad"));

// if (edad < 18){
//     console.log("usted no puede votar")
// } else if (edad > 18){
// console.log("usted puede votar")
// } else if (edad >= 18){
//     console.log("usted puede votar")
// }else {
//     console.log("uste no ingreso edad")
// }

//Operadores lógicos

// let numero1 = 50;
// let numero2 = 40;
// let numeroTexto = "40"

// let resultado = numero1 == numero2;
// console.log(resultado);

// let resultado = numero2 == numeroTexto;
// console.log(resultado);

// let resultado = numero2 === numeroTexto;
// console.log(resultado);

// if (numero1 > numero2 && numero2 == numeroTexto ){
// console.log("es verdad");
// } else{
//     console.log ("no se cumplen las funciones");
// }

 if (numero1 > numero2 || numero2 != numeroTexto  ){
     console.log("alguna de las condiciones es verdadera")
 } else {
     console.log("ninguna condicion es verdadera")
 }

alert("Bienvenido al parque, necesitamos verificar su edad y estatura")

let edad =parseInt(prompt("Ingrese su edad"))
let estatura = parseFloat(prompt("Ingrese su estatura"))

let edadMinima = 15 ;
let estaturaMinima = 1.5 ;

if ( edad >= edadMinima && estatura >= estaturaMinima){
    alert("Bienvenido al parque")
} else if ( edad >= edadMinima && estatura < estaturaMinima){
 alert("no puede ingresar por su estatura")
} else if ( edad < edadMinima && estatura >= estaturaMinima){
    alert ("no cumple con la edad")
} else {
    alert("no cumple con ninguno de los requisitos")
}