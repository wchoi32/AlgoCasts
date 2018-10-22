// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // My attempt
  // let reverseStr = '';

  // for (let i = str.length - 1; i >= 0; i--) {
  //   reverseStr += str[i];
  // }

  // return reverseStr;
  return str
    .split('')
    .reduce((rev, char) => char + rev)
}

// Arr Reverse Feature

// return str
//   .split('')
//   .reverse()
//   .join('');


// ES6 Feature

// let reversed = '';
// for (let character of str) {
//   reversed = character + reversed;
// }
// return reversed;

// reduce


module.exports = reverse;
