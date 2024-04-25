<?php
// Incluindo os arquivos necessários
include '../../lib/cors.php';
include '../../lib/conn.php';

// Verificando o método da requisição
$method = $_SERVER['REQUEST_METHOD'];

// Verificando se a requisição é OPTIONS
if ($method == "OPTIONS") {
    die();
}

// Verificando se o método da requisição é POST
if ($method !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Falha na requisição! Apenas o método POST é permitido',
    ]);
    exit;
}

try {
    // Verificando se um arquivo de imagem foi enviado
    if (isset($_FILES['imagem'])) {
        // Obtendo o ID do usuário enviado via POST
        $id_usuario = $_POST['id_usuario'];
        
        $img_name = $_FILES['imagem']['name'];
        $img_size = $_FILES['imagem']['size'];
        $tmp_name = $_FILES['imagem']['tmp_name'];
        $error = $_FILES['imagem']['error'];

        if ($error === 0) {
            if ($img_size > 999999999999999999999999) {
                http_response_code(400);
                echo json_encode([
                    'success' => 0,
                    'message' => 'Sorry, your file is too large.',
                ]);
                exit;
            } else {
                $img_ex = pathinfo($img_name, PATHINFO_EXTENSION);
                $img_ex_lc = strtolower($img_ex);

                $allowed_exs = array("jpg", "jpeg", "png");

                if (in_array($img_ex_lc, $allowed_exs)) {
                    $new_img_name = uniqid("IMG-", true) . '.' . $img_ex_lc;
                    $img_upload_path = '../../public/uploads/imgs/' . $new_img_name;
                    move_uploaded_file($tmp_name, $img_upload_path);

                    // Atualizando o caminho da imagem no banco de dados
                    $sqlUpdate = "UPDATE usuario SET imagem = :imagem WHERE id_usuario = :id_usuario";
                    $stmt = $conn->prepare($sqlUpdate);
                    $stmt->bindValue(':id_usuario', $id_usuario);
                    $stmt->bindValue(':imagem', $new_img_name);

                    // Executando a consulta de atualização
                    if ($stmt->execute()) {
                        http_response_code(200);
                        echo json_encode([
                            'success' => 1,
                            'message' => 'Imagem do usuário atualizada com sucesso',
                        ]);
                        exit;
                    } else {
                        // Se a atualização falhar, exclua o arquivo de imagem que foi enviado
                        unlink($img_upload_path);
                    }
                } else {
                    http_response_code(400);
                    echo json_encode([
                        'success' => 0,
                        'message' => "You can't upload files of this type",
                    ]);
                    exit;
                }
            }
        } else {
            http_response_code(400);
            echo json_encode([
                'success' => 0,
                'message' => 'Unknown error occurred!',
            ]);
            exit;
        }
    } else {
        // Se nenhum arquivo de imagem for enviado, retornar uma resposta de Bad Request
        http_response_code(400);
        echo json_encode([
            'success' => 0,
            'message' => 'Nenhum arquivo de imagem enviado',
        ]);
        exit;
    }
} catch (PDOException $e) {
    // Em caso de erro no banco de dados, retornar uma resposta de erro interno do servidor
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage(),
    ]);
    exit;
}
?>
