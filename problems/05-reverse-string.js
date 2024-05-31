/*
Write a function `reverseString(str)` that takes in a string. The function
should return a new string where the order of the characters is reversed.
*/

function reverseString(str){
  let arr1  = str.split('');
  // splits the string into seperate characters, storing them in an array
  let reversedArray = arr1.reverse();
  // reversed the order of the elements in the newly created array
  let reversedString = reversedArray.join('');
  // join the array back into a string now that the characters have been reversed
    return reversedString;
  // return the new string
  }
  
console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = reverseString;
} catch (e) {
  module.exports = null;
}