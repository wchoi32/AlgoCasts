// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n, index = 0) {
//   // Attempt 1
//   const seq = [0, 1]

//   for (let i = 2; i <= n; i++) {
//     seq.push(seq[i - 1] + seq[i - 2]);
//   }

//   return seq[n];
// }

// function fib(n) {
//   if (n < 2) return n;

//   return fib(n - 1) + fib(n - 2);
// }

function memoize(fn) {
  const cache = {}

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    return cache[args] = fn.apply(this, args);

    // const result = fn.apply(this, args); // ... means [ args1, args2] here [ args ]

    // cache[args] = result;
    // return result;
  }
}

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

fib(5)


module.exports = fib;
