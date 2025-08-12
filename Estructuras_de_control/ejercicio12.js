
// 12. Hacer un script que lea dos números enteros y como resultado se debe calcular la suma de los
// pares existentes entre los dos números y el promedio de los números impares existentes entre
// los dos números. (Incluir los números leídos)


let prompt = require('prompt-sync')();
let numero1 = parseInt(prompt("Digite el primer numero entero"));
let numero2 = parseInt(prompt("Digite el segundo numero entero"));



function calcularSumaYPromedio(num1, num2) {
    let sumaPares = 0;
    let sumaImpares = 0;
    let contadorImpares = 0;
    
    const inicio = Math.min(num1, num2);
    const fin = Math.max(num1, num2);
    
    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {//verifico si es par para sumarlo a pares 
            sumaPares += i;
        } else {//si no es par pues lo sumo a impares
            sumaImpares += i;//acumulador de total de impares
            contadorImpares++;//cuento cuantos impares hay y aumeto 1 cada vez entro a al else
        }
    }
    //si hay un impar hago la divisin pero si no hay impares pongo cero para evitar problemas
    const promedioImpares = contadorImpares > 0 ? sumaImpares / contadorImpares : 0;
    
    return {
        sumaPares,
        promedioImpares
    };
}

const resultado = calcularSumaYPromedio(numero1, numero2);
console.log(`Suma de pares: ${resultado.sumaPares}`);
console.log(`Promedio de impares: ${resultado.promedioImpares}`);