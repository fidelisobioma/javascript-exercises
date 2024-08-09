const sumAll = function (minNum, maxNum) {
  let sumNum = 0;
  if (minNum > maxNum) {
    let temp = minNum;
    minNum = maxNum;
    maxNum = temp;
  }
  for (minNum; minNum <= maxNum; minNum++) {
    sumNum += minNum;
  }

  if (sumNum < 0) {
    return "ERROR";
  } else if (Number.isInteger(minNum) && Number.isInteger(maxNum)) {
    return sumNum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
