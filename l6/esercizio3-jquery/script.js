$(document).ready(function(){


    $('#salva').on('click', function(){

        let testo = $('#testo').val()

        let div = $('#todos > div').clone()

        div//genitore
        .children().first().text(testo)//span figlio
        .siblings('button').on('click', function(){

            $(this)
            .text('Completato')
            .removeClass('btn-danger').addClass('btn-success')
            .parent()
            .removeClass('alert-warning').addClass('alert-success')
            .appendTo('#completati')
            
        })//button fratello dello span
        .parent().appendTo('#target')
   

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