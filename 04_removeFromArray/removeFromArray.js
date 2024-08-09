const removeFromArray = function (myArray, ...args) {
  const removeArray = [];
  for (i = 0; i < myArray.length; i++) {
    if (!args.includes(myArray[i])) {
      removeArray.push(myArray[i]);
    }
  }
  return removeArray;
};

// Do not edit below this line
module.exports = removeFromArray;
