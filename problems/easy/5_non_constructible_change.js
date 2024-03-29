/*
Non Constructible Change

Explanation:

Given an array of positive integers representing the values of coins in your
possession, write a function that returns the minimum amount of change (the
minimum sum of money) that you CANNOT create. The given coins can have any 
postive integer value and are not necessarily unique (i.e., you can have 
multiple coins of the same value).

For example, if you are given 'coins = [1, 2, 5], the minimum amount of change
that you cannot create is '4'. If you are given no coins, the minimum amount of
change that you cannot create '1'.


Sample Input:
  coins = [5, 7, 1, 1, 2, 3, 22]

Sample Output:
  20

*/

/*
11/25/2021
Time Complexity: O(nlog(n)) Time : O(1) Space


Concept:

Taking on the idea of fractions and one being a whole, the cummulation of change
represents the fractions. Thus each additional coin must be equal to or not 
greater than the completion of the whole. The mathmatical equation represents
this.

  V (new coin) > C (change) + 1 returns C + 1


Sudo:

Sort the array using (a - b) as in input.
Create a variable change and assign it a value of 0.

Iterate thorugh the sorted array using ForEach with coin as the element.
  Create a variable to represent the smallest value that we can not create which
  is change + 1.
  Create a conditional that checks if the current coin is greater than the 
  variable smallestValue.
    If true, return that smallest value.

  After the conditional increment the change variable by the amount of the
  current coin.

Return change plus one.


Edge Case:

If the first element in the sorted array is NOT a one, then return 1.
If the entire array has been iterated and there is not a minimum amount of
that can NOT be created then return the cummulation of change plus 1.

*/

// Non Constructible Change: My Solution
// Inputs: Coins array
// Edge: Return 1 or Return change + 1 at the end of the array

const coinsArr = [5, 7, 1, 1, 2, 3, 22];

const nonConstructibleChange = (coins) => {
  const sorted = coins.sort((a, b) => a - b);
  let change = 0;

  sorted.forEach((coin) => {
    let smallestChange = change + 1;

    if (coin > smallestChange) {
      return smallestChange;
    }

    change += coin;
  });

  console.log("\n\nNon Constructible Change : O(nlog(n)) Time complexity : O(1) Space complexity\n")
  return change + 1;
}

// Test: 20
console.log(nonConstructibleChange(coinsArr));

