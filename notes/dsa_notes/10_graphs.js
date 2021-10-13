/*
Graphs:
  A Graph is a collection of nodes that may or may not be connected to one
  another. Remember, in the Linked List section we called elements 'Nodes', for
  Graphs it is the same thing. 

  So, we have a bunch of Nodes that have integer values. So, for example, 1-11.
  Now between these Nodes we have a bunch of arrows, and these arrows represent
  the connections in between these Nodes. And at it's core, that is it. That is
  a Graph. 

  Now we actually give a name to the Nodes and the connections in a Graph. We
  actually call the Nodes 'vertices', so every Node is a 'vertex' in the Graph,
  and we call the connections or these arrows, we call these 'edges'. So, a 
  Graph is really made up of two special things:

    -> vertices (Nodes that might values, for instance integer values)
    -> edges (connections that connect the nodes to one another)

*/

/*
  An important concept in Graphs, is whether or not a Graph is 'connected'. And
  we say that a Graph is connected, basically if you can reach any other Node in
  the Graph, from another Node or rather, if there is some path between any two
  Nodes in the Graph. 

  When you have Nodes that can not reach the other Nodes in the Graph, we say
  that the Graph is NOT a connected Graph. 

*/

/*
  A second import concept in Graphs, is the fact that all of our edges are 
  represented by arrows (in this case). And arrows imply direction. For 
  instance, from Node 1, we might have an arrow that points to Node 2. We have
  an arrow that points in one way, meaning we can only get to Node 2 from Node 
  1, but we can not get to Node 1 from Node 2. There is only one direction that
  this arrow goes in.

  This is a very important concept in Graph theory. Basically the ideas is that
  in some Graphs, this is one of those Graphs, are directed, meaning that the
  edges in those Graphs have a direction. 

  An undirected Graph would not have directions. So, for instance, if we were
  dealing with an undirected Graph, then the edge between 1 and 2 would not be
  an arrow. It would probably just be a straight line, and this would mean that
  there is a connection between 1 and 2, but not in one direction.

  The best way to conceptualize the difference between a directed Graph and an
  undirected Graph is to think of real world examples. So when we are talking
  about a directed Graph, you might imagine flights. If you have flights, flights
  go from one airport to another airport. That would be a directed connection.
  
  On the other hand, let us think of friendships, especially Facebook 
  friendships. If you are friends with someone on Facebook, then naturally, by
  the definition of a Facebook friendship, that person is friends with you. So,
  if they are your friend, you are their friend. 
  
  So, if we are talking about friendships on Facebook, then an undirected Graph 
  might make more senses. There is no direction of the friendship, the 
  friendship is a mutual connection.

*/

/*
  The third and final concept that is very important in Graphs, is the concept of
  cycles. A Graph can have what are called cycles in it, and if a Graph has a
  cycle, then we call it a 'cyclic graph'. If it does not have any cycles, we
  call it an 'acyclic graph'. 

  Now the definition of a cycle can be very complex, if you look online and look
  at the math. The far simpler way to think about what a cycle, is just imagine
  if at any point in the Graph, at any area in the Graph, you have three or more
  Nodes or vertices that kind of go in an infinate loop. Then you have a cycle.
  
  So for instance, you might have Node 2 point to Node 5, that points to Node 7,
  which points to Node 2. In this case, you can keep going in an infinate loop. 
  Another way to think about it, if you are traversing through your Graph and 
  you find yourself revisiting a connection that you previously visited, just by
  following a path of three edges, then that means there is a cycle in the 
  Graph.

  If you are dealing with a cyclic Graph, you want to make sure that you do not
  find yourself writing an algorithm that is going to end up in an infinite loop
  like this one we just described. So you can avoid that by using certain
  techniques, like maybe marking Nodes that you already visted as visited, in
  this case, marking Node number 2 as a Node that we have already visited, and
  then skipping it, if you revisit it.  

  The point is that cyclic Graphs are something that you have to look out for in
  coding interviews. So connectivity, direction, and cycles are three very
  important concepts in Graphs. 

*/

/*
  Graphs pop a lot, from flights, friendships, to products on an e-commerce 
  website that have relations you can probably represent them as a Graph. And 
  Even in simpler examples that you might not realize can be translated into
  Graph problems. For instance, let us say you are dealing with a 
  two-dimensional Array, like a grid. 

  A lot of coding interview problems give you two-dimensional Arrays. And
  sometimes when you are dealing with a two-dimensional Array, and you are at a
  given Node, let us say the Node in the middle of the grid, you care about the
  neighboring Nodes. So for instance, you care about the Node above, or the 
  element above, the element below, the element to the right and to the left. 

    edges ->[ ][ ][ ]
            [ ][X][ ]
            [ ][ ][ ]
                ^
         connected Nodes

  This is actually a Graph structure, where every element in the Array is a Node
  and the neighboring Nodes in this case, the four elements above, below, to the
  right and to the left, are the Nodes that the element is connected to. 

  Similarly, let us say you are dealing with a problem, where you have Strings
  and you are swapping letters in the Strings. As an example, and this is 
  totally arbitrary, imagine you have got the string 'abc' and you want to
  replace every letter in the String with the letter 'x' and see what the 
  resulting Strings are.  

  This would point to basically 'xbc', it would point to 'axc' and it would 
  point to 'abx'. This might lead to a Graph structure, where again the Nodes in
  the Graphs would be Strings, and the edges in the Graph would be these
  transformations, where you have swapped certain characters in the String, with
  another character, in this case 'x'. 

  The point is that Graphs pop a lot in coding interviews, and it is important
  for you to be able to recognize when you can actually transform a certain 
  input or certain problem into a Graph or into a Graph problem. 

*/

/*
  In terms of representing a Graph in code, we typically represent a Graph as 
  what is known as an 'adjacency list'. It basically is a Hash Table that stores
  a list of the nodes in the Graph. Where every key in the Hash Table is the
  value of each Node, and every key points to the relevant Node. 
  
  Then every Node stores a list of it's edges, or rather a list of it's
  adjacencies, hence the word adjacency list. So for instance, the Node 1, would
  store a list of Node 2, the Node 8, the Node 4 and the Node 9. That list is
  typically represented in code as an Array. 

  And again going back to the section on Linked Lists, you can imagine that
  these edges are basically pointers under the hood. You are just pointing to
  the Nodes that you are connected to. 

*/

/*
  As far as Space Complexity is concerned, when you are creating a Graph, when
  you are representing a Graph in code, you are going to be storing 'V' 
  vertices, or 'V' nodes, where 'V' is the number of vertices, the number of
  Nodes in the Graph, bc in our example we have 11 Nodes, so you are going to be
  sotring all 11 of these Nodes.

  And then for all of the Nodes, you are going to store their edges. So, you are
  going to store a total of 'E' edges, where 'E' is the number of edges. So, we
  say that the Space Complexity of storing a Graph, takes O(V + E) space.

    storing => O(V + E) S

*/

/*
  Perhaps the most common operation that you will be peforming on a Graph, is
  going to be traversing it. Here, there are really two main traversal methods
  for Graphs. One of them is called depth first search. The other is called
  breadth first search. 

    DFS => Depth First Search (deep first, then wide)
    BFS => Breadth First Search (wide first, then deep)

  If you are performing a Depth First Search, the idea is that you are 
  traversing the Graph deeper first, meaning let us say that you start at Node
  number 1, you are going to go through all of the children Nodes, or all of the
  connections of 1, all the edges, so 2, 8, 4, 9, but you are going to go 
  through them deep first. 

  Meaning, let us say you start with 2, instead of saying I am going to go to 2,
  and then immediately to 8, you are going to say I am going to go to 2, and
  then I am going to go deep, and I am going to explore all of 2's edges. So you
  would go from 1 to 2, and then from 2, you would say I am going to go deep, so
  I am going to go to 7.
  
  Then before going to the next edge that 2 has, which would be 5, you are going
  to say, wait, I am going to go deep and I am going to explore all of 7's 
  edges, bc we went to 7 first. Now in this case, 7 actually goes back to 2, and
  you have to take care of that, but that is the idea behind Depth First Search.

  With Breadth First Search, you actually go wider before you go deep. So you
  start at 1, for instance, and here do go from 2 to 8 to 4 to 9, before going
  to 7, to 5 and so on and so forth. And the time complexity to traverse a 
  Graph, whether you are using DFS or BFS, is going to be O(V + E), bc you can
  imagine conceptually, that you will be traversing every single vertex and for
  every single vertex, you will be traversing through all of the edges. 

    traversing => O(V + E) T

*/

/*
  And of course there are a few other operations that you can perform on Graphs,
  like maybe adding edges, adding vertices, removing edges, removing vertices, 
  but typically those operations are going to be very specific to the problem at
  hand, so here we are not really going to cover them. 

*/

/*
Graph 
  A collection of nodes or values called *vertices* that might be related;
  relations between vertices are called *edges*.

  Many things in life can be represented by graphs; for example, a social
  network can be represented by a graph whose vertices are users and whose edges
  are friendships between users. Similarly, a city map can be represented by a
  graph whose vertices are locations in the city and whose edges are roads
  between the locations.


Graph Cycle
  Simply put, a cycle occurs in a *graph* when three or more *vertices* in the
  graph are connected so as to form a closed loop.
  
  Note that the definition of a graph cycle is sometimes broadened to include
  cycles of length two or one; in the context of coding interviews, when dealing
  with questions that involve graph cycles, it's important to clarify what
  exactly constitutes a cycle.

*/