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