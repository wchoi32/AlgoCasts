// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // my first attempt
  const hashMap = {};
  let maxNum = 0;
  let maxChar = '';

  for (let char of str) {
    if (!hashMap[char]) {
      hashMap[char] = 1;
    } else {
      hashMap[char]++;
    }
  }

  for (let key in hashMap) {
    if (maxNum < hashMap[key]) {
      maxNum = hashMap[key];
      maxChar = key;
    }
  }

  return maxChar;
  // name hashMap as -> charMap
}

module.exports = maxChar;
