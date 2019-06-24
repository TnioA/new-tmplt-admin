esconde_divs();
$("#menu_fofocas").hide();
$("#linha_mensagens").show();


function esconde_divs(){
        $("#linha_mensagens").hide();
        $("#linha_cotacoes").hide();
        $("#linha_fofocas").hide();
        $("#linha_esportes").hide();
}

function show_menu_fofocas(){
        troca_item_ativo("#btn_menu_fofocas");
        if($("#menu_fofocas").is(':hidden')){
                $("#menu_fofocas").show();
        }else{
                $("#menu_fofocas").hide();
        }
}

function troca_item_ativo(_item){

        $("#btn_menu_dashboard").removeClass("active");
        $("#btn_menu_cotacoes").removeClass("active");
        $("#btn_menu_esportes").removeClass("active");
        $("#btn_menu_fofocas").removeClass("active");
        $("#btn_menu_mensagem").removeClass("active");

        $(_item).addClass("active");
}

function fecha_sidebar(){
        $(".close-layer").removeClass("visible").addClass("invisible");
        $(".navbar-toggler").removeClass("toggled");
        $("html").removeClass("nav-open");  
}

function mostrar_dashboard(){
        troca_item_ativo("#btn_menu_dashboard");
        $("#menu_fofocas").hide();
        esconde_divs();
        document.getElementById("altera_titulo").innerHTML="Dashboard";
        fecha_sidebar();
        $("#linha_mensagens").fadeIn(800);
}

function mostrar_cotacoes(){
        troca_item_ativo("#btn_menu_cotacoes");
        $("#menu_fofocas").hide();
        esconde_divs();
        document.getElementById("altera_titulo").innerHTML="Cotações Diárias";
        fecha_sidebar();
        $("#linha_cotacoes").fadeIn(800);
}

function mostrar_esportes(){
        troca_item_ativo("#btn_menu_esportes");
        $("#menu_fofocas").hide();
        esconde_divs();
        document.getElementById("altera_titulo").innerHTML="Notícias Esportes";
        fecha_sidebar();
        $("#linha_esportes").fadeIn(800);
}

function mostrar_mensagem(){
        troca_item_ativo("#btn_menu_mensagem");
        $("#menu_fofocas").hide();
        esconde_divs();
        document.getElementById("altera_titulo").innerHTML="Dashboard";
        fecha_sidebar();
        $("#linha_mensagens").fadeIn(800);
}