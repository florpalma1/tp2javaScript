// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
let texto = prompt("Ingrese un Texto:");
let longitud = texto.length;
let j;
let letras;
let reves = "";
for (j = 0; j < longitud; j++) {
    letras = texto.charAt(j);    
    reves = letras + reves;
}
document.write(reves);