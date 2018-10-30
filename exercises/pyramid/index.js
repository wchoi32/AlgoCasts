// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
// 1, 2, 3, 4, 5, 6
// 0  1  2  3  4  5
// 1, 3, 5, 7, 9, 11
// function pyramid(n) {
//   const midPoint = Math.floor((2 * n - 1) / 2)

//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (midPoint - row <= col && midPoint + row >= col) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }

function pyramid(n, row = 0, level = '') {
  const midPoint = Math.floor((2 * n - 1) / 2)
  const col = 2 * level.length - 1;

  if (n === row) return;
  if (2 * n - 1 === level.length) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const add = (midPoint - row <= level.length && midPoint + row >= level.length) ? '#' : ' ';

  pyramid(n, row, level + add);
}

pyramid(4);
module.exports = pyramid;
