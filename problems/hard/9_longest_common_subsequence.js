/*
Longest Common Subsequence:

Write a function that takes in two strings and returns their longest common
subsequence.

A subsequence of a string is a set of characters that are not necessarily 
adjacent in the string, but that are in the same order as they appear in the
string. For instance, the characters ['a', 'c', 'd'] form a subsequence of the
string 'abcd', and so do the characters ['b', 'd']. Note that a single character
in a string and the string itself are both valid subsequences of the string.

You can assume that there will only be on longest common subsequence.


Sample Input:

  str1 = 'zxvvyzw'
  str2 = 'xkykzpw'

Sample Output:

  [
    'x', 'y', 'z', 'w'
  ]


*/

const str1 = 'zxvvyzw';
const str2 = 'xkykzpw'


// Brute Force 
// O(nm * min(n, m)) Time | O(nm * min(n, m)) Space
const longestCommonSubsequence = (str1, str2) => {
  const lcs = [];

  for (let i = 0; i < str2.length + 1; i++) {
    const row = new Array(str1.length + 1).fill([]);
    lcs.push(row);
  }

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        lcs[i][j] = lcs[i - 1][j - 1].concat(str2[i - 1]);
      } else {
        lcs[i][j] = lcs[i - 1][j].length > lcs[i][j - 1].length ? lcs[i - 1][j] : lcs[i][j - 1];
      }
    }
  }

  return lcs[str2.length][str1.length];
}

