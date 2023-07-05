// let insertNumber = parseInt(prompt('Put a number'));

// for ( let number = 0; number < 10; number++) {
//     console.log(number);
// }

let insertText = prompt("Put a text");
while (insertText != "ESC") {
  alert("The user entered " + insertText);
  insertText = prompt("enter another text");
}
