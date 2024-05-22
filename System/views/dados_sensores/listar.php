<?php
include '../../lib/conn.php';
include '../../lib/cors.php';

function calcularMediaPorSemana($conn, $semana) {
    $sql = "SELECT DAYOFWEEK(data_coleta) AS dia_semana, AVG(valor) AS media_valor 
            FROM dados_sensores 
            WHERE WEEK(data_coleta, 1) = :semana AND YEAR(data_coleta) = YEAR(NOW())
            GROUP BY dia_semana";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':semana', $semana, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

$semanaAtual = date('W');
$semanaAnterior = $semanaAtual - 1;

$medias = array(
    'atual' => array(),
    'anterior' => array()
);

$resultAtual = calcularMediaPorSemana($conn, $semanaAtual);
foreach ($resultAtual as $row) {
    $dia_semana = $row['dia_semana'];
    $media_valor = number_format($row['media_valor'], 2); 
    $medias['atual'][$dia_semana - 1] = $media_valor;
}

for ($i = 0; $i < 7; $i++) {
    if (!isset($medias['atual'][$i])) {
        $medias['atual'][$i] = number_format(0, 2); 
    }
}

$resultAnterior = calcularMediaPorSemana($conn, $semanaAnterior);
foreach ($resultAnterior as $row) {
    $dia_semana = $row['dia_semana'];
    $media_valor = number_format($row['media_valor'], 2); 
    $medias['anterior'][$dia_semana - 1] = $media_valor;
}

for ($i = 0; $i < 7; $i++) {
    if (!isset($medias['anterior'][$i])) {
        $medias['anterior'][$i] = number_format(0, 2); 
    }
}

ksort($medias['atual']);
ksort($medias['anterior']);

echo json_encode($medias);
?>
