// Sum and Sort List of Integers
// You are given an array containing some repeated integers as an argument. Sum all of the identical integers, then return an array containing the unique integers and the sum sorted in ascending order.

// Requirements
// Must return an array of integers
// Must work with negative integers

const solve = intArray => {
  const map = {};
  const res = [];
  for (let num of intArray) {
    map[num] = (map[num] || 0) + 1;
  }
  for (let key in map) {
    res.push(key * map[key]);
  }
  return res.sort((a, b) => a - b);
};
