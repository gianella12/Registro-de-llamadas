const seccionLlamadas = document.getElementById("seccion-llamadas-generadas");
seccionLlamadas.style.display = 'none';

function generarLlamadas() {
    const llamadasAlmacenadas = [];
    const input = parseInt(document.querySelector("#input").value);
    limpiarContenidoAnterior()
    for (let i = 0; i < input; i++) {

        let destino = Math.floor(Math.random() * (9999999999 - 1111111111) + 1111111111);

        let origen = Math.floor(Math.random() * (9999999999 - 1111111111) + 1111111111);

        let duracionDeLlamada = Math.floor(Math.random() * (600 - 30 + 1) + 30)
        llamadasAlmacenadas.push({ origen, destino, duracionDeLlamada })

    }
    mostrarLlamadas(llamadasAlmacenadas)

}

function mostrarLlamadas(llamadasAlmacenadas) {
    const h2 = document.getElementById("NoHayLlamadas");
    limpiarContenidoAnterior()
    if (llamadasAlmacenadas.length === 0) {
        h2.innerText = "No hay llamadas";
        h2.style.display = ""; // Asegurar que el mensaje se muestre
        seccionLlamadas.style.display = "none"; 


    } else {
         h2.style.display = "none"
        seccionLlamadas.style.display = ''

        const cuerpoTabla = seccionLlamadas.querySelector('tbody');

        cuerpoTabla.remove()
        const nuevoTbody = document.createElement('tbody');
        llamadasAlmacenadas.forEach((llamada) => {

            let fila = document.createElement('tr');

            fila.innerHTML = `
    
        <td>${llamada.origen}</td>
    
        <td>${llamada.destino}</td>
    
        <td>${llamada.duracionDeLlamada}</td> `;

            nuevoTbody.appendChild(fila);

        });

        seccionLlamadas.appendChild(nuevoTbody);

    }

    mostrarDuracionTotalYPromedio(llamadasAlmacenadas);

}

function mostrarDuracionTotalYPromedio(llamadasAlmacenadas) {
    if (llamadasAlmacenadas.length > 0) {
        let duracionTotal = 0;

        for (let i = 0; i < llamadasAlmacenadas.length; i++) {

            duracionTotal += llamadasAlmacenadas[i].duracionDeLlamada

        }
        const tarjetaLlamadas = document.getElementById("seccion-promedio-duracion");

        const prevP = tarjetaLlamadas.querySelectorAll('p');
        prevP.forEach(p => p.remove());



        const p = document.createElement('p');
        p.innerText = `Duracion total: ${duracionTotal} segundos`
        tarjetaLlamadas.appendChild(p)

        const p2 = document.createElement('p');
        let promedio = duracionTotal / llamadasAlmacenadas.length;
        p2.innerText = ` Promedio de segundos por cada llamada: ${promedio} `

        tarjetaLlamadas.appendChild(p2)
    }

}
function limpiarContenidoAnterior() {
    const seccionPromedioYDuracion = document.getElementById("seccion-promedio-duracion");
    seccionPromedioYDuracion.innerHTML = "";
}