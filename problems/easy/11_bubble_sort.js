/*
Bubble Sort:
  Write a function that takes in an array of integers and returns a sorted 
  version of that array. Use the Bubble Sort algorithm to sort the array.

  If you are unfamiliar with Bubble Sort, we recommend watching the Conceptual
  Overview section of this question's video explanation before starting to code.

Sample Input:
  array = [8, 5, 2, 9, 5, 6, 3]

Sample Output:
  [2, 3, 5, 5, 6, 8, 9]

*/


// 1st Attempt (Solved on my own!)
// O(N^2) Time (N is the length of input array) | O(1) Space
const bubbleSort = (array) => {
  let logic = false;

  while (!logic) {
    logic = true;

    for (let i = 0; i < array.length - 1; i++) {
      console.log(array[i])
      if (array[i] > array[i + 1]) {
        // [brackets need to go] = [around the entire expression]
        [array[i], array[i + 1]] = [array[i + 1], array[i]]; 
        logic = false;
      }
    }
  }

  return array;
}