var str_destaques = "";
var str_fofocas = "";
var str_ultimas = "";

get_fofocas();

function get_fofocas(){

  $.ajax({
    url: "../dao/fofocas.php",
    method: "post",
    dataType: "json",
    success: function(success){
      //console.log(success.fofocas[1]);
      $.each(success.destaques, function(idx, obj){
        //str_destaques += '<div class="card text-center">';
        //str_destaques += '  <h4 class="card-header">'+ obj.titulo +'</h4>';
	      //str_destaques += '    <div class="card-body">';
        //str_destaques += '    	<img class="bd-placeholder-img card-img-top" width="100%" height="100%" src="'+obj.imagem+'" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/></img>';
        //str_destaques += '      <p class="card-text">'+ obj.conteudo +'</p>';
        //str_destaques += '    </div>';
        //str_destaques += '</div>';
        //str_destaques += '<br></br>';
        


        str_destaques += '<div class="col-md-4">'
        str_destaques += '   <div class="card card-chart">'
        str_destaques += '       <img class="card-header card-header" src="'+obj.imagem+'">'   
        str_destaques += '        <div class="card-body">'
        str_destaques += '            <h4 class="card-title">'+obj.titulo+'</h4>'
        str_destaques += '            <p class="card-category">'+obj.conteudo+'</p>'
        str_destaques += '        </div>'
        str_destaques += '        <div class="card-footer">'
        str_destaques += '            <div class="stats">'
        str_destaques += '                <i class="material-icons">access_time</i> updated 4 minutes ago'
        str_destaques += '            </div>'
        str_destaques += '        </div>'
        str_destaques += '    </div>'
        str_destaques += '</div>'
      });

      $.each(success.fofocas, function(idx, obj){
        str_fofocas += '<div class="card text-center">';
        str_fofocas += '  <h4 class="card-header">'+ obj.titulo +'</h4>';
	      str_fofocas += '    <div class="card-body">';
        $.each(obj.conteudo, function(idx, obj2){
          str_fofocas += '    <img class="bd-placeholder-img card-img-top" width="100%" height="100%" src="'+obj2.imagem+'" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/></img>';
          str_fofocas += '      <p class="card-text">'+ obj2.conteudo +'</p>';
	        str_fofocas += '      <br>';
        });
        str_fofocas += '    </div>';
        str_fofocas += '</div>';
        str_fofocas += '<br></br>';
      });

      $.each(success.ultimas, function(idx, obj){
        //str_ultimas += '<div class="card text-center">';
	      //str_ultimas += '    <div class="card-body">';
        //str_ultimas += '    	<img class="bd-placeholder-img card-img-top" width="100%" height="100%" src="'+obj.imagem+'" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><small class="text-muted">'+ obj.data +'</small></img>';
        //str_ultimas += '      <p class="card-text">'+ obj.conteudo +'</p>';
        //str_ultimas += '    </div>';
        //str_ultimas += '</div>';
        //str_ultimas += '<br></br>';
        
        str_ultimas += '<div class="col-md-4">'
        str_ultimas += '   <div class="card card-chart">'
        str_ultimas += '       <img class="card-header card-header" src="'+obj.imagem+'">'   
        str_ultimas += '        <div class="card-body">'
        str_ultimas += '            <p class="card-category">'+obj.conteudo+'</p>'
        str_ultimas += '        </div>'
        str_ultimas += '        <div class="card-footer">'
        str_ultimas += '            <div class="stats">'
        str_ultimas += '                <i class="material-icons">access_time</i>'+obj.data+''
        str_ultimas += '            </div>'
        str_ultimas += '        </div>'
        str_ultimas += '    </div>'
        str_ultimas += '</div>'
      });
    },
    error: function(error){
      console.log("Erro ao obter fofocas" + error);
      alert("Erro ao obter fofocas");
    }  
  });
}

function retorna_fofocas(tipo){
	
	if (tipo == 1){
    esconde_divs();
    document.getElementById("altera_titulo").innerHTML="Fofocas - Destaques";
    fecha_sidebar();
    document.getElementById("linha_fofocas").innerHTML=str_destaques;
    $("#linha_fofocas").fadeIn(800);	
	}
	if (tipo == 2){
    esconde_divs();
    document.getElementById("altera_titulo").innerHTML="Fofocas - Em alta";
    fecha_sidebar();
    document.getElementById("linha_fofocas").innerHTML=str_fofocas;
    $("#linha_fofocas").fadeIn(800);
	}
	if (tipo == 3){
    esconde_divs();
    document.getElementById("altera_titulo").innerHTML="Fofocas - Últimas";
    fecha_sidebar();
    document.getElementById("linha_fofocas").innerHTML=str_ultimas;
    $("#linha_fofocas").fadeIn(800);
	}
}



function _fofocas(){

  //usando js puro
  var chamada = new XMLHttpRequest();
  chamada.open('GET', link, true);
  chamada.send(null);

  chamada.onreadystatechange = function() {
    if (chamada.readyState == 4) {
      if(chamada.status == 200){
        console.log(chamada.responseText);
      }
    }
  }
};



