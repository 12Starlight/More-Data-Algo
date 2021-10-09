/*
Memory:
  -> A BOUNDED canvas of slots, of memory slots that lives somewhere in your 
  computer. And that can store data.

  -> It is very important that it is bounded, bc that means that you have a
  limited amount of data that you can store in it. 

  -> It is possible to run out of memory, which is why we care about Space
  Complexity. 

  -> How many memory slots are in this memory canvas is sort of irrelevant for
  the purpose of this section and for the purpose of coding interviews. 

  -> Information that is stored in these memory slots is stored in base two
  format in binary number format as bits, say zeros and ones.

  -> One memory slot can fit eight bits, which is called one byte. 

  -> When you are storing an integer in memory, that integer is typically a
  fixed-width integer, meaning that it is either 32 bits, or 64 bits, or 16 bits,
  eight bits, point is, we know how many bits it is or how many bytes it is
  gonna take up. 

  -> If it is a 32 bit integer, for instance, it is going to take up four bytes,
  so four memory slots. 

  -> When you are storing data in this memory canvas, if it is going to take 
  more than one memory slot, it is going to have to be stored in however many
  memory slots are needed to store it. Back to back and free. So, if you are 
  storing a list of three 32 bit integers, for instance, that list is going to
  have to have 12 memory slots. And those 12 memory slots are going to have to
  be back to back. And of course, they are going to have to be free. 

  -> Any type of information can be transformed into base 2 format and therefore
  transformed into bits that can be stored in memory. 

  -> There is this cool feature so to speak about memory, which is that at any
  memory slot, you can actually store the memory address of another memory slot
  in base two format in binary number format. This allows you to not have to
  store specific data at a memory slot. But instead, point to another memory
  slot that stores that data. And that is called a pointer.

  -> Accessing memory slots, is sort of the most basic operation that you can
  think of. So, for example, if you are accessing a fixed-width interger like a
  32 bit integer, you know that you will be accessing four memory slots. And 
  that is going to be a basic elementrary operation, a very inexpensive 
  operation from a time point of view. 

*/

/*
Bit:
  Short for 'binary digit', a bit is a fundamental unit of information in
  Computer Sceince that represents a state with one of two values, typically '0'
  and '1'.

  Any data stored in a computer is at the most basic level, represented in bits.


Byte:
  A group of eight 'bits'. For example, '01101000' is a byte.

  A single byte can represent up to '256' data values ('2^8').

  Since a 'binary number' is a number expressed with only two symbols, like '0'
  and '1', a byte can effectively represent all of the numbers between 0 and 255
  inclusively in binary format.

  The following bytes represent the numbers 1, 2, 3 and 4 in binary format.

    1: 00000001
    2: 00000010
    3: 00000011
    4: 00000100


Fixed-Width Integer:
  An integer represented by a fixed amount of 'bits'. For example, a 
  '32-bit integer' is an integer represented by 32 bits (4 bytes), and a 
  '64-bit integer' is an integer represented by 64 bits (8 bytes).

  The following is the 32-bit representation of the number 1 with clearly
  separated bytes:

    00000000 00000000 00000000 00000001

  The following is the 64-bit representation of the number 10 with clearly
  separated bytes:

    00000000 00000000 00000000 00000000 00000000 00000000 00000000 00001010

  Regardless of how large an integer is it's fixed-width-integer representation
  is by definition made up of a constant number of bits.

  It follows that regardless of how large an integer is an operation performed
  on it's fixed-width-integer representation consists of a constant number of bit
  manipulations, since the integer is made up of a fixed number of bits.


Memory:
  Broadly speaking, memory is the foundational layer of computing, where all 
  data is stored. 

  In the context of coding interviews, it is important to note the following
  points:

    * Data stored in memory is stored in bytes and by extension bits.
    * Bytes in memory can "point" to other bytes in memory, so as to store
      references to other data.
    * The amount of memory that a machine has is bounded, making it valuable to
      limit how much memory an algorithm takes up.
    * Accessing a byte or a fixed number of bytes (like 4 bytes or 8 bytes in the
      case of '32-bit' and '64-bit integers') is an elementary operation, which
      can be loosely treated as a single unit of operational work.


*/