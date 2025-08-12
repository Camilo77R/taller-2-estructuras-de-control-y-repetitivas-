// 3. Una persona puede votar en las elecciones si cumple con las siguientes condiciones:
// a. Tener mínimo 18 años de edad
// b. Tener cédula
// c. Tener inscrita la cédula
// Hacer un script que informe a una persona si puede votar o no puede votar. Recuerde que
// para poder votar debe cumplir con las 3 condiciones anteriores. 


const prompt = require('prompt-sync')();

//recibo los datos de user y asi compruebo si puede o no votar

while (true) {

    const userAge = parseInt(prompt("Digite cual es su edad   "));

    if (userAge >= 18) {
        const tieneDni = prompt("Tiene cedula?? si - no   ");
        if (tieneDni.toLocaleLowerCase() === "si") {
            // me aseguro la cadena este en minusculas para compararla
            const dniIncrito = prompt("Tiene su cedula inscrita?? si - no   ");
            if (dniIncrito.toLocaleLowerCase() === "si") {
                console.log("Cumples los     requisitos, puedes VOtar!!");
            } else {
                console.log("NO puedes votar, registra tu cedula antes.");
            }
        } else {
            console.log("Inscribe tu cedula antes para que puedas votar");
        }
    } else {
        console.log("NO tiene la mayoria de edad, no puedes VOTAR.");
    }
    

}
