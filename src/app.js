/*
console.log("Merhaba Dünya")


let konutKredileri = ["Konut kredisi","Emlek konut kredisi", "Kamu konut kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")    
}
console.log("</ul>")
*/

// tip güvenli değildir !
// typescript microsoft tarafından tip güvenli olması amacıyla geliştirilmiş

// singlepage application 
// tek sayfa 

// var, let, const  

let sayi1 = 10
sayi1 = "Basak"

let student = {id:1, name:"ayse"}
//console.log(student)

function save( puan=10, ogrenci) {
    //console.log(ogrenci.name +" : "+ puan)
}

save(undefined,student)

let students = ["Basak Ozturk", "Gulfidan Öztürk","Emine Öztürk", "Büşra Öztürk"]
//console.log(students)

let students2 = [student, {id:2, name:"fatma"},"Ankara", {city:"İstanbul"}]
//console.log(students2)

/// rest  boş arraydir.
let showProducts = function (id, ...products) {
        console.log(id)
        console.log(products[0])
}
//console.log(typeof showProducts)

// showProducts(10, ["elma", "armut", "karpuz"])

// spread  bir arrayi tek tek ayırmaya yarıyor.
let points =[1,2,3,78,54,87,98,9]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC", ..."D", ..."EFG",..."H")


// Destructuring
// elimizdeki arrayin degerlerini değişkenlere atama 

let populations =[1000,2000,3000,[4000,5000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)


function someFunctions([,small1],number) {
    console.log(small1)    
}

someFunctions(populations)

let category = {id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name1} = category
console.log(id)
console.log(name1)

//Redux



