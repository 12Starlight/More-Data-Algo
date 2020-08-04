/*
BST Construction:
  Write a 'BST' class for a Binary Search Trree. The class should support:
    -> Inserting values with the 'insert' method.
    -> Removing values with the 'remove' method; this method should only remove
    the first instance of a given value.
    -> Searching for values with the 'contains' method.

  Note that you can not remove values from a single-node tree. In other words,
  calling the 'remove' method on a single-node tree should simply not do 
  anything.

  Each 'BST' node has an integer 'value', a 'left' child node, and a 'right' 
  child node. A node is said to be a valid 'BST' node if and only if it satisfies
  the BST property: it's 'value' is strictly greater than the values of every
  node to it's left; it's 'value' is less than or equal to the values of every
  node to it's right; and it's children nodes are either valid 'BST' nodes
  themselves or 'None'/'null'.

Sample Usage:
  // Assume the following BST has already been created:
                10
              /    \
            5      15
          /   \   /   \
        2      5 13   22
      /           \
    1             14

  // All operations below are performed sequentially.
  insert(12):   10
              /    \
            5      15
          /   \   /   \
        2      5 13   22
      /         /  \
    1          12  14

  remove(10):   12
              /    \
            5      15
          /   \   /   \
        2      5 13   22
      /           \
    1             14

  contains(15): true

*/

// Average: O(log(N)) Time (N is the number of nodes in BST) | O(D) RecSpace (Where D is the height of the longest branch), IterSpace O(1)
// Worst: O(N) Time | O(D) RecSpace (Where D is the height of the longest branch), IterSpace O(1)
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Average: O(Log(N)) Time | O(1) Space
  // Worst: O(N) Time | O(1) Space
  insert(value) {
    // initialize variable to keep track of current node
    // what node are we at as we traverse? 
    let currentNode = this;

    while (true) {
      // we know we want to explore the left subtree
      if (value < currentNode.value) {
        // if currentNode.left === null
        if (!currentNode.left) {
          // effectively inserted value in our original BST on left
          currentNode.left = new BST(value);
          break;
        } else {
          // we still have a left subtree to explore
          // so we assign our current node to be equal to the left subtree
          currentNode = currentNode.left;
        }
      } else {
        // value is greater or equal to current node's value
        // then check if the right subtree is null
        if (!currentNode.right) {
          // effectively inserted value in our original BST on right
          currentNode.right = new BST(value);
          break;
        } else {
          // we still have a right subtree to explore
          // so we assign our current node to be equal to the right subtree
          currentNode = currentNode.right;
        }
      }
    }

    return this;
  }

  // Average: O(Log(N)) Time | O(1) Space
  // Worst: O(N) Time | O(1) Space
  contains(value) {
    // initialize current node to instance of BST
    let currentNode = this;

    // while the current node is not null
    while (currentNode) {
      // if value is less than, explore the left
      if (value < currentNode.value) {
        currentNode = currentNode.left;
        // if value is greater than, explore the right	
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }

    return false;
  }

  remove(value) {
    return this;
  }
}