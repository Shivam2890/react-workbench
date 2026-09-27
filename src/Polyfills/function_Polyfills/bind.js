
Function.prototype.mybind = function (context = {}, ...bindArgs) {
    if (typeof this !== 'function') {
        throw new Error(this + 'it is not callable / function')
    }

    const originalFn = this
    return (...callArgs) => {

        const key = Symbol()

        context[key] = originalFn
        try {
            return context[key](...bindArgs, ...callArgs)
        } finally {
            delete context[key]
        }
    }
}

const user = {
    name: 'shivam'
}
function greet(age, city) {
    console.log(this.name, age, city)
}

const returnFu = greet.mybind(user, 23)

returnFu('hyd')