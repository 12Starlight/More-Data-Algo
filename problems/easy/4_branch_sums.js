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


// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// // O(N) Time | O(N) Space
// const calculateBranchSums = (node, runningSum, sums) => {
//   if (!node) return;

//   let newRunningSum = runningSum + node.value;
//   if (!node.left && !node.right) {
//     sums.push(newRunningSum);
//     return;
//   }

//   calculateBranchSums(node.left, newRunningSum, sums);
//   calculateBranchSums(node.right, newRunningSum, sums);
// }

// const branchSums = (root) => {
//   let sums = [];
//   calculateBranchSums(root, 0, sums);
//   return sums;
// }

// // Solved on my own
// // O(N) Time | O(N) Space
// const calculateBranchSums = (node, runningSum, sums) => {
//   if (!node) return;

//   let newRunningSum = runningSum + node.value;
//   if (!node.left && !node.right) {
//     sums.push(newRunningSum);
//   }

//   calculateBranchSums(node.left, newRunningSum, sums);
//   calculateBranchSums(node.right, newRunningSum, sums);
// }

// const branchSums = (root) => {
//   let sums = [];
//   calculateBranchSums(root, 0, sums);
//   return sums;
// }


// // Whiteboard Drills
// // 1a: Recursive: Optimal: HelperAParameters(node, ruunningSum, sums): class BinaryTree
// /// i: Variable: sums: Return sums
// // a: Calculate branch sums: Recursive: Base: Node is null: Return
// /// i: All the node values on branch above current node value equal new running sum: Running sum plus node value
// /// ii: Determine leaf nodes: Node left has zero chilren: Node right has zero children
// /// iii: If at leaf node: Running sum is branch sum: Append running sum to sums list: Return
// /// iiii: Not at leaf node: Recursive, calculate branch sums left: Recursive, calculate branch sums right
// // Avg: O(log(n) T | O(n) S (bc n/2, half the tree nodes are leaf nodes which represent the sums list length)
// const branchSums = (root) => {
//   const sums = [];
//   calculateBranchSumsHelper(root, 0, sums);
//   return sums;
// }

// const calculateBranchSumsHelper = (node, runningSum, sums) => {
//   if (!node) return; // if no children
//   const newRunningSum = runningSum + node.value;

//   if (!node.left && !node.right) { // at leaf
//     sums.push(newRunningSum); // appending branch sum 
//     return; // updates new sums list
//   }

//   calculateBranchSumsHelper(node.left, newRunningSum, sums);
//   calculateBranchSumsHelper(node.right, newRunningSum, sums);
// }

// // class BinaryTree
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// // 1a: Recursive: Optimal: HelperAParameters(node, runningSum, sums): class BinaryTree
// /// i: Variable: sums: Return sums
// // a: Calculate branch sums: Recursive: Base: Node is null: Return
// /// i: All the node values on branch above current node value equal new running sum: Running sum plus node value
// /// ii: Determine leaf nodes: Node left has zero children: Node right has zero children
// /// iii: If at leaf node: Running sum is branch sum: Append running sum to sums list: Return
// /// iiii: Not at leaf node: Recursion, calculate branch sums left: Recursion, calculate branch sums right:
// // Avg: O(n) T | O(n) S (bc n/2, half the tree nodes are leaf nodes which represent the sums list length)
// const branchSums = (root) => {
//   const sums = [];
//   calculateBranchSums(root, 0, sums);
//   return sums;
// }

// const calculateBranchSums = (node, runningSum, sums) => {
//   if (!node) return;
//   const newRunningSum = runningSum + node.value;

//   if (!node.left && !node.right) {
//     sums.push(newRunningSum);
//   }

//   calculateBranchSums(node.left, newRunningSum, sums);
//   calculateBranchSums(node.right, newRunningSum, sums);
// }

// // class BinaryTree
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null; 
//   }
// }

// // 1a: Recursive: Optimal: HelperAParameters(node, runningSum, sums): class BinaryTree
// /// i: Variable: sums: Return sums
// // a: Calculate branch sums: Recursive: Node is null: Return
// /// i: All the node values on branch above current node value equal new running sum: Running sum plus node value
// /// ii: Determine leaf nodes: Node left has zero children: Node right has zero children
// /// iii: If at leaf node: Running sum is branch sum: Append running sum to sums list: Return
// /// iiii: Not at leaf node: Recursive, calculate branch sums left: Recursive, calculate branch sums right
// // Avg: O(n) T | O(n) S (bc n/2, half the tree nodes are leafs nodes which represent the sums list length)
// const branchSums = (root) => {
//   let sums = [];
//   calculateBranchSums(root, 0, sums);
//   return sums;
// }

// const calculateBranchSums = (node, runningSum, sums) => {
//   if (!node) return;
//   const newRunningSum = runningSum + node.value;

//   if (!node.left && !node.right) {
//     sums.push(newRunningSum);
//   }

//   calculateBranchSums(node.left, newRunningSum, sums);
//   calculateBranchSums(node.right, newRunningSum, sums);
// }

// // class BinaryTree
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }


const root = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4, left: [], right: [] },
    right: { value: 5, left: [], right: null }
  },
  right: {
    value: 3,
    left: { value: 6, left: null, right: null },
    right: { value: 7, left: null, right: null }
  }
}


/*
Whiteboard Drills: Branch Sums: 1: 1a

Explanation:
Write a function that takes in a Binary Search Tree and returns a list of it's
branch sums ordered from leftmost branch sum to rightmost branch sum.

A branch sum is all the values of a BinaryTree branch. A BinaryTree branch is
a path of nodes that starts from the root node and ends with any leaf node.

Each BinaryTree node has an integer value, a left child node, and a right child
node. Children nodes are either both BinaryTree nodes themselves or None / null.

*/

// Solution:
// 1: Linear: Recursive: Optimal: 1sParameters(root): HelperAParameters(node, runningSum, sums): class BinaryTree
/// i: Variable: sums: Assigned: Empty Array
/// ii: Envoke aParameters(root, 0, sums)
//// a: calculateBranchSums: Linear: Recursive: HelperAParameters(node, runningSum, sums)
///// ai: Base: root is null: Return
///// aii: Variable: newRunningSum: Assigned: runningSum plus node value: 
/////      All the node values on branch above current node value is newRunningSum
///// aiii: Conditional: Determine leaf nodes: node left has zero children and node right has zero children
///// aiv: If at leaf node: runningSum is branch sum: Append newRunningSum to sums list: Return: Exit bc at leaf node
///// av: Not at leaf node: Envoke: Recursion, aParameters(node left, newRunningSum, sums): Explore left tree:
/////     Envoke: Recursion, aParameters(node right, newRunningSum, sums): Explore right tree
/// iii: Return sums
// Avg: O(n) T | O(n) S (bc n/2, half the tree nodes are leaf nodes which represent the sums list length)
class BinaryTree0 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }  
}

const branchSums1 = (root) => {
  const sums = [];
  calculateBranchSumsHelper(root, 0, sums);
  return sums;
}

const calculateBranchSumsHelper = (node, runningSum, sums) => {
  if (!node) return;
  const newRunningSum = runningSum + node.value;

  if (!node.left && !node.right) {
    sums.push(newRunningSum);
    return; // Exit bc at leaf node
  }

  calculateBranchSumsHelper(node.left, newRunningSum, sums); // Explore left tree
  calculateBranchSumsHelper(node.right, newRunningSum, sums); // Explore right tree
}
console.log(branchSums1(root)); // [15, 16, 18, 10, 11]


/*
whiteboard Drills: Branch Sums: 1: 1a

Explanation:
Write a function that takes in a Binary Search Tree and returns a list of it's
branch sums ordered from leftmost branch sum to rightmost branch sum.

A branch sum is the sum of all values from a Binary Tree branch. A Binary Tree
branch is a path of nodes in a tree that starts at the root node and ends at any
leaf node.

Each Binary Tree has an integer value, a left child node, and a right child 
node. Children nodes can either be Binary Tree nodes themselves or None / null.

*/ 

// Solution:
// 1: Linear: Recursive: Optimal: 1sParameters(root): HelperAParameters(node, runningSum, sums): class BinaryTree
/// i: Variable: sums: Assigned: Empty Array
/// ii: Envoke: Recursion, aParameters(root, zero, sums)
//// a: calculateBranchSums: Linear: Recursive: HelperAParameters(node, runningSum, sums)
///// ai: Base: root is null: Return
///// aii: Variable: newRunningSum: Assigned: runningSum plus node value:
/////      All the node values on branch above current node value is newRunningSum
///// aiii: Conditional: Determine leaf nodes: node left has zero children and node right has zero children
///// aiv: If at leaf node: runningSum is branch sum: Append newRunningSum to sums list: Return: Exit bc at leaf node
///// av: Not at leaf node: Envoke: Recursion, aParameters(tree left, newRunningSum, sums): Explore left tree:
/////     Envoke: Recursion, aParameters(tree right, newRunningSum, sums): Explore right tree
/// iii: Return sums
// Avg: O(n) T | O(n) S (bc n/2, half the tree nodes are leaf nodes and represent the sums list length)
class BinaryTree1 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const branchSums2 = (root) => {
  const sums = []; 
  calculateBranchSumsHelper(root, 0, sums);
  return sums;
}

const calculateBranchSumsRecursion = (node, runningSum, sums) => {
  if (!node) return; // handles one child
  const newRunningSum = runningSum + node.value;

  if (!node.left && !node.right) {
    sums.push(newRunningSum);
    return; // Exit bc at leaf node
  }

  calculateBranchSumsRecursion(node.left, newRunningSum, sums); // Explore left tree
  calculateBranchSumsRecursion(node.right, newRunningSum, sums); // Explore right tree
}
console.log(branchSums2(root)); // [15, 16, 18, 10, 11]