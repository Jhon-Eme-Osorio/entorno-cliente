$(document).ready(function(){
    $('#nombreUsuario').on('input', function() {
      var nombreUsuario = $(this).val();
      if(nombreUsuario.length >= 3) {
//Se envía una solicitud AJAX al script 'usuairo.php' utilizando el método POST.
        $.ajax({
          url: 'usuarios.php',
          type: 'POST',
          dataType: 'json',
          data: {nombreUsuario: nombreUsuario},
// aqui veo si la solicitud es exitosa.          
          success: function(response) {
// Se convierte el objeto JSON 'response' en una cadena y se imprimo en la consola del navegador.            
            console.log(JSON.stringify(response));
            if(response.available) {
              $('#habilitado').text('Nombre de usuario disponible').css('color', 'green');
            } else {
              $('#habilitado').text('Nombre de usuario no disponible').css('color', 'red');
            }
          }
        });
      } else {
        $('#habilitado').text('');
      }
    });
  });
  