/*
Write a function `twoSum(arr, target)` that accepts an array and a target number
as args. The function should a return a boolean indicating if two distinct
numbers of the array add up to the `target` value. You can assume that input
array contains only unique numbers.
*/

function twoSum(arr, tar){
  for(let i = 0; i < arr.length; i++){
  // look through the elements in the array from the left to right
  let num1 = arr[i];
  // current element 
  for(let a = i + 1; a < arr.length; a++){
  // added loop to check subsequent elements
  let num2 = arr[a];
  // second element
  if(num1 + num2 === tar){
    return true;
  }
  }
  } 
    return false;
  }
  
console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = twoSum;
  } catch (e) {
    module.exports = null;
  }