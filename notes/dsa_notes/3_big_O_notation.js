/*
Big O Notation:
  Time complexity and space complexity actually measure how the speed of an
  algorithm or the extra memeory an algorithm takes up, how these two things
  change as the size of the input of the algorithm increases. These complexities
  are expressed asymptotically using Big O Notation.

  When we are dealing with Big O Notataion, the unit, at least for Time
  Complexity is going to be the number of elementary operations that we are
  performing. With Space Complexity, it might be something along the lines of
  the number of memory slots that we are using up.

  But, the key thing with asymptotic analysis is that when we are dealing with
  constant factors, we always bring them down to one, we do not care about a
  constant factor that is greater than one bc the point is, it remains constant
  as the size of the input increases. So there is no such thing as O of eight or
  O of 16 or O of 20, it is always O of one.

  This explains conceptually why the fact that we have integerss that might be
  stored using eight bytes in memory or four bytes, does not really matter
  dealing with a single integer still remains an O of one operation or a single
  integer still takes up only O of one space.

  Also, when we have more complex Big O expressions, like O of n squared plus n,
  we alwauys drop the smaller terms bc these smaller terms become insignificant
  as n tends toward infinity.

*/

/*
Different Asmyptotic Analysis:
  O(1)
  O(log(n))
  O(n)
  O(nlog(n))
  O(n^2), O(n^2), O(n^4)
  O(2^n) -> 2*2*2....2
  O(n!) -> n * (n-1) * (n-2) ...

*/

/* 
Big O Notation
  The speed and memory usage of an algorithm are not necessarily fixed; they
  might change depending on the input. So how do we express the performance of
  an algorithm then?

  Enter Big O Notation, a powerful tool that allows us to generalize the
  space-time complexity of an algorithm as a function of ints input size.

  The notion used to describe the 'time complexity' and 'space complexity' of
  algorithms.

  Variables used in Big O notation denote the sizes of inputs to algorithms. For
  example, 'O(n)' might be the time complexity of an algorithm that traverses
  through an array of length 'n'; similarly, 'O(n + m) might be the time
  complexity of an alogrithm that traverses through an array of length 'n' and
  through a string of length 'm'.

  The following are examples of common complexities and their Big O notations,
  ordered from fastest to slowest:
    * Constant : O(1)
    * Logarithmic : O(log(n))
    * Linear : O(n)
    * Log-linear : O(nlog(n))
    * Quadratic : O(n^2)
    * Cubic : O(n^3)
    * Exponential : O(2^n)
    * Factorial : O(n!)


  Note that in the context of coding interviews, Big O notation is usually
  understood to describe the 'worst-case' complexity of an algorithm, even 
  though the worst-case complexity might differ from the 'average-case' 
  complexity.

  For example, some sorting algorithms have different time complexities
  depending on the layout of elements in their input array. In rare cases, their
  time complexity will be much worse than in more common cases. Similarly, an
  algorithm that takes in a string and performs special operations on uppercase
  characters might have a different time complexity when run on an input string 
  of only uppercase characters vs. on an input string with just a few uppercase
  characters.

  Thus, when describing the time complexity of an algorithm, it can sometimes be
  helpufl to specify whether the time complexity refers to the average case or to
  the worse case (e.g., "this algorithm runs in O(nlog(n)) time on average and 
  in O(n^2) time in the worst case").


*/