/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function searchForVowels(str){
    let vowels = ['a','e','i','o','u']
    let count = 0
    for(let i = 0; i < str.length; i++){
        const element = str[i]
        if(vowels.includes(str[i])){
            
            count ++
        }
        
    }
    console.log(str, count);
    
}

// Invoca la funzione qui e stampa il risultato in console

searchForVowels(word)

//arrow function 
const searchForVowels2 = (str) =>{
    let vowels = ['a','e','i','o','u']
    let count = 0
    for(let i = 0; i < str.length; i++){
        const element = str[i]
        if(vowels.includes(str[i])){
            
            count ++
        }
        
    }
    console.log(str, count,);
}

searchForVowels2(word)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)