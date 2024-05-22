<?php
include '../../lib/conn.php';
include '../../lib/cors.php';

function calcularMediaPorMes($conn, $mes, $ano) {
    $sql = "SELECT MONTH(data_coleta) AS mes, AVG(valor) AS media_valor 
            FROM dados_sensores 
            WHERE YEAR(data_coleta) = :ano
            GROUP BY mes";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':ano', $ano, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

$anoAtual = date('Y');
$anoPassado = $anoAtual - 1;

$medias = array(
    'atual' => [],
    'passado' => []
);

$resultAtual = calcularMediaPorMes($conn, $mesAtual, $anoAtual);
foreach ($resultAtual as $row) {
    $mes = $row['mes'];
    $medias['atual'][$mes] = number_format($row['media_valor'], 2);
}

for ($i = 1; $i <= 12; $i++) {
    if (!isset($medias['atual'][$i])) {
        $medias['atual'][$i] = number_format(0, 2);
    }
}

$resultPassado = calcularMediaPorMes($conn, $mesPassado, $anoPassado);
foreach ($resultPassado as $row) {
    $mes = $row['mes'];
    $medias['passado'][$mes] = number_format($row['media_valor'], 2);
}

for ($i = 1; $i <= 12; $i++) {
    if (!isset($medias['passado'][$i])) {
        $medias['passado'][$i] = number_format(0, 2);
    }
}

echo json_encode($medias);
?>
