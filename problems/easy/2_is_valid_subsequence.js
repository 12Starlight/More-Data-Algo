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

// O(N) Time (N is the length of the array) | O(1) Space
const isValidSubsequenceWhile = (array, sequence) => {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx++;
    }

    arrIdx++;
  }

  return seqIdx == sequence.length;
}
console.log(isValidSubsequenceWhile(array, sequence));


// O(N) Time (N is the length of the array) | O(1) Space
const isValidSubsequenceFor = (array, sequence) => {
  let seqIdx = 0;

  for (let arrVal of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === arrVal) {
      seqIdx++;
    }
  }

  return seqIdx === sequence.length;
}
console.log(isValidSubsequenceFor(array, sequence));


// Whiteboard Drills
// While Loop: Linear: Iterate 2 Array in tandium, 2 Pointers: O(n) T | O(1) S
const isValidSubsequence = (array, sequence) => {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx++;
    }

    arrIdx++;
  }

  return seqIdx == sequence.length;
}

// While Loop: Linear: Iterate 2 Arrays in tandium, 2 Pointers: O(n) T | O(1) S
const isValidSubsequence = (array, sequence) => {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) {
      seqIdx++;
    }

    arrIdx++;
  }

  return seqIdx == sequence.length;
}

// While Loop: Linear: Iterate 2 Arrays in tandium, 2 Pointers: O(n) T | O(1) S
const isValidSubsequence = (array, sequence) => {
  let arrIdx = 0; // Array Pointer
  let seqIdx = 0; // Sequence Pointer
  // .length bc at each pass, either pointer can increase by 1
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }

  return seqIdx === sequence.length;
}


// Whiteboard Drills 
// For Loop: Optimal: Iterate 1 Array, 1 Pointer: O(n) T | O(1) S
const isValidSubsequence = (array, sequence) => {
  let seqIdx = 0; // Sequence Pointer

  for (let num of array) {
    if (seqIdx === sequence.length) break;
    if (num === sequence[seqIdx]) seqIdx++;
  }

  return seqIdx === sequence.length;
}

// For Loop: Optimal: Iterate 1 Array, 1 Pointer: O(n) T | O(1) S
const isValidSubsequence = (array, sequence) => {
  let seqPointer = 0; // Sequence Pointer

  for (let num of array) {
    if (seqPointer === sequence.length) break;
    if (num === sequence[seqPointer]) seqPointer++;
  }

  return seqPointer === sequence.length;
}

// For Loop: Optimal: Iterate 1 Array, 1 Pointer: O(n) T | O(1) S
const isValidSubsequence = (array, sequence) => {
  let seqPointer = 0; // Sequence Pointer

  for (let num of array) {
    if (seqPointer === sequence.length) break;
    if (num === sequence[seqPointer]) seqPointer++;
  }

  return seqPointer === sequence.length;
}