/*
Product Sum:
  Write a function that takes in a 'special' array and returns it's product sum.

  A 'special' array is a non-empty array that contains either integers or other
  'special' arrays. The product sum of a 'special' array is the sum of it's
  elements, where 'special' arrays inside it are summed themselves and then
  multiplied by their level of depth.

  The depth of a 'special' array is how far nested it is. For instance, the
  depth of '[]' is '1'; the depth of the inner array is '[[]]' is 2; the depth
  of the innermost array is '[[[]]]' is '3'.

  Therefore, the product sum of '[x, y]' is 'x + y'; the product sum of
  '[x, [y, z]]' is 'x + 2 * (y + z)'; the product sum of '[x, [y, [x]]]' is
  'x + 2 * (y + 3z).

Sample Input:
  array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

Sample Output:
  12 // calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)

*/

// 1st Attempt
const productSum = (array) => {
  let count = 1;
  let total = 0;

  let i = 0;
  while (i < array.length - 1) {
    let j = 0;

    total += parseInt(array[i]);
    if (Array.isArray(array[i])) {
      ++count;
      let sum = 0;
      while (j < array[i].length - 1) {
        total += count * (sum += parseInt(array[i][j]));
        j++;
      }
    }

    i++;
  }

  return total;
}

// 2nd Attempt
const productSum = (array) => {
  let sum = 0;
  let multiplier = 1;

  for (let elm of array) {
    if (Array.isArray(elm)) {
      productSum(elm, multiplier + 1);
    } else {
      sum += elm;
    }
  }

  return sum * multiplier;
}

// Solved
// O(N) Time (where N is all the elements of the array & each sub array elments)
// O(D) Space (where D is the Depth of the most calls on the stack)
const productSum = (array, multiplier = 1) => {
  let sum = 0;

  for (let elm of array) {
    if (Array.isArray(elm)) {
      sum += productSum(elm, multiplier + 1);
    } else {
      sum += elm;
    }
  }

  return sum * multiplier;
}