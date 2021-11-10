function addToCart(quantity, productName="Elma") {
    console.log("Sepete eklendi Ürün: " + productName + " Adet : " + quantity)    
}

//addToCart()
addToCart(10)
//addToCart(21)


let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello World2!")    
}

sayHello2()




function addToCart2(productName, quantity, unitPrice) {}

let product1 = {productName:"Elma",quantity:5,unitPrice:10}

function addToCart3(product) {
    console.log("Ürün :" + product.productName)
    console.log("Adet :" + product.quantity)
    console.log("Fiyat :" + product.unitPrice)
}

addToCart3(product1)

let product2 = {productName:"Elma",quantity:5,unitPrice:10}
let product3 = {productName:"Elma",quantity:5,unitPrice:10}
product2 = product3
product2.productName = "Karpuz"
console.log(product3.productName)
 


function addToCart4(x) {
    console.log(products)    
}

let products = [
    {productName:"Elma",quantity:5,unitPrice:10},
    {productName:"Armut",quantity:5,unitPrice:10},
    {productName:"Karpuz",quantity:5,unitPrice:10}
]

addToCart4(products)

// rest her zaman fonksiyonun sonuna bırakılmalı
function add(bisey, ...numbers) {   // rest operator
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
       total = total+ numbers[i]       
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)

let numbers = [30,40,50,500,600,200]
// console.log(...numbers)   spread, yani dizi ayırarak herbir dizi indisini bir değişken gibi döndürür   // spread ayrıştırır, rest toparlar.
console.log(Math.max(...numbers))

let [icAnadolu, marmara,karadeniz, [icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"]
    ]
]

//console.log(icAnadolu.name)
//console.log(icAnadolu.population)

console.log(icAnadoluSehirleri)

let newProductName, newQuantity, newUnitPrice
({productName:newProductName, quantity:newQuantity, unitPrice:newUnitPrice} 
= {productName:"Elma",quantity:5,unitPrice:10})

console.log(newProductName)
console.log(newQuantity)
console.log(newUnitPrice)