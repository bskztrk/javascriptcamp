// Ödev1 Asal Sayı
function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if(number % i == 0){
            return 0
        }              
    }
    return 1    
}

function findPrime(...numbers) {
    numbers.forEach(number => {
        if (number < 2) {
            console.log(number +" asal sayı değildir!")
        }else if(number == 2){
            console.log(number +" asal sayıdır")
        }else{
            let flag = isPrime(number)            
            if (flag == 0) {
                console.log(number +" asal sayı değildir!")                
            }else{
                console.log(number +" asal sayıdır")
            }
        }
    });    
}

findPrime(-5,1,0,2,5,8,21,13)





// Odev2  Arkadaş sayı
function sendTotal(number) {
    let total = 0
    for(let i = 1; i<number; i++){
        if (number % i == 0) {
            total = total + i            
        }
    }
    return total
}

function isFriend(number1, number2) {
    let total1 = sendTotal(number1)
    let total2 = sendTotal(number2)

    console.log(total1)
    console.log(total2)
    if( total1 == number2  &&  total2 == number1){
        console.log(number1+" ile "+number2+" arkadaş sayılardır.")
    }else{
        console.log(number1+" ile "+number2+" arkadaş sayı degildir!")
    }
    
}
// 220, 284
//1184, 1210
isFriend(220,284)





// Ödev3  Mükemmel Sayılar
//    Mükemmel sayının kendisi dahil pozitif bölenlerin toplamının kendisinin iki katına eşit olmasını gerektirir
// 2. soru için kullandığım pozitif bölenlerin toplamını gönderen fonksiyonu burdada kullanacağım. sendTotal fonksiyonu kendisi hariç poz. bölenleri döndürecek yani 
// o fonsiyonda dönen sonuç benim sayıma eşitse mükemmel sayı diyebilirm.
function perfectNumbers(_number) {
    for(let number = 1; number < _number; number++){
        if(number == sendTotal(number)){
            console.log(number+" mükemmel sayıdır.")
        }
    }    
}

perfectNumbers(1000)



//Ödev4 Asal Sayı listesi ödev1 için oluşturduğum isPrime fonksiyonunu kullanacağım. gönderdiğim sayının asal olup olmadığını döndürecek
function primeNumbers(_number){
    for (let number = 1; number < _number; number++ ){
        if(isPrime(number) == 1){
            console.log(number+" sayısı asal sayıdır.")
        }else{
            //console.log(number+" sayısı asal sayı degildir!")
        }
    }
}

primeNumbers(1000)