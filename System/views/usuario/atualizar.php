<?php
include '../../lib/cors.php';
include '../../lib/conn.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}

if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Falha na requisição!. Somente o método PUT é permitido',
    ]);
    exit;
}

$data = json_decode(file_get_contents("php://input"));
$id = $data->id;

try {
    $put = "SELECT * FROM `usuario` WHERE id_usuario=:id";
    $stmt = $conn->prepare($put);
    $stmt->bindValue(':id', $id, PDO::PARAM_INT);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {

        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $nome = htmlspecialchars(trim($data->nome));
        $email = htmlspecialchars(trim($data->email));
        $telefone = htmlspecialchars(trim($data->telefone));
        $senha = htmlspecialchars(trim($data->senha));

        $update_serv = "UPDATE `usuario` SET nome = :nome, email = :email, telefone = :telefone, senha = :senha
        WHERE id_usuario = :id";

        $update_stmt = $conn->prepare($update_serv);

        $update_stmt->bindValue(':nome', $nome);
        $update_stmt->bindValue(':email', $email);
        $update_stmt->bindValue(':telefone', $telefone);
        $update_stmt->bindValue(':senha', $senha);
        $update_stmt->bindValue(':id', $id);

        if ($update_stmt->execute()) {
            http_response_code(201);
            echo json_encode([
                'success' => 1,
                'message' => 'Dado alterado com sucesso'
            ]);
            exit;
        }

        echo json_encode([
            'success' => 0,
            'message' => 'Há algum problema na alteração de dados'
        ]);
        exit;
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
    exit;
}
