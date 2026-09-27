
Function.prototype.mycall = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + 'It is not callable / function')
    }

    context.fn = this //context(user object mein function purchasecar ka this inject kiya) this is function and i created the fn in context
    context.fn(...args)
}


const user = {
    color: "Red",
    company: "Ferrari"
}

function purchaseCar(currency, price) {
    console.log(`I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`)
}
purchaseCar.mycall(user, "₹", 5000000)

// "use strict";

// const person = {
//     name: 'shivam'
// }

// function greet(age, city) {
//     console.log(this.name, age, city)
// }

// greet.mycall(person, 23, "hyd")


