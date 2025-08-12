// 1. Escribir un script que diga si un número es par o es impar. Recordemos que un número es par
// si al dividirlo por 2 da como resto 0.

const prompt = require ('prompt-sync')();

let x = 1;
// compruebo si el numero dado es par
while(x !== 2){
    
    
    let numeroRecibido = parseInt(prompt("Escriba un numero   "));

    if(numeroRecibido % 2 === 0 ){
        console.log(`El numero ${numeroRecibido} es PAR.`);
    }else{
        console.log(`El numero ${numeroRecibido} NO ES PAR. `);
    }

    console.log("quieres poner otro numero ?  ");
    console.log("1- poner otro numero 2- salir");
    x = parseInt(prompt("digite la opcion "));//sobreescribo x para saber si continuo o paro el programa

    

}