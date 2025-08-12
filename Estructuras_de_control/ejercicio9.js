// 9. Hacer un script que imprima las tablas de multiplicar del 5, 6 7 8 y 9.
let primeraTabla = 5;
let ultimaTabla = 9;


// controla las tablas que quiero imprimir
for(let i = primeraTabla; i <= ultimaTabla; i++){

    // imprime 10 veces y se sale
    for(let j = 0 ; j < 10; j++){// i representa la tabla que imprimo
        console.log(`${i} X ${j+1} = ${i * (j+1)}`);
    }
    console.log("*****************************");

}
