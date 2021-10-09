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

/*
  If you think about it, the way we write an Array, is pretty accurate in terms
  of how it would look like on a bounded memory canvas. 
    
    [2, 1, 5, 6]

  However, a Linked list is not exactly accurate.

    3 -> 1 -> 4 -> 2

  In reality the number 3 might be at memory slot 22, whereas 1 might be at
  memory slot 422 or anywhere in the memory canvas for that matter for any of 
  the values in the Linked List. See, the only thing that really connects each
  node in the Linked List is not the arrows, but a reference to a memory slot's
  memory address. The arrows are just used to conceptually understand which node
  is connected to which node. 

  And bc your operating system is connected directly to all these memory slots
  in memory slots in the memory, you are able to go from one memory slot to
  another really really fast, just by having that reference to the memory 
  address. 

*/

/*
Space & Time Complexity:

  * When you want to traverse a Linked List or getting a value.  
    Imagine we have a Linked List which is connected by different memory slots 
    that could be anywhere. So, we have our Linked List, just like our Array it 
    should be easy to find a value, right?

      3 -> 1 -> 4 -> 2 => O(i) T (i is the index), O(1) S
      0    1    2    3

    It turns out this is not actually quite as easy as it was to find the element
    at index two in the Array. If you look at our Array above, it was stored
    starting at memory slot 11, and was stored in memory slots back to back. So,
    it is easy for our operating system to quickly do the math, knowing that it
    started at memory slot 11. So, any index could easily be computed and found.

    However, with Linked Lists the situation is much more difficult for our
    opporating system. The reference begins at the first node, let us say at
    memory slot 21, this is the start of the Linked List. And it happens to have
    a very special name, the 'head' of the Linked List. This is what you know in
    your code.

    You might call it foodHead equals, and it is this variable or like the 
    variable is stored at this memory address. So, now if you want to find the node
    or the value of the node at index two, you do not have a way to calculate how
    many memory slots you have to go to in front of memory slot 21 to find that, bc
    the Linked List nodes are stored all over the place, they can be anywhere!

    So unfortunately, you literally have to traverse the entire Linked List until
    you find this index. You have to go from number three to the number 1, from the
    number 1 to the 4, and from the 4 and there you found the value at index 2.
    So, basically to get a number takes O(i) time bc you know you are going to
    have to traverse through a total of i nodes to find the ith node. 

    Space complexity is not really going to be affected bc you are not storing
    anytihng in memory. 


  * When you want to set a value at the ith index.
    It is sort of the same thing. It is going to be O(i) time, and then O(1)
    Space. This is bc before you set, you have to traverse up that node, then
    switch out the values.

    NOTE: If you find the value or rather the node at index i, then you can set 
    in O(1) time bc it is just as simple as switching out a value instantly. 

    So, when it comes to setting in a Linked List. There are not really
    indicies. You do not really think of it as setting a value at i in a Linked
    List. This is why when you implement a Linked List, you typically do not
    even have the concept of indicies. It is not like Arrays where you do have,
    a value at index 0, 1, 2, 3, etc.   


  * When you initialize a Linked List.
    This is going to be O(N) Space/Time. And why? You are doing the same thing 
    as you are doing for an Array. You have a got a total of N memory slots that
    are allocated for your N elements. You actually, have 2N memory slots, if
    you remmeber, each node has both a value for the memory slot, and a pointer. 

    Keep in mind, if you are dealing with 64 bit integers, you actually have
    eight memory slots for the value, and eight for the pointer. However, this
    is a constant factor, so you can forget about that. Let us just go with the
    simplified example of two memory slots. So, even thought it is 2N, again you
    can drop the 2 bc it is also a constant factor, which leaves you with O(N).


  * When you want to copy a Linked List.
    This is going to be the same as Arrays bc yo still going to need to traverse
    the entire Linked List. So, copy is going to be O(N) Space/Time complexity. 


  * When you want to insert a value into a Linked List.
    This is probably the most interesting operation in a Linked List. Recall
    that for Arrays, even Dynamic Arrays, inserting an element at the beginning
    of the array, or in the middle of the Array, not overwritting an element, 
    not setting an element at an index, but inserting an element or deleting an
    element was an O(N) operation. 
    
    We had to shift all of the elements either to the right to make room for a 
    new element, or to the left if we were deleting an element. And then, if we
    were appending an element at the end of an Array, in the case of a Dynamic
    Array, yes, it was an amortised constant time operation. But there was 
    always that edge case, when we filled up the buffer, the extra memory that
    we had been allocated, where we had to copy the Array and essentially double
    the amount of memory that we were allocating to it. 

    With Linked Lists, all of these operations, with a few caveats, which we are
    going to cover in a second, can be done in constant time. So, let us look at
    why that is. If we are trying to insert an element at the beginning of the
    Linked List, at the end of the Linked List, or in the middle of the Linked
    List, what is going to happend under the hood?

    Well let us use the example above. It starts at 3, it goes to 1, it goes to
    4, then it ends at 2. 

      3 -> 1 -> 4 -> 2

    What we drawn out here is basically what happens in memory except we have
    made it a bit simpler to read. The nodes go from left to right, and the 
    arrows are small. But, if you really look at it, conceptually it is the same
    thing. We have got an arrow that points from the memory slot right after the
    3, which points to the memory slot 5, that is holding the 1 and so on and so
    forth. 

    So, we want to insert a node at the very beginning of a Linked List. Well,
    we have this node which we called the 'head'. We will create a new head node
    and we will assign it the value 5. Let us say that 5 gets stored at memory
    slot 19. The next memory slot 20, will then point to memory slot 21 where
    the value 3 is stored (in binary form). And just as we had foodHead which
    was equal to the node at memory slot 21, now we will just have foodHead be
    equal to the node at 19!

    So, basically what we did was have 'head' which was pointing to the 3 at
    memory slot 21, now point to the 5 at memory slot 19. Then we used the next
    memory slot at 20, point to the 3 at memory slot 21. 5 is a new node that we
    just created and have it have a pointer that points to 3. And boom! We have
    inserted a node at the beginning in the Linked List in constant time. 
    
    Why constant time, bc all we did was create one new node of two memory 
    slots, and we just shifted a couple of pointers. We overwrote like one
    memory address. Now similarly, let us say that we want to insert another 
    node right in between the 1 and the 4. We want to insert the node with a 
    value 7. 

    This is going to be very similar with a small caveat. The caveat is thta we
    have to, unfortunately, first traverse all the way through the Linked List
    until we get to the node 4. So that is important to note. So, there is
    actually an extra time computation which is O(i) time, where i is the index
    of the node. 
    
    But once you have that position, or let us assume that maybe you had stored
    elsewhere in memory references to this position. Maybe you hae some other
    data structure that pointed to this position. Well then, you just create a
    new node for the 7. Maybe let us put the 7 at memory slot 9 and 10. 
    
    So, we would make memory slot 10 point to 4 which is at memory slot 2. The 
    previous node 1 should now point to 7 at memory slot 9. So, essentially all
    we really do is change the pointers. These are constant time operations. It
    is very cheap and easy and fast to create these new pointers. Whereas in an
    Array, we can not just create these new pointers, we have to shift every
    element. 

    And it is the exact same thing with the end of the Linked List. With the
    end of the Linked List, you would be able to add an element at the very end
    of the Linked List by just making this element 2 which is stored at memory
    slot 16 have the next memory slot 17, point from null to the new node. Then
    the new node would be stored at memory slot 24 and memory slot 25 would now
    point to null.

    So the actual act of inserting the node is constant time and constant space. 
    To find the place where you want to insert it, depends on your
    implementation. If it is the head of the Linked List, it will be constant
    time. It is the end of the Linked List, which is called the 'tail' of the
    Linked List, some Linked List implementations will actually have a reference
    to the tail. That all depends on you. 

    Let us say you create a class for a Linked List. You could, you wanted to,
    have a variable thta points to the tail of the Linked List. So that you 
    would have both the head and the tail. If you had the tail, then it would be
    constant time to set a new tail, bc you would just grab the tail directly, 
    and you would have this new pointer and create this new node. 

    If you do not have the tail, then it is going to be O(N) time bc you have to
    traverse the Linked List. Same thing for inserting a value in the middle. 
    So, that is how a Linked List works. Now the cool thing about Linked Lists
    is that there are actually a lot of variations of Linked Lists. 

*/

/*
    We covered what is known as a Singly Linked List. This is really the most
    basic form of Linked Lists, and it works. It is really useful, it has got
    nice use cases. Where you have one link between two values, right. 

      3 -> 1 -> 4 -> 2

    So, here we go from 3 to 1, and from 1 to 4, and from 4 to 2. Another common
    type of Linked List is what is known as a Doubly Linked List, where every
    node has two pointers, a pointer to the next node and to the previous node. 
    So, you would have a pointer that goes from 1 to 3, and from 4 to 1, and 
    from 2 to 4. 

             3 -> 1 -> 4 -> 2 -> null
      null <-  <-   <-   <-

    The 3 would also point to the null value, and two would also point to the
    null value. So Doubly Linked Lists are very similar to Singly Linked List.
    The difference is that Doubly Linked Lists just have two pointers. So, you
    can imagine in memory, that they would just take up three memory slots
    instead of two. There would be a memory slot for the value, for the one
    pointer for the next node, and another pointer for the previous node. 

    In Singly Linked List we call the pointer that points from one node to
    another, the next pointer. So typically in code, we literally call it a
    property called next on the node class. With Doubly Linked Lists, we
    typically call the pointers next and prev or previous. And in the case of
    Doubly Linked Lists, you almost always have a reference to the tail bc the
    tail is really useful. 

    In this example the tail is 2. From 2, you can go back to the beginning of
    the Linked List. With Singly Linked Lists, you can not really go back from
    the tail, bc you only have one type of pointer, you can only go in one
    direction. But with a Doubly Linked List, you certainly can go back. 

    NOTE: You can really mutate your linked list in all kinds of ways. You can
    add a third pointer per node. You can make the Linked List circular, where
    the tail points to the head or the head points to the tail. You can kind of
    do whatever you want, depending on your use case. 

*/

/* 
Linked Lists:

  Singly Linked List
    A data structure that consists of nodes, each with some value and a pointer
    to the next node in the linked list. A linked list node's value and next 
    node are typically stored in "value" and "next" properties.

    The first node in a linked list is referred to as the *head* of the linked
    list, while the last node in a linked list, whose "next" property points to
    the "null" value, is known as the *tail* of the linked list.

    Below is a visual representation of a singly linked list whose nodes hold
    integer values:

      0 -> 1 -> 2 -> 3 -> 4 -> 5 -> null

    
    A singly linked list typically exposes its head to it's user for easy 
    access. While finding a node in a singly linked list involves traversing 
    through all of the nodes leading up to the node in question (as opposed to 
    instant access with an array), adding or removing nodes simply involves 
    overwritting "next" pointers (assuming that you have access to the node 
    right before the node that you're adding or removing).

    The following are a singly linked list's standard operations and their
    corresponding time complexiities:
      * Accessing the head: O(1)
      * Accessing the tail: O(n)
      * Accessing a middle node: O(n)
      * Inserting/Removing the head: O(1)
      * Inserting/Removing the tail: O(n) to access + O(1)
      * Inserting/Removing the middle node: O(n) to access + O(1)
      * Searching for a value: O(n)

  
  Doubly Linked List
    Similar to a *singly linked list*, except that each node in a doubly linked
    list also has a pointer to the previous node in the linked list. The 
    previous node is typically stored in a "prev" property.
    
    Just as the "next" property of a doubly linked list's *tail* points to the
    "null" value, so too does the "prev" property of a doubly linked list's
    *head*.

    Below is a visual representation of a doubly linked list whose nodes
    hold integer values:

      null <- 0 <-> 1 <-> 2 <-> 3 <-> 4 <-> 5 -> null

    
    While a doubly linked list typically exposes both it's head and tail to it's
    user, as opposed to just it's head in the case of a singly linked list, it
    otherwise behaves very similarly to a singly linked list.

    The following are a doubly linked list's standard operations and their
    corresponding time complexitites:
      * Accessing the head: O(1)
      * Accessing the tail: O(1)
      * Accessing the middle node: O(n)
      * Inserting/Removing the head: O(1)
      * Inserting/Removing the tail: O(1)
      * Inserting/Removing a middle node: O(n) to access + O(1)
      * Searching for a value: O(n)


*/