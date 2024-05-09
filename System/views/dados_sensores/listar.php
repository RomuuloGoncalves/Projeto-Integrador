<?php
include '../../lib/conn.php';
include '../../lib/cors.php';

// Consulta SQL para calcular a média dos valores dos sensores para cada dia da semana atual
$sql = "SELECT DAYOFWEEK(data_coleta) AS dia_semana, AVG(valor) AS media_valor 
        FROM dados_sensores 
        WHERE WEEK(data_coleta) = WEEK(NOW()) 
        GROUP BY dia_semana";

$stmt = $conn->prepare($sql);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Array para armazenar as médias de cada dia da semana
$media_por_dia = array();

// Preenche o array com as médias por dia da semana
foreach ($result as $row) {
    $dia_semana = $row['dia_semana'];
    $media_valor = number_format($row['media_valor'], 2); // Formatando para duas casas decimais
    // DAYOFWEEK() retorna valores de 1 (domingo) a 7 (sábado), então ajustamos para 0 a 6
    $media_por_dia[$dia_semana - 1] = $media_valor;
}

// Preenche os dias da semana que não têm dados com a média zero
for ($i = 0; $i < 7; $i++) {
    if (!isset($media_por_dia[$i])) {
        $media_por_dia[$i] = number_format(0, 2); // Formatando para duas casas decimais
    }
}

// Ordena o array para que os dias da semana fiquem na ordem correta (domingo a sábado)
ksort($media_por_dia);

// Retorna o objeto JSON com as médias de cada dia da semana
echo json_encode($media_por_dia);
?>
