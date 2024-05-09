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
    $email = htmlspecialchars(trim($data->email));
    $telefone = htmlspecialchars(trim($data->telefone));
    $senha = htmlspecialchars(trim($data->senha));
    
    // Verificar se o e-mail já está cadastrado
    $sqlCheckEmail = "SELECT COUNT(*) AS total FROM usuario WHERE email = :email";
    $stmtCheckEmail = $conn->prepare($sqlCheckEmail);
    $stmtCheckEmail->bindValue(':email', $email);
    $stmtCheckEmail->execute();
    $result = $stmtCheckEmail->fetch(PDO::FETCH_ASSOC);
    
    if ($result['total'] > 0) {
        http_response_code(400);
        echo json_encode([
            'success' => 0,
            'message' => 'E-mail já está cadastrado',
        ]);
        exit;
    }

    // Verificar se o formato do e-mail é válido
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode([
            'success' => 0,
            'message' => 'Formato de e-mail inválido',
        ]);
        exit;
    }

    $sqlInsert = "INSERT INTO usuario (nome, email, telefone, senha) VALUES (:nome, :email, :telefone, :senha)";
    $stmt = $conn->prepare($sqlInsert);
    $stmt->bindValue(':nome', $nome);
    $stmt->bindValue(':email', $email);
    $stmt->bindValue(':telefone', $telefone);
    $stmt->bindValue(':senha', $senha);
 

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
?>
