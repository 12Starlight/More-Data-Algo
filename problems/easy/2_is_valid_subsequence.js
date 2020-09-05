/*
Validate Subsequence:
  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.

  A subsequence of an array is a set of numbers that are not necessarily 
  adjacent in the array, but that are in the same order as they appear in the
  array. For instance, the numbers [1,3,4] form a subsequence of the array
  [1,2,3,4], and so do the numbers [2,4]. Note that a single number in an array
  and the array itself are both subsequences of the array.

Sample Input:
  const array = [5, 1, 22, 25, 6, -1, 8, 10];
  const sequence = [1, 6, -1, 10];

Sample Output:
  true

*/
const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

// // O(N) Time (N is the length of the array) | O(1) Space
// const isValidSubsequenceWhile = (array, sequence) => {
//   let arrIdx = 0;
//   let seqIdx = 0;

//   while (arrIdx < array.length && seqIdx < sequence.length) {
//     if (array[arrIdx] === sequence[seqIdx]) {
//       seqIdx++;
//     }

//     arrIdx++;
//   }

//   return seqIdx == sequence.length;
// }
// console.log(isValidSubsequenceWhile(array, sequence));


// // O(N) Time (N is the length of the array) | O(1) Space
// const isValidSubsequenceFor = (array, sequence) => {
//   let seqIdx = 0;

//   for (let arrVal of array) {
//     if (seqIdx === sequence.length) break;
//     if (sequence[seqIdx] === arrVal) {
//       seqIdx++;
//     }
//   }

//   return seqIdx === sequence.length;
// }
// console.log(isValidSubsequenceFor(array, sequence));


// // Whiteboard Drills
// // While Loop: Linear: Iterate 2 Array in tandium, 2 Pointers: O(n) T | O(1) S
// const isValidSubsequence = (array, sequence) => {
//   let arrIdx = 0;
//   let seqIdx = 0;

//   while (arrIdx < array.length && seqIdx < sequence.length) {
//     if (array[arrIdx] === sequence[seqIdx]) {
//       seqIdx++;
//     }

//     arrIdx++;
//   }

//   return seqIdx == sequence.length;
// }

// // While Loop: Linear: Iterate 2 Arrays in tandium, 2 Pointers: O(n) T | O(1) S
// const isValidSubsequence = (array, sequence) => {
//   let arrIdx = 0;
//   let seqIdx = 0;

//   while (arrIdx < array.length && seqIdx < sequence.length) {
//     if (array[arrIdx] === sequence[seqIdx]) {
//       seqIdx++;
//     }

//     arrIdx++;
//   }

//   return seqIdx == sequence.length;
// }

// // While Loop: Linear: Iterate 2 Arrays in tandium, 2 Pointers: O(n) T | O(1) S
// const isValidSubsequence = (array, sequence) => {
//   let arrIdx = 0; // Array Pointer
//   let seqIdx = 0; // Sequence Pointer
//   // .length bc at each pass, either pointer can increase by 1
//   while (arrIdx < array.length && seqIdx < sequence.length) {
//     if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
//     arrIdx++;
//   }

//   return seqIdx === sequence.length;
// }


// // Whiteboard Drills 
// // For Loop: Optimal: Iterate 1 Array, 1 Pointer: O(n) T | O(1) S
// const isValidSubsequence = (array, sequence) => {
//   let seqIdx = 0; // Sequence Pointer

//   for (let num of array) {
//     if (seqIdx === sequence.length) break;
//     if (num === sequence[seqIdx]) seqIdx++;
//   }

//   return seqIdx === sequence.length;
// }

// // For Loop: Optimal: Iterate 1 Array, 1 Pointer: O(n) T | O(1) S
// const isValidSubsequence = (array, sequence) => {
//   let seqPointer = 0; // Sequence Pointer

//   for (let num of array) {
//     if (seqPointer === sequence.length) break;
//     if (num === sequence[seqPointer]) seqPointer++;
//   }

//   return seqPointer === sequence.length;
// }

// // For Loop: Optimal: Iterate 1 Array, 1 Pointer: O(n) T | O(1) S
// const isValidSubsequence = (array, sequence) => {
//   let seqPointer = 0; // Sequence Pointer

//   for (let num of array) {
//     if (seqPointer === sequence.length) break;
//     if (num === sequence[seqPointer]) seqPointer++;
//   }

//   return seqPointer === sequence.length;
// }


/*
WhiteBoard Drills: Validate Subsequence: 2: 1, 2

Explanation:
Given two two non-empty array of integers, write a function that determines 
whether the second array is a subsequence of the first one. 

A subsequence of an array is a set of numbers that are not necessarily adjacent 
in the array, but that are in the same order as they appear in the array. For 
instance, the numbers [1,3,4], form the subsequence of the array [1, 2, 3, 4], 
and so do the numbers [2, 4]. Note that a single number in an array and the 
array itself are both valid subsequences of the array. 

*/

// Solution:
// 1: Linear: Iterative: 1sParameters(array, sequence)
/// i: Variable: arrayIndex: Assigned: Zero: Pointer one
/// ii: Variable: sequenceIndex: Assigned: Zero: Pointer two
/// iii: While Loop: arrayIndex less than array length and sequenceIndex less than sequence length
/// iv: Conditional: array with key arrayIndex is sequence with key sequenceIndex: sequenceIndex concatenate one:
///     Pointer two moves right: Found a value
/// v: Add to arrayIndex: Concatenate one: Pointer one moves right: Keep moving through array
// Outside While Loop: Return sequenceIndex is sequence length
// Avg: O(n) T | O(1) S
const isValidSubsequenceLinear1 = (array, sequence) => {
  let arrayIndex = 0; // Pointer one
  let sequenceIndex = 0; // Pointer two

  while (arrayIndex < array.length && sequenceIndex < sequence.length) {
    if (array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex++; // Pointer two moves right // Found a value
    arrayIndex++;
  } 

  return sequenceIndex === sequence.length; 
}
console.log(isValidSubsequenceLinear1([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])) // true

// 2: Linear: Iterative: Optimal: 2sParameters(array, sequence)
/// i: Variable: sequenceIndex: Assigned: Zero: Pointer one
/// ii: For Loop of Array: Variable: value
/// iii: Conditional: sequenceIndex is sequence length: Break: Found subsequence
/// iv: Conditional: sequence with key sequenceIndex is value: sequenceIndex concatenate one:
///     Pointer one moves right: Found a value
// Outside Iteration: Return sequenceindex is sequence length
// Avg: O(n) T | O(1) S
const isValidSubsequenceOptimal1 = (array, sequence) => {
  let sequenceIndex = 0; // Pointer one

  for (let value of array) {
    if (sequenceIndex === sequence.length) break; // Found subsequence
    if (sequence[sequenceIndex] === value) sequenceIndex++; // Pointer one moves right // Found a value
  }

  return sequenceIndex === sequence.length;
}
console.log(isValidSubsequenceOptimal1([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])) // true


console.log('')
/*
Whiteboard Drills: 2: 1, 2

Explanation:
Given two non-empty arrays of integers, write a function that determines whether
the second array is a subsequence of the first one. 

A subsequence in an array is set of numbers that are not necessarily adjacent in
the array, but that are in the same order as they appear in the array. For 
instance, the numbers [1,3,4] form a subsequence of the array [1,2,3,4], and so
do the numbers [2,4]. Note that a single number in an array and the array itself 
are both valid subsequences of the array. 

*/

// Solution:
// 1: Linear: Iterative: 1sParameters(array, sequence)
/// i: Variable: arrayIndex: Assigned: Zero: Pointer one
/// ii: Variable: sequenceIndex: Assigned: Zero: Pointer two
/// iii: While Loop: arrayIndex less than array length and sequenceIndex less than sequence length
/// iv: Conditional: array with key arrayIndex is sequence with key sequenceIndex: sequenceIndex concatenate one:
///     Pointer two moves right: Found a value
/// v: Add to arrayIndex: Concatenate one: Pointer one moves right: Keep moving through array
// Outside While Loop: Return sequenceIndex is sequence length
// Avg: O(n) T | O(1) S
const isValidSubsequenceLinear2 = (array, sequence) => {
  let arrayIndex = 0; // Pointer one
  let seqIdx = 0; // Pointer two

  while (arrayIndex < array.length && seqIdx < sequence.length) {
    if (array[arrayIndex] === sequence[seqIdx]) seqIdx++; // Pointer two moves right // Found a value
    arrayIndex++; // Pointer one moves right // Keep moving through array
  }

  return seqIdx === sequence.length; 
}
console.log(isValidSubsequenceLinear2([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])) // true

// 2: Linear: Iterative: Optimal: 2sParameters(array, sequence)
/// i: Variable: sequenceIndex: Assigned: Zero: Pointer one
/// ii: For Loop of Array: Variable: value
/// iii: Conditional: sequenceIndex is sequence length: Break: Found subsequence
/// iv: Conditional: sequence with key sequenceIndex is value: sequenceIndex concatenate one: 
///     Pointer one moves right: Found a value
// Outside Iteration: Return sequenceIndex is sequence length
// Avg: O(n) T | O(1) S
const isValidSubsequenceOptimal2 = (array, sequence) => {
  let sequenceIndex = 0; // Pointer one

  for (let value of array) {
    if (sequenceIndex === sequence.length) break; // Found subsequence
    if (sequence[sequenceIndex] === value) sequenceIndex++; // Pointer one moves right // Found a value
  }

  return sequenceIndex === sequence.length;
}
console.log(isValidSubsequenceOptimal2([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])) // true


console.log('')
/*
Whiteboard Drills: Valid Subsequence: 2: 1, 2

Explanation:
Given two non-empty arrays of integers, write a function that determines whether
the second array is a subsequence of the first one.

A subsequence of an array is set of numbers that are not necessarily adjacent 
in the array, but that are in the same order as they appear in the array. For
instance, the numbers [1,3,4] form a subsequence of the array [1,2,3,4], and so
do the numbers [2,4]. Note that a single number in the array and the array 
itself are both valid subsequences of the array.

*/

// Solution:
// 1: Linear: Iterative: 1sParameters(array, sequence)
/// i: Variable: arrayIndex: Assigned: Zero: Pointer one
/// ii: Variable: sequenceIndex: Assigned: Zero: Pointer two
/// iii: While Loop: arrayIndex less than array length and sequenceIndex less than sequence length
/// iv: Conditional: array with key arrayIndex is sequence with key sequenceIndex: sequenceIndex concatenate one:
///     Pointer two moves right: Found a value
/// v: Add to arrayIndex: Concatenate one: Pointer one moves right: Keep moving through array
// Outside While Loop: Return sequenceIndex is sequence length
// Avg: O(n) T | O(1) S
const isValidSubsequenceLinear3 = (array, sequence) => {
  let arrayIndex = 0; // Pointer one
  let sequenceIndex = 0; // Pointer two

  while (arrayIndex < array.length && sequenceIndex < sequence.length) {
    if (array[arrayIndex] === sequence[sequenceIndex]) sequenceIndex++; // Pointer two moves right // Found a value
    arrayIndex++; // Pointer one moves right // Keep moving through array
  }

  return sequenceIndex === sequence.length; 
}
console.log(isValidSubsequenceLinear3([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])) // true

// 2: Linear: Iterative: Optimal: 2sParameters(array, sequence)
/// i: Variable: sequenceIndex: Assigned: Zero: Pointer one
/// ii: For Loop of Array: Variable: value
/// iii: Conditional: sequenceIndex is sequence length: Break: Found subsequence
/// iv: Conditional: sequence with key sequenceIndex is value: sequenceIndex conatenate one:
///     Pointer one moves right: Found a value
// Outside Iteration: return sequenceIndex is sequence length
// Avg: O(n) T | O(1) S
const isValidSubsequenceOptimal3 = (array, sequence) => {
  let sequenceIndex = 0; // Pointer one

  for (let value of array) {
    if (sequenceIndex === sequence.length) break; // Found subsequence
    if (sequence[sequenceIndex] === value) sequenceIndex++; // Pointer one moves right // Found a value
  }

  return sequenceIndex === sequence.length; 
}
console.log(isValidSubsequenceOptimal3([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])) // true