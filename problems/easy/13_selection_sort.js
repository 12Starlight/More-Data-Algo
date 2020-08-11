/*
Selection Sort:
  Write a function that takes in an array of integers and returns a sorted
  version of that array. Use the Selection Sort algorithm to sort the array.

  If you are unfamiliar with Selection Sort, we recommend watching the
  Conceptual Overview section of this question's video explanation before
  starting to code.

Sample Input:
  array = [8, 5, 2, 9, 5, 6, 3]

Sample Output:
  [2, 3, 5, 5, 6, 8, 9]

*/


const selectionSort = (array) => {

}

// After explanation
// O(N^2) Time | O(1) Space
const swap = (i, j, array) => {
  [array[i], array[j]] = [array[j], array[i]];
}

const selectionSort = (array) => {
  let currentIdx = 0;

  while (currentIdx < array.length - 1) {
    let smallestIdx = currentIdx;

    for (let i = currentIdx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) {
        smallestIdx = i;
      }
    }

    swap(currentIdx, smallestIdx, array);
    currentIdx++
  }

  return array;
}


// Solved on my own!
// O(N^2) Time | O(1) Space
const swap = (i, j, array) => {
  [array[i], array[j]] = [array[j], array[i]];
}

const selectionSort = (array) => {
  let currentIdx = 0;

  while (currentIdx < array.length - 1) {
    let smallestIdx = currentIdx;

    for (let i = currentIdx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) {
        smallestIdx = i;
      }
    }

    swap(smallestIdx, currentIdx, array);
    currentIdx++;
  }

  return array;
}


