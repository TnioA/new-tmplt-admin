<?php
	
	function recupera_txt(){
		$linha = explode(" | ", file_get_contents('mensagens.txt'));
		
		$qtd_linhas = array('linhas' => array());

		for ($i=0; $i< count($linha); $i++) { 
			//echo $linha[$i];
			//echo "</br></br>";
		}

		$registros = count($linha)-1;
		array_push($qtd_linhas['linhas'], $registros);

		$json_str = json_encode($qtd_linhas);
		return($json_str);
	}

	function recupera_banco(){

	}

	print(recupera_txt());
?>
