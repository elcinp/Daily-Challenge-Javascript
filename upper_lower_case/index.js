const str = 'The Quick Brown Fox'; 

// tHe YeLLoW fOx 
// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

//Solution 1 


let newStr ="";

for (let i = 0; i < str.length; i++) {
    if ( str[i].toUpperCase() === str[i] ) {
        
       newStr += str[i].toLowerCase();
        
    }
    else if ( str[i].toLowerCase() === str[i]) {
       newStr += str[i].toUpperCase();
    }
    
}
console.log(newStr);


// Solution 2

// let arrWord = console.log((str.split("")))
// let strnew = "";
// arrWord.forEach(element => element === element.toUpperCase() ? strnew += element.toLowerCase() : strnew+=element.toUpperCase())
// console.log(strnew)






















// function upper_lower(string){

//     let word = string.split(" ")
    
//     for (let i =0;i<word.length;i++) {
//         if (word[i] === word[i].toLowerCase) {
//             word[i] = word[i].toUpperCase
//         } else {
//             word[i] = word[i].toLowerCase
//         }
//     }
//     return word
// }


// console.log(upper_lower(str))
