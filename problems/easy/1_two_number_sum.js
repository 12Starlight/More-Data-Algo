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

// // O(N^2) Time | O(1) Space
// const twoNumberSumSquared = (array, targetSum) => {
//   let sumArr = [];

//   for (let start = 0; start < array.length - 1; start++) {
//     for (let end = array.length - 1; end > start; end--) {
//       if ((array[start] + array[end]) === targetSum) {
//         sumArr.push(array[start], array[end])
//       }
//     }
//   }

//   return sumArr;
// }
// console.log(twoNumberSumSquared(array, targetSum));


// // O(N) Time | O(N) Space
// // Can not return in a forEach Loop
// const twoNumberSumLinear = (array, targetSum) => {
//   let values = {};

//   for (let num of array) {
//     const potentialMatch = (targetSum - num);
//     if (potentialMatch in values) {
//       return [potentialMatch, num];
//     } else {
//       values[num] = true;
//     }
//   }
//   return [];
// }
// console.log(twoNumberSumLinear(array, targetSum));


// // O(Nlog(N)) Time | O(1) Space
// const twoNumberSumNLogN = (array, targetSum) => {
//   array.sort((a, b) => a - b);

//   let left = 0; // left index
//   let right = array.length - 1; // right index

//   while (left < right) {
//     const currentSum = (array[left] + array[right]);
//     if (currentSum === targetSum) {
//       return [array[left], array[right]];
//     } else if (currentSum > targetSum) {
//       right--;
//     } else if (currentSum < targetSum) {
//       left++;
//     }
//   }

//   return [];
// }
// console.log(twoNumberSumNLogN(array, targetSum));


// // Whiteboard Drills
// // Brute Force: 2 Arrays: O(n^2) Time | O(1) Space
// const twoNumberSum = (array, targetSum) => {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       let sum = array[i] + array[j];
//       if (sum === target) return [array[i], array[j]];
//     }
//   }

//   return [];
// }

// // Brute Force: 2 Arrays: O(n^2) Time | O(1) Space
// const twoNumberSum = (array, target) => {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       const sum = array[i] + array[j];
//       if (sum === target) return [array[i], array[j]];
//     }
//   }

//   return [];
// }

// // Brute Force: 2 Arrays: O(n^2) Time | 0(1) Space
// const twoNumberSum = (array, target) => {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       const sum = array[i] + array[j];
//       if (sum === target) return [array[i], array[j]];
//     }
//   }

//   return [];
// }


// // Whiteboard Drills
// // Linear: Iter, HashTable: O(n) Time | O(n) Space
// const twoNumberSum = (array, target) => {
//   let nums = {};
//   for (let num of array) {
//     const potentialMatch = (target - num);
//     if (potentialMatch in nums) {
//       return [potentialMatch, num];
//     } else {
//       nums[num] = true;
//     }
//   }

//   return [];
// }

// // Linear: Iter, HashTable: O(n) Time | O(n) Space
// const twoNumberSum = (array, target) => {
//   const pairs = {};
//   for (let num of array) {
//     const possible = (target - num);
//     if (pairs[possible]) {
//       return [possible, num];
//     } else {
//       pairs[num] = true;
//     }
//   }

//   return [];
// }

// // Linear: Iter, HashTable: O(n) Time | O(1) Space
// const twoNumberSum = (array, target) => {
//   const solution = {};
//   for (let num of array) {
//     const potentialSol = (target - num);
//     if (potentialSol in solution) {
//       return [potentialSol, num];
//     } else {
//       solution[num] = true;
//     }
//   }

//   return [];
// }


// // Whiteboard Drills
// // Optimal: Sorted, Pointers: O(nlogn) Time | O(1) Space
// const twoNumberSum = (array, target) => {
//   array.sort((a, b) => a - b) // smallest to largest
//   let left = 0;
//   let right = array.length - 1;
//   while (left < right) {
//     let currentSum = array[left] + array[right];
//     if (currentSum === target) {
//       return [array[left], array[right]];
//     } else if (currentSum < target) {
//       left++;
//     } else if (currentSum > target) {
//       right--;
//     }
//   }

//   return [];
// }

// // Optimal: Sort, Pointers: O(nlogn) Time | O(1) Space
// const twoNumberSum = (array, target) => {
//   array.sort((a, b) => a - b);
//   let left = 0;
//   let right = array.length - 1;
//   while (left < right) {
//     const potentialPair = array[left] + array[right];
//     if (potentialPair === target) {
//       return [array[left], array[right]];
//     } else if (potentialPair > target) {
//       right--;
//     } else if (potentialPair < target) {
//       left++;
//     }
//   }

//   return [];
// }

// // Optimal: Sort, Pointers: O(nlogn) Time | O(1) Space
// const twoNumberSum = (array, target) => {
//   array.sort((a, b) => a - b); // smallest to largest
//   let left = 0;
//   let right = array.length - 1;
//   while (left < right) {
//     let potentialMatch = array[left] + array[right];
//     if (potentialMatch === target) {
//       return [array[left], array[right]];
//     } else if (potentialMatch < target) {
//       left++;
//     } else if (potentialMatch > target) {
//       right--;
//     }
//   }

//   return [];
// }


/*
Whiteboard Drills: Two Number Sum: 3: 1, 2, 3

Explanation:
Write a function that takes in a non-empty array of distinct integers, and an 
integer representing a targetSum. If any two number in the input array sum up to
the targetSum, the function should return them in an array, in any order. If no
two numbers sum up to the target sum, the function should return an empty array.

Note that the target sum has to be obtained by summing two different integers in
the array. You can not add a single integer to itself in order to obtain the
target sum.

You can assume that there will be at most, one pair of numbers summing up to the
target sum.

*/

// Solution:
// 1: Brute Force: Quadratic: Iterative: 1sParameters(array, targetSum)
/// i: For Loop: Variable: i: Variable: firstNum: Assigned: array with key i
/// ii: Inner For Loop: Variable: j: Assigned: i plus one: Variable: secondNum: Assigned: array with key j
/// iii: Conditional: firstNum plus secondNum is targetSum: Return: ArrayOf: [firstNum, secondNum]
// Outside Iterations: Return empty array
// O(n^2) T | O(1) S
const twoNumberSumQuadratic = (array, targetSum) => {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];

    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];

      if (firstNum + secondNum === targetSum) return [firstNum, secondNum];
    }
  }

  return [];
} 
console.log(twoNumberSumQuadratic([3, 5, -4, 8, 11, 1, -1, 6], 10)); // [11, -1]


// 2: Linear: Iterative: 2sParameters(array, targetSum)
/// i: Variable: nums: Assigned: Empty HashTable
/// ii: For Loop of Array: Variable: num
/// iii: Variable: potentialMatch: Assigned: targetSum minus num
/// iv: Conditional: potentialMatch in nums: Return: ArrayOf: [potentialMatch, num]:
///     Else: nums with key num: Assigned: true: Puts value in HashTable
// Outside Iteration: Return empty array
// Avg: O(n) T | O(n) S
const twoNumberSumLinear = (array, targetSum) => {
  const nums = {};

  for (let num of array) {
    const potentialMatch = targetSum - num;

    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true; // Puts value in HashTable
    }
  }

  return [];
}
console.log(twoNumberSumLinear([3, 5, -4, 8, 11, 1, -1, 6], 10)); // [11, -1]


// 3: Linear Logarithmic: Iterative: Optimal: 3sParameters(array, targetSum)
/// i: Sort in place: Array: Algorithm: a minus b: Least to greatest
/// ii: Variable: left: Assigned: Zero: Pointer one
/// iii: Variable: right: Assigned: array length minus one: Pointer two
/// iv: While Loop: left less than right
/// v: Variable: currentSum: Assigned: array with key left: Plus: array with key right
/// vi: Conditional: currentSum is targetSum: Return: ArrayOf: [array with key left, array with key right]: 
///     Else if: currentSum less than targetSum: left concatenate one: Pointer one moves right:
///     Else if: currentSum greater than targetSum: right disconnect one: Pointer two moves left:
// Outside While Loop: Return empty array
// Avg: O(nlog(n)) T | O(1) S
const twoNumberSumLinearLogarithmic = (array, targetSum) => {
  array.sort((a, b) => a - b); // least to greatest
  let left = 0; // Pointer one
  let right = array.length - 1; // Pointer two

  while (left < right) {
    const currentSum = array[left] + array[right];

    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++; // Pointer one moves right
    } else if (currentSum > targetSum) {
      right--; // Pointer two moves left
    }
  }

  return [];
}
console.log(twoNumberSumLinearLogarithmic([3, 5, -4, 8, 11, 1, -1, 6], 10)); // [-1, 11]