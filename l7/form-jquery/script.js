$(function(){// .ready() è già stato chiamato


    function checkEmptyFields(array){
        let valid = true
        array.each((_,field) => {

            //se il campo non ha il suo span per il messaggio di testo
            if($(`#myForm span[data-target="${field.id}"]`).length == 0){
                //crea lo span che ospiterà il messaggio di testo
                $(field).after('<span class="error-message-text" data-target="'+field.id+'"></span>')
            }

            //ciclando tutti gli elementi controllo i loro valori
            if(!$(field).val()){
                //se vuoti scrivo un errore
                let error = $(field).attr('data-empty-error');
                $(field).siblings(`span[data-target="${field.id}"]`).text(error);
                valid = false;
            }else{
                $(field).siblings('span').text('')
            }

        })
        return valid
    }


    $('#myForm button').on('click', function(e){
        
        e.preventDefault();
        
        let password = $('#password').val();
        let confermaPassword = $('#conferma-password').val();

        let valid = true;

        valid = checkEmptyFields($('#myForm .notEmpty'))

        if(password != confermaPassword){
            valid = false;
            $('#conferma-password').siblings('span').text('le password non coincidono')
        }
       
        console.log(valid)

        if(valid){
            //invio il form
            console.log('ok')
            $('#myForm').submit()
        }

    })

})