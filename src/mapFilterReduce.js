
let cart =[
    {id:1, productName:"Telefon", quantity:8,unitPrice:4000},
    {id:2, productName:"Şarj Cihazı", quantity:1,unitPrice:100},
    {id:3, productName:"Kitap", quantity:3,unitPrice:50},
    {id:4, productName:"Kahve", quantity:1,unitPrice:50},
    {id:5, productName:"Kulaklık", quantity:2,unitPrice:300},
    {id:6, productName:"Kalem", quantity:4,unitPrice:30},
]

//SPA single page application
console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName+": "+ product.quantity*product.unitPrice+"</li>")
})
console.log("</ul>")

// yeni bir array döndürüyor
let quantityOver2 = cart.filter(product=>product.quantity>2)
console.log(quantityOver2)

let total = cart.reduce((acc,product)=>acc+product.unitPrice,0)
console.log(total)  
 
 


console.log("****************************************************************")
function addToCart(sepet) {
    sepet.push({id:7, productName:"Bardak", quantity:4,unitPrice:40})
}
addToCart(cart)
console.log(cart)


let sayi = 10
function addNumber(sayi) {
    sayi+1
}
addNumber(sayi)
console.log(sayi)