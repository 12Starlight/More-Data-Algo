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



*/