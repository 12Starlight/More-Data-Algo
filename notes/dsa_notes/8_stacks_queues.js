/*
Stacks & Queues:
  * Stack
    It is a data structure that supports inserting and removing elements 
    following the last in, first out principle. Which is why you may sometimes
    hear people describe stacks as LIFO data structures. 

      L-I-F-O (Last In, First Out)
   
      | ^
      V |
      ==== <- Last item in stack
      ====
      ==== <- Front of stack

    The last element you put into your stack is the first element you are going
    to take out of your stack.  
      

  * Queue
    These are kind of the opposite of stacks. You can imagine the real life
    example of a queue, as a queue or a line of people waiting to buy tickets
    at the movie theater, for instance. And so, if you want to add an element to
    a queue, you can imagine that someone new, would want to get in line to buy
    tickets. Where would they go? The would go to the back of the line. 

      O -> O O O O -> O 

    And the first person who would get out of the line, would be the person who
    first got into the line. They would buy their ticket, and then they would be
    gone. This type of structure follows a different principle, it follows the
    first in, first out principle.

      F-I-F-O (First In, First Out)

    The first person to get into the queue, is the first person that is going to
    get out. Then the second person to get into the queue, is going to be the
    next person to get out, and so on and so forth. 

*/

/*
  The nice thing about Stacks & Queues is they support constant time insertion
  and deletion of elements. 

    insert => O(1) ST
    delete => O(1) ST


  Stack:
    To make a Dynamic Array behave like a stack, all I need to do is append or 
    push an element to it, or remove, pop and element from the end of the Array. 
    Remember, adding an element and poping an element from the end are both
    amortized constant time operations. So a stack is literally a Dynamic Array
    under the hood or at least it can be implemented using a Dynamic Array
    under the hood. 

    This would mean that searchiing for an element, an arbitrary element, in the
    stack is going to take linear time bc you would have to traverse the entire
    Dynamic Array, and it also means that you can not add elements to the stack
    that are not at the top of the stack. This is fine, bc the stack is 
    specifically a structure that supports the last in, first out principle, we do
    not care about adding elements to the bottom of the stack or the middle of
    the stack. And a Dynamic Array, would not allow us to do that in constant
    time. 

  Queue:
    A Queue has to be implemented with a different structure. And so this is why
    a Queue is typically implemented with a Linked List. This is the most basic
    implementation of a Queue. Where you have the elements that point to each
    other, and you keep track of both the head and the tail of the Linked List. 

    If you want to add an element to the Queue, which would be called 'enqueue'.
    This is the insertion method for Queue. You would just replace the head of
    the Linked List. So, you add zero for instance, and make that the new head
    of the Linked List. And we know how to do that in constant time. 

    And if you wanted to remove an element from the Queue, this is specifically
    called 'dequeue'. You would remove the tail of the Linked List. So you would
    remove the 3. And if you have access to the tail of the Linked List, you can
    do that in constant time. You do need to have a reference to that tail, 
    otherwise it would take O(N) time to find the tail. 

      O --> 1 -> 2 -> 3 <-- O

    And then you would just make 2 the new tail. So this is a constant time
    operation, you just have to replace a few pointers, or remove a few 
    pointers, and we now have 2 as the tail of the Linked List, which would be
    the next element thata we would 'dequeue from the Queue. 

*/

/*
    search => O(N) T,  O(1) S
    initializing => O(N) S 

  For initializing, keep in mind whenever you aare inserting elements, so for
  instance, pushing an element or enqueueing an element, these two operations
  individually are constant time operations. So, unless you are initializing a
  Stack of length, N at once, you are not actually taking O(N) time to 
  initialize the Stack. Typically, a Stack or a Queue is going to be initialized
  as an empty Stack or an empty Queue. And you are going to one by one, add 
  stuff when you need it. 

*/

/*
  Stacks and Queues are very basic structures, but you can actually make them a
  lot more complicated, and you can make them a lot more powerful. For instance,
  you can transform a Stack into what is called a 'MaxStack' or a 'MinStack', 
  meaning a Stack that also keeps track of the largest element in it, or the
  smallest element in it.

  For Queues, you can turn them into what is called a 'Priority Queue', which
  keeps track of an element with high priority. And this has really cool
  implications in coding interview problems. Then you can make these structures
  even more complicated. You can kind of add onto them as you please. 

  LAST THING: Both structures typically support a 'Peek' method, which also runs
  in constant space time. It is basically the equivalent of pop and dequeue,
  except you do not actually remove the element. You just look at the next
  element that you would remove. So, is is kind of you peek at the top element
  of the Stack, you peek at the next element in the Queue.

*/

/*
Stack
  An array-like data structure whose elements follow the *LIFO* rule: *L*ast 
  *I*n, *F*irst *O*ut.

  A stack is often compared to a stack of books on a table: the last book that's
  placed on the stack of books is the first one that's taken off the stack.

  The following are a stack's standard operations and their corresponding time
  complexities:
    * Pushing an element onto the stack: O(1)
    * Popping an element off the stack: O(1)
    * Peeking at the element on the top of the stack: O(1)
    * Searching for an element in the stack: O(n)


  A stack is typically implemented with a *dynamic array* or with a *singly
  linked list*.



*/