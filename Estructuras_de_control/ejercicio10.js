// 10. Hacer un script que lea un número entero entre 1 y 20 y también debe leer una frase. Al final el
// script debe imprimir la frase tantas veces el número leído.


let prompt = require('prompt-sync')();

while(true){

    let  numeroRecibido = parseInt(prompt("Digite un numero entero entre 1 y 20  "));
    if(numeroRecibido >= 1 && numeroRecibido <= 20){
        console.log("numero dentro de rango!!");
        const fraseRecibida = prompt("Escriba un frase a IMPRIMIR en pantalla  "); 
        for(let i = 0 ; i <numeroRecibido; i++){
            console.log(fraseRecibida);
        }
    
    }else{
        console.log("El numero "+ numeroRecibido + " esta fuera de rango ");
    }

    console.log("Desea continuar, presiona ENTER ");
    console.log("Desea salir presiona x");
    let rta = prompt("Seleccione una opcion");
    if(rta) break;
}

