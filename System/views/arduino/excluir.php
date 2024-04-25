<?php
include '../../lib/cors.php';
include '../../lib/conn.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}

if ($_SERVER['REQUEST_METHOD'] !== 'DELETE'){
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Bad Request detected. HTTP method should be DELETE',
    ]);
    exit;
}

$data = json_decode(file_get_contents("php://input"));
$id = $_GET["id"];

if (!isset($id)) {
    echo json_encode(['success' => 0, 'message' => 'Informe o ID do arduíno.']);
    exit;
}

try {
    $fetch_post = "SELECT * FROM `arduino` WHERE id_arduino=:id";
    $fetch_stmt = $conn->prepare($fetch_post);
    $fetch_stmt->bindValue(':id', $id);
    $fetch_stmt->execute();

    if ($fetch_stmt->rowCount() > 0) {
        $delete_sensores = "DELETE FROM `sensores` WHERE id_arduino=:id";
        $delete_sensores_stmt = $conn->prepare($delete_sensores);
        $delete_sensores_stmt->bindValue(':id', $id);
        $delete_sensores_stmt->execute();

        $delete_arduino = "DELETE FROM `arduino` WHERE id_arduino=:id";
        $delete_arduino_stmt = $conn->prepare($delete_arduino);
        $delete_arduino_stmt->bindValue(':id', $id);

        if ($delete_arduino_stmt->execute()) {
            echo json_encode([
                'success' => 1,
                'message' => 'Deleted successfully'
            ]);
            exit;
        } else {
            echo json_encode([
                'success' => 0,
                'message' => 'Failed to delete. Something went wrong.'
            ]);
            exit;
        }
    } else {
        echo json_encode(['success' => 0, 'message' => 'Invalid ID']);
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
?>
