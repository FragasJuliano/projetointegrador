$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

/* AVALIAÇÃO 03/12/18 */



$(document).ready(function() {
                $("#mostrar").click(Mostrar);
                $("#esconder").click(Esconder);
                });
 
            function Mostrar(){
                $("#elemento").show();
            }
            function Esconder(){
                $("#elemento").hide();
            }
            



