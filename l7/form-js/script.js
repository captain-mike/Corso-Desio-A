let myFormButton = document.querySelector('#myForm button');

myFormButton.addEventListener('click',function(e){
    e.preventDefault();

    let campi = Array.from(document.querySelectorAll('#myForm .validate'));//prendo il risultato di querySelectorAll e lo converto in array

    let [, , ,password,confermaPassword] = campi;//estrapolo password e conferma password con la destrutturazione
    
    for(let c of campi){
        //questa cosa l'ho messa solo per vedere i risultati della validazione
        console.log(c.id, c.checkValidity(), c.validationMessage)
        console.table(c.validity)//è un oggetto che contiene dei valori booleani che descrivono il tipo di errore
    }

    let valid = campi.every(c => c.checkValidity());

    if(password.value != confermaPassword.value){
        valid = false;
    }

    if(!valid){

        let campiDaValidare = campi.filter(c => !c.checkValidity())//array contenente i campi da validare
        let messaggi = campiDaValidare.map(c => {
            return `<div class="alert alert-warning m-0">${c.id}: ${c.validationMessage}</div>`;
        })//array contenente i messaggi dei campi da validare
        
        Swal.fire({
            icon: 'error',
            title: 'Errore nel form',
            html: messaggi
        })
    }else{
        //invia il form
        document.querySelector('#myForm').submit()
    }

})