retorna_moedas();

function retorna_moedas(){
	$.ajax({
    	url: "../dao/cotacoes.php",
    	method: "get",
    	dataType: "json",
        success: function(success){
    	    //console.log(success);
            var str = "";
            $.each(success.moedas, function(idx, obj){

                str += '<div class="col-lg-3 col-md-6 col-sm-6">'
                str += '    <div class="card card-stats">'
                str += '        <div class="card-header card-header card-header-icon">'
                str += '            <div class="card-icon" style="background:#efe3e300;padding:0px">'
                str += '                <img class="card-icon" style="background:#efe3e300;width:100px;padding:0px" src="'+ obj.bandeira +'">'
                str += '            </div>'
                str += '            <p class="card-category">'+obj.nome+'</p>'
                str += '            <h3 class="card-title">'+obj.valor+'</h3>'
                str += '        </div>'
                str += '        <div class="card-footer">'
                str += '            <div class="stats">'
                str += '                <i class="material-icons">date_range</i> Last 24 Hours'
                str += '            </div>'
                str += '        </div>'
                str += '    </div>'
                str += '</div>'
            });
            document.getElementById("linha_cotacoes").innerHTML=str;
        },
        error: function(error){
            console.log("Erro ao obter as cotacoes" + error);

            str += '<div class="col-lg-3 col-md-6 col-sm-6">'
            str += '    <div class="card card-stats">'
            str += '        <div class="card-header card-header-success card-header-icon">'
            str += '            <div class="card-icon">'
            str += '                <i class="material-icons">info_outline</i>'
            str += '            </div>'
            str += '            <p class="card-category">Error</p>'
            str += '            <h3 class="card-title">Erro ao obter cotações!</h3>'
            str += '        </div>'
            str += '        <div class="card-footer">'
            str += '            <div class="stats">'
            str += '                <i class="material-icons">date_range</i> Last 24 Hours'
            str += '            </div>'
            str += '        </div>'
            str += '    </div>'
            str += '</div>'
            document.getElementById("linha_cotacoes").innerHTML=str;
        }
    });		
}