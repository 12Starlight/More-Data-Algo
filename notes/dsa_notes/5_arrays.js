/*
Arrays:
  We have got this bounded memory canvas with memory slots. Each slot holds a 
  byte which is eight bits, a binary number of eight bits. And if we want to
  store an Array, if we want to store a list of stuff, let us say integers for
  simplicity, so let us imagine that we have got the list one, two, three. 

    [1, 2, 3]


  Then our operating system would transform all three of these integers into
  their binary number format. For the purpose of this example we will be using
  64 bit integers. And our operating system is going to go into the memory 
  canvas, find a series of back to back memory slots that are free, that have
  enough space to allocate or to hold three inegers. 

  So, if the three integers are 64 bit integers, that means that they each take
  eight bytes or eight memory slots. So, we need 8 * 3 memory slots equals 24
  memory slots back to back that do not have anything in them. 

  Let us say that we start at slot 3. So, three would have to all the way to 26.
  So, these slots would now be taken up by our array. So this is what happens
  under the hood. The number of memory slots allocated for the array of length
  3 is fixed. 

  There are actually two types of Arrays:
    -> Static (fixed based on what you assign)
    -> Dynamic (allocates roughly double the size you ask for)

*/

/*
Static Arrays:
  Common Operations:
    * To read a value at a given index in an Array. 
      
      array[2] => O(1) ST

    Accessing an arraay at a given index is a very basic operation that is
    performed almost instantly. Well, what does instantly really mean? This is
    where our new understanding of Complexity Analysis and Big O Notation comes
    into play. It means that it runs in constant time. 

    When our operating system stored our array, it knew that it started at
    memory address three. And similarly it knew that every integer in the Array
    was a fixed width integer, a 64 bit integer, and the fact that it is a fixed
    width integer is really important bc fixed width implies that it never
    changes. This further implies that it is a constant. 

    So, the first integer will start at memory slot 3. The second, will start at
    memory slot 3 + 8 or 11. And the third is going to start at 3 + 8 + 8 or 19.
    And so you can start to see that when we are accesing an element in an Array
    at a given index, all that is really happening behind the scenes, is our
    operating system is finding the memory address that starts the Array. 

    Then it is saying, well, how many bytes or memory slot does one element
    take up? In this case, we are dealing with 64 bit integers. So eight bytes,
    so the operating system knows that one element is going to be taking eight 
    memory slots. 

    And then it says, okay, what index did you specify? Let us say we wanted to
    access Array at index two, well Array at index two is going to be not eight
    bytes, but 16 bytes or two multiplied by eight, where eight is the number of
    bytes that one element takes up. 

    So the start address, which is three plus two times eight which is 16 equals
    19. That is where our third element or element at index two is located. 


    * When we want to overwrite an element at a given index. 

      array[2] = 3; => O(1) ST

    When we are trying to overwrite an element at that index. Well here it is
    very similar to getting an element. We know exactly where index 2 is bc we 
    can do the same computation where we get the starting address and we 
    multiply the index by the number of memory slots or bytes that each element
    takes up, so we can immediately find the memory slot at index two which is 19
    in this case. 
    
    And all that we do is we overwrite the next eight blocks, 
    which are a fixed number of walks. We are basically just swapping new binary
    numbers with old binary numbers. So setting or overwritting an element in an
    array is also going to be constant. 


    * When we actually initialize an Array

      [] or let array = new Array(); => O(N) ST

    When we created this Array and first stored it in memory, we asked the 
    operating system to set asside a fixed amount of slots. However, the length
    is an arbitrary number based on what we decided it to be which in this case
    was 3. So, we specified a length N. 

    So, our operating system went and found N multiplied by eight memory slots
    that are free and that are back to back. 


    * When we are traversing through an Array.

      for (let i = 0; i < n; i++) {}; => O(N) T
      for (let i = 0; i < n; i++) {}; => O(1) S (bc you are not using extra S)

    When you do for loop through an Array, you are traversing through every
    element in the Array. So, here you can imagine, under the hood, the
    operating system is going to traverse every memory slot. How many memory
    slots are there? Well eight multiplied by N. 

    This applies to map(), filter(), reduce(), which all use traversing. And the
    space complexity is going to depend on whether or not you are doing this in
    place in the Array or not. So, if you are mapping an Array to a new Array
    and you are creating a brand new Array of the same length, well that would
    be O(N) space. 


    * You often copy Arrays.

      let array = [1, 2, 3];
      let copy = array; => O(N) ST 

    When you are copying, you are traversing the entire Array and then you are
    saying to the operating system, hey, I just traversed through an entire
    Array of length 3 or of 24 memory slots and I need you to find a new 24 slots
    that are back to back and free in memory, and I need you to copy all of 
    these values over there. 

    And the Space/Time Complexity implications of copying are very important.
    The fact that copying is a relatively intensive operation, is very 
    important. You often see people who are fairly new to algorithms and data
    structures do this mistake, where they will just very casually copy an 
    Array, using .slice() etc., and they will copy Arrays left and right. 

    What is even worse, they will do this in a for loop. So, they will be 
    iterating through an Array of N elements, and at every element they will
    make a copy of the Array for whatever reasonbc it is very simple. It is just
    one line. But that is an O(N) operation that you are doing every time. 

    Every time you are asking the operating system, hey, I need you to copy this
    entire Array and find a new 24 blocks of memory slots that are free back to 
    back. So do keep in mind that copying an Array is O(N) Space/Time 
    Complexity.


    * Now we get to the most important operation, inserting a value into an
    Array, but not setting.

      [1, 2, 3] 
            ^   => O(N) T   => O(1) S
            5

    Insert is actually going to be a pretty bad operation. Why? Well, let us
    think about what happens behind the scenes. If you have this Array that we
    just declared here that takes up 24 memory slots and we want to insert a
    value at memory slot 19, what will happen?

    Well, we can clearly see that if we want to put something here right before
    the 3 or at memory address 19, we are going to have to somehow shift all of
    these blocks, right? All of the eight memory blocks that had been allocated
    to the three are going to have to be shifted to the right. Otherwise we are
    not going to be able to put something in there. 

    But, the problem is after memory block 26, we have not allocated more 
    memory. Remember that we said that this was a Static Array, meaning that we
    specified the length, we told the operating system, hey, this is how much
    memory we need. And the operating system can not guarantee that there would
    not be something stored at 27, for instance. 

    So, not only do we have to shift all of these eight blocks, we do not know
    if we can shift them to the right. And so, if we wanted to maybe insert the
    five at the end of the Array, maybe we did not want to put it in middle, we
    wanted to append it at the very end, we would be facing the same problem
    where we would not be able to put it here bc it is possible that 27 would be
    taken up. 

    And this is even more applicable, if we wanted to put the five at the 
    beginning of the Array. If we wanted to put the five at the beginning of the
    Array, that would be right before memory block three, so we would have to 
    shift the entire Array, eight blocks or eight memory slots to the right. And
    again, we can not guarantee the 27 or all the blocks thereafter are free. 

    So, what does that leave us with? What option do we have? Well, we can copy
    the entire Array, say to the operating system, hey, we have this Array that
    we just copied. We need you to find another place in memory where there are
    enough memory slots for this Array, plus a fourth element or plus, an N plus
    one-nth element. 

    So, when you insert, you have to actually copy an Array under the hood. Now
    bc the operating system errased the other space after it copied and then
    found a new group of memory slots, the Space Complexity is constant. 

*/

/*
Dynamic Arrays:
  As the name implies, it is an Array that can change in size. More specifically,
  how it works under the hood, and by the way in Java and C++, Dynamic Arrays
  are respectively ArrayLists and Vectors. In Python and JavaScript and a few
  other modern languages, Standard Arrays under the hood are Dynamic Arrays. 

  Okay, back to the topic at hand. Well, a Dynamic Array is an Array that under
  the hood will allow you to have faster insertions at the end of the Array. So,
  what would happen is, your operaating system would actually allocate twice as
  much memory as what you are asking for (roughly). 
  
  Depending on the operating system or languange, perhaps it is not double the 
  length that you specified. It might be the smallest power of two that is
  greater than the length that you specified, for instance. So, if we had a 
  Dynamic Array of length 3. We would end up with three empty slots or 24
  memory slots, if we are dealing with 64 bit integers.

    [1, 2, 3, _, _, _]

  The operating system has said, hey, you can use those memory slots like I am
  allocating them to you. They are empty right now, but I have allocated them to
  you, so you can freely append this stuff to the end of this Array and we will
  be able to add them here bc you know that these memory slots are empty. So, 
  you can just append the number to the end of the array.

    [1, 2, 3, 4, 5, 6] ?

  So, you might be thinking what now? Like now we are back to the same problem
  of a Static Array. This is where the term dynamic comes into play. Basically
  a Dynamic Array will allocate double the space that you need, so that up until
  you reach that space, you have very fast insertions at the end of your Array.

  And once you exhaust the amount of space that you had been allocated, only
  then does the Array copy itself or does the insertion rather cause a copy and
  the copy will give you another double the amount of space that you need. 

    [1, 2, 3, 4, 5, 6, O(N), O(1), O(1), O(1), O(1), O(1)]
                        ^
                        7     8     9     10    11    12

  So, 7 took O(N) time to add bc you had to copy 1-6, then you had to append 7.
  However, 8-12 only took constant time! Okay, so at this point you may be
  wondering, what is the true Time Complexity ramifications of this insertion? We
  know that the Space Complexity is still O(1) bc like we said, even though you
  do the copying, you are still wiping out the previous memory when you insert.

  But, what is the Time Complexity? Well, let us think about it. Spoiler alert,
  it is going to be O(1) time. But, why is this the case? There are two ways to
  think about it conceptually. The first way is mathematically actually, not
  conceptually. You can think that every time we are doubling the amount of
  memory that we have. 
  
  So, how many times do we double the memory? Well, we double the memory, let us
  say for instance, where we keep doubling it until we have reached N. At the
  N-nth time that we have doubled an Array, these operation have taken:

    O(1) + O(2) + O(4) + ... O(N)

  Another way of writing it is:
  
    N + N/2 + N/4 + N/8 ... 1

  This series converges to 2N. So, in total for our insertions we are O(2N) to
  copy which is O(N) bc we drop the 2. So, that was sort of the mathematical way
  to prove that insertion in a Dynamic Array ends up being O(N). 
  
  Conceptually speaking, you can just think of it as, whenever you have to copy
  the Array since you are doubling the space or since you are doubling the space
  that you are allocated, you are giving yourself sort of like two times as many
  constant space operations or constant time operations, constant time 
  insertions in the future. 

  And you can think of all these constant time operations as sort of canceling
  out those copies that you are going to have to keep doing, right? So you have
  so many constant time insertions that those few linear time insertions kind of
  get canceled out. This is known as what is called 'Amortized Analysis'.

  So, amortized analysis is sort of the version of complexity analysis where you
  are really taking into account sort of the edge cases where things take a lot
  of time, as well as the easy cases when they do not take a lot of time. And so
  from an amortized analysis point of view, we say that inserting an element at
  the end of an Array, a Dynamic Array takes O(1) time or constant time. This is
  the one exception of when we SHOULD NOT take the worst case in complexity
  analysis. 

  NOTE: If you want to insert an element in a Dynamic Array in the middle of the
  array or anywhere else except the end of the Array, then it will stil be O(N) 
  time bc you are going to have to shift every element by one.


  * When you remove a value at the end of an Array.

    array.pop(); => O(1) ST

  All you do is remove the last element in an Array, so you free up the last
  memory slot or at least remove the values in it. But, similarly, if you want
  to 'pop' or shift() in JavaScript a value out of the beginning or anywhere 
  else in the array you end up with O(N) time bc you still have to shift all the 
  values to the right. 


  Last Thoughts: 
  
  Whenever you are performing an operation that is going to effect half an array 
  or a quarter of an array, those are still O(N) operations. As an example you 
  might have wondered, well if we insert an element in the middle of a Dynamic 
  Array, we only have to shift half of the values to the right. If we insert the 
  value at three fourths of the Array, we only have to shift one fourth of the 
  Array. But all of these things still end up being O(N) operations. Why? When
  you write it in detail, it looks like O(.25N), which is still O(N) ;)

  So, that is something to keep in mind, even if you are doing something on half
  the array, or on a fraction of the Array. If the Array is of length one 
  trillion or one quintillion, that is still a lot, and in terms of complexity
  analysis, we still treat it as, O(N). 

*/

/*
Array
  A linear collection of data values that are accessible at numbered indices,
  starting at index 0. The following are an array's standard operations and 
  their corresponding time complexities:
    * Accessing a value at a given index: O(1)
    * Updating a value at a given index: O(1)
    * Inserting a value at the beginning: O(n)
    * Inserting a value in the middle: O(n)
    * Inserting a value at the end:
      * amortized O(1) when dealing with a dynamic array
      * O(n) when dealing with a static array
    * Removing a value at the beginning: O(n)
    * Removing a value in the middle: O(n)
    * Removing a value at the end: O(1)
    * Copying the array: O(n)


  A static array is an implementation of an array that allocates a fixed amount
  of memory to be used for storing the array's values. Appending values to the
  array therefore involves copying the entire array and allocating new memory
  for it, accounting for the extra space needed for the newly appended value.
  This is a linear-time operation.

  A dynamic array is an implementation of an array that preemptively allocates
  double the amount of memory needed to store the array's values. Appending
  values to the array is a constant-time operation until the allocated memory is
  filled up, at which point the array is copied and double the memory is once
  again allocated for it. This implementation leads to an amortized 
  constant-time insertion-at-end operation.

  A lot of popular programming languages like JavaScript and Python implement 
  arrays as dynamic arrays.


*/