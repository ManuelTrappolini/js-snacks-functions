/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function searchForVowels(){
    let vowels = ['a','e','i','o','u']
    let count = 0
    for(let i = 0; i < word.length; i++){
        
        if(vowels.includes(word[i])){
            
            count ++
        }
        
    }
    console.log(word, count,);
    
}

// Invoca la funzione qui e stampa il risultato in console

searchForVowels()

//arrow function 
const searchForVowels2 = () =>{
    let vowels = ['a','e','i','o','u']
    let count = 0
    for(let i = 0; i < word.length; i++){
        
        if(vowels.includes(word[i])){
            
            count ++
        }
        
    }
    console.log(word, count,);
}

searchForVowels2()

//Risultato atteso se si passa 'javascript': 3 (a, a, i)