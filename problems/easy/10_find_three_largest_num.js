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