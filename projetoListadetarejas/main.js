

$(document).ready(function(){

    $('#cadastro').on('submit',function(e){
        e.preventDefault();

        const novaAtividade = $('#atividade').val().trim(); 
        const novoItem = $('<li></li>').text(novaAtividade); 
        $('ul').append(novoItem); 
        $('#atividade').val(''); 
    })

    $(document).ready(function(){
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('riscar'); // Adiciona ou remove a classe 'riscar' ao item de lista clicado
    });
});
})

