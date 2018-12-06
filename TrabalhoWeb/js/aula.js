
$(document).ready(function(){
        // REQUISIÇÃO HTTP
        let url ='http://rafaelsperoni.pro.br/tsi/menus.php?user=2016007893';

        //REQUISIÇÃO HTTP
        $.getJSON(url, function(dados) {
           alert('Funcionou!')
        });
    

