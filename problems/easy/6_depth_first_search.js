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
    array.push(this.name); // appends value to end of array 

    for (let child of this.children) {
      child.depthFirstSearch(array);
    }

    return array;
  }
}


// Whiteboard Drills
// class: Node
/// constructor: Name
//// i: Instance name: Name
//// ii: Instance children: Array
/// #a: addChild: Name
//// i: Append new node to instance children: nodeParameters(name)
//// ii: Return instance
/// #b: depthFirstSearch: Recursion: depthFirstSearchParameters(array)
//// i: Append instance name to array
//// ii: For every child in instance children
//// iii: On child: Recursive, array
/// Outside Iteration: Return array
// Avg: O(v + e) S (v is verticies or nodes in graph, e is edge in graph) | 
//      O(v) S (bc we return array with length v, also for frames on call stack for graphs with really long branches)
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name)

    for (let child of this.children) {
      child.depthFirstSearch(array);
    }

    return array;
  }
}

// class: Node
/// constructor: Name
//// i: Instance name: Name
//// ii: Instance children: Array
/// #a: addChild: Name
//// i: Append new node to instance children: nodeParameters(name)
//// ii: Return instance
/// #b: depthFirstSearch: Recursion: depthFirstSearchParameters(array)
//// i: Append instance name to array
//// ii: For every child in instance children
//// iii: On child: Recursion, array
/// Outside Iteration: Return array
// Avg: O(v + e) T (v is verticies or nodes in graph, e is edges in graph) |
//      O(v) S (bc we return array with length v, also for frames on call stack for graphs with really long branches)
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);

    for (let child of this.children) {
      child.depthFirstSearch(array);
    }

    return array;
  }
}