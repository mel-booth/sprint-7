//MINIMUM

//Write a function (min) that takes two arguments, and returns their minimum.

function min(a, b){
  return Math.min(a,b);
}

console.log (min (32, 7));

//OR THE LONG WAY

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



//RECURSION

//Zero is even.
//One is odd.
//For any other number N, its evenness is the same as N - 2.
//Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.
//Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

//Example of recursive function (function that calls itself):
function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));
// → 8



function isEven (n) {
  if (n===0)
    return true;
  else if (n===1)
    return false;
  else if (n<0)
    return isEven (-n) //perform isEven function on negative number.
  else
    return isEven(n-2)
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??



//BEAN COUNTING

//You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its length with "s".length. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

//Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

//Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

function countBs (string) {


}

for (var = i; i < string.length; i++)



// Your code here.

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
