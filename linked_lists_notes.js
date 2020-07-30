/*
Linked Lists:
  They are one of the fundamental data structures and they are very important to
  understand well, bc you are going to be using them for a lot of coding
  interview questions or you will be using them as the basis for other data
  structures that you might use for a lot of coding interview questions. 

  So, what is a Linked List? Well, it turns out that a Linked List is very
  similar, at least conceptually, to an Array. Where Linked Lists differ from an
  Array is how it is implimented or rather how it is stored in memory.   

  An Array, conceptually, reads from left to right. If we look at a Linked List,
  it also a data structure that reads from left to right. At least if we are 
  talking about a singly Linked List. When writing it out, you will see arrows
  that clearly point from left to right, so they imply this left to right order.

  Conceptually Linked Lists and Arrays look the same, but as we mentioned before
  the difference is how they are stored in memory. Arrays need back to back
  memory slots. You can imagine a scenerio where if their are memory blocks that
  have been taken in between the memory slots needed back to back for an Array,
  then the operating system would not be able to use those memory slots for the
  Array.

  This is where Linked Lists are really cool. You see, Linked Lists are going to
  store elements in the list anywhere in memory. And they are going to connect
  the elements using pointers. Pointers are this tool that allows you to have
  one memory slot, let us say memory slot 20, point to another memory slot, just
  by storing the other memory slots address. 

  So, for instance you could have memory slot 20, point to memory slot 10. And
  you could have memory slot 10 point to memory slot 1. You could have memory
  slot 1, point to memory slot 22 and so and so forth. 

*/