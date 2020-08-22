/*
Node Depths:
  The distance between a node in a Binary Tree and the tree's root is called the
  node's depth.

  Write a function that takes in a Binary Tree and returns the sum of it's 
  node's depths.

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
  16
  // The depth of the node with value 2 is 1.
  // The depth of the node with value 3 is 1.
  // The depth of the node with value 4 is 2.
  // The depth of the node with value 5 is 2.
  // Etc.
  // Summing all of these depths yeilds 16

*/


// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(N) Time | O(H) Space (Where H is the height of the Binary Tree)
const nodeDepthsIter = (root) => {
  let sumOfDepths = 0;
  let stack = [{ "node": root, "depth": 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop(); // deconstructed values from stack
    console.log(stack)
    if (!node) continue;
    sumOfDepths += depth;
    stack.push({ "node": node.left, "depth": depth + 1 });
    stack.push({ "node": node.right, "depth": depth + 1 });
  }

  return sumOfDepths;
}

// O(N) Time (N is the total number of nodes in the Binary Tree) | O(H) Space (bc of the recursive calls on the call stack)
const nodeDepthsRec = (root, depth = 0) => {
  if (!root) return 0;
  return depth + nodeDepthsRec(root.left, depth + 1) + nodeDepthsRec(root.right, depth + 1);
}

// Solved On My Own
// O(N) Time | O(H) Space (Where H is the height of the Binary Tree)
const nodeDepths = (root) => {
  let runningSum = 0;
  let stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (!node) continue; 
    runningSum += depth
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }

  return runningSum;
}


// Whiteboard Drills 
// 1: While Loop: Linear: 1Parameters(root): class BinaryTree
/// i: Variable: sumOfNodeDepths: Zero
/// ii: Stack: Store nodes and traverse tree: Store: root node: ArrayOf: Objects with properties: {node, depth}
/// iii: While Loop: Stack items exist. Greater than zero
/// iiii: Collect node: Pop node of stack: Variable: Node info: Deconstruct node info
/// v: Check if node exits: Node is null: Continue
/// vi: Add to sumOfNodeDepths: Plus equal depth
/// vii: Append to stack: Node left, depth plus one: Node right, depth plus one
// Outside While Loop: Return sumOfDepths
// Avg: O(n) T (n is nodes in tree) | O(h) S (h is height of tree)
const nodeDepths = (root) => {
  let sumOfNodeDepths = 0;
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (!node) continue;
    sumOfNodeDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }

  return sumOfNodeDepths;
}

// class BinaryTree
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 1: While Loop: Linear: 1Parameters(root): class BinaryTree
/// i: Variable: sumOfNodeDepths: Zero
/// ii: Stack: Store nodes and traverse tree: Store: root node: ArrayOf: Objects with properties: {node, depth}
/// iii: While Loop: Stack items exist: Greater than zero
/// iiii: Collect node: Pop node off stack: Variable: nodeInfo: Deconstruct nodeInfo
/// v: Check if node exists: Node is null: Continue
/// vi: Add to sumOfDepths: Plus equal depth
/// vii: Append to stack: Node left, depth plus one: Node right, depth plus one
// Outside While Loop: Return sumOfDepths
// Avg: O(n) T (n is nodes in tree) | O(h) S (h is height of the tree)
const nodeDepths = (root) => {
  let sumOfDepths = 0;
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (!node) continue;
    sumOfDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }

  return sumOfDepths;
}

// class BinaryTree
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 1: While Loop: Linear: 1Parameter(root): class BinaryTree
/// i: Variable: sumOfNodeDepths: Zero
/// ii: Stack: Store nodes and traverse tree: Store: root node: ArrayOf: Objects with properties: {node, depth}
/// iii: While Loop: Stack items exist: Greater than zero
/// iiii: Collect node: Pop node off stack: Variable: nodeInfo: Deconstruct nodeInfo
/// v: Check if node exists: Node is null: Continue
/// vi: Add to sumOfNodeDepths: Plus equal depth
/// vii: Append to stack: Node left, depth + 1: Node right, depth + 1:
// Outside While Loop: Return sumOfNodeDepths
// Avg: O(n) T (n is nodes in tree) | O(h) S (h is height of tree)
const nodeDepths = (root) => {
  let sumOfDepths = 0;
  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (!node) continue;
    sumOfDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }

  return sumOfDepths;
}

// class BinaryTree
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


// Whiteboard Drills
// 2: Recursive: Optimal: 2Parameters(root, depth default zero): class BinaryTree
/// i: Base: Root is null: Return zero
/// ii: Return default plus: Recursive, node left, depth plus one: Plus: Recursive, node right, depth plus one
// Avg: O(n) T (n is nodes in tree) | O(h) S (h is height in tree)
const nodeDepths = (root, depth = 0) => {
  if (!root) return 0;
  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}

// class BinaryTree
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}