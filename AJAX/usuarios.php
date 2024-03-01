<?php
$response = array();

if(isset($_POST['nombreUsuario'])) {
  $nombreUsuario = $_POST['nombreUsuario'];

  //simulacion de nombres en la base de datos
  $usuarioRegistrado = array('usuario1', 'usuario2', 'usuario3');

  if(in_array($nombreUsuario, $usuarioRegistrado)) {
    $response['available'] = false;
  } else {
    $response['available'] = true;
  }

  echo json_encode($response);
}
?>
