// 8. Hacer un script que lea un número entero y como resultado informar si el número es primo o
// no. 


let prompt = require('prompt-sync')();


function esPrimo(numero){
    if(numero <= 1) return false; // si es menor o igual que 1 no es primo

    if(numero === 2) return true; //si es 2 es primo(es como  un caso donde es par y primo)
    
    if(numero % 2 === 0 ) return false // ningun numero par a excepcion del 2 es primo;serian los pares mayoes que 2
    
    for(let i = 3; i <= Math.sqrt(numero); i+=2){//incremento de 2 en 2 pro que evito asi los  pares
        if(numero % i === 0 ){
            return false;  
        } 
    }
    return  true;
}


let numeroRecibido = parseInt(prompt("Digite un numero  "));

if(esPrimo(numeroRecibido)){
    console.log(`El numero ${numeroRecibido} es  primo.`);
}else{
    console.log(`El numero ${numeroRecibido} NO es primo`);
}