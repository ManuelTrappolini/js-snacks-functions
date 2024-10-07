/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
let hours = new Date().getHours()
console.log(hours);


// Dichiara la funzione qui.
function helloThere(nome){
    if(hours <= 13){
        return 'Buon giorno' +  ` ${name}`
    }
   
    else if(hours <= 17){
        return 'Buon pomeriggio' + ` ${name}`
    }
   
   else{
    return 'Buona sera' + ` ${name}`
   }
}  

// Invoca la funzione qui e stampa il risultato in console

console.log(helloThere());

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.