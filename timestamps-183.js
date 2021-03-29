// Sort a List of Timestamps
// You are given an array of strings containing timestamps in 24-hour time as an argument. Return the array of timestamps sorted in ascending order.

const solve = strArray =>
  strArray
    // map each string to array from "23:55" to ["23","55"]
    .map(string => string.split(":"))
    // sort the strArray.
    .sort((a, b) => {
      //If hours are the same, proceed to sort by minutes
      if (a[0] - b[0] === 0) {
        return a[1] - b[1];
      } else {
        //Otherwise, just sort by hours
        return a[0] - b[0];
      }
    })
    //turn each time array ["23","55"] back into string "23:55"
    .map(el => el.join(":"));

solve(["23:55", "00:12", "06:01", "15:59"]);
//   ["00:12", "06:01", "15:59", "23:55"];
