<?php
include '../lib/cors.php';
include '../lib/conn.php';
include './criarJwt.php';

$data = json_decode(file_get_contents("php://input"));

try {
	$sql = "SELECT `id_usuario`, `nome` FROM `usuario` WHERE email=:email AND senha=:senha";
	$stmt = $conn->prepare($sql);
	$stmt->bindValue(':email', $data->email, PDO::PARAM_STR);
	$stmt->bindValue(':senha', $data->senha, PDO::PARAM_STR);
	$stmt->execute();

	if ($stmt->rowCount() > 0) {

		$user = $stmt->fetch(PDO::FETCH_ASSOC);

		$token = criar_jwt($user['id_usuario'], $data->email, $data->senha);

		echo json_encode([
			'success' => 1,
			'token' => $token,
			'id_usuario' => $user["id_usuario"],
			'nome' => $user["nome"],
		]);
		exit;
	}

	echo json_encode([
		'success' => 0,
		'message' => 'Falha ao realizar o login'
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
