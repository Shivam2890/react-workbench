// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

Array.prototype.myflat = function (depth = 1) {
    let result = []

    function flatten(arr, depth) {
        for (let item of arr) {
            if (Array.isArray(item) && depth > 0) {
                flatten(item, depth - 1)
            } else {
                result.push(item)
            }
        }
    }

    flatten(this, depth)

    return result
}
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(arr2.myflat(2));
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

// console.log(arr2.flat(2));
// // expected output: Array [0, 1, 2, 3, Array [4, 5]]

// console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]
