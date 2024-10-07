/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function printChar(){
    let initialsChar = [];
    for(let i = 0; i< names.length; i++){
        let printCharac = names[i].charAt(0)
        initialsChar.push(printCharac)   
    }
    console.log(initialsChar)
}
// Invoca la funzione qui e stampa il risultato in console

printChar()

// arrow function
const printChar2 = () => {
    let initialsChar = [];
    for(let i = 0; i< names.length; i++){
        let printCharac = names[i].charAt(0)
        initialsChar.push(printCharac)   
    }
    console.log(initialsChar)
}

printChar2()

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]