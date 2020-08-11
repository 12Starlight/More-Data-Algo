/*
Palindrome Check:
  Write a function that takes in a non-empty string and that returns a boolean
  representing whether the string is a palindorme.

  A palindrome is defined as a string that is written the same forward and
  backword. Note that single-character strings are palindromes.

Sample Input:
  string = 'abcdcba'

Sample Output:
  true // it is written the same forward and backward

*/


const isPalindrome = (string) => {

}

// 1st Attempt, solved!
const isPalindrome = (string) => {
  let reversed = string.split('').reverse().join('');
  return string === reversed;
}

// 2nd Attempt, solved another way!
const isPalindrome = (string) => {
  let reversed = string;

  let j = 0
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== reversed[j]) return false;
    j++;
  }

  return true;
}