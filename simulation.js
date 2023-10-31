function generarNumeroAleatorio(media, desviacionEstandar) {
    let numeroAleatorio;
    while (true) {                                            //[-1, 1]
        numeroAleatorio = media + desviacionEstandar * (2 * Math.random() - 1);
        if (numeroAleatorio >= 0) {
            return numeroAleatorio;
        }
    }
}


function simularReservas(numSaturdays) {
    const totalMesas = 30; 
    const media = 30; // Media de la distribución de probabilidad.
    const desviacionEstandar = 3; // Desviación estándar de la distribución de probabilidad.
    const numerosAleatorios = [];

    for (let i = 1; i <= numSaturdays; i++) {
        // Generamos un número aleatorio que simula la cantidad de reservas.
        const numeroReservas = Math.round(generarNumeroAleatorio(media, desviacionEstandar));
        
        // Calculamos el porcentaje de reservas para este sábado.
        const porcentajeReservas = (numeroReservas / totalMesas) * 100;
        
        numerosAleatorios.push(numeroReservas);
        
        console.log(`Sábado ${i}: Reservas = ${numeroReservas}, Porcentaje = ${porcentajeReservas.toFixed(2)}%`);
    }

   
    console.log('Números aleatorios generados:', numerosAleatorios);
}

simularReservas(50); //50 sabados
