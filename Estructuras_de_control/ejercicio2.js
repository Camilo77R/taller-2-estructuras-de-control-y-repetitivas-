// 2. Escribir un script que lea un número entero y al final mostrar la suma de sus dígitos.

const prompt = require ('prompt-sync')();

let numeroRecibido = parseInt(prompt("Digita un numero entero "));

// variable en la que guardare la suma de lo numeros..
let sumaNumeros = 0;
// tengo que hacer operaciones con el numero dado, necesito modficarlo pero puedo usar otra variable para ello
let numeroTemporal = numeroRecibido;

while(numeroTemporal > 0){
    let lastNumber = numeroTemporal % 10; // me da el ultimo digito (el residuo)

    sumaNumeros+= lastNumber; //sumo los numero a la cantidad que ya  tengo

    // quito el ultimo digito ya no lo necesito, lo divido por 10 y le quito los decimales
    numeroTemporal = Math.floor(numeroTemporal /10);

}

console.log(`La suma de los digitos del numero ${numeroRecibido} es ${sumaNumeros}`);