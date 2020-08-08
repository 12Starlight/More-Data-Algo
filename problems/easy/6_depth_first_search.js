/*
Depth First Search:
  You are given a 'Node' class that has a 'name' and an array of optional
  'children' nodes. When put together, nodes form an acyclic tree-like 
  structure.

  Implement the 'depthFirstSearch' method on the 'Node' class, which takes in an
  empty array, traverses the tree using the Depth-first Search approach 
  (specifically navigating the tree from left to right), stores all of the nodes'
  nmaes in the input array, and returns it.

  If you are unfamiliar with Depth-first Search, we recommend watching the
  Conceptual Overview section of this question's video explanation before 
  starting to code.

Sample Input:
      graph =    A
              /  |  \
             B   C   D
           /   \   /   \
          E     F G     H
               / \ \
              I   J K

Sample Output:
  ["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]

*/ 


class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
   }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // O(V+E) Time (V represents the number of Vertices or Nodes and E represents the number of Edges) | O(V) Space (array has length V, V frames used up on the stack at once)
  depthFirstSearch(array) {
    array.push(this.name);

    for (let child of this.children) {
      child.depthFirstSearch(array);
    }

    return array;
  }
}


// Implemented On My Own
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // O(V+E) (where V is number of Vertices or Nodes, E is the number of edges) Time
  // O(V) (V is then number of nodes in the array and the calls on the stack) Space
  depthFirstSearch(array) {
    array.push(this.name);

    for (let child of this.children) {
      child.depthFirstSearch(array);
    }

    return array;
  }
}