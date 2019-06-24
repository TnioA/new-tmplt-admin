<?php
	$lista_decode = json_decode($_POST["lista"]);
	$nome = $lista_decode[0]->nome;
	$email = $lista_decode[0]->email;
	$mensagem = $lista_decode[0]->mensagem;

	//$nome = 'nome';
	//$email = 'email';
	//$mensagem = 'mensagem';

	//-----ESCRITA EM ARQUIVO
	$name = 'mensagens.txt';
	$text = "Nome: ".$nome." - Email: ".$email." - Mensagem: ".$mensagem." | ";
	$file = fopen($name, 'a');
	fwrite($file, $text);
	fclose($file);

	//-----CONEXAO COM O BANCO
	$connection = new SQLite3("https://tmasterapp.herokuapp.com/simple.db");

	$str_retorno = array();

	if($connection){
		$sql = "INSERT INTO mensagem VALUES('".$nome."', '".$email."', '".$mensagem."')";
		$connection->query($sql);

		if($connection){
			array_push($str_retorno, ['response' => 'sucesso']);
		}else{
			array_push($str_retorno, ['response' => 'erro', 'sql' => $sql]);
		}
	}else{
		array_push($str_retorno, ['response' => 'erro', 'error' => 'impossivel conectar ao banco']);
	}

	$retorno = json_encode($str_retorno);

	echo($retorno);
	

	//try {
		
	//	} catch (Exception $e) {
		
	//}
?>
