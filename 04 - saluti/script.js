/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
function helloThere(name){
   askName = prompt('Inserisci il tuo nome qui')
   let greeting = `Ciao ${askName}` 
   console.log(greeting);
   alert(`Ciao ${askName}`)
   

}

// Invoca la funzione qui e stampa il risultato in console

helloThere()

//Risultato atteso se si passa 'Mario': // ciao Mario