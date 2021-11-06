/*
Sorted Squared Array

Explanation:

Write a function that takes in a non-emmpty array of integers that are sorted
in ascending order and returns a new array of the same length with the squares
of the original integers also sorted in ascending order.


*/

/*
11/05/2021
Time Complexity: O(nlog(n)) time : O(n) space


Concept:

Iterate through the array once and square each iterated number. Then push that
squared value into a new array and return that array sorted.


Sudo:

Initalize an empty array.
Iterate through the input array.
  Square each iterated value.
  Insert the squared value into the intialized array.

Return the initialized array sorted.


Edge Case:

If no numbers are in the array, the empty array itself is returned.


*/

