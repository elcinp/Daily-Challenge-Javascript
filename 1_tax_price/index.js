/* let a = function (){
    let fiyat = Number(prompt("Ürün fiyatı giriniz: "));
    let adet = Number(prompt("Ürün adet miktarı giriniz: "));
    const vergiKat = 0.18;
    let odeme = (fiyat * adet) 
    let vergiOdeme = (fiyat * adet * vergiKat)
    let toplam =  odeme + vergiOdeme
    return (`Vergi hariç toplam : ${odeme} \nToplam ödenen vergi : ${vergiOdeme}\nÖdemeniz gereken toplam miktar : ${toplam}`);
}
console.log(a()); */



/* const price = function (tax, ...cost) {
    for (var i = 0, total_cost = 0; i < cost.length; i++) {
        total_cost += cost[i];
    }
    return total_cost + total_cost * (tax / 100)
}
console.log(`The total price is ${price(18, 10, 20, 30, 40)}`); */


/* const sepet_hesapla = function(sepet_toplam, vergi = 18) {
    return sepet_toplam + ((sepet_toplam * vergi) / 100)
  }
  let sepet_urun = [50,50]; /*statik ürün sepeti
  let toplam = 0;
  for (let i = 0; i < sepet_urun.length; i++) {
    toplam += sepet_urun[i]
  }
  (sepet_urun.length === 0) ? console.log("Sepetinizde Ürün Bulunmamaktadır.") : console.log(sepet_hesapla(toplam)); */


/* function hesap(vergi, ...args) {
    sum=0
    for (let i = 0; i < args.length; i++) {
        sum+=args[i]
    }
    return sum+sum*vergi/100
}
console.log(hesap(18,25,25)); */


var result = 0;
(function () {
    const adt = Number(prompt("Kaç ürün aldınız: "));
    if (adt===0){
        alert("Üzgünüm vergi hesaplayamam.Değeri 0 girdiniz.")
    }else{
    var liste = [];
    var toplam = 0;
    for (let i = 0; i < adt; i++) {
        const f = prompt("Enter cost: ");
        liste.push(f);
    }
    for (let i = 0; i < liste.length; i++) {
        toplam += Number(liste[i]);
    }
    const v = Number(prompt("Enter tax rate: "));
    result = toplam + (toplam*v)/100;
    return result;
}})();
console.log("Ürün + KDV :", result,"tl");