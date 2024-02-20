const sumAll = function(x, y) {
    let sum = 0;
    if (x < 0 || y < 0) {
        return "ERROR";
    } else if (typeof x !== 'number' || typeof y !== 'number' || typeof y === 'object') {
        return "ERROR";
        
    } else if(x > y) {
        for (let i = x; i >= y; i--) {
            sum += i;   
        }
    } else {
        for (let i = x; i <= y; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
console.log(sumAll(123, 1))