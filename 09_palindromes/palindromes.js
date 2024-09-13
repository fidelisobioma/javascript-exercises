const palindromes = function (str) {
  let palind;
  palind = str.split(" ").join("") === str.split(" ").reverse().join("");
  return palind;
};

// Do not edit below this line
module.exports = palindromes;
