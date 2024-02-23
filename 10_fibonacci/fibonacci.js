const fibonacci = function(n) {
    if (n < 0 || isNaN(parseInt(n))) {
        return "OOPS";
    } else {
        n = parseInt(n);
        if ( n === 0) {
            return 0;
        } else if ( n === 1) {
            return 1;
        } else if (n === 2) {
            return 1;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;

console.log(fibonacci("1"));