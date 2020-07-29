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

/*
  Another classic example of log of N run time algorithm is one where, instead
  of dealing with an array that you are cutting in half every time, you are
  dealing with a Binary Tree that you are cutting in half every time. Now here
  I am jumping the gun a little bit with respect to Binary Trees bc they will
  be covered in a different section. 

  But, very quickly you can imagine this structure called a Binary Tree, that
  looks like a tree, where every element in the structure has two children
  elements, that kind of look like a tree, if you write them out like this. 

                        O
                   /         \
                  o           o
                /   \       /   \
              o      o     o     o
             / \    / \   / \   / \
            o   o  o   o o   o o   o


  You can see here we kind of have two children elements whenever we go down one
  level, and here if we had an algorithm that worked to eliminate half of the
  tree every time. Let us say we start up here. Let us say this is almost like a
  maze where maybe at the beginning of the maze we have to pick a path every
  time. 
  
  We start at the top, if we pick to go down this path, we are affectively
  eliminating this entire path here. So, now we are here.

                  |      //
                  V      /////
                  o      //////
                /   \    ////////   
              o      o   /////////   
             / \    / \  ///////////
            o   o  o   o ////////////


  If we pick to go down this path now, we are effectively eliminating this
  entire left path. 

                        ////
                     /////////
                   ////////////
                 ////////////////
               ////  o   /////////
             /////  / \  ///////////
            /////  o   o ////////////


  Then if we pick to go down this path, we are efftively eliminating this entire
  path here. 

                        ////
                     /////////
                   ////////////
                 ////////////////
               ////////////////////
             ///////////////////////
            ////// o ////////////////


  And so you can see how with this structure, every node has two children, you
  have to assume that. That is what is called a Balanced Binary Tree. Then going
  down this tree where you eliminate half of the nodes at every level, would be
  an algorithm that runs in log of N time. 

  And so you can really think of algorithms that have a Time Complexity, and by
  the way the same is true for Space Complexity, but that have a Time Complexity
  of log of N, you can really think of them intuitively either by asking 
  yourself am I eliminating half of the input at every step of my function? 

  Am I bsically cutting down the size of my input in half every step of the way?
  If YES, then I am basically dealing with the log N Time Complexity. Assuming I
  am not performing auxiliary operations at every step, bc that might increase
  my Time Complexity. 

  And similarly you can also ask yourself, if I double the size of my input am I
  only going to be performing one extra operation? So, if the tree here, it
  turns out that one of the properties of trees is that at the very bottom level
  of a tree, you actually have roughly half of the nodes in the ENTIRE tree at
  the very BOTTOM, if you are deaaling agian, with a perfect tree that has the
  same amount of nodes at every node, the same amount of children nodes. 

  And so you can imagine, that if you were to double the size of this tree, you
  would be adding basically an entire new level down here, right? You would be
  doubling the nodes down here. But, all that you would be doing here, would be
  performing one extra operation, bc again, you would start at the top here, you
  would still eliminate the entire right half of the tree. Let us say you were
  eliminating the right. 

  And eventually you find yourself down at the bottom node again. And you do one
  more operation where you eliminate half, probably you eliminate this right
  half, and you end at the bottom most left node (or so). 

*/              