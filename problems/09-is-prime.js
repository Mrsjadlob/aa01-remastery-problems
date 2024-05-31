/*
Define a function `isPrime(number)` that returns `true` if `number` is prime.
Otherwise, false. A number is prime if it is only divisible by 1 and itself.
*/

function isPrime(num){
  let result = true;
  // lets assume its prime and later prove if it isn't
  if(num <= 1){
  // if it's less than then it's not a prime number
  result = false;
  }else{
  for(let i = 2; i < num; i++){
  // if it's divisble by any number other than 1 and itself then it's not prime
  if(num % i === 0){
  result = false;
  }
  }
  }
    return result;
  }
  
console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = isPrime;
  } catch (e) {
    module.exports = null;
  }