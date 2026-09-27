
// Function.prototype.mycall = function (context = {}, ...args) {
//     if (typeof this !== 'function') {
//         throw new Error(this + 'It is not callable / function')
//     }

//     context.fn = this //context(user object mein function purchasecar ka this inject kiya) this is function and i created the fn in context
//     const result = context.fn(...args)

//     delete context.fn // call not permentally store the fn in object

//     return result

// }


Function.prototype.mycall = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + 'It is not callable / function')
    }

    const key = Symbol() //Symbol is a primitive data type in JavaScript used to create unique identifiers, commonly used as unique object property keys.
    //That avoids accidentally overwriting an existing property called fn.

    context[key] = this //inside context object having the key which have the funciton of this
    //Put the function that mycall was called on inside the context object temporarily.

    const result = context[key](...args)

    delete context[key] // call not permentally store the key in object

    return result

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


