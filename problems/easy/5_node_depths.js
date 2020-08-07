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


