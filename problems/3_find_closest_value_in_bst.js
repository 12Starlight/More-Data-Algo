/*
Find Closest Value In BST:
  Write a function that takes in a Binary Search Tree (BST) and a target integer
  value and returns the closest value to that target value contained in the BST.

  You can assume that there will only be one closest value.

  Each 'BST' nodes has an integer 'value', a 'left' child node, and a 'right'
  child node. A node is said to be a valid 'BST' node if and only if it satisfies
  the BST property: Its 'value' is strictly greater than the values of every
  node to its left; it's 'value' is less than or equal to the values of every
  node to its right; and its children nodes are either valid 'BST' nodes 
  themselves or 'None'/'null'.

Sample Input:
      tree =    10
              /    \
            5      15 
          /   \   /   \
        2      5 13   22
      /           \
    1             14

    target = 12

*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findClosestValueInBst = (tree, target) => {
  
}