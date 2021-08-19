// filter words longer than 6 letters

//Solution 1

const words = [
    'spray',
    'limit',
    'elite',
    'exuberant',
    'destruction',
    'present',
    'Clarusway',
    'Future',
  ];

let arr =[] 
  
function longer6(word) {
    if (word.length>6) {
        arr.push(word)
    } 
}

words.filter(longer6)
console.log(arr)