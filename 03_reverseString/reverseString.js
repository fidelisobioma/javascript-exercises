const reverseString = function (text) {
  let splitText = text.split("");
  let reverseText = splitText.reverse();
  let joinText = reverseText.join("");
  return joinText;
};

// Do not edit below this line
module.exports = reverseString;
