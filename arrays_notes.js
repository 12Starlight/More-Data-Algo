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

*/