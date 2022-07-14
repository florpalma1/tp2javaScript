// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

let numeroRepetido = prompt("Ingrese un numero de repeticiones");
if (Number(numeroRepetido) == numeroRepetido) {
    if (numeroRepetido > 0 && numeroRepetido <= 50) {
        let rep,i;
        for (i = 0; i <=numeroRepetido; i++) {
            for (rep = 1; rep <= i; rep++) {
                document.write(rep);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número ingresado no es válido");
    }
} 
else {
    alert("No ingresaste ningun número");
}
