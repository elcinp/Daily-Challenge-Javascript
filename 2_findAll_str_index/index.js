/* var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
function findAll(str,index){
    let arr= str.split("")
    if (arr.includes(index)){
        for (let i=0;i<arr.length;i++){
            if(arr[i] === index) console.log(`${i} "${index}"`)
        }
    } else console.log("No match found.");  
}
findAll(str,'e') */


let cumle = prompt("Bir şeyler yazınız").trim().toLowerCase();
let pozisyon = [];
let KarakterAra = prompt('Aranacak karakter giriniz:').trim().toLowerCase();
if(cumle.includes(KarakterAra)){
  for(var i=0; i<cumle.length;i++) {
    if (cumle[i] === KarakterAra){
      pozisyon.push(i);
      console.log(`Pozisyon: ${i}, Harf: ${KarakterAra}`);
    }
  } 
}else{
  console.log("Aradığınız Karakter Bulunamadı!");
}

/* function finder (str, searched) {
    if (str.indexOf(searched) === -1) console.log(`"${searched}" --> Sorry, no matching`); 
    let fromIndex = 0;
    while (str.indexOf(searched, fromIndex) !== -1) {
        let  i = str.indexOf(searched, fromIndex);
        console.log(`"${searched}" starts at ${i}. index`);;
        fromIndex = i + searched.length
    }
}
let sentence = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
let wanted = prompt("what are you searching?").trim();
finder(sentence, wanted); */



