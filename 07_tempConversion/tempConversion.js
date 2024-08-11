const convertToCelsius = function (fh) {
  let result = (fh - 32) * (5 / 9);
  if (!Number.isInteger(result)) {
    return +result.toFixed(1);
  } else {
    return result;
  }
};

const convertToFahrenheit = function (celcius) {
  let result = celcius * (9 / 5) + 32;
  if (!Number.isInteger(result)) {
    return +result.toFixed(1);
  } else {
    return result;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
