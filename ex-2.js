// Helper function that return a boolean
function isLessThan(conditionNum, arrNum) {
  return arrNum < conditionNum;
}

// Takes an array, number to compare and the helper function
function all(array, conditionNum, callBack) {
  for (let element of array) {
    if (!callBack(conditionNum, element)) {
      return false;
    }
  }
  return true;
}

// test
let arr = [1, 5, 9];
let res = all(arr, 7, isLessThan);
console.log(res); // false

console.log(all([1, 2, 3], 5, isLessThan)); // true
