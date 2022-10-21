$(document).ready(function(){


    $('#salva').on('click', function(){

        let testo = $('#testo').val()

        let button = $('<button class="completaTodo btn btn-danger">Completa</button>')
        //posso aggiungere un event listener già durante la creazione dell'html
        button.on('click', function(){

            $(this)
            .text('Completato')
            .removeClass('btn-danger').addClass('btn-success')
            .parent()
            .removeClass('alert-warning').addClass('alert-success')
            .appendTo('#completati')
        })


        //$('#target').prepend(`<div>${testo}</div>`)
        $(`<div>${testo} </div>`)
        .css('box-shadow','1px 1px 3px #000')
        .addClass('alert').addClass('alert-warning')
        .append(button)
        .prependTo('#target')

        $('#testo').val('')
        
    })


    /*
    //posso anche intervenire sui bottoni dopo la loro creazione
    $('#target').on('click','.completaTodo', function(){

        $(this)
        .text('Completato')
        .removeClass('btn-danger').addClass('btn-success')
        .parent()
        .removeClass('alert-warning').addClass('alert-success')
        .appendTo('#completati')
    })*/


})