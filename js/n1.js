// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.


let edad = prompt("Ingrese su edad");

if (Number(edad) == edad) {

	if (edad >= 18) {

		document.write("Puedes conducir");
	}
    if (edad < 18){
        alert("No tiene permitido conducir")
    }
}

else {

	alert("Ingrese un numero válido");
};
