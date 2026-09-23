
Array.prototype.myfindIndex = function (cb, thisArg) {

    for (let i = 0; i < this.length; i++) {
        if (cb.call(thisArg, this[i], i, this)) {
            return i
        }
    }
    return -1
}


const arr = [10, 20, 30, 40]

const index = arr.myfindIndex(item => item > 25)
console.log(index)