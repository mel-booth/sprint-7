//Minimum

//Write a function (min) that takes two arguments, and returns their minimum.

function min(a, b){
  if (a < b)
  return a;
  else
    return b;
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//Recursion

//Zero is even.
//One is odd.
//For any other number N, its evenness is the same as N - 2.
//Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
//Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?



function isEven (n) {
  if (n===0)
    return true;
  else if (n===1)
    return false;
  else if (n<0)
    return isEven (-n)
  else
    return isEven(n-2)
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));
// → 8
