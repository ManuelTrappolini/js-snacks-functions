/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function initialsChar(array, character){
    let newArray = [];
    for(let i = 0; i < names.length; i++){
        if(array[i].startsWith(character)){
            newArray.push(array[i])
        }
        
}
    return newArray;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(initialsChar(names, 'A'));

//arrow function
const initialsChar2 = (array,character) =>{
    let newArray = [];
    for(let i = 0; i < names.length; i++){
        if(array[i].startsWith(character)){
            newArray.push(array[i])
        }
        
}
    return newArray;
}
console.log(initialsChar2(names, 'A'));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]