get_mensagens();
limpa_campos();


function altera_cor(){
    $("#exampleInputNome1").css("border-color", "#d2d6de");
    $("#exampleInputEmail1").css("border-color", "#d2d6de");
    $("#exampleInputMensagem1").css("border-color", "#d2d6de");
    $("#asterisco_msg").css("display", "none");
}

function limpa_campos(){

    $("#exampleInputNome1").val("");
    $("#exampleInputEmail1").val("");
    $("#exampleInputMensagem1").val("");
}

function envia_mensagem(){
	//console.log("Chamada funcao envia mensagem");
    altera_cor();

	var nome = $("#exampleInputNome1").val();
    var email = $("#exampleInputEmail1").val();
    var mensagem = $("#exampleInputMensagem1").val();


    if(nome == ""){
        document.getElementById("asterisco_msg").style.color = 'red';
        document.getElementById("asterisco_msg").style.display = '';
        $("#exampleInputNome1").css("border-color", 'red');
    }
    if(email == ""){
        document.getElementById("asterisco_msg").style.color = 'red';
        document.getElementById("asterisco_msg").style.display = '';
        $("#exampleInputEmail1").css("border-color", 'red');
    }
    if(mensagem == ""){
        document.getElementById("asterisco_msg").style.color = 'red';
        document.getElementById("asterisco_msg").style.display = '';
        $("#exampleInputMensagem1").css("border-color", 'red');
    }
    if(nome != "" && email != "" && mensagem != ""){

        //console.log(nome + " " + email + " " + mensagem + " ");
        var lista = [];
        var objeto = new Object();
        objeto.nome = nome;
        objeto.email = email;
        objeto.mensagem = mensagem;
        lista.push(objeto);

        ///console.log(JSON.stringify(lista));

        $.ajax({
        	url: "dao/mensagem.php",
        	method: "post",
        	dataType: "json",
    	    data: {lista: JSON.stringify(lista)},
            success: function(success){
        	    //console.log(success);
                $('#modal-contato').modal('hide');
                alert("Mensagem enviada com sucesso!");
        	    console.log("Mensagem enviada com sucesso!");
        		altera_cor();
                limpa_campos();
            },
            error: function(error){
                console.log("Erro ao tentar enviar mensagem" + error);
                alert("Nada enviado");
            }
        });
        get_mensagens(); 

    }
}

function get_mensagens(){
    //console.log("Chamada funcao obter mensagens");

    $.ajax({
        url: "dao/recupera_mensagens.php",
        method: "post",
        dataType: "json",
        success: function(success){
            //console.log(success.linhas[0]);
            document.getElementById("altera_qtd_mensagem").innerHTML=success.linhas[0];
        },
        error: function(error){
            console.log("Erro ao obter mensagem");
        }
    });
}
