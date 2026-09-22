
Array.prototype.myMap = function (cb) {

    const result = []

    for (let i = 0; i < this.length; i++) {
        result.push(cb(this[i], i, this))
    }
    return result
}

const arr = [2, 3, 45].myMap((value, index, newArr) => {
    return value * 3
})

console.log(arr)

//use the normal function to access this
//map will return map((value, index, newarr))

// our cb (item) => item * 3
