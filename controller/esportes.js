retorna_esportes();

function retorna_esportes(){
	$.ajax({
    	url: "../dao/esportes.php",
    	method: "get",
    	dataType: "json",
        success: function(success){
    	    //console.log(success.noticias);
            var str = "";
                
            $.each(success.noticias, function(idx, obj){
		        str += '<div class="col-md-4">'
                str += '   <div class="card card-chart">'
                str += '       <img class="card-header card-header" src="'+obj.imagem+'">'   
                str += '        <div class="card-body">'
                str += '            <h4 class="card-title">'+obj.titulo+'</h4>'
                str += '            <p class="card-category">'+obj.conteudo+'</p>'
                str += '        </div>'
                str += '        <div class="card-footer">'
                str += '            <div class="stats">'
                str += '                <i class="material-icons">access_time</i> updated 4 minutes ago'
                str += '            </div>'
                str += '        </div>'
                str += '    </div>'
                str += '</div>'

            });
            document.getElementById("linha_esportes").innerHTML=str;
        },
        error: function(error){
            console.log("Erro ao obter os esportes" + error);
            str += '<div class="col-lg-3 col-md-6 col-sm-6">'
            str += '    <div class="card card-stats">'
            str += '        <div class="card-header card-header-success card-header-icon">'
            str += '            <div class="card-icon">'
            str += '                <i class="material-icons">info_outline</i>'
            str += '            </div>'
            str += '            <p class="card-category">Error</p>'
            str += '            <h3 class="card-title">Erro ao obter esportes!</h3>'
            str += '        </div>'
            str += '        <div class="card-footer">'
            str += '            <div class="stats">'
            str += '                <i class="material-icons">date_range</i> Last 24 Hours'
            str += '            </div>'
            str += '        </div>'
            str += '    </div>'
            str += '</div>'
            document.getElementById("linha_esportes").innerHTML=str;
        }
    });		
}
