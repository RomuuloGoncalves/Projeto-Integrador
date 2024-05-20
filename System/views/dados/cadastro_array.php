<?php
include '../../lib/cors.php';
include '../../lib/conn.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
  die();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode([
    'success' => 0,
    'message' => 'Falha na requisição!. Somente o método POST é permitido',
  ]);
  exit;
}

$data = json_decode(file_get_contents("php://input"), true); // Adicionei o segundo parâmetro "true" para obter um array associativo

try {
  foreach ($data['data'] as $item) {
    $id_sensor = htmlspecialchars(trim($item['id_sensor']));
    $valor = htmlspecialchars(trim($item['valor']));
    $sqlInsert = "INSERT INTO dados_sensores (id_sensor, valor) VALUES (:id_sensor, :valor)";
    $stmt = $conn->prepare($sqlInsert);
    $stmt->bindValue(':id_sensor', $id_sensor);
    $stmt->bindValue(':valor', $valor);

    if ($stmt->execute()) {
      
    } else {
      echo json_encode([
        'success' => 0,
        'message' => 'Há algum problema na inserção de dados'
      ]);
      exit;
    }
    http_response_code(201);
    echo json_encode([
      'success' => 1,
      'message' => 'Dados inseridos com sucesso'
    ]);
  }

  exit;
} catch (PDOException $e) {
  http_response_code(500);
  echo json_encode([
    'success' => 0,
    'message' => $e->getMessage()
  ]);
  exit;
}
