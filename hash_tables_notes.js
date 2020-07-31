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
  For instance, imagine 'foo' instead was 'abr' which would have the same value
  as 'bar'. So now, both of these string would have mapped to the index value of
  2. So, now what would we have done? Well, this is where it turns out that
  under the hood, a hash table is not just an Array. It is actually an Array
  where each index maps to a Linked List of potential values. 

  This is precisely to take care of instances where we have two keys that get
  hashed into the same index and they therefore collide. And this is known as a
  collision in a Hash Table. So, basically we should rearrange our Array and
  make it look more like an Array that points to three Linked Lists. 

    'abr' => 1
        602 -> 2
    'bar' => 2
        602 -> 2
    'baz' => 3
         90 -> 0

  So, we would have 'baz' which pointed to 3, which is still stored at index
  zero. But, then the other two, 'bar' and 'abr', though this could have still
  been 'foo'. It is possible that 'foo' would have mapped to the same number as
  'bar'. But, 'abr' is just very obvious. Both of these map to 2, and so we are
  now going to make them a Linked List. So we are going to have 1, and then this
  points to the next value in the Linked List, which is going to be 2. 

    [ , , ]
     V V V
     3   1
         V
         2        

  Okay, so this complicates a few things. When we look up the value for the key
  'bar', how do we know which of these two values in the Linked List or imagine
  there were maybe even more, how do we know which one is related to 'bar' and
  which one is related to 'abr'. And this where we need to store even more
  information. 

  We actually need every node in the Linked List to point back to the original
  key. So for instance, the 1 would point back to 'abr', the 2 would point back
  to 'bar', and the 3 would point back to 'baz'. And this is very important bc
  otherwise we would not be able to know which of these two values here was
  related to 'bar' and which of them was related to 'abr'. 

            [ , , ]
             V V V
    'baz' <- 3   1 -> 'abr'
                 V
                 2 -> 'bar'

*/

/*
  So, you might be wondering, well if we can have values or keys rather that
  collide with one another and that are stored in one Linked List in this Array,
  then in theory, in the worst case, we could have every single key that 
  collides, so we have this one huge Linked List and the other two Linked Lists
  have nothing. 
  
            [ , , ]
             V V V
                 1 -> 'abr'
                 V
                 2 -> 'bar'
                 V
        'baz' <- 3

  And we have one Linked List of length N, where N is the number of keys in the
  Hash Table. So, does that not mean that insertion, searching, and deleting
  are all O(N) operations? And the answer is YES, in the worst case. Hash 
  Tables, support constant time insertion, searching and deletion on AVERAGE.
  But in the worst case, you can end up with a scenario like the above, where
  you have one giant Linked List or even it does not have to be one giant Linked
  List.  

  Maybe you have 10 values, where 8 collide and 2 of them are separate. And so
  that Linked List of length eight, would basically be a Linked List of length
  N. So, the point is that, admittedly, in the worst case these three 
  operations, inserting, deleting, and searching, where you look up a key given
  a value, will take O of N time.  

    -> insertion O(1) T Avg, O(N) T worst case
    -> deletion O(1) T Avg, O(N) T worst case
    -> searching O(1) T Avg, O(N) T worst case

  NOTE: In the context of coding interviews, unless it is specifically addressed,
  where the interviewer wants you to have O(1) T in the WORST case, this point
  is ignored. In part, this is bc some very smart people have come up with 
  very smart hashing functions that can be used to minimize the number of
  collisions. So, while it is possible in the worst case to have O(N) time, it
  mostly never happens. 

  Typically in coding interviews, the industry gives so much power to these 
  hashing functions, that they are treated as a constant time operations and 
  your Hash Table would actually in practice, almost always look like this, 
  where the three values are separated in their own Linked List. 

            [ , , ]
             V V V
    'baz' <- 3   1 -> 'abr'
               V
               2 -> 'bar'

*/