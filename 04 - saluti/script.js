/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
/* function helloThere(name){
   askName = prompt('Inserisci il tuo nome qui')
   let greeting = `Ciao ${askName}` 
   console.log(greeting);
   alert(`Ciao ${askName}`)
   

} */

   function helloThere(nome){
    let greet = 'Ciao'
    return greet + nome
   }
   

// Invoca la funzione qui e stampa il risultato in console

console.log(helloThere(` ${name}`));


//arrow function

const helloThere2 = nome => {
    let greet = 'Ciao'
    return greet + nome
}

console.log(helloThere2(' Mario'));


//Risultato atteso se si passa 'Mario': // ciao Mario