let prompt = require('prompt-sync')();

let numeroDecimal = parseInt(prompt("Digita un numero decimal para convertir a binario: "));

// variable para guardar el resultado
let numeroBinario = "";

// si el numero es 0, el binario es 0
if (numeroDecimal === 0) {
    numeroBinario = "0";//lo asigno 
} else {
    while (numeroDecimal > 0) {
        // me da el residuo de la division, que es el digito binario (0 o 1)
        let residuo = numeroDecimal % 2; 
        
        //aqui saco la mitad del numero y quiro el residuo
        numeroDecimal = Math.floor(numeroDecimal / 2);

        numeroBinario = residuo + numeroBinario;
    }
}


console.log(`El numero en binario es: ${numeroBinario}`);