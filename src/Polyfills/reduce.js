Array.prototype.myreduce = function (cb, intialValue) {
    let accumulator
    let startIndex

    if (arguments.length >= 2) {
        accumulator = intialValue
        startIndex = 0
    } else {
        accumulator = this[0]
        startIndex = 1
    }

    for (let i = startIndex; i < this.length; i++) {
        accumulator = cb(accumulator, this[i], i, this)
    }
    return accumulator
}

const arr = [1, 2, 3, 4].myreduce((accu, curr, i, arr) => {
    console.log(accu, curr, i, arr, 'athis')
    return accu + curr
}, 0)

console.log(arr)


//myFilter(acc,curr,index,arr)