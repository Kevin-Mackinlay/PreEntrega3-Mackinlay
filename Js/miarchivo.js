//algoritmo con un condicional

alert('Bienvenido a la Vinoteca virtual!');
let edad = parseInt(prompt('Ingrese su edad'));
if(edad < 18){
    alert('usted es menor de edad y no puede realizar la compra');
}else{
    alert('usted es mayor de edad y puede realizar la compra');
}



//algoritmo utilizando ciclo (while)

let insertText = prompt("Put a text");
while (insertText != "ESC") {
  alert("The user entered " + insertText);
  insertText = prompt("enter another text");
}


//algoritmo utilizando (for)

alert('Bienvenido a los mejores masajes por orden de llegada')

for(i = 1 ; i <= 4; i++) {
   let insertNombre = prompt("ingrese un nombre")
   alert('turno Numero ' + i +  ' nombre:  ' +   insertNombre );

}