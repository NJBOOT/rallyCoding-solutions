// Interval in an Array of Intervals
// You are given a two dimensional array containing arrays of intervals and an array K containing a single interval as arguments.
// Return true if all of the intervals in the inner arrays are enclosed in the single interval K, false if not.

// Requirements
// Must return either true or false

const solve = (intArray, k) => {
  const combined = [];
  const min = Math.min(...k);
  const max = Math.max(...k);
  for (let i = 0; i < intArray.length; i++) {
    combined.push(...intArray[i]);
  }
  let arrMin = Infinity,
    arrMax = -Infinity;
  for (let i = 0; i < combined.length; i++) {
    arrMin = arrMin > combined[i] ? combined[i] : arrMin;
    arrMax = arrMax < combined[i] ? combined[i] : arrMin;
  }
  return min < arrMin && max > arrMax;
};

// Example #1

solve(
  [
    [4, 5],
    [6, 7],
  ],
  [3, 8]
);
// > true

// The intervals 4 thru 7 are enclosed in the interval 3 thru 8 so we return true.

// Example #2

solve(
  [
    [2, 5],
    [6, 9],
  ],
  [3, 8]
);
// > false
