
Array.prototype.myflatMap = function (cb, thisArgs) {
    let result = []

    for (let i = 0; i < this.length; i++) {
        const value = cb.call(thisArgs, this[i], i, this)

        if (Array.isArray(value)) {

            for (let item of value) {
                result.push(item)
            }
        } else {
            result.push(value)
        }
    }

    return result
}

const arr = [1, 2, 3]

const result = arr.myflatMap(item => {
    return [item, item * 2]
})

console.log(result)