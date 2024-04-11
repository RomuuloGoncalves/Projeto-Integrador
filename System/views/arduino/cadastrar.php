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

$data = json_decode(file_get_contents("php://input"));

try {
    $nome = htmlspecialchars(trim($data->nome));
    $localidade = htmlspecialchars(trim($data->localidade));
    $quantidade_portas = htmlspecialchars(trim($data->quantidadePortas));
    $sqlInsert = "INSERT INTO arduino VALUES (0, :nome, :localidade, :quantidade_portas)";   
    $stmt = $conn->prepare($sqlInsert);
    $stmt->bindValue(':nome', $nome);
    $stmt->bindValue(':localidade', $localidade);
    $stmt->bindValue(':quantidade_portas', $quantidade_portas);
 
 

    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode([
            'success' => 1,
            'message' => 'Data inserida com sucesso'
        ]);
        exit;
    }

    echo json_encode([
        'success' => 0,
        'message' => 'Há algum problema na inserção de dados'
    ]);
    exit;
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
    exit;
}
