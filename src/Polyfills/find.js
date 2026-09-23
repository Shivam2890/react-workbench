
Array.prototype.myfind = function (cb, thisArg) {

    for (let i = 0; i < this.length; i++) {
        if (cb.call(thisArg, this[i], i, this)) {
            return this[i]
        }
    }
    return undefined
}

const arr = [1, 3, 4, 42, 7].myfind(item => item > 3)
console.log(arr)

// "Find the first element for which the callback returns true."