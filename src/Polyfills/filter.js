Array.prototype.myFilter = function (cb) {
    const result = []

    for (let i = 0; i < this.length; i++) {

        if (cb(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result
}


const arr = [1, 2, 3, 4, 5, 6].myFilter(item => item % 2 === 0)
console.log(arr)

//The callback's returned value is pushed

// map    → callback result → push
// filter → callback condition → push original value