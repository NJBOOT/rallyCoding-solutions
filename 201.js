// Longest Increasing Sequence

// You are given an array of non-repeating integers as an argument. Return an array containing the longest increasing sequence of values found in the argument array.
// The argument array will always have at least two values that will match this condition.

// Requirements

// Must return an array of integers
// Must handle negative integers

const solve = arr => {
  const arrays = [];
  for (let i = 0; i < arr.length; i++) {
    let subArr = helper(arr);
    arrays.push(subArr);
    arr = arr.slice(subArr.length);
  }
  console.log(arrays);
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

console.log(solve([-10, -7, -5, -20, 21, 20, 9]));
console.log(solve([10, 7, 5, 20, 21, 23, 9]));
console.log(solve([-10, -7, -5, -20, -40, 30, 20, 9]));
console.log(solve([20, 21, 5, 3, 4, 5, 1, 24]));

// const solve = arr => {
//     const arrays = [];
//     for (let i = 0; i < arr.length; i++) {
//       let subArr = helper(arr);
//       subArr.length ? arrays.push(subArr) : arrays;
//       arr = arr.slice(subArr.length);
//       // console.log(subArr, arr, arrays);
//     }
//     console.log(arrays);
//     let maxArrayLength = Math.max(...arrays.map(el => el.length));
//     let maxArray;
//     for (arr of arrays) {
//       arr.length === maxArrayLength ? (maxArray = arr) : maxArray;
//     }
//     return [...new Set(maxArray)];
//   };

//   const helper = intArray => {
//     const res = [];
//     let stop = false;

//     for (let i = 1; i < intArray.length; i++) {
//       const current = intArray[i];
//       const prev = intArray[i - 1];
//       const lastRes = res[res.length - 1];

//       if (prev < current) {
//         if (!lastRes) res.push(prev);
//         if (lastRes && i - intArray.indexOf(lastRes) > 1) {
//           stop = true;
//         }
//         if (!stop) {
//           res.push(current);
//         }
//       }
//     }
//     return res;
//   };
