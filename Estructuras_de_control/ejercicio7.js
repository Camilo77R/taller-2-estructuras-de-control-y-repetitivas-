// 7. Hacer un script que imprima los números múltiplos de 3 que hay entre dos números. 
let prompt = require('prompt-sync')();


let numeroInicial = parseInt(prompt("Digita el número inicial del rango: "));
let numeroFinal = parseInt(prompt("Digita el número final del rango: "));

console.log(`Los múltiplos de 3 entre ${numeroInicial} y ${numeroFinal} son:`);

for (let i = numeroInicial; i <= numeroFinal; i++) {
    if (i % 3 === 0) {
        
        console.log(i);
    }
}