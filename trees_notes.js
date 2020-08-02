/*
Trees:
  A Tree is a type of Graph. Just like Graphs, if you look at the academic
  definition of a tree, especially the mathematical definition of a tree, you are
  going to see something very complicated, you will have to start reading about
  Graph theory, which itself is a very complex subject area and you are probably
  going to get very discouraged. 

  However, Trees are actualy quite simple. You just have to be familiar with how
  they work conceptually and then you have to practice manipulating them. And of
  course you can do that by doing a lot of practice problems. But, so let us
  start by defining what a Tree actually is.

  We just said a Tree is a type of Graph, but more specifically, in Computer
  Science and in the context of Coding Interviews, when we talk about a Tree, 
  what we are referring to is a Graph structure that is rooted. Meaning it has
  a root Node, or conceptually you can think of this as the top Node of the
  structure.

  So, in our example the Node with the value 10 is the root Node of this Graph
  structure. Then, every node has child Nodes. So, the Node with value 10, had
  2 as a child Node and -31 as a child Node, then 2 has 51 and 7 as children
  Nodes, -31 has 0 and 8 and so on and so forth. 

  Then the structure is directed, and if you remember the Graph section, a \
  directed Graph is just a Graph where the edges have a direction. In this case
  the edges are typically going to point downwards in the Tree. 

    Tree:
      -> Root
      -> Parent
      -> Children
      -> Directed (down or up)
      -> Acyclic (not a cycle, for instance, 8 could not point back to 10)

  Then each Node in the Tree, can only have one parent. In other words, you can
  not have for instance, the Node 2, also point to 0, bc the Node 0 would have
  two parents, it would have two and -31, and that would no longer be a Tree.
  And the Tree is not allowed to be disconnected. In otherwords you could not
  have, like the right side as a subtree that is disconnected and call this
  entire structure a Tree.

  You would have two different Trees. You would have one on the left, and one
  on the right. But together, these would not form a Tree. They would form a
  Graph like we said, a disconnected Graph in the Graphs section. 

*/

/*
  Different Types Of Trees:
    * Binary (2 child Nodes)
    * Ternnary (3 child Nodes)
    * K - ary (k child Nodes)

  Special Cases:
    -> Binary Search (complete)
    -> Max Heap (parent largest Node value)
    -> Min Heap (parent smallest Node value)
    -> Tries (stores characters)

  Advanced
    * Red Black
    * AVL
  
  Some Trees are going to have every Node point to it's parent Node.
  
*/