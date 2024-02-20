const removeFromArray = function(arr, ...args) {
    newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!args.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

// console.log(removeFromArray([1, 2, 3, 4], 3));