/*
Binary Search:
  Write a function that takes in a sorted array of integers as well as a target
  integer. The function should use the Binary Search algorithm to determine if
  the target integer is contained in the array and should return its index if it
  is, otherwise '-1'.

  If you are unfamiliar with Binary Search, we recommend the Conceptual Overview
  section of this question's video explanation before starting to code.

Sample Input:
  array = [0, 1, 21, 33, 35, 45, 61, 71, 72, 73]
  target = 33

Sample Output:
  3

*/


// 1st Attempt
const binarySearch = (array, target) => {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);

  if (mid < target) {
    return binarySearch(array.slice(mid));
  } else if (mid > target) {
    return binarySearch(array.slice(mid + 1));
  } else {
    return mid;
  }
}

// 2nd Attempt
const binarySearch = (array, target) => {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);

  if (mid < target) {
    return binarySearch(array.slice(mid));
  } else if (mid > target) {
    return binarySearch(array.slice(mid + 1));
  } else {
    return array.indexOf(mid);
  }
}

// After explanation
// Recursive
// O(Log(N)) Time (N is the elements in the array)
// O(Log(N)) Space (adding frames to the call stack)
const binarySearchHelper = (array, target, left, right) => {
  if (left > right) return -1;
  let mid = Math.floor((left + right) / 2);

  let potential = array[mid];
  if (target === potential) {
    return mid;
  } else if (target < potential) {
    return binarySearchHelper(array, target, left, mid - 1);
  } else if (target > potential) {
    return binarySearchHelper(array, target, mid + 1, right);
  }
}

const binarySearch = (array, target) => {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

// Iterative
// O(Log(N)) Time
// O(1) Space
const binarySearchHelper = (array, target, left, right) => {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let potential = array[mid];
    if (target === potential) {
      return mid;
    } else if (target < potential) {
      right = mid - 1;
    } else if (target > potential) {
      left = mid + 1;
    }
  }

  return -1;
}

const binarySearch = (array, target) => {
  return binarySearchHelper(array, target, 0, array.length - 1);
}