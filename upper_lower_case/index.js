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





















// function upper_lower(string){

//     let word = string.split(" ")
    
//     for (let i =0;i<word.length;i++) {
//         if (word[i] === word[i].toLowerCase) {
//             word[i] = word[i].toLowerCase
//         } else {
//             word[i] = word[i].toUpperCase
//         }
//     }
//     return word
// }


// console.log(upper_lower(str))
