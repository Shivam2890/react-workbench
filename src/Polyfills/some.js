
Array.prototype.mysome = function (cb, thisArg) {

    for (let i = 0; i < this.length; i++) {
        if (cb.call(thisArg, this[i], i, this)) {
            return true
        }
    }
    return false
}

const bool = [1, 3, 5, 8].mysome(item => item % 2 === 0)
console.log(bool)

//Does at least ONE element satisfy the condition