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


// After explanation
// O(N) Time | O(N) Space
const isPalindrome = (string, i = 0) => {
	let j = string.length - 1 - i;
	return i >= j ? true : string[i] === string[j] && isPalindrome(string, i + 1);
}

// Tail Recursion: Depends on compiler
// O(N) Time | O(1) Space
const isPalindrome = (string, i = 0) => {
  let j = string.length - 1 - i;

  if (i >= j) return true;
  if (string[i] !== string[j]) return false;

  // put recursive call on last line of function
  return isPalindrome(string, i + 1); 
}