<?php
include '../../lib/conn.php';
include '../../lib/cors.php';

function calcularMediaPorIntervaloDeSemanas($conn, $semanaInicio, $semanaFim) {
    $sql = "SELECT DAYOFWEEK(data_coleta) AS dia_semana, AVG(valor) AS media_valor 
            FROM dados_sensores 
            WHERE WEEK(data_coleta, 1) BETWEEN :semanaInicio AND :semanaFim AND YEAR(data_coleta) = YEAR(NOW())
            GROUP BY dia_semana";

    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':semanaInicio', $semanaInicio, PDO::PARAM_INT);
    $stmt->bindParam(':semanaFim', $semanaFim, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

$semanaAtual = date('W');
$semanaInicio = $semanaAtual - 3; 
$semanaFim = $semanaAtual;

$medias = array(
    'ultimas_quatro_semanas' => array(),
    'quatro_semanas_anteriores' => array()
);

$resultUltimasQuatroSemanas = calcularMediaPorIntervaloDeSemanas($conn, $semanaInicio, $semanaFim);
foreach ($resultUltimasQuatroSemanas as $row) {
    $dia_semana = $row['dia_semana'];
    $media_valor = number_format($row['media_valor'], 2); 
    $medias['ultimas_quatro_semanas'][$dia_semana - 1] = $media_valor;
}

for ($i = 0; $i < 7; $i++) {
    if (!isset($medias['ultimas_quatro_semanas'][$i])) {
        $medias['ultimas_quatro_semanas'][$i] = number_format(0, 2); 
    }
}

$semanaAnterior = $semanaInicio - 1; 
$semanaInicioAnterior = $semanaAnterior - 3; 

$resultQuatroSemanasAnteriores = calcularMediaPorIntervaloDeSemanas($conn, $semanaInicioAnterior, $semanaAnterior);
foreach ($resultQuatroSemanasAnteriores as $row) {
    $dia_semana = $row['dia_semana'];
    $media_valor = number_format($row['media_valor'], 2); 
    $medias['quatro_semanas_anteriores'][$dia_semana - 1] = $media_valor;
}

for ($i = 0; $i < 7; $i++) {
    if (!isset($medias['quatro_semanas_anteriores'][$i])) {
        $medias['quatro_semanas_anteriores'][$i] = number_format(0, 2); 
    }
}

ksort($medias['ultimas_quatro_semanas']);
ksort($medias['quatro_semanas_anteriores']);

echo json_encode($medias);
?>
