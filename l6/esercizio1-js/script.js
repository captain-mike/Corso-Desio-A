

let salva = document.querySelector('#salva');

salva.addEventListener('click',function(){
    
    let testo = document.querySelector('#testo');

    let div = document.createElement('div')//<div></div>
    let span = document.createElement('span')//<span></span>
    let button = document.createElement('button')//<button></button>

    //inserisco le classi
    div.classList.add('alert','alert-warning');
    button.classList.add('btn','btn-danger','completaTodo');

    //aggiusto lo stile
    div.style.boxShadow = '1px 1px 3px #000'

    //gestisco evento click sul button
    button.addEventListener('click',function(){
        button.textContent = 'Completato';
        div.classList.remove('alert-warning');
        div.classList.add('alert-success');
        document.querySelector('#completati').append(div)
    })

    //scrivo i testi
    span.textContent = testo.value + ' ';
    button.textContent = 'Completa'
    
    //mostro gli elementi del DOM
    div.append(span, button)
    document.querySelector('#target').append(div)

})