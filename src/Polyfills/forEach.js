
Array.prototype.myforEach = function (cb, thisArg) {
    for (let i = 0; i < this.length; i++) {
        cb.call(thisArg, this[i], i, this)
    }
}

// let sum = 0
// const arr = [1, 2, 4, 3].myforEach((item, index, arr) => sum += item)

// console.log(sum)

//forEach() is designed to perform an action, not create a new array.
const obj = {
    multiplier: 2
}; //In JavaScript, when starting an expression with [ immediately after another statement, it's safer to use a semicolon:

[1, 2, 3].myforEach(function (item) {
    console.log(item * this.multiplier)
}, obj);