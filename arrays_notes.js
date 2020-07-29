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