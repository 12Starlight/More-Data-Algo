/*
Find Three Largest Numbers:
  Write a function that takes in an array of at least three integers, without
  sorting the input array, returns a sorted array of the three largest integers
  in the input array.

  The function should return duplicate integers if necessary; for example, it
  should return '[10, 10, 12]' for an input array of '[10, 5, 9, 10, 12]'.

Sample Input:
  array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]

Sample Output:
  [18, 141, 541]

*/


// 1st Attempt
const findThreeLargestNumbers = (array) => {
  let threeLargest = [];

  let i = 0;
  while (i < array.length) {
    if (threeLargest[threeLargest.length - 1] < array[i] || threeLargest[0] === undefined) {
      threeLargest.push(array[i]);
    }

    i++;
  }

  return threeLargest;
}

// After explanation
// O(N) Time (bc we traverse entire array)
// O(1) Space
const shiftAndUpdate = (array, num, idx) => {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}

const updateLargest = (threeLargest, num) => {
  if (threeLargest[2] === undefined || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2);
  } else if (threeLargest[1] === undefined || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1);
  } else if (threeLargest[0] === undefined || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0);
  }
}

const findThreeLargestNumbers = (array) => {
  let threeLargest = [undefined, undefined, undefined];

  for (let num of array) {
    updateLargest(threeLargest, num);
  }

  return threeLargest;
}

// Solved On My Own
// O(N) Time (bc we traverse the array)
// O(1) Space
const shiftValues = (array, num, idx) => {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1]
    }
  }
}


const checkValue = (threeLargest, num) => {
  if (threeLargest[2] === undefined || num > threeLargest[2]) {
    shiftValues(threeLargest, num, 2);
  } else if (threeLargest[1] === undefined || num > threeLargest[1]) {
    shiftValues(threeLargest, num, 1);
  } else if (threeLargest[0] === undefined || num > threeLargest[0]) {
    shiftValues(threeLargest, num, 0);
  }
}

const findThreeLargestNumbers = (array) => {
  let threeLargest = [undefined, undefined, undefined];

  for (let num of array) {
    checkValue(threeLargest, num);
  }

  return threeLargest;
}