<?php
  include '../../lib/conn.php';
  include '../../lib/cors.php';

  $sql = "SELECT * FROM `arduino`";
  $stmt = $conn->prepare($sql);
  $stmt->execute();
  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);   $arduino = $result;
  echo json_encode($arduino);
?>