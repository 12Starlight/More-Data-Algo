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