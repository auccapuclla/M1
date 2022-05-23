"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  const len = num.length;
  let numDec = 0;
  [...num].forEach(
    (elem, index) => (numDec += parseInt(elem) * Math.pow(2, len - 1 - index))
  );
  return numDec;
}
function DecimalABinario(num) {
  // tu codigo aca
  var num = parseInt(num);
  let numBin = [];
  while (Math.floor(num / 2) !== 0) {
    numBin.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  numBin.unshift(num);
  return numBin.join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
