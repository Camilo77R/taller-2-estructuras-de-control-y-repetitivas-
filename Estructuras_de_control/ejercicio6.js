// 6. La nueva reforma tributaria en Colombia propone recaudar un impuesto a los salarios de todos
// los colombianos de acuerdo a la siguiente tabla:
// Escribir un script que pregunte a una persona su salario mensual y muestre por pantalla el
// impuesto que debe pagar. El porcentaje se calcula del salario mensual.

let prompt = require('prompt-sync')();

let salarioPersona = parseFloat(prompt("Digite de cuanto es el monto de su salario mensual  "));

let impuestoAPagar = 0;

if(salarioPersona < 1000000){
    // impuesto de 1%
    impuestoAPagar = salarioPersona * 0.01;
}else if(salarioPersona >= 1000000 && salarioPersona <2000000 ){
// impues es del 3 percent
impuestoAPagar = salarioPersona * 0.03;
}else if(salarioPersona >= 2000000 && salarioPersona < 4000000){
    // impuesto 5 percent
    impuestoAPagar = salarioPersona * 0.05;
}else if(salarioPersona >= 4000000 && salarioPersona < 10000000){
    // 7 percent 
    impuestoAPagar = salarioPersona * 0.07;
}else{
    // mas de 10M  impuesto 10 percent
    impuestoAPagar = salarioPersona * 0.10;
}

console.log(`El impuesto a pagar por el tu salario de $${salarioPersona}pesos, es de $${impuestoAPagar} pesos `);