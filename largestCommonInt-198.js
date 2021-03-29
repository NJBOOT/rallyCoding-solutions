const solve = (arrOne, arrTwo, k) => {
  const stripDups = arr => [...new Set(arr)];
  let map = {};
  let res = [];
  for (let num of stripDups(arrOne)) {
    map[num] = 1;
  }
  for (let num of stripDups(arrTwo)) {
    map[num] = map[num] + 1 || 1;
  }
  for (let key in map) {
    if (map[key] > 1) {
      res.push(key);
    }
  }
  return res.sort((a, b) => b - a)[k - 1];
};

let res = solve([1, 2, 3, 4, 5], [1, 3, 5], 2);
console.log(res);
