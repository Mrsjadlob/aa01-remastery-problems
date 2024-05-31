/*
Write a function `twoDimensionalSum(arr)` that takes in a 2D array of numbers
and returns the total sum of all numbers.
*/

function twoDimensionalSum(arr){
  let count = 0;
  for(let i = 0; i < arr.length; i++){
  // looks at each row in the 2D array
  let row1 = arr[i];
  // current row
  for(let a = 0; a < row1.length; a++){
  // look through each number in the current row
  let num1 = row1[a];
  // current number
  count += num1;
  // add current number to the total
  }
  }
    return count;
  // returns the total sum of the numbers
  }
  


let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = twoDimensionalSum;
  } catch (e) {
    module.exports = null;
  }