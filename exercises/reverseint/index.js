// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // my attempt
  // const reverseInt = parseInt(
  //   JSON.stringify(n).split('').reverse().join('')
  // );

  // if (n < 0) return -1 * reverseInt
  // return reverseInt

  // second improve using Math.sign and just use toString()
  // return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}

reverseInt(-10)
module.exports = reverseInt;
