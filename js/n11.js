// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
let primerNombre = prompt("Ingrese un primer nombre");
let primerEdad = prompt("Ingrese edad del primer nombre");
let segundoNombre = prompt("Ingrese un segundo nombre");
let segundoEdad = prompt("Ingrese la edad del segundo nombre");
let tercerNombre = prompt("Ingrese un tercer nombre");
let tercerEdad = prompt("Ingrese edad del tercer nombre");

let maximo = Math.max(primerEdad, segundoEdad, tercerEdad);
if(maximo == primerEdad){
    document.write("El mayor es: " + primerNombre);
}
if(maximo == segundoEdad){
    document.write("El mayor es: " + segundoNombre);
}
if(maximo == tercerEdad){
    document.write("El mayor es: " + tercerNombre);
}
