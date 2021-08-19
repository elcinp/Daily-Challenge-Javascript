//Solution 1

const str = 'Clarusway Online Career IT Training School';

// function word(str) {
//     const newStr = str.split(" ")
//     console.log(newStr)
//     firstLetters = []

//     for (let i=0;i<newStr.length;i++) {
//         firstLetters.push(newStr[i][0])
//     }
//     console.log(firstLetters.join(""))
// }

// word(str);


//Solution 2 with map() method

const myArr = str.split(" ");
console.log(myArr)

let firstLetters ="";

myArr.map((item) => {
    firstLetters += item[0]
})
console.log(firstLetters);
