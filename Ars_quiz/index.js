// let arr =[3,5,"Arsene",8,5,7,4,5,"Arsene",5,7]
// let x;
// let y;
// let sum = 0;
// for (let i=0;i<arr.length;i++) {
//     if (arr[i] === "Arsene"){
//         let x = i;
//     }
// }

var word = prompt("Enter a string:");
var result = "";
for (let i = word.length-1; i >-1 ; i--) {
    result = result + word[i]
}
console.log(result);