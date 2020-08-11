/*
Nth Fibonacci:
  The Fibonacci sequence is defined sa follows: the first number of the sequence
  is '0', the second number is '1', and the nth number is the sum of the (n-1)th
  and (n-2)th numbers. Write a function that takes in an integer 'n' and returns
  the nth Fibonacci number.

  Important note: the Fibonacci sequence is often defined with its first two 
  numbers as 'F0 = 0' and 'F1 = 1'. For the purpose of this question, the first
  Fibonacci number is 'F0'; therefore, 'getNthFib(1)' is equal to 'F0', 
  'getNthFib(2)' is equal to 'F1', etc.

Sample Input #1:
  n = 2

Sample Output #1:
  1 // 0, 1

Sample Input #2:
  n = 6

Sample Output #2:
  5 // 0, 1, 1, 2, 3, 5  

*/


// O(2^N) Time | O(N) Space
const getNthFib = (n) => {
  if (n <= 1) return 0;
  if (n === 2) return 1;

  return getNthFib(n - 1) + getNthFib(n - 2); 
};

// O(N) Time | O(N) Space
const getNthFibMemo = (n, memo = { 1: 0, 2: 1 }) => {
  if (n in memo) return memo[n];

  memo[n] = getNthFibMemo(n - 1, memo) + getNthFibMemo(n - 2, memo);
  return memo[n];
}

// Another Way To Do getNthFibMemo
const getNthFibMemo1 = (n, memo = {}) => {
  if (n <= 1) return 0;
  if (n === 2) return 1;
  if (n in memo) return memo[n];
  return memo[n] = getNthFibMemo1(n-1, memo) + getNthFibMemo1(n-2, memo);
}

// O(N) Time | O(1) Space (bc we are not storing anything)
const getNthFibIter1 = (n) => {
  let lastTwo = [0, 1];
  let counter = 3;

  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }

  return n > 1 ? lastTwo[1] : lastTwo[0];
}

// Iterative
// O(N) Time | O(1) Space
const getNthFibIter = (n) => {
  let stack = [0,  1];
  let counter = 3;

  while (counter <= n) {
    let nextCalc = stack[0] + stack[1];
    stack[0] = stack[1];
    stack[1] = nextCalc;
    counter++;
  }

  return n > 1 ? stack[1] : stack[0];
}

  



