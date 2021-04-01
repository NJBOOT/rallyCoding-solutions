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

  // common arr to later return with .join("")
  let common = [];

  // columns (equal to shortest length word)
  // We loop through each column
  for (let col = 0; col < shortest.length; col++) {
    // set flags and letter variable
    let same = true;
    let letter = "";

    // rows (equal to number of words).
    // Increment one row at a time as we loop through column
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
console.log(solve(["test", "testing", "tester"]));

////  C0 C1 C2 C3 C4 C5 C6
// R0 [T, E, S, T]
// R1 [T, S, A, R]
// R2 [T, E, S, T, I, N, G]
// R3 [T, E, S, T, E, R]

////  C0 C1 C2 C3 C4 C5 C6
// R0 [T, E, S, T]
// R1 [T, E, S, T, I, N, G]
// R2 [T, E, S, T, E, R]

// LOOP THROUGH EACH COLUMN CHECKING EACH LETTER IS SAME
