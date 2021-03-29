// Longest Common Prefix (165)
// You are given an array of lowercase strings as an argument. Return the longest common prefix of all strings.

// Requirements
// Must return a string
// Must be able to compare more than two strings

const solve = strArray => {
  // find shortest word, that's the maximum amount of letters we need to compare against
  const shortest = strArray
    .reduce(
      (shortest, str) =>
        str.length < shortest.length ? (shortest = str) : shortest,
      new Array(100000)
    )
    .split("");
  // common arr to later return w .join("")
  let common = [];
  // columns (equal to shortest length word)
  for (let col = 0; col < shortest.length; col++) {
    // set flags and letter variable
    let same = true;
    let letter = "";
    // rows (equal to number of words). We loop through each column, incrementing one row at a time
    for (let row = 0; row < strArray.length; row++) {
      // set letter equal to strArray[row][col]
      letter = strArray[row][col];
      // check if all letters in col are equal
      if (letter !== strArray[0][col]) {
        same = false;
      }
    }
    // if all letters in col equal, push that letter to common []
    if (same) {
      common.push(letter);
    }
  }
  return common.join("");
};
console.log(solve(["test", "tsar", "testing", "tester"]));
