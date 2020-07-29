/*
Logarithm: 

  -> _ = 2 (In Computer Science, it is assume that it is always 2)

  -> log_(x) = y iif (if and only if) 2^y = x

  -> log_(N) = y iff 2^y = N

  -> Just ask: 'What is 2^? = N. Said another way, as N doubles in size the ?
  increases by only 1, so just a tiny amount.


  Imagine you havea an array of length N. Let us start with an array of length,
  I do not know, eight.

    [0, 1, 2, 3, 4, 5, 6, 7]

  
  You have this array of length eight. And imagine your algorithm had a bunch of
  steps, but at every step it eliminated half of the array. So, here imagine you
  were to run a function that implemented this algorithm, it took this array of
  length eight as an input. And the first thing that it did is cut the array in
  half.

    [0, 1, 2, 3] ///////////


  And it said, you know what, this whole right half here, I am just not going to
  look at it and then the next step that it did is, it took the resulting array
  of length four and it cut it in half, here. 

    [0, 1] /////


  And it said, Okay, so I am going to eliminate, again, the right side, for what
  ever reason, let us arbitrarily eliminate the right side. And then it did the
  same thing. We are going to cut again the array, and we are going to eliminate
  the right side.

    [0] //


  So, now we are left with zero, and we perform something on zero. So, as you 
  saw we had an array of length N, and array of length eight. At every step of
  the way, we cut that array in half. And so in total the amount of operations
  that we performed with this algorithm, on our original array, is basically
  equal to log of N, or in this case log of eight. 

  Remember, log of eight is equal to three. And HERE we performed THREE
  operations, we cut the array in half, cut the array in half, and then cut the
  array in half. Basically at every point in the algorithm, we were eliminating
  half the input. Take this array of length eight again. 

    [0, 1, 2, 3, 4, 5, 6, 7]


  Now imagine we double this array! We double it to 16, right? We double the
  length of the input and we apply the exact same algorithm on this new doubled
  array. The only extra operation that we are going to do is the one where we
  split the array in half here and eliminate this half. 

    [0, 1, 2, 3, 4, 5, 6, 7] ////////////////////////]


  So, this entire half that we doubled, we basically eliminate it in one
  operation. That means as the input increases, as the input doubles in size. 
  We only perform one extra operation, and that means that this algorithm, this
  random algorithm that we kind of created here, which looks a lot like
  Binary Search ;) means that this this algorithm has a time complexity of log
  of N. 

  The number of operations that we perform with this algorithm, increases only
  by one asa we double the size of the input. So, it roughly maps to log of N.

*/