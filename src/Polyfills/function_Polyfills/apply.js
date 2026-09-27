
Function.prototype.myapply = function (context = {}, arg) {
    if (typeof this !== 'function') {
        throw new Error(this + 'If is not callable/function')
    }

    if (!Array.isArray(arg)) {
        throw new Error(arg + 'CreateListFromArrayLike called on non-object (argumenet is not the array)')
    }

    context.fn = this
    context.fn(...arg)
}

const user = {
    name: 'shivam'
}

function greet(age, city) {
    console.log(this.name, age, city)
}

greet.myapply(user, [23, 'hyd'])