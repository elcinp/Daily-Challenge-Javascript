// const movements = [100, 300, -200, 500, -400, 225, 1000, -700];
//     You deposited $xx
//     You withdrew $xxx 

//     arrDeposits =
//     arrWithdraws =
//     for each 


// Solution 1

const movements = [100, 300, -200, 500, -400, 225, 1000, -700];

arrDeposits =[]
arrWithdraws =[]

movements.forEach((element) => {(element>0) ? console.log(`You deposited ${element}`) :  console.log(`You withdrew ${element}`)})

movements.forEach((element) => {(element>0) ? arrDeposits.push(element) : arrWithdraws.push(element) })
console.log(arrDeposits)
console.log(arrWithdraws)

let depositSum = 0
let withdrewSum = 0

arrDeposits.forEach((element) => depositSum += element)
console.log("depositSum :",depositSum)

arrDeposits.forEach((element) => withdrewSum += element)
console.log("withdrewSum :",withdrewSum )

//Solution 2

































// movements.forEach(element => element > 0 ? console.log(`You deposite ${element}`) :  
//                                                     console.log(`You withdrew ${element}`)) 
//         movements.forEach(element => element > 0 ? arrDeposits.push(element) : arrWithdraws.push(element))
//         console.log(arrDeposits)
//         console.log(arrWithdraws)
//         let sum1 = 0;
//         let sum2 = 0;
//         arrDeposits.forEach(element => sum1+=element)
//         console.log(`ArrDeposit sum =${sum1}`)
//         arrWithdraws.forEach(element => sum2+=element)
//         console.log(`ArrWithdraws sum =${sum2}`)
//         username.length > 0 ? username : "Kullanıcı bilgisi bulunamadı"