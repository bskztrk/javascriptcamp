// public burda export 
export class Customer{
    constructor(id,customerNumber){
        this.id = id
        this.customerNumber = customerNumber

    }
}

let customer = new Customer(1,"12345");
//prototypeing
customer.name = "Murat Kurtboğan"
console.log(customer.name)

Customer.bisey ="Bisey"
console.log(Customer.bisey)

console.log(customer.id)

class IndividualCustomer extends Customer{
    constructor(customerName,id,customerNumber){
        super(id,customerNumber)
        this.customerName = customerName

    }

}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName

    }

}










