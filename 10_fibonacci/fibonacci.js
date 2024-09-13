const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  } else if (num === 0) {
    return 0;
  } else {
    let num1 = 0;
    let num2 = 1;
    let result = 0;
    for (let i = 1; i <= num; i++) {
      result = num1 + num2;
      num2 = num1;
      num1 = result;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = fibonacci;
