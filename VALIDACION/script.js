function validarForm() {
    var form = document.getElementById('form');
    if (form.reportValidity()) {
        // Si los datos son válidos, se envía el formulario
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        //aqui muestro un mesaje con el usuario y correo ingresado
        document.getElementById('result').innerHTML = "Formulario válido. <br>Usuario:" + username + ", <br>Correo electrónico: " + email;
    } else {
        // Si los datos no son válidos, no se envía y se muestra mensajes de validación al usuario
        document.getElementById('result').innerHTML = "El formulario contiene errores";
    }
}
