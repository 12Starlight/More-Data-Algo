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