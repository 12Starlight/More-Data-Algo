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