// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // my attempt
  const reverseStr = str
    .split('')
    .reduce((rev, str) => str + rev)

  if (str === reverseStr) {
    return true
  }

  return false
}

// var string = str.split('') THIS RETURNS ARRAY NOTE

// Sol 1
// const reverse = str.split('').reverse().join('')

// return str === reverse

// Sol 2
// NOT IDEAL SOLUTION

// return str.split('').every((char, i) => {
//   return char === str[str.length - 1 - i]
// })

palindrome('hello')

module.exports = palindrome;
