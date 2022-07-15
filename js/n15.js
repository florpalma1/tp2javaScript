// 15- Realiza un script que cuente el número de vocales que tiene un texto.
let texto = prompt("Ingrese un texto:");
let longitud = texto.length;  
texto = texto.toUpperCase();  
let car;
let vocal = 0;
let i;
for (i = 0; i < longitud; i++) {
    car = texto.charAt(i);   
    if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
        vocal++;
    }
}
document.write("Número de Vocales: " + vocal + ".");