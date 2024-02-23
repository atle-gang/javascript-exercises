const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	sumAll = 0;
  if (arr.length === 0) {
    return sumAll;
  } else if (arr.length === 1) {
    sumAll += arr[0]
  } else {
    for (i = 0; i < arr.length; i++) {
      sumAll += arr[i];
    }
  }
  return sumAll;
};

const multiply = function(arr) {
  sumAll = 1;
  if (arr.length === 0) {
    return sumAll;
  } else if (arr.length === 1) {
    sumAll *= arr[0]
  } else {
    for (i = 0; i < arr.length; i++) {
      sumAll *= arr[i];
    }
  }
  return sumAll;
};


const power = function(a, b) {
	return a ** b
};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

console.log(power(4, 3))