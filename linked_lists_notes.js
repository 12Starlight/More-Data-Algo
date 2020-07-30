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
  slot 1, point to memory slot 22 and so and so forth. So, let us look at how
  this Linked List might be stored in memory.

    3 -> 1 -> 4 -> 2

  We would basically create a structure that we would likely call a node. 
  Typically you call these structures nodes, you have probably heard of this 
  term. And each node in the Linked List has both a value, so for instance, 
  three or one, and a pointer to the next node in the Linked List. 

  So, the first node that would have value 3, would have a pointer that points to
  the next node in the Linked List, the node with value one. So the way this
  would be stored in memory, is we would have two back to back memory slots for
  each node (it would actually be 16 with 64 bit integers, but for simplicity we
  are only counting each value as 1). 
  
  Where one memory slot holds the value and the second memory slot holds the
  pointer. And then, the next node in the Linked List, like that node can be
  anywhere in the memory canvas, literally anywhere. So let us go with an 
  example. We have this Linked List here, starts at three, ends at two.

    3 -> 1 -> 4 -> 2

  We could store this Linked List as follows. We could put 3 at memory slot 21,
  and then we would have a pointer starting at memory slot 22. This would have
  to be back to back right, bc you read things in contiguous order in memory. 
  And so memory slot 22 might point to, memory slot 5. And of course we would be
  drawing an arrow on the memory canvas. But in memory, what would actually
  happen is, we would have the number 5 (memory slot) written in binary, which
  would look something like 00000101.

  And so then, you would store that binary number at memory slot 22. But for the
  sake of understanding, you would just draw the arrows on the memory canvas. 
  Then at memory slot 5, you would store the number 1, which would also be a 
  binary number. Then the next memory slot, memory slot 6, would now be the
  pointer that goes from one to four, right? 

  So, we could have that point to let us say, memory slot 2, right? Then at
  memory slot 2, we would store the number 4, then at memory slot 3, we would
  have another pointer. This pointer might point to 16. At memory slot 16, we
  would have the number 2, then we would have nothing at the memory slot 17. 
  Actually, you would have a pointer that points to, like the null address. 

  But, so this means that basically the Linked List ends here. Now why is this
  useful, bc of that whole needing back to back memory slots that are free for
  Arrays. Whereas for Linked Lists you would only need 2 back to back memory
  slots needing to be free. So, that really is the fundamental difference 
  between Arrays and Linked Lists! 

*/