/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function printChar(array){
    let initialsChar = [];
    for(let i = 0; i< array.length; i++){
        let printCharac = array[i].charAt(0)
        initialsChar.push(printCharac)   
    }
    console.log(initialsChar)
}
// Invoca la funzione qui e stampa il risultato in console

printChar(names)

// arrow function
const printChar2 = (array) => {
    let initialsChar = [];
    for(let i = 0; i< array.length; i++){
        let printCharac = array[i].charAt(0)
        initialsChar.push(printCharac)   
    }
    console.log(initialsChar)
}

printChar2(names)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]