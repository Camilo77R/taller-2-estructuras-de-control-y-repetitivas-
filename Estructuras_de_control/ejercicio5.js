// 5. Escribir un script para una empresa que tiene salas de juegos para todas las edades y quiere
// calcular de forma automática el precio que debe cobrar a sus clientes por entrar. El programa
// debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada. Si el cliente es
// menor de 5 años puede entrar gratis, si tiene entre 5 y 18 años debe pagar 5 mil pesos y si es
// mayor de 18 años debe pagar 10 mil pesos. 


let prompt = require('prompt-sync')();


while(true){
    
    let userAge = parseInt(prompt("Digite su edad  "));
    
    
    if(userAge < 5 ){
        console.log("Entras gratis.");
    }else if(userAge >=5 && userAge <= 18){
        console.log("Pagas un valor total de 5.000 COP por tu entrada!!");
    }else{
        console.log("Pagas un valor total de 10.000 COP por la entrada");
    }
    console.log("quires continuar, presiona enter");
    console.log("quires terminar, presiona x");
    let opt = prompt("selecciona una opcion  ");
    if(opt.toLowerCase() === "x") break;
    // si presiona enter no hacemos nada el bluce sigue TRUE solo si presiona x lanzamos un break 
    
}