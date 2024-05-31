/*
Write a function `removeLastVowel(word)` that takes in a string and returns the
string with its last vowel removed.
*/

function removeLastVowel(word){
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  // defines the vowel array
  for(let i = word.length - 1; i >= 0; i--){
  // checks the char at each index, starting from left and moving to the right
  let char = word[i];
  // lets 'char' stand for each letter found at the indexes as it's checking them 
  if(vowels.includes(char)){
  // checks if the letter represented by 'char' is found in the vowel array
    return word.slice(0, i) + word.slice(i + 1);
  // removes the last vowel from the word and returns the modified string. 
  }
  }
    return word;
  // returns the original word (if no vowels)
  }
  
console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = removeLastVowel;
  } catch (e) {
    module.exports = null;
  }