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
    -> Static (fixed)
    -> Dynamic (allocates roughly double the size you ask for)

*/