const solve = intArr => {
  // set up initial loop to traverse 2D array
  // All subArr.length are equal, so just use the first.
  for (let i = 0; i < intArr[0].length; i++) {
    // set two flags to true by default. Assume all columns 1 and all rows 1
    let colFlag = true;
    let rowFlag = true;
    //check each column. if the first value in the column is 0, then change flag to false
    if (!intArr[0][i]) colFlag = false;
    //check each row. if the first value in the row is 0, then change flag to false
    if (!intArr[i][0]) rowFlag = false;
    //now for checking the rest of the values. Set up a nested loop to do this.
    for (let j = 0; j < intArr.length; j++) {
      // colFlag is true (first value = 1) AND ANY other values in that column aren't equal to ONE,
      // colFlag is false
      if (colFlag && intArr[0][i] !== intArr[j][i]) colFlag = false;
      // rowFlag is true (first value = 1) AND ANY other values in that row aren't equal to ONE,
      // rowFlag is false
      if (rowFlag && intArr[i][0] !== intArr[i][j]) rowFlag = false;
    }
    // if either a column or a row is still true,
    // then either a column or row exists where all values are 1
    // return true
    if (rowFlag || colFlag) {
      return true;
    }
  }
  //otherwise, return false
  return false;
};

console.log(
  solve([
    [0, 1, 1, 0, 0, 1],
    [0, 1, 1, 0, 0, 1],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1],
    [0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0],
  ])
);

console.log(
  solve([
    [0, 1, 1, 0, 0, 1],
    [0, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
  ])
);

console.log(
  solve([
    [0, 1, 1, 0, 0, 1],
    [0, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 0],
  ])
);
