
Array.prototype.myincludes = function (element, startIndex) {
    let index = 0
    if (arguments.length >= 2) {
        index = startIndex
        if (index < 0) {
            index = Math.max(this.length + index, 0)
        }
    }


    for (let i = index; i < this.length; i++) {
        if (element === this[i]
            ||
            (Number.isNaN(element) && Number.isNaN(this[i]))) {
            return true
        }
    }
    return false
}

const isThere = [1, 3, 4, 5].myincludes(3, -124)

console.log(isThere) //true for the NaN
console.log(NaN === NaN)

//   index = Math.max(this.length + startIndex, 0) // if my starting index is too negative (exceeding the length) then it treat as the 0


