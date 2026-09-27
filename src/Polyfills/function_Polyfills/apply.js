
    // Function.prototype.myapply = function (context = {}, arg) {
    //     if (typeof this !== 'function') {
    //         throw new Error(this + 'If is not callable/function')
    //     }

    //     if (!Array.isArray(arg)) {
    //         throw new Error(arg + 'CreateListFromArrayLike called on non-object (argumenet is not the array)')
    //     }

    //     context.fn = this
    //     context.fn(...arg)
    // }

    Function.prototype.myapply = function (thisArg, arg) {
        if (typeof this !== 'function') {
            throw new Error(this + "is not the callable/function")
        }

        if (!Array.isArray(arg)) {
            throw new Error(arg + 'is not the array')
        }

        const key = Symbol()
        thisArg[key] = this

        const result = thisArg[key](...arg)

        delete thisArg[key]

        return result
    }

    const user = {
        name: 'shivam'
    }

    function greet(age, city) {
        console.log(this.name, age, city)
    }

    greet.myapply(user, [23, 'hyd'])