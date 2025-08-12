
// 4. Hacer un script que lea un número entero entre 1 y 7 correspondiente a cada día de la semana
// donde 1 corresponde a Lunes y 7 a Domingo. El script debe imprimir el día de acuerdo al número
// leído. Si el número no está entre 1 y 7 se debe mostrar un mensaje que diga “Número fuera de
// rango”



let prompt = require('prompt-sync')();

let numeroDia = parseInt(prompt("Digita un numero del 1 al 7: "));

// numeroDia es la variable controladora de del switch
switch (numeroDia) {
    case 1:
        console.log("El dia es Lunes");
        break;
    case 2:
        console.log("El dia es Martes");
        break;
    case 3:
        console.log("El dia es Miercoles");
        break;
    case 4:
        console.log("El dia es Jueves");
        break;
    case 5:
        console.log("El dia es Viernes");
        break;
    case 6:
        console.log("El dia es Sabado");
        break;
    case 7:
        console.log("El dia es Domingo");
        break;
    default:
        // si no esta niguan opcion de las de arriba entra aqui
        console.log("Número fuera de rango");
        break;
}