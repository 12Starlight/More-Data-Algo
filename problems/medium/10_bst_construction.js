// /*
// BST Construction:
//   Write a 'BST' class for a Binary Search Trree. The class should support:
//     -> Inserting values with the 'insert' method.
//     -> Removing values with the 'remove' method; this method should only remove
//     the first instance of a given value.
//     -> Searching for values with the 'contains' method.

//   Note that you can not remove values from a single-node tree. In other words,
//   calling the 'remove' method on a single-node tree should simply not do 
//   anything.

//   Each 'BST' node has an integer 'value', a 'left' child node, and a 'right' 
//   child node. A node is said to be a valid 'BST' node if and only if it satisfies
//   the BST property: it's 'value' is strictly greater than the values of every
//   node to it's left; it's 'value' is less than or equal to the values of every
//   node to it's right; and it's children nodes are either valid 'BST' nodes
//   themselves or 'None'/'null'.

// Sample Usage:
//   // Assume the following BST has already been created:
//                 10
//               /    \
//             5      15
//           /   \   /   \
//         2      5 13   22
//       /           \
//     1             14

//   // All operations below are performed sequentially.
//   insert(12):   10
//               /    \
//             5      15
//           /   \   /   \
//         2      5 13   22
//       /         /  \
//     1          12  14

//   remove(10):   12
//               /    \
//             5      15
//           /   \   /   \
//         2      5 13   22
//       /           \
//     1             14

//   contains(15): true

// */

// // Average: O(log(N)) Time (N is the number of nodes in BST) | O(D) RecSpace (Where D is the height of the longest branch), IterSpace O(1)
// // Worst: O(N) Time | O(D) RecSpace (Where D is the height of the longest branch), IterSpace O(1)
// class BSTDemo {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

// 	// Average: O(Log(N)) Time | O(1) Space
// 	// Worst: O(N) Time | O(1) Space
//   insert(value) {
// 		// initialize variable to keep track of current node
// 		// what node are we at as we traverse? 
// 		let currentNode = this;
		
// 		while (true) {
// 			// we know we want to explore the left subtree
// 			if (value < currentNode.value) {
// 				// if currentNode.left === null
// 				if (!currentNode.left) {
// 					// effectively inserted value in our original BST on left
// 					currentNode.left = new BSTDemo(value);
// 					break;
// 				} else {
// 					// we still have a left subtree to explore
// 					// so we assign our current node to be equal to the left subtree
// 					currentNode = currentNode.left;
// 				}
// 			} else {
// 				// value is greater or equal to current node's value
// 				// then check if the right subtree is null
// 				if (!currentNode.right) {
// 					// effectively inserted value in our original BST on right
// 					currentNode.right = new BSTDemo(value);
// 					break;
// 				} else {
// 					// we still have a right subtree to explore
// 					// so we assign our current node to be equal to the right subtree
// 					currentNode = currentNode.right;
// 				}
// 			}
// 		}
		
//     return this;
//   }
	
// 	// Average: O(Log(N)) Time | O(1) Space
// 	// Worst: O(N) Time | O(1) Space
//   contains(value) {
// 		// initialize current node to instance of BST
//   	let currentNode = this; 
		
// 		// while the current node is not null
// 		while (currentNode) {
// 			// if value is less than, explore the left
// 			if (value < currentNode.value) {
// 				currentNode = currentNode.left;
// 			// if value is greater than, explore the right	
// 			} else if (value > currentNode.value) {
// 				currentNode = currentNode.right;
// 			} else {
// 				// we found the node
// 				return true;
// 			}
// 		}
		
// 		return false;
//   }

// 	// Average: O(Log(N)) Time | O(1) Space
// 	// Worst: O(N) Time | O(1) Space
//   remove(value, parentNode = null) {
// 		// declare current node and initialize it to the BST instance
// 		let currentNode = this;
		
// 		// while currentNode !== null
// 		// first we need to find the node value to remove
// 		// then, you actually remove it
// 		while (currentNode) {
// 				// if value is less than currentNode.value
// 			if (value < currentNode.value) {
// 				// you want to keep track of parent node
// 				// when we remove parent node, we have to reassign the child node
// 				// when we update the currentNode, the parentNode becomes the node
// 				// that we were just exploring
// 				parentNode = currentNode;
// 				// if value is less than currentNode.value
// 				// then set current node equal to currentNode.left	
// 				currentNode = currentNode.left;
// 				// if value is greater than currentNode.value
// 			} else if (value > currentNode.value) {
// 				// parentNode is equal to currentNode again
// 				parentNode = currentNode;
// 				// currentNode is equal to currentNode.right 
// 				// now we are exploring the right subtree
// 				currentNode = currentNode.right;
// 			} else {
// 				// we found our node 
// 				// there are two children
// 				// if currentNode.left is not equal to null, left child exists
// 				// if curerntNode.right is not equal to null, right child exists
// 				if (currentNode.left && currentNode.right) {
// 					// then grab smallest leftmost value of the right subtree
// 					currentNode.value = currentNode.right.getMinValue();
// 					// found smallest value, then remove node
// 					// currentNode.value = smallest vlaue of right subtree
// 					currentNode.right.remove(currentNode.value, currentNode);	
					
					
// 				// we are at a node that does not have two children 
// 				// either we have 1 child or none
// 				// check if our currentNode itself is a left child or a right child
// 				// if it is a left child meaning that the parentNode.left
// 				// equals our currentNode
// 				} else if (parentNode === null) {
// 					if (currentNode.left) {
// 						currentNode.value = currentNode.left.value;
// 						currentNode.right = currentNode.left.right;
// 						currentNode.left = currentNode.left.left;
// 					} else if (currentNode.right) {
// 						currentNode.value = currentNode.right.value;
// 						currentNode.left = currentNode.right.left;
// 						currentNode.right = currentNode.right.right;
// 					} else {
// 						// this is a single-node tree; do nothing.
// 					}
// 				} else if (parentNode.left === currentNode) {
// 					parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
// 				} else if (parentNode.right === currentNode) {
// 					parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;
// 				}
				
// 				break;
// 			}
// 		}
		
//     return this;
//   }

// 	getMinValue() { // remember this only being used, if both children exist
// 		let currentNode = this;
// 		while (currentNode.left) {
// 			currentNode = currentNode.left;
// 		}
		
// 		return currentNode.value;
// 	}
// }


// // BST Implemented without notes
// class BST {
// 	constructor(value) {
// 		this.value = value;
// 		this.left = null;
// 		this.right = null;
// 	}

// 	insert(value) {
// 		let currentNode = this;

// 		while (true) {
// 			if (value < currentNode.value) {
// 				if (!currentNode.left) {
// 					currentNode.left = new BST(value);
// 					break;
// 				} else {
// 					currentNode = currentNode.left;
// 				}
// 			} else {
// 				if (!currentNode.right) {
// 					currentNode.right = new BST(value);
// 					break;
// 				} else {
// 					currentNode = currentNode.right;
// 				}
// 			}
// 		}

// 		return this;
// 	}

// 	contains(value) {
// 		let currentNode = this;

// 		while (currentNode) {
// 			if (value < currentNode.value) {
// 				currentNode = currentNode.left;
// 			} else if (value > currentNode.value) {
// 				currentNode = currentNode.right;
// 			} else {
// 				return true;
// 			}
// 		}

// 		return false;
// 	}

// 	remove(value, parentNode = null) {
// 		let currentNode = this;

// 		while (currentNode) {
// 			if (value < currentNode.value) {
// 				parentNode = currentNode;
// 				currentNode = currentNode.left;
// 			} else if (value > currentNode.value) {
// 				parentNode = currentNode;
// 				currentNode = currentNode.right;
// 			} else {
// 				if (currentNode.left && currentNode.right) {
// 					currentNode.value = currentNode.right.getMinValue();
// 					currentNode.right.remove(currentNode.value, currentNode);
// 				} else if (!parentNode) {
// 					if (currentNode.left) {
// 						currentNode.value = currentNode.left.value;
// 						currentNode.right = currentNode.left.right;
// 						currentNode.left = currentNode.left.left;
// 					} else if (currentNode.right) {
// 						currentNode.value = currentNode.right.value;
// 						currentNode.left = currentNode.right.left;
// 						currentNode.right = currentNode.right.right;
// 					} else {
// 						// this is a single node tree; do nothing.
// 					}
// 				} else if (parentNode.left === currentNode) {
// 					parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right;
// 				} else if (parentNode.right === currentNode) {
// 					parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right;
// 				}

// 				break;
// 			}
// 		}

// 		return this;
// 	}

// 	getMinValue() {
// 		let currentNode = this;
// 		while (currentNode.left) {
// 			currentNode = currentNode.left;
// 		}

// 		return currentNode.value;
// 	}
// }

// // BST Recursive Implemented Without Notes
// // Average: O(log(N)) Time | O(log(N)) Space
// // Worst: O(N) Time | O(N) Space
// class BST {
// 	constructor(value) {
// 		this.value = value;
// 		this.left = null;
// 		this.right = null;
// 	}

// 	insert(value) {
// 		if (value < this.value) {
// 			if (this.left === null) {
// 				this.left = new BST(value);
// 			} else {
// 				this.left.insert(value);
// 			}
// 		} else {
// 			if (this.right === null) {
// 				this.right = new BST(value);
// 			} else {
// 				this.right.insert(value);
// 			}
// 		}

// 		return this;
// 	}

// 	contains(value) {
// 		if (value < this.value) {
// 			if (this.left === null) {
// 				return false;
// 			} else {
// 				return this.left.contains(value);
// 			}
// 		} else if (value > this.value) {
// 			if (this.right === null) {
// 				return false;
// 			} else {
// 				return this.right.contains(value);
// 			}
// 		} else {
// 			return true;
// 		}
// 	}

// 	remove(value, parent = null) {
// 		if (value < this.value) {
// 			if (this.left !== null) {
// 				this.left.remove(value, this);
// 			}
// 		} else if (value > this.value) {
// 			if (this.right !== null) {
// 				this.right.remove(value, this);
// 			}
// 		} else {
// 			if (this.left !== null && this.right !== null) {
// 				this.value = this.right.getMinValueRec();
// 				this.right.remove(this.value, this);
// 			} else if (parent === null) {
// 				if (this.left !== null) {
// 					this.value = this.left.value;
// 					this.right = this.left.right;
// 					this.left = this.left.left;
// 				} else if (this.right !== null) {
// 					this.value = this.right.value;
// 					this.left = this.right.left;
// 					this.right = this.right.right;
// 				} else {
// 					// this is a single node tree; do nothing.
// 				}
// 			} else if (parent.left === this) {
// 				parent.left = this.left !== null ? this.left : this.right;
// 			} else if (parent.right === this) {
// 				parent.right = this.left !== null ? this.left : this.right;
// 			}
// 		}

// 		return this;
// 	}

// 	getMinValueRec() {
// 		if (this.left === null) {
// 			return this.value;
// 		} else {
// 			return this.left.getMinValueRec();
// 		}
// 	}
// }

/*
BST Construction

Explanation:

Write a 'BST' class for a Binary Search Tree. The class should support:

	*	Inserting values with the 'insert' method.

	* Removing values with the 'remove' method; this method should only remove the
	first instance of a given value.

	* Searching for values with the 'contains' method.

Note that you can not remove values from a single-node tree. In other words,
calling the 'remove' method on a single-node tree should simply not do anything.

Each 'BST' node has an integer 'value', a 'left' child node, and a 'right' child
node. A node is said to be a valid 'BST' node if and only if it satisfies the BST
property; its 'value' is less than or equal to the values of every node to its
right; and its children nodes are either valid 'BST' nodes themselves or 'None'/
'null'.

*/

/*
11/28/2021
Time Complexity: Iterative
	Average: O(nLog(n)) Time : O(1) Space
	Worst: O(n) Time : O(1) Space


Concept:

Main methods in a BST using iteration to solve


Pseudo:

BST:
	Build class BST.
		Create constructor with value as input.
			self(this) dot value equals value.
			self(this) dot left equals null.
			self(this) dot right equals null.


Insert:
	Create variable to represent currentNode we are at.

	Use while loop that runs until not true (forever).
		Create condition that checks, if value is less than currentNode value.
			Create condition that checks, if currentNode left is null.
				If true, currentNode left gets assigned a new BST class with the input 
				value.
				Break out of the loop bc we have assigned the BST class to a null node.

				else, the node value is NOT null. So, assign the currentNode to now be
				the currentNode left.
		else, the value is greater than the currentNode value.
			Create a condition that checks, if currentNode right is null.
				If true, currentNode right gets assigned a new BST class with the input
				value.
				Break out of the loop bc we have assigned the BST class to a null node. 

				else, the node value is NOT null. So, assign the currentNode to now be
				the currentNode right.

	Return self(this) to be used in callback functions or as an input.


Contains:
	Create variable currentNode to represent the current node we are at.
	
	Create while loop with condition that checks, if currentNode is NOT null.
		Create condition that checks, if value is less than currentNode value.
			If true, assign currentNode left to currentNode.

		Create condition that checks, else if value is greatter than currentNode 
		value.
			If true, assign currentNode right to currentNode.

		Else, the value equals the currentNode value.
			Return true bc we found the value.

	Return false, bc we went through all the nodes and did not find the value


Edge:

Insert does not have edge cases.

Contains does not have edge cases

*/

// BST Construction: Iterative
// Inputs: value
// Edge: Remove has several to be discussed shortly

const bstValues = [10, 5, 15, 2, 5, 13, 22, 1, 14, 12];

class BSTNew {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	// Average: O(Log(n)) Time : O(1) Space
	// Worst: O(n) Time : O(1) Space
	// Mastery: 1, 2, 3, 4, 5, 6, 7, 8, 9
	// Code Mastery: 1, 2, 3, 4, 5, 6, 7, 8, 9
	insert(value) {
		let currentNode = this;

		while (true) {
			if (value < currentNode.value) {
				if (currentNode.left === null) {
					currentNode.left = new BSTNew(value);
					break;
				} else {
					currentNode = currentNode.left;
				}
			} else { // value greater than currentNode value
				if (currentNode.right === null) {
					currentNode.right = new BSTNew(value);
					break;
				} else {
					currentNode = currentNode.right;
				}
			}
		}

		return this;
	}

	// Average: O(Log(n)) Time : O(1) Space
	// Worst: O(n) Time : O(1) Space
	// Mastery: 1, 2, 3, 4, 5, 6, 7, 8, 9
	// Code Mastery: 1, 2, 3, 4, 5, 6, 7, 8, 9
	constains(value) {
		let currentNode = this;

		while (currentNode !== null) {
			if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				currentNode = currentNode.right;
			} else {
				return true;
			}
		}

		return false;
	}
}


let bstTree1 = new BSTNew(11);

for (const value of bstValues) {
	bstTree1.insert(value);
}

// Test: Insert
console.log("BST Construction: Insert\n")
console.log(bstTree1);

// Test: Contains
console.log("\nBST Construction: Contains\n")
console.log(bstTree1.constains(22));