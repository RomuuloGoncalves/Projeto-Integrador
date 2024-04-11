<?php
  include './lib/conn.php';

  $sql = "SELECT * FROM `usuario`";
  $stmt = $conn->prepare($sql);
  $stmt->execute();
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC); 
  $usuario = $result;
  echo json_encode($usuario);
?>