/*
Two Number Sum:
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.

  Note that the target sum has to be obtained by summing two differnt integers
  in the array; you can not add a single integer to itself in order to obtain
  the target sum.

  You can assume that there will be at most one pair of numbers summing up to
  the target sum. 

Sample Input:
  const array = [3, 5, -4, 8, 11, 1, -1, 6];
  const targetSum = 10;   

Sample Output:
  [-1, 11] // the numbers could be in reverse order

*/
const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

// O(N^2) Time | O(1) Space
const twoNumberSumSquared = (array, targetSum) => {
  let sumArr = [];

  for (let start = 0; start < array.length - 1; start++) {
    for (let end = array.length - 1; end > start; end--) {
      if ((array[start] + array[end]) === targetSum) {
        sumArr.push(array[start], array[end])
      }
    }
  }

  return sumArr;
}
console.log(twoNumberSumSquared(array, targetSum));


// O(N) Time | O(N) Space
// Can not return in a forEach Loop
const twoNumberSumLinear = (array, targetSum) => {
  let values = {};

  for (let num of array) {
    const potentialMatch = (targetSum - num);
    if (potentialMatch in values) {
      return [potentialMatch, num];
    } else {
      values[num] = true;
    }
  }
  return [];
}
console.log(twoNumberSumLinear(array, targetSum));


// O(Nlog(N)) Time | O(1) Space
const twoNumberSumNLogN = (array, targetSum) => {
  array.sort((a, b) => a - b);

  let left = 0; // left index
  let right = array.length - 1; // right index

  while (left < right) {
    const currentSum = (array[left] + array[right]);
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum > targetSum) {
      right--;
    } else if (currentSum < targetSum) {
      left++;
    }
  }

  return [];
}
console.log(twoNumberSumNLogN(array, targetSum));


// Whiteboard Drills
// Brute Force: 2 Arrays: O(n^2) T | O(1) Space
const twoNumberSum = (array, targetSum) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j];
      if (sum === target) return [array[i], array[j]];
    }
  }

  return [];
}

// Brute Force: 2 Arrays: O(n^2) T | O(1) Space
const twoNumberSum = (array, target) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const sum = array[i] + array[j];
      if (sum === target) return [array[i], array[j]];
    }
  }

  return [];
}

// Brute Force: 2 Arrays: O(n^2) Time | 0(1) Space
const twoNumberSum = (array, target) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const sum = array[i] + array[j];
      if (sum === target) return [array[i], array[j]];
    }
  }

  return [];
}




