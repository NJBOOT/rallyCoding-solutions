// Longest Increasing Sequence

// You are given an array of non-repeating integers as an argument. Return an array containing the longest increasing sequence of values found in the argument array.
// The argument array will always have at least two values that will match this condition.

// Requirements

// Must return an array of integers
// Must handle negative integers

// SECOND ATTEMPT
const solve = arr => {
  // keep track on the current increasing sequence, and the max increasing sequence
  let maxRun = [];
  let currentRun = [];
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // prev value is the last value in the currentRun array (undefined at first)
    const prev = currentRun[currentRun.length - 1];
    const curr = arr[i];
    // assuming ascending. If it's not ascending...(curr < prev)
    if (curr < prev) {
      // set the maxRun length. Is the currentRun.length > maxRun.length? Then replace maxRun w/ current Run
      maxRun = maxRun.length < currentRun.length ? currentRun : maxRun;
      // reset currentRun to current value since array stopped ascending, currentRun is done
      currentRun = [curr];
    } else {
      // else it's still ascending, so just push the current value to currentRun
      currentRun.push(curr);
    }
  }
  // currentRun will be longer than maxRun if the longest increasing sequence includes the last value
  return maxRun.length > currentRun.length ? maxRun : currentRun;
};

console.log(solve([-10, -7, -5, -20, 21, 20, 9]));
console.log(solve([10, 7, 5, 20, 21, 23, 9]));
console.log(solve([-10, -7, -5, -20, -40, 30, 20, 9, 100, 101, 102, 104, 108]));
console.log(solve([20, 21, 5, 3, 4, 7, 1, 24]));

// FIRST ATTEMPT
const solveRough = arr => {
  const arrays = [];
  for (let i = 0; i < arr.length; i++) {
    let subArr = helper(arr);
    arrays.push(subArr);
    arr = arr.slice(subArr.length);
  }
  let maxArrayLength = Math.max(...arrays.map(el => el.length));
  let maxArray = arrays.filter(array => array.length === maxArrayLength).pop();

  return [...new Set(maxArray)];
};

const helper = intArray => {
  const res = [];
  let stop = false;

  for (let i = 1; i < intArray.length; i++) {
    const current = intArray[i];
    const prev = intArray[i - 1];
    const lastRes = res[res.length - 1];

    if (prev < current) {
      if (!lastRes) res.push(prev);
      if (lastRes && i - intArray.indexOf(lastRes) > 1) {
        stop = true;
      }
      if (!stop) {
        res.push(current);
      }
    }
  }
  return res;
};

// min max algo in array. go through list of items and keep track for best candidate. let me replace current best guess
//

// console.log(solve([-10, -7, -5, -20, 21, 20, 9]));
// console.log(solve([10, 7, 5, 20, 21, 23, 9]));
// console.log(solve([-10, -7, -5, -20, -40, 30, 20, 9, 100, 101, 102, 104, 108]));
// console.log(solve([20, 21, 5, 3, 4, 7, 1, 24]));

// better solutions

function longestIncreasingSequence(sequence) {
  let longest = [];
  let current = [];

  for (let i = 0; i < sequence.length; i++) {
    const previousValue = sequence[i - 1] || -Infinity;
    const value = sequence[i];

    if (value < previousValue) {
      if (current.length > longest.length) longest = current;
      current = [value];
    } else {
      current.push(value);
    }
  }

  return current.length > longest.length ? current : longest;
}

// console.log(
//   longestIncreasingSequence([
//     -10,
//     -7,
//     -5,
//     -20,
//     -40,
//     30,
//     20,
//     9,
//     100,
//     101,
//     102,
//     104,
//     108,
//   ])
// );

const solvebest = intArray => {
  let best = [];

  while (intArray.length > 0) {
    let curr = [];
    while (curr.length == 0 || intArray[0] > curr[curr.length - 1]) {
      curr.push(intArray.shift());
    }
    if (curr.length > best.length) {
      best = curr;
    }
  }
  return best;
};
// grab current 'run' of qualifying values
// see if its the best
// repeat till out of values
