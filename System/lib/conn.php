<?php
// Definição do timezone para São Paulo América do Sul.
date_default_timezone_set('America/Sao_Paulo');

$host = "localhost"; // endereço do servidor
$database = "projetoIntegrador"; // nome do banco de dados
$usuario = "romulo"; // usuário do MySQL
$senha = "romulo123"; // senha do MySQL

// Cria a conexão
try {
	$conn = new PDO('mysql:host=' . $host . ';dbname=' . $database, $usuario, $senha);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
	echo "Erro de conexão" . $e->getMessage();
	exit;
}
