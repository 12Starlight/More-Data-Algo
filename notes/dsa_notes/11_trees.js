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

  Advanced (rebalance themselves to maintain O(log(n))) complexity)
    * Red Black
    * AVL
  
  Some Trees are going to have every Node point to it's parent Node. Now, most
  Trees typically do not have this, most Trees do not have pointers from their
  Nodes to their parent Nodes. But you can have them, if you want. 
  
*/

/*
  Space & Time Complexity:

    storing => O(N) S
    traversing through entire Tree, O(N) Nodes => O(N) T 
    path traversing => O(log(n)) T (going down one path, instead of all paths)
    worst case path traversing => O(N) T

    NOTE: If your tree was very skewed and not balanced, then you would not be
    eliminating half the Nodes at every step bc the tree would be imbalanced. 
    And so this is another concept that is very important for Trees, the concept
    of balance. We say that a Tree is balanced, if it maintains roughly a
    O(log(n)) time complexity for this type of traversal, where you go down one
    path in the Tree. 

*/

/*
  Vocabulary:
    We say that any path in a Tree that start at the root Node and ends at one
    of the bottom Nodes in the Tree is a 'Branch'. 

    Then these bottom nodes, we call them 'Leaf Nodes'. 

    We say that every level in a tree is a 'Level'. 

    We say that a Tree is 'Complete', if every single level in the Tree is filled
    up, except the final level which may or may not be filled up. But, if the final
    level has Nodes, they should be filled up from left to right.  

    Then we say that a Tree is 'Full', if every Node in the Tree has no children
    Nodes or K children Nodes. Where K is the nuumber in the K-ary Tree. Where
    every Node, if this was a K-ary Tree, then every Node would have K-children.
    So, if we were dealing with a Binary Tree, each Node would be either empty 
    or have 2 children. 
    
    And finally, the last type is called a 'Perfect Tree', where every Node has
    children Nodes and lal of the Leaf Nodes have the same depth. Depth is 
    basically the number of levels in a Tree. Sometimes people will call that
    height, others would just say how many levels does a Tree have. 

*/

/*
Tree
  A data structure that consists of nodes, each with some value and pointers to
  child-nodes, which recursively form *subtrees* in the tree.

  The first node in a tree is referred to as the *root* of the tree, while the
  nodes at the bottom of a tree (the nodes with no child-nodes) are referred to
  as *leaf nodes* or simply *leaves*. The paths between the root of a tree and
  it's leaves are called *branches*, and the *height* of a tree is the length of
  it's longest branch. The *depth* of a tree node is it's distance from it's 
  tree's root; this is also known as the node's *level* in the tree.

  A tree is effectively a *graph* that's *connected*, *directed*, and *acyclic*,
  that has an explicit root node, and whose nodes all have a single *parent*
  (except for the root node, which effectively has no parent). Note that in most
  implementations of trees, tree nodes do not have a pointer to their parent,
  but they can if desired.

  There are many types of trees and tree-like structures, including 
  *binary trees*, *heeps*, and *tries*.


Binary Tree
  A *tree* whose nodes have up to *two* child-nodes.

  The structure of a binary tree is such that many of it's operations have a 
  logarithmic time complexity, making the binary tree an incredibly attractive
  and commonly used data structure.


K-ary Tree
  A *tree* whose nodes have up to *k* child-nodes. A *binary tree* is a k-ary
  tree where *k == 2*.


Perfect Binary Tree
  A *binary tree* whose interior nodes all have two child-nodes and whose *leaf
  nodes* all have the same *depth*. Example:

                         1
                  /             \
                2                 3
              /   \             /   \
            4       5         6       7
          /   \   /   \     /   \   /   \
         8     9 10   11   12   13 14    15 


Complete Binary Tree
  A *binary tree* that's ALMOST *perfect*; it's interior nodes all have two
  child-nodes, but it's *leaf nodes* do not necessarily all have the same 
  *depth*. Furthermore, the nodes in the last *level* of a complete binary tree
  are as far left as possible.
  
  Example:


                         1
                  /             \
                2                 3
              /   \             /   \
            4       5         6       7
          /   \   
         8     9 
         
  
  Conversly, the following binary tree is NOT complete, because the nodes in
  it's last level are not as far left as possible:


                         1
                  /             \
                2                 3
              /   \             /   \
            4       5         6       7
                  /             \   
                 8                9


  Balanced Binary Tree
    A *binary tree* whose nodes all have left and right *subtrees* whose 
    *heights* differ by no more than 1.

    A balanced binary tree is such that the logarithmic time complexity of it's
    operations is maintained.

    For example, inserting a node at the bottom of the following IMBALANCED
    binary tree's left subtree would clearly not be a logarithmic-time
    operation, since it would involve traversing through most of the tree's 
    nodes:


                         1
                  /             \
                2                 3
              /   
            4     
           /   
          8  
         / 
        9
       /
     10 
     
    
    The following is an example of a balanced binary tree:


                         1
                  /             \
                2                 3
              /   \             /   \
            4       5         6       7
          /   \                      /  
         10    9                    8


Full Binary Tree
  A *binary tree* whose nodes all have either two child-nodes or zero 
  child-nodes.

  Example:


                         1
                  /             \
                2                 3
                                /   \
                              6       7
                            /   \
                           8     9 
                            
 */