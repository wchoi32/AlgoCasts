// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
// First Attempt
// for (let i = 1; i <= n; i++) {
//   let level = ''

//   for (let j = 1; j <= i; j++) {
//     level += '#'
//   }

//   for (let k = n - i; k > 0; k--) {
//     level += ' '
//   }

//   console.log(level)
// }
// Second Attempt
// for (let row = 0; row < n; row++) {
//   let level = '';
//   for (let col = 0; col < n; col++) {
//     if (col <= row) {
//       level += '#';
//     } else {
//       level += ' ';
//     }
//   }
//   console.log(level);
// }
// }

// Recursive Step
function steps(n, row = 0, stair = '') {
  if (n === row) return;
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';

  steps(n, row, stair + add);
}

module.exports = steps;
