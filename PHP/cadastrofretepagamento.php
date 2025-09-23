<?php


require_once __DIR__ . "/conexao.php";

function redirectWith($url, $params = []) {
    if (!empty($params)) {
        $qs = http_build_query($params);
        $sep = (strpos($url, '?') === false) ? '?' : '&';
        $url .= $sep . $qs;
    }
    header("Location: $url");
    exit;
}

try{

     if ($_SERVER["REQUEST_METHOD"] !== "POST") {
        redirectWith("../PAGINAS/fretepagamento.html", ["erro" => "Método inválido"]);
    }


    $bairro = $POST["bairro"];
    $valor = (double)$_POST["valor"];
    $transportadora = $POST["transportadora"]

    $erros_validacao=[];

    if($bairro ==="" || $valor ===""){
        $erros_validacao[]="Preencha todos os campos";
    }

        $sql = "INSERT INTO Cliente (nome, cpf, telefone, email, senha)
            VALUES (:nome, :cpf, :telefone, :email, :senha)";

    $inserir = $pdo->prepare($sql)->execute([
        ":bairro" => $bairro,
        ":valor" => $valor,
        ":transportadora" => $transportadora,
        
    ]);

     if ($inserir) {
        redirectWith("../PAGINAS/fretepagamento.html", ["cadastro" => "ok"]);
    } else {
        redirectWith("../PAGINAS/fretepagamento.html", ["erro" => "Erro ao cadastrar no banco de dados"]);
    }


} catch (PDOException $e) {
    redirectWith("../PAGINAS/fretepagamento.html", ["erro" => "Erro no banco de dados: " . $e->getMessage()]);
}

?>