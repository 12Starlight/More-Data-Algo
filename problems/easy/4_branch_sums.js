/*
Branch Sums:
  Write a function that takes in a Binary Tree and returns a list of it's branch
  sums ordered from leftmost branch sum to rightmost branch sum.

  A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
  branch is a path of nodes in a tree that starts at the root node and ends up
  at any leaf node.

  Each 'BinaryTree' node has an integer 'value', a 'left' child node, and a 
  'right' child node. Children nodes can either be 'BinaryTree' nodes themselves
  or 'None'/'null'.

Sample Input:

      tree =    1
              /    \
            2       3
          /   \   /   \
        4      5 6     7
      /  \    /
    8     9  10    

Sample Output:
  [15, 16, 18, 10, 11]
  // 15 => 1 + 2 + 4 + 8
  // 16 => 1 + 2 + 4 + 9
  // 18 => 1 + 2 + 5 + 10
  // 10 => 1 + 3 + 6
  // 11 => 1 + 3 + 7

*/


class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(N) Time | O(N) Space
const calculateBranchSums = (node, runningSum, sums) => {
  if (!node) return;

  let newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newRunningSum);
    return;
  }

  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
}

const branchSums = (root) => {
  let sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

// Solved on my own
// O(N) Time | O(N) Space
const calculateBranchSums = (node, runningSum, sums) => {
  if (!node) return;

  let newRunningSum = runningSum + node.value;
  if (!node.left && !node.right) {
    sums.push(newRunningSum);
  }

  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
}

const branchSums = (root) => {
  let sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}


// Whiteboard Drills
// 1a: Recursive: Optimal: HelperAParameters(node, ruunningSum, sums): class BinaryTree
/// i: Variable: sums: Return sums
// a: Calculate branch sums: Recursive: Base: Node is null: Return
/// i: All the node values on branch above current node value equal new running sum: Running sum plus node value
/// ii: Determine leaf nodes: Node left has zero chilren: Node right has zero children
/// iii: If at leaf node: Running sum is branch sum: Append running sum to sums list: Return
/// iiii: Not at leaf node: Recursive, calculate branch sums left: Recursive, calculate branch sums right
// Avg: O(log(n) T | O(n) S (bc n/2, half the tree nodes are leaf nodes which represent the sums list length)
const branchSums = (root) => {
  const sums = [];
  calculateBranchSumsHelper(root, 0, sums);
  return sums;
}

const calculateBranchSumsHelper = (node, runningSum, sums) => {
  if (!node) return; // if no children
  const newRunningSum = runningSum + node.value;

  if (!node.left && !node.right) { // at leaf
    sums.push(newRunningSum); // appending branch sum 
    return; // updates new sums list
  }

  calculateBranchSumsHelper(node.left, newRunningSum, sums);
  calculateBranchSumsHelper(node.right, newRunningSum, sums);
}

// class BinaryTree
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 1a: Recursive: Optimal: HelperAParameters(node, runningSum, sums): class BinaryTree
/// i: Variable: sums: Return sums
// a: Calculate branch sums: Recursive: Base: Node is null: Return
/// i: All the node values on branch above current node value equal new running sum: Running sum plus node value
/// ii: Determine leaf nodes: Node left has zero children: Node right has zero children
/// iii: If at leaf node: Running sum is branch sum: Append running sum to sums list: Return
/// iiii: Not at leaf node: Recursion, calculate branch sums left: Recursion, calculate branch sums right:
// Avg: O(n) T | O(n) S (bc n/2, half the tree nodes are leaf nodes which represent the sums list length)
const branchSums = (root) => {
  const sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

const calculateBranchSums = (node, runningSum, sums) => {
  if (!node) return;
  const newRunningSum = runningSum + node.value;

  if (!node.left && !node.right) {
    sums.push(newRunningSum);
  }

  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
}

// class BinaryTree
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
}