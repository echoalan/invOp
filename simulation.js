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
    const media = 30; 
    const desviacionEstandar = 3; 
    const numerosAleatorios = [];

    for (let i = 1; i <= numSaturdays; i++) {
        
        const numeroReservas = Math.round(generarNumeroAleatorio(media, desviacionEstandar)); // número aleatorio que simula la cantidad de reservas.
        
       
        const porcentajeReservas = (numeroReservas / totalMesas) * 100;  // porcentaje de reservas para este sábado.
         
        numerosAleatorios.push(numeroReservas); //recordatorio de alan para alan: estaria bueno ver el numero random de ese sabado y no todos juntos
        
        console.log(`Sábado ${i}: Reservas = ${numeroReservas}, Porcentaje = ${porcentajeReservas.toFixed(2)}%`); //alan del futuro, si queres visualizar las cosas en el dom, dejá de atar con alambre!!!
    }

   
    console.log('Números aleatorios generados:', numerosAleatorios);
}

simularReservas(50); //50 sabados

//alan del futuro, estaria bueno codear en ingles!!!!!!!!!!! cabeza de termo 
