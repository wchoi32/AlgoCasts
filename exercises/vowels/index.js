// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // my attempt
  let counter = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  str.toLowerCase().split('').forEach(letter => {
    // for (vowel of vowels) {
    //   if (letter === vowel) return counter++;
    // }
    if (vowels.includes(letter)) return counter++;
  });

  return counter;

  // second attempt
  // const vowels = {
  //   'a': 1,
  //   'e': 1,
  //   'i': 1,
  //   'o': 1,
  //   'u': 1
  // };

  // const reducer = (counter, letter) => {
  //   return vowels[letter] ? ++counter : counter;
  // };

  // return str.toLowerCase().split('').reduce(reducer, 0);
}

vowels('Hello')

module.exports = vowels;
