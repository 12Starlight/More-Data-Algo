/*
Hash Tables:
  The slightly bad news is that Hash Tables are actually pretty complicated
  under the hood or rather to make them very good and very performant, there is
  a lot of complicated. Fortunately though, for the sake of coding interviews
  we are dealing with the simple stuff. So, let us jump in. 

  So whaat a Hash Table? To put it simply, a Hash Table is a key-value store. It
  is a data structure where you are able to store pairs of keys and values. 
  Where every key maps to a value. To be clear, you can access a value, given a
  key. But, I would not be able to do the opposite.

  Now keys do not have to be just integers like Arrays with indicies. Instead,
  they can be strings, or other data types depending on the language we are 
  coding in. And the beauty of a Hash Table is thata insertion of a key-value
  pair, deletion of a key-value pair, or searching for a value given a key are 
  all operations that run in constant time on average. 

    -> insertion O(1) T
    -> deletion O(1) T
    -> searching O(1) T

*/

/*
  At this point, you might be thinking, well, this weirdly sounds like an Array.
  In an Array, we have key-value pairs, except the keys are indicies. The keys
  are always numbers or positions. And you can access values in an Array in
  constant time given the indicies. That is one of the main things about Arrays,
  the constant time lookup. 

  We have that constant time lookup here with Hash Tables or at least that is
  what we have said so far. And our Hash Table keys, can be strings or other
  data types. How is it possible at least as far as searching is concerned or
  accessing a value given a key, how is it possible to have constant time lookup
  with a key that is not a number or integer like in an Array? 

  This is how we are going to look at how Hash Tables are implemented under the
  hood. It turns out that hash tables are built on top of Arrays. So, you can
  imagine that under the hood. For now we will have the Array have three 
  indicies. And we are actually goint to be storing our keys or rather the 
  values that are relevant to the keys, so we are going to be storing 1, 2, 3,
  that are relevant to foo, bar and baz in this underlying Array. And that is 
  what is going to allow us to have this constant time lookup, given an index.

    'foo' => 1
    'bar' => 2
    'baz' => 3

    [_, _, _]

  Okay, but again here, you are wondering, 'what do you mean given an index, bc
  here we are dealing with strings as keys, not indicies.' So, the way that 
  works is that behind the scenes when you are inserting a key-value pair inside
  a Hash Table and this is where the word 'hash' comes into play, you use what
  is called a 'Hash Function' to transform the key, in this case a String. Let
  us say the string 'foo' or the string 'bar' into an index which will fit into
  this underlying Array!

  You will find that index, and you will be able to say, 'Oh, let me grab the 
  value at that index in the underlying Array.' And that will be a constant
  time lookup. So, at this point you are probably wondering what is a hashing
  function? How do I transform my string into an index? 
   
  Well, there a few things that must happen. First, you need to change the 
  string into an integer. One way this could be done for example (there are
  very sophisticated hashing functions. But, for simplicity we are using this
  example), is to map every character in the string to it's ASCII table which 
  says each letter has some numerical value that would be the equivelant. 

  You will be left with one integer per every character in the string. Then you
  sum up all the integers and you get a number. So, let us try that with the 
  string 'foo'. Now we do not have the ASCII table off the top of our head here
  for these three characters. But it does not really matter. We are just going
  to assume that if we were to map these three characters to their respective
  ASCII encoded values and then sum them up. Let us assume that we would get the
  number 301.

    'foo' => 1
      301
    'bar' => 2
    'baz' => 3

    [_, _, _]

  Okay, so how is 301 going work when we are only dealing with an Array of three
  indicies, not an Array of 301 indicies. So, how does that work out? Well, this
  is where the modulo operator comes into play. In a lot of languages, the 
  modulo operator looks like this '%' the percentage sign. And so you would do
  301 modulo the length of your underlying Array. And if you do 301 moduloed
  the length of your underlying Array, you know that you will always get a
  number between zero and the length of the underlying Array minus one. 

    301 % 3
    300/3 = 100 * 3 + 1 => the remainder is 1

  So, this means that our string 'foo' which got transformed into 301, 
  ultimately mapped to index one. And so now finally we can say, 'we are going to
  store the number one, at index 1 which would be in the middle of our array. 

    'foo' => 1
        301 -> 1
    'bar' => 2
    'baz' => 3

    [_, 1, _]

  So, we can do the same thing for each of the other strings. And just for
  `simplicity` let us say that 'bar' equals 602, and 'baz' equals 90.

    'foo' => 1
        301 -> 1
    'bar' => 2
        602 -> 2
    'baz' => 3
         90 -> 0

    [3, 1, 2]

  Now what would have happend, if two strings get hashed and then map to the 
  same index? 

*/

/*




*/