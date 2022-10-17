function colora(htmlElement){
    htmlElement.style.backgroundColor = 'red';
}

let blocchi = document.querySelectorAll('#nuovo .blocco');


/*blocchi.forEach(element => {
    element.addEventListener('click',() => {
        element.style.backgroundColor = 'red';
    })
})*/


for(let element of blocchi){
    element.addEventListener('click',() => {
        element.style.backgroundColor = 'red';
    })
}