/*
Insertion Sort:
  Write a function that takes in an array of integers and returns a sorted 
  version of that array. Use the Insertion Sort algorithm to sort the array.

  If you are unfamiliar with Insertion Sort, we recommend watching the 
  Conceptual Overview section of this question's video explanation before 
  starting to code.

Sample Input:
  array = [8, 5, 2, 9, 5, 6, 3]

Sample Output:
  [2, 3, 5, 5, 6, 8, 9]

*/


const insertionSort = (array) => {

}


// After explanation
// O(N^2) Time | O(1) Space
// Best: O(N) Time (sorted)
const swap = (i, j, array) => {
  [array[i], array[j]] = [array[j], array[i]];
}

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {

    let j = i
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j--;
    }
  }

  return array;
}