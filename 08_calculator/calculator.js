const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((sum, currentItem) => sum + currentItem, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, currentItem) => product * currentItem, 1) 
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  let total = 1;
	while (x != 0) {
    total *= x;
    x--;
  }
  return total;
};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
