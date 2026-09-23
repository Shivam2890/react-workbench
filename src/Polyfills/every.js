
Array.prototype.myevery = function (cb, thisArg) {
    for (let i = 0; i < this.length; i++) {
        if (!cb.call(thisArg, this[i], i, this)) {
            return false
        }
    }
    return true
}


const bool = [2, 4, 1, 8].myevery(item => item % 2 === 0)
console.log(bool)

// some()
// → ONE passes → true
// → nobody passes → false

// every()
// → ONE fails → false
// → everyone passes → true