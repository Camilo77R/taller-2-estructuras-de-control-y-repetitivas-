
let prompt = require('prompt-sync')();
let numeroRecibido = parseInt(prompt("Digite un nuemero entero"));

function factorial(n) {
    if (n < 0) return "No existe factorial de negativos";
    if (n === 0 || n === 1) return 1;//no puedo recorrerlo es solo 1
    
    let resultado = 1;//parto desde 1 como minimo
    for (let i = n; i >= 1; i--) {//voy desde n hasta 1 y decreento en 1 cada iteracion
        resultado *= i;// le agrego a resultado el valor de la seguinete multiplicacion
    }
    return resultado;
}

console.log(factorial(numeroRecibido)); 