//Solution 1

const str = 'Clarusway Online Career IT Training School';

const newStr = str.split(" ")
console.log(newStr)
firstLetters = []

for (let i=0;i<newStr.length;i++) {
    firstLetters.push(newStr[i][0])
}
console.log(firstLetters.join(""))