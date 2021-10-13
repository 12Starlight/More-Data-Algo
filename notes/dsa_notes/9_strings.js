/*
Strings:

  These are stored as an Array, so all of these operations act the same as 
  Arrays.

    traverse => O(N) T, O(1) S
    copy => O(N) ST
    get => O(1) ST

*/

/*

  Let us say that:

    fooBar = 'this is a string';
    foobar += 'x'

  This is something you have likely found yourself writing in your code. And if
  you are dealing with a language like JavaScript, Python, or Java, the 
  languages where I mentioned where Strings are immutable, what this does under
  the hood is it creates a brand new String. 

  It copies this entire String, or in this case 'fooBar'. And it adds this 
  letter to that new String. Or rather, it creates a brand new String, a brand
  new array of characters, where that new letter or new character, is at the
  end of that Array. 

  But the point is this is not a constant time operation which you might expect.
  You might be thinking, 'Oh, I am just appending a value.' When we are dealing
  with a Dynamic Array for instance, appending a value is an amortized constant
  time operation. 

  But no, bc Strings are immutable, by doing '+=', you are performing an O(N)
  operation, a linear time operation. This is incredibly important, bc similarly
  it means that if you are adding two Strings together, for instance if you are
  doing, 'abc' + 'def', adding these two Strings together, concatenating these
  two Strings together, is creating a brand new String of length N, where N is
  the length of the first String, and of length M, where M is the length of the
  second String. 

  So this is an N plus M operation. This is really, really, super important. Of
  course this is only relevant, when you are using languages where Strings are
  immutable. But, if you are using one of those languages, and a lot of them are
  like that (not C++), then this is really importanat to know. 

  And this is why for those languages, it is often recommended, if you have to
  do a lot of alterations to a single string, it is recommended to split out the
  String into an actual Array of characters in code, we are no longer talking 
  about memory, but in code, to split the String out into an Array of 
  characters. 
  
  Then you can append values in constant time. So if you want to mutate this
  String, you can mutate this Array of characters by appending characters to the
  Array in amortized constant time. And then finally, you rejoin all of the 
  letters, you re concatenate them, and you have now obtained your mutated 
  String.

  And so that way, instead of having done a bunch of O(N) operations, you have
  done one O(N) operation when you split the String out into characters. Then
  you did a bunch of constant time operations when you were appending characters
  to the Array. And then finally, you re cancatenated all the characters in a 
  single O(N) operation. 

*/

/*
  When you are dealing with immutable Strings, any method that would mutate the
  String, is actually making a copy of that String, which is going to be an O(N)
  operation with the new character at the end, or with whatever mutation you had
  in it. 
  
  And by the way, when you are dealing with immutable Strings, there is no set
  at index method. You can not set a character at a given index when you are 
  dealing with an immutable String. You literally cannot alter that Strinig. The
  closest thing that you can do to altering a String that is immutable is this
  plus equal thing, but again, that is an O(N) operation bc it make a copy of 
  the string with value added. 

*/

/* 
String
  One of the fundamental data types in Computer Science, strings are stored in
  *memory* as *arrays* of integers, where each character in a given string is
  mapped to an integer via some character-encoding standard like *ASCII*.

  Strings behave much like normal arrays, with the main distinction being that,
  in most programming languages (C++ is a notable exception), strings are
  *immutable*, meaning that they can't be edited after creation. This also means
  that simple operations like appending a character to a string are more
  expensive than they might appear.

  The operation above has a time complexity of *O(n^2)* where n is the length of
  "string", because each addition of a character to "newString" creates an
  entirely new string and is itself an *O(n)* operation. Therefore, n O(n)
  operations are performed, leading to an O(n^2) time-complexity operation
  overall.

*/