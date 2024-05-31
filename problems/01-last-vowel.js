/*
Write a function `lastVowel(str)` that takes in a string and returns the last
vowel that appears sequentially in the string. Note that the string may contain
capitalization.

Hint: You may find the `String.toLowerCase` or `String.toUpperCase` methods useful.

String.toLowerCase: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
String.toUpperCase: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


function lastVowel(str){
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  // defines the array of vowels to look for (both uppercase and lower)
  let vowelFound = null;
  // if there is no vowels then this will be the default
  for(let i = str.length - 1; i >= 0; i--){
  // this starts at the end of the word and saves times be looking for the last one first
  let char = str[i];
  // this lets 'char' be a variable for the character at each index being checked
  for(let a = 0; a <vowels.length; a++){
  // this creates 'a' and lets it stand for/store the character and check if it's a vowel
  if(char === vowels[a]){
  // if 'char' is a vowel found in the vowel array
    return char;
  //  returns the vowel (if found)
  }
  } 
  }
  return vowelFound; 
  }
  

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = lastVowel;
  } catch (e) {
    module.exports = null;
  }