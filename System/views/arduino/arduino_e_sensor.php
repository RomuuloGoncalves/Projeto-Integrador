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
$id = $_GET['id'];

$sql = "SELECT sensores.id_sensor, sensores.nome AS sensor_nome, sensores.pino, arduino.nome AS arduino_nome, arduino.localidade, arduino.id_arduino
        FROM sensores RIGHT JOIN arduino ON sensores.id_arduino = arduino.id_arduino
        WHERE arduino.id_usuario = :id";

$stmt = $conn->prepare($sql);
$stmt->bindValue(':id', $id, PDO::PARAM_INT);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

$arduino_data = array();

foreach ($result as $row) {
    $arduino_name = $row['arduino_nome'];
    $sensor = array(
        'id_sensor' => $row['id_sensor'],
        'nome' => $row['sensor_nome'],
        'pino' => $row['pino']
    );
    if (!isset($arduino_data[$arduino_name])) {
        $arduino_data[$arduino_name] = array(
            'nome' => $arduino_name,
            'localidade' => $row['localidade'],
            'id_arduino' => $row['id_arduino'],
            'sensores' => array(),
        );
    }
    if (!empty($sensor['id_sensor'])) {
        $arduino_data[$arduino_name]['sensores'][] = $sensor;
    }
}

$arduino_array = array_values($arduino_data);
echo json_encode($arduino_array);
?>
