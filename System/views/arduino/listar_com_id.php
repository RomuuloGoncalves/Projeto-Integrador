<?php
include '../../lib/conn.php';
include '../../lib/cors.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Falha na requisição!. Somente o método GET é permitido',
    ]);
    exit;
}

$data = json_decode(file_get_contents("php://input"));
$id = $data->id;


$sql = "SELECT * FROM `arduino` WHERE `id_usuario` = :id";
$stmt = $conn->prepare($sql);
$stmt->bindValue(':id', $id, PDO::PARAM_INT);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC); 
$arduino = $result;
echo json_encode($arduino);
