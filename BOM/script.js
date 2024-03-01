let hora;
let alarma;
let nuevaVentana;



//defino un array de meses para mostrar la fecha
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

//establesco un intervalo para actualizar la hora cada segundo
    if (!hora) {
        hora = setInterval(actualizarHora, 1000);
    } else {
        clearInterval(hora);
        hora = null;
    }

function formatoDosDigitos(numero) {
    return numero < 10 ? '0' + numero : numero;
}

//obtengo la hora actual y la muestro en el formato asignado
function actualizarHora() {
    const tiempoActual = new Date();
    const horas = formatoDosDigitos(tiempoActual.getHours());
    const minutos = formatoDosDigitos(tiempoActual.getMinutes());
    const segundos = formatoDosDigitos(tiempoActual.getSeconds());
    document.getElementById('hora').innerText = `${horas}:${minutos}:${segundos}`;
    let day = tiempoActual.getDate(),
        month = tiempoActual.getMonth(),
        year = tiempoActual.getFullYear();

        document.getElementById('date').innerHTML = ` ${meses[month]} ${day}  ${year}`;
}



function abrirVentana(url, titulo, ancho, alto) {
    var ventanaLeft = 250;
    var ventanaTop = 250;
    var opciones = 'toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=' + ancho + ',height=' + alto + ',top=' + ventanaTop + ',left=' + ventanaLeft;
    var nuevaVentana = window.open(url, titulo, opciones);
    return nuevaVentana;
}


function cerrarVentana(ventana) {
    if (ventana) {

            ventana.close();
    }
}

//agrego los eventos click, mouseover y mouseout a los botones  colocar y parar la alarma
document.getElementById("confiAlarma").addEventListener("click", colocarAlarma);

document.getElementById("confiAlarma").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#801bd8";
});

document.getElementById("confiAlarma").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
});


document.getElementById("pararAlarma").addEventListener("click", cancelarAlarma);

document.getElementById("pararAlarma").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#801bd8";
});

document.getElementById("pararAlarma").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
});

function colocarAlarma() {
    const horaAlarma = document.getElementById('horaAlarma').value;
    const ahora = new Date();
    const horaSeleccionada = new Date(ahora.toDateString() + ' ' + horaAlarma);
    const tiempoRestante = horaSeleccionada - ahora;
    if (tiempoRestante < 0) {
        window.alert('Por favor seleccione una hora futura.');
        return;
    }
    window.alert("alarma Puesta")
    alarma = setTimeout(function () {
        window.alert('¡Alarma!');
        nuevaVentana = abrirVentana('mensaje.html', 'Alarma', 400, 300);
        window.document.title = "¡Alarma activada!";
    }, tiempoRestante);
}

function cancelarAlarma() {
    clearTimeout(alarma);
    cerrarVentana(nuevaVentana);
    window.document.title = "Manipulación del BOM";
}
