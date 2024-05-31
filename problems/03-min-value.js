/*
Write a function `minValue(nums)` that takes in an array of numbers as an arg.
The function should return the smallest number of the array.

If the array is empty, the function should return `null`.
*/

function minValue(nums){
  if(nums.length === 0){
    return null;
  // returns null if the array is empty
  }
  let lowestNum = nums[0];
  // initializes this variable as the element at the specified index 
  for(let i = 0; i <nums.length; i++){
  // for loop starting at the first element and checking until the last element 
  if(nums[i] < lowestNum){
  // finds the smallest number by checking if the current element has a smaller value
  lowestNum = nums[i];
  // changes the element if its smaller
  }}
    return lowestNum;
  }
  

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = minValue;
  } catch (e) {
    module.exports = null;
  }