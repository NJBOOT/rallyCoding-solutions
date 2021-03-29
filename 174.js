const sum = (intArray, k) => {
  let max = { value: -Infinity, sumArray: null };
  for (let i = 0; i < intArray.length; i++) {
    let subArr =
      intArray.slice(i, k + i).length === k ? intArray.slice(i, k + i) : [];
    let subSum = subArr.reduce((acc, el) => (acc += el), 0);
    max.value = Math.max(max.value, subSum);
    if (subSum === max.value) {
      max.sumArray = [...subArr];
    }
  }
  return max.sumArray;
};

let res = sum([100, 101, 0, 0, 9999], 3);

console.log(res);
