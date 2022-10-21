$(document).ready(function(){


    $('#salva').on('click', function(){

        let testo = $('#testo').val()

        let div = $('<div></div>');//creo un tag div virtualmente

        div.load('template.html #todos > div',() => {
            div
            .find('button')
            .on('click', function(){

                $(this)//il bottone
                .text('Completato')
                .removeClass('btn-danger').addClass('btn-success')
                .parent()//il div genitore
                .removeClass('alert-warning').addClass('alert-success')
                .parent()//il div genitore del genitore
                .appendTo('#completati')
            })
            .siblings('span')
            .text(testo)
        })

        div
        .appendTo('#target')
   

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