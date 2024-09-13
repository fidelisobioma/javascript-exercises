const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sumNums = 0;
  for (i = 0; i < arr.length; i++) {
    sumNums += arr[i];
  }
  return sumNums;
};

const multiply = function (arr) {
  let multNums = 1;
  for (i = 0; i < arr.length; i++) {
    multNums *= arr[i];
  }
  return multNums;
};

const power = function (a, b) {
  let pnum = Math.pow(a, b);
  return pnum;
};

const factorial = function (num) {
  let fac = 1;
  for (i = 1; i <= num; num--) {
    fac *= num;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
