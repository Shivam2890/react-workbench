
Array.prototype.myincludes = function (element, startIndex) {
    let index = 0
    if (arguments.length >= 2) {
        index = startIndex
    }

    for (let i = index; i < this.length; i++) {
        if (element === this[i]) {
            return true
        }
    }
    return false
}

const isThere = [1, 3, 4, 5].myincludes(3)

console.log(isThere) //true for the NaN
console.log(NaN === NaN)
