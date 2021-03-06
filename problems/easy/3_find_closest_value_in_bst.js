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

Sample Output:
  13

*/

// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// // Average: O(Log(N)) Time | O(Log(N)) Space
// // Worst: O(N) Time | O(N) Space
// const findClosestValueInBSTHelperRec = (tree, target, closest) => {
//   if (!tree) return closest;

//   if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
//     closest = tree.value;
//   }

//   if (target < tree.value) {
//     return findClosestValueInBSTHelperRec(tree.left, target, closest);
//   } else if (target > tree.value) {
//     return findClosestValueInBSTHelperRec(tree.right, target, closest);
//   } else {
//     return closest;
//   }
// }

// const findClosestValueInBstRec = (tree, target) => {
//   return findClosestValueInBSTHelper(tree, target, Infinity);
// }


// // Average: O(Log(N)) Time | O(1) Space
// // Worst: O(N) Time | O(1) Space
// const findClosestValueInBSTHelper = (tree, target, closest) => {
//   let currentNode = tree;

//   while (currentNode) {
//     if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
//       closest = currentNode.value;
//     }

//     if (target < currentNode.value) {
//       currentNode = currentNode.left;
//     } else if (target > currentNode.value) {   
//       currentNode = currentNode.right;
//     } else {
//       break;
//     }
//   }

//   return closest;
// }

// const findClosestValueInBst = (tree, target) => {
//   return findClosestValueInBSTHelper(tree, target, Infinity);
// }


// // Whiteboard Drills
// // Recursve: HelperAParamerters(bstTree, target, closest): class BST
// // a: Recursive: Base: Tree is null: Return closest
// //  i: Compute absolute value of difference between closest and target node:
// //     Update closest to tree value  
// //  ii: Compare current target value to tree value 
// //  iii: More, recursive right: Less, recursive left: Equal, return closest 
// //
// // Avg: O(log(n)) TS (bc essentially we are eliminating half the tree at each call)
// // Worst: O(n) T (bc one really long branch) | O(n) S (bc frames on call stack)
// const closestValueInBstHelper = (bstTree, target, closest) => {
//   if (!bstTree) return closest;
//   if (Math.abs(target - closest) > Math.abs(target - bstTree.value)) {
//     closest = bstTree.value;
//   }
//   if (target > bstTree.value) {
//     return closestValueInBstHelper(bstTree.right, target, closest);
//   } else if (target < bstTree.value) {
//     return closestValueInBstHelper(bstTree.left, target, closest);
//   } else {
//     return closest;
//   }
// }

// const findClosestValueInBst = (bstTree, target) => {
//   return closestValueInBstHelper(bstTree, target, Infinity);
// } 

// // class BST
// class BST {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null; 
//   }
// }

// // Recursive: HelperAParameters(bstTree, target, closest): class BST
// // a: Recursive: Base: Tree is null: Return closest
// /// i: Compute absolute value of difference between closest and target node:
// ///    Update closest to tree value 
// /// ii: Compare current target value to tree value
// /// iii: More, recursive right: Less, recursive left: Equal, return closest 
// // 
// // Avg: O(log(n)) TS (bc essentially we are eliminating half the tree at each call)
// // Worst: O(n) T (bc one really long branch) | O(n) S (bc frames on call stack)
// const findClosestValueInBst = (bstTree, target) => {
//   return fcviBSTH(bstTree, target, Infinity);
// }

// const fcviBSTH = (bst, target, closest) => {
//   if (!bst) return closest;
//   if (Math.abs(target - closest) > Math.abs(target - bst.value)) {
//     closest = bst.value;
//   }
//   if (target < bst.value) {
//     return fcviBSTH(bst.left, target, closest);
//   } else if (target > bst.value) {
//     return fcviBSTH(bst.right, target, closest);
//   } else {
//     return closest;
//   }
// }

// // class BST
// class BST {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null; 
//   }
// }

// // Recursive: HelperAParameters(bstTree, target, closest): class BST
// // a: Recursive: Base: Tree is null: Return closest
// /// i: Compute absolute value of difference between closest and target node:
// ///    Update closest to tree value
// /// ii: Compare current target value to tree value
// /// iii: More, recursive right: Less, recursive left: Equal, return closest
// // 
// // Avg: O(log(n)) TS (bc essentially we are eliminating half the tree at each call)
// // Worst: O(n) T (bc one really long branch) | O(n) S (bc frames on call stack)
// const findClosestValueInBst = (bst, target) => {
//   return fcviBstHelper(bst, target, Infinity);
// }

// const fcviBstHelper = (bst, target, closest) => {
//   if (!bst) return closest;
//   if (Math.abs(target - closest) > Math.abs(target - bst.value)) {
//     closest = bst.value;
//   }
//   if (target > bst.value) {
//     return fcviBstHelper(bst.right, target, closest);
//   } else if (target < bst.value) {
//     return fcviBstHelper(bst.left, target, closest);
//   } else {
//     return closest;
//   }
// }

// // class BST
// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }


// // Whiteboard Drills 
// // 2a: Iterative: Optimal: HelperAParameters(bstTree, target, closest): class BST
// // a: Iterative: Variable: Current node we are exploring: bstTree
// /// i: While Loop: Current node not null
// /// ii: Compute absolute value of difference between closest and target node: Update closest to current node value
// /// iii: Compare current target value to current node value
// /// iiii: More, current node assigned to current node right: Less, current node assigned current node left: Equal, break
// // Outside While Loop: Return closest
// // Avg: O(log(n)) T | O(1) S (bc we are only storing two variables)
// // Worst: O(log(n)) T | O(1) S ''                                ''
// const findClosestValueInBst = (bst, target) => {
//   return fcviBstHelper(bst, target, Infinity);
// }

// const fcviBstHelper = (bst, target, closest) => {
//   let currentNode = bst;

//   while (currentNode) {
//     if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
//       closest = currentNode.value;
//     }
//     if (target < currentNode.value) {
//       currentNode = currentNode.left;
//     } else if (target > currentNode.value) {
//       currentNode = currentNode.right;
//     } else {
//       break;
//     }
//   }

//   return closest;
// }    

// // class BST
// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null; 
//   }
// }

// // 2a: Iterative: Optimal: HelperAParameters(bstTree, target, closest): class BST
// // a: Iterative: Variable: Current node we are exploring: bstTree
// /// i: While Loop: Current node not null
// /// ii: Compute absolute value of difference between closest and target node: Update closest to current node value
// /// iii: Compare current target value to current node value
// /// iiii: More, current node assigned to current node right: Less, current node assigned to current node left: Equal, break
// // Outside While Loop: Return closest
// // Avg: O(log(n)) T | O(1) S (bc we are only storing two variables)
// // Worst: O(log(n)) T | O(1) S (bc we are only storing two variables)
// // Worst: O(log(n)) T | O(1) S (bc we are only storing two variables)
// const findClosestValueInBst = (bst, target) => {
//   return findHelper(bst, target, Infinity);
// }

// const findHelper = (bst, target, closest) => {
//   let currentNode = bst;

//   while (currentNode) {
//     if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
//       closest = currentNode.value;
//     }
//     if (target < currentNode.value) {
//       currentNode = currentNode.left;
//     } else if (target > currentNode.value) {
//       currentNode = currentNode.right;
//     } else {
//       break;
//     }
//   }

//   return closest;
// }

// // class BST
// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// // 2a: Iterative: Optimal: HelperAParameters(bstTree, target, closest): class BST
// // a: Iterative: Variable: Current node we are exploring: bstTree
// /// i: While Loop: Current node not null
// /// ii: Compute absolute value of difference between closest and target node: Update closest to current node value
// /// iii: Compare current target value to current node value
// /// iiii: More, current node assigned to current node right: Less, current node assigned to current node left: Equal, break
// // Avg: O(log(n)) T | O(1) S (bc we are only storing two variables in memory)
// // Worst: O(log(n)) T | O(1) S (bc we are only storing two variables in memory)
// const findClosestValueInBst = (bst, target) => {
//   return findHelper(bst, target, Infinity);
// }

// const findHelper = (bst, target, closest) => {
//   let currentNode = bst;

//   while (currentNode) {
//     if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
//       closest = currentNode.value;
//     }
//     if (target < currentNode.value) {
//       currentNode = currentNode.left;
//     } else if (target > currentNode.value) {
//       currentNode = currentNode.right;
//     } else {
//       break;
//     }
//   }

//   return closest;
// }

// // class BST
// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }


let tree = {
  value: 10,
  left: {
    value: 5,
    left: { value: 2, left: [], right: null },
    right: { value: 5, left: null, right: null}
  },
  right: {
    value: 15,
    left: { value: 13, left: null, right: [] },
    right: { value: 22, left: null, right: null }
  }
}

const target = 12;


/*
Whiteboard Drills: Find Closest Value In Bst: 2: 1a, 2a

Explanation:
Write a function that takes in a Binary Search Tree (BST), and a target integer
value, and returns the closest value to that target value contained in the BST.

You can assume that there will only be one closest value.

Each BST node has an integer value, a left child node, and a right child node.
A node is said to be a valid BST node, if and only if it satisfies the BST 
property. It's value is strictly greater than the values of every node to it's
left; It's value is less than or equal to the value of every node to its right,
and it's children nodes are either BST nodes themselves or None / null.

*/

// Solution:
// 1: Logarithmic: Recursive: 1sParameters(bstTree, target): HelperAParameters(bstTree, target, closest): class BST
/// i: Return a
//// a: findClosestValueInBstHelper: Logarithmic: Recursive: Base: Tree is null: Return closest
///// ai: Conditional: Absolute value of target minus closest greater than absolute value of target minus tree value: closest is tree value
///// aii: Conditional: target less than tree value: Return: Recursion, aParameters(tree left, target, closest):
/////      Else if: target greater than tree value: Return: Recursion, aParameters(tree right, target, closest): 
/////      Else: Return closest: Found value
// Avg: O(log(n)) TS (bs essentially we are eliminating half the tree at each call)
// Worst: O(n) T (bc one really long branch) | O(n) S (bc frames on call stack)

class BST0 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findClosestValueInBstHelperRecursion = (bstTree, target, closest) => {
  if (!bstTree) return closest;

  if (Math.abs(target - closest) > Math.abs(target - bstTree.value)) {
    closest = bstTree.value;
  }

  if (target < bstTree.value) {
    return findClosestValueInBstHelperRecursion(bstTree.left, target, closest);
  } else if (target > bstTree.value) {
    return findClosestValueInBstHelperRecursion(bstTree.right, target, closest);
  } else {
    return closest; // Found value
  }
}

const findClosestValueInBstLogarithmicRecursion1 = (bstTree, target) => {
  return findClosestValueInBstHelperRecursion(bstTree, target, bstTree.value);
}
console.log(findClosestValueInBstLogarithmicRecursion1(tree, target)) // 13

// 2: Logarithmic: Iterative: Optimal: 2sParemeters(bstTree, target): HelperAParameters(bstTree, target, closest): class BST
/// i: Return a
//// a: findClosestValueInBstHelper: Logarithmic: Iterative: Variable: currentNode: Assigned: bstTree: Base like
///// ai: While Loop: currentNode not null
///// aii: Conditional: Absolute value of target minus closest greater than absolute value of target minus currentNode value: closest is currentNode value
///// aiii: Conditional: target less than currentNode value: currentNode: Assigned: currentNode left:
/////       Else if: target greater than currentNode value: currentNode: Assigned: currentNode right:
/////       Else: Break: Found value
// Outside While Loop: Return closest
// Avg: O(log(n)) T | O(1) S (bc we are only storing two variables)
// Worst: O(n) T (bc one really long branch) | O(1) S (bc we are only storing two variables)

class BST1 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findClosestValueInBstLogarithmicOptimal1 = (bstTree, target) => {
  return findClosestValueInBstHelperIterative1(bstTree, target, bstTree.value);
}

const findClosestValueInBstHelperIterative1 = (bstTree, target, closest) => {
  let currentNode = bstTree;

  while (currentNode) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }

    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break; // Found value
    }
  }

  return closest; 
}
console.log(findClosestValueInBstLogarithmicOptimal1(tree, target)) // 13


console.log('');
/*
Whiteboard Drills: Find Closest Value In BST: 2: 1a, 2a

Explanation:
Write a function that takes in a Binary Search Tree (BST), and a target integer
value and returns the closest value to that target value contained in the BST.

You can assume that there will only be one closest value.

Each BST node has an integer value, a left child node, and a right child node. A
node is said to be a valid BST node, if and only if it satisfies the BST 
property. It's value is strictly greater than the values of every node to it's 
left; it's value is less than or equal to the values of every node to it's right
and it's children nodes are either valid BST nodes themselves or None / null.

*/

// Solution:
// 1: Logarithmic: Recursive: 1sParameters(bstTree, target): HelperAParameters(bstTree, target, closest): class BST
/// i: Return a
//// a: findClosestValueInBstHelper: Logarithmic: Recursive: Base: Tree is null: Return closest
///// ai: Conditional: Absolute value of target minus closest greater than absolute value of target minus tree value: closest is tree value
///// aii: Conditional: target less than tree value: Return: Recursion, aParameters(tree left, target, closest):
/////      Else if: target greater than tree value: Return: Recursion, aParameters(tree right, target, closest):
/////      Else: Return closest: Found value
// Avg: O(log(n)) TS (be essentially we are elminating half the tree at each call)
// Worst: O(n) T (bc one really long branch) | O(n) S (bc frames on call stack)

class BST3 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findClosestValueInBstLogarithmic2 = (bstTree, target) => {
  return findClosestValueInBstHelperRecursive2(bstTree, target, bstTree.value);
}

const findClosestValueInBstHelperRecursive2 = (bstTree, target, closest) => {
  if (!bstTree) return closest;

  if (Math.abs(target - closest) > Math.abs(target - bstTree.value)) {
    closest = bstTree.value;
  }

  if (target < bstTree.value) {
    return findClosestValueInBstHelperRecursive2(bstTree.left, target, closest);
  } else if (target > bstTree.value) {
    return findClosestValueInBstHelperRecursive2(bstTree.right, target, closest);
  } else {
    return closest;
  }
}
console.log(findClosestValueInBstLogarithmic2(tree, target)); // 13

// 2: Logarithmic: Iterative: Optimal: 2sParameters(bstTree, target): HelperAParameters(bstTree, target, closest): class BST
/// i: Return a
//// a: findClosestValueInBstHelper: Logarithmic: Iterative: Variable: currentNode: Assigned: bstTree: Base like
///// ai: While Loop: currentNode not null
///// aii: Conditional: Absolute value of target minus closest greater than absolute value of target minus currentNode value: closest is currentNode value
///// aiii: Conditional: target less than currentNode value: currentNode: Assigned: currentNode left:
/////       Else if: target greater than currentNode value: currentNode: Assigned: currentNode right:
/////       Else: Break: Found value
// Outside While Loop: Return closest
// Avg: O(log(n)) T | O(1) S (bc we only store two variables)
// Worst: O(n) T (bc one really long branch) | O(1) S (bc we only store two variables)

class BST4 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findClosestValueInBstLogarithmicOptimal2 = (bstTree, target) => {
  return findClosestValueInBstHelperIterative2(bstTree, target, bstTree.value);
}

const findClosestValueInBstHelperIterative2 = (bstTree, target, closest) => {
  let currentNode = bstTree; // Base like

  while (currentNode) { // currentNode not null
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }

    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break; // Found value
    }
  }

  return closest;
}
console.log(findClosestValueInBstLogarithmicOptimal2(tree, target)); // 13


console.log('')
/*
Whiteboard Drills: Find Closest Value In Bst: 2: 1a, 2a

Explanation:
Write a function that takes in a Binary Search Tree (BST), and a target integer
value and returns the closest value to that target value contained in the BST.

You can assume that there will only be one closest value.

Each BST node has an integer value, a left child node, and a right child node. A
node is said to be a valid BST node, if and only if it satisfies the BST 
property. It's value is strictly greater than the values of every node to it's 
left; It's value is less than or equal to the value of every node to it's right;
and it's children nodes are both valid BST nodes themselves or None / null

*/

// Solution:
// 1: Logarithmic: Recursive: 1sParameters(bstTree, target): HelperAParameters(bstTree, target, closest): class BST
/// i: Return a
//// a: findClosestValueInBstHelper: Logarithmic: Recursive: Base: Tree is null: Return closest
///// ai: Conditional: Absolute value of target minus closest greater than absolute value of target minus tree value: closest is tree value
///// aii: Conditional: target less than tree value: Return: Recursion, aParameters(tree left, target, closest):
/////      Else if: target greater than tree value: Return: Recursion, aParameters(tree right, target, closest):
/////      Else: Return closest: Found value
// Avg: O(log(n)) TS (be essentially we are eliminating half the tree at each call)
// Worst: O(n) T (bc one really long branch) | O(n) S (bc frames on call stack)
class BST5 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findClosestValueInBstLogarithmic3 = (bstTree, target) => {
  return findClosestValueInBstHelperRecursion3(bstTree, target, bstTree.value);
}

const findClosestValueInBstHelperRecursion3 = (bstTree, target, closest) => {
  if (!bstTree) return closest; // Base case

  if (Math.abs(target - closest) > Math.abs(target - bstTree.value)) {
    closest = bstTree.value; // Reassigning at each call
  }

  if (target < bstTree.value) {
    return findClosestValueInBstHelperRecursion3(bstTree.left, target, closest); // Exploring left tree
  } else if (target > bstTree.value) {
    return findClosestValueInBstHelperRecursion3(bstTree.right, target, closest); // Exploring right tree
  } else {
    return closest; // Found value
  }
}
console.log(findClosestValueInBstLogarithmic3(tree, target)); // 13

// 2: Logarithmic: Iterative: Optimal: 2sParameters(bstTree, target): HelperAParameters(bstTree, target, closest): class BST
/// i: Return a
//// a: findClosestValueInBstHelper: Logarithmic: Iterative: Variable: currentNode: Assigned: bstTree: Base like
///// ai: While Loop: currentNode not null
///// aii: Conditional: Absolute value of target minus closest greater than absolute value of target minus currentNode value: closest is currentNode value
///// aiii: Conditional: target less than currentNode value: currentNode: Assigned: currentNode left:
/////       Else if: target greater than currentNode value: currentNode: Assigned: currentNode right:
/////       Else: Break: Found value
// Outside While Loop: Return closest
// Avg: O(log(n)) T | O(1) S (bc we only store two variables)
// Worst: O(n) T (bc one really long branch) | O(1) S (bc we only store two variables)
class BST6 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findClosestValueInBstLogarithmicOptimal3 = (bstTree, target) => {
  return findClosestValueInBstHelperIterative3(bstTree, target, Infinity); // Demonstrating the use of Infinity as the largest possible value
}

const findClosestValueInBstHelperIterative3 = (bstTree, target, closest) => {
  let currentNode = bstTree; // Base like

  while (currentNode) { // not null
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }

    if (target < currentNode.value) {
      currentNode = currentNode.left; // Exploring left tree
    } else if (target > currentNode.value) {
      currentNode = currentNode.right; // Exploring right tree
    } else {
      break; // Found value
    }
  }

  return closest;
}
console.log(findClosestValueInBstLogarithmicOptimal3(tree, target)); // 13