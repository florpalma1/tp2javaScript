// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let numeroRepetido = prompt("Ingrese numero de repeticiones");

if (Number(numeroRepetido) == numeroRepetido) {

    if (numeroRepetido > 0 && numeroRepetido <= 50) {
        let rep,i;
        
        for (i = numeroRepetido; i >= 1; i--) {

            for (rep = i; rep >= 1; rep--) {
                document.write(i);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número ingresado no es válido");
    }
} 
else {
    alert("No has ingresado ningun número");
}