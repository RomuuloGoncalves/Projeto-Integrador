<?php
include '../lib/cors.php';
include '../lib/conn.php';
include './jwtEhValido.php';

$data = $_GET['token'];  

try {

    $token = jwt_eh_valido($data);

    if ($token) {
            echo json_encode([
                'success' => 1,
                'message' => 'Acesso autorizado'
            ]);
            exit;
        }

        echo json_encode([
            'success' => 0,
            'message' => 'Acesso negado'
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