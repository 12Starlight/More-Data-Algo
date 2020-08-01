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