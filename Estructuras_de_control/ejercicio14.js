// Este for imprimire las 5 filas 
for (let fila = 1; fila <= 5; fila++) {
    // Para cada fila, creamos una cadena vacia
    let lineaDeAsteriscos = "";
    
    // La condicion es que el contador "columna" vaya hasta el numero de la fila actual
    //  si fila es 1 imprimo 1 asterisco y asi sucesivamente
    for (let columna = 1; columna <= fila; columna++) {
        // Agrego un asterisco a la linea en cada repeticion
        lineaDeAsteriscos += "* ";
    }

    console.log(lineaDeAsteriscos);
}