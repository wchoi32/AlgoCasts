// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // My attempt
  // const charAMap = {};
  // const charBMap = {};

  // const charA = stringA.replace(/[^\w]/g, '').toLowerCase();
  // const charB = stringB.replace(/[^\w]/g, '').toLowerCase();

  // if (charA.length !== charB.length) return false;

  // for (let i = 0; i < charA.length; i++) {
  //   if (!charAMap[charA[i]]) {
  //     charAMap[charA[i]] = 1
  //   } else {
  //     charAMap[charA[i]]++
  //   }

  //   if (!charBMap[charB[i]]) {
  //     charBMap[charB[i]] = 1
  //   } else {
  //     charBMap[charB[i]]++
  //   }
  // }

  // for (let key in charAMap) {
  //   if (charAMap[key] !== charBMap[key]) {
  //     return false
  //   }
  // }

  // return true

  // Attempt Two
  // const charAMap = buildCharMap(stringA);
  // const charBMap = buildCharMap(stringB);

  // if (Object.keys(charAMap).length !== Object.keys(charBMap).length) return false

  // for (let key in charAMap) {
  //   if (charAMap[key] !== charBMap[key]) return false;
  // }

  // return true;

  const sortedStrA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  const sortedStrB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

  if (sortedStrA === sortedStrB) return true;

  return false;
}

// function buildCharMap(str) {
//   const charMap = {}

//   for (char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char + 1] || 1
//   }

//   return charMap
// }

module.exports = anagrams;
