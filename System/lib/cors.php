<?php

declare(strict_types=1);

// Define os cabeçalhos para permitir acesso de qualquer origem (*)
header("Access-Control-Allow-Origin: *");
// Permite que os métodos HTTP GET, POST, PUT e DELETE sejam usados a partir de origens diferentes
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
// Define os cabeçalhos permitidos para serem incluídos na solicitação
header("Access-Control-Allow-Headers: Content-Type, Authorization, ngrok-skip-browser-warning");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, ngrok-skip-browser-warning");
    header("HTTP/1.1 200 OK");
    exit;
}