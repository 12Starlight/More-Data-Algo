/*
Tournament Winner

Explanation:

There is an algorithm tournament taking place in which teams of programmers
compete against each other to solve algorithmic problems as fast as possible.
Teams compete in a round robin, where each team faces off against all other
teams. Only two teams compete against each other at a time, and for each 
competition, one team is designated the home team, while the other team is the
away team. In each competition there is always one winner and one loser; there
are no ties. A team receives 3 points, if it wins and 0 points, if it loses. The
winner of the tournament is the team that receives the most amount of points.

Given an array of pairs representing the teams that have competed against each
other and an array containing the results of each competition, write a function
that returns the winner of the tournament. The input arrays are named
'competitions' and 'results', respectively. The 'competitions' array has 
elements in the form of '[homeTeam, awayTeam]', where each team is a string of
at most 30 characters representing the name of the team. The 'results' array 
contains information about the winner of each corresponding competition in the
'competitions' array. Specifically, 'results[i]' denotes the winner of
'competitions[i]', where '1' in the 'results' array means that the home team in
the corresponding competition won and a '0' means that the away team won.

It is guarenteed that exactly one team will win the tournament and that each
team will compete against all other teams exactly once. It is also guarenteed
that the tournament will always have at least two teams.


Sample Input:

competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
]

results = [0, 0, 1]

*/


/* 
11/13/2021
Solution: My version
Time Complexity: O(n) time : O(k) space


Concept:
Use a HashTable data structure to store all of the competition winners along
with their scores. Then to optimize this algorithm create another string data
structure to store the team with highest score. Add this as a property key and
assign it a value of 0.

Iterate through the results array keeping track of the index at each iteration.
Then take the value of that index and use it inside the competitions array which
is made up of elements that each contain an array with two teams. This value in
the results array will be used to extract the winning team.

Create a condition that translates the results array to the correct
correspoinding index value in the competitions array. Then use this to get the
correct winner inside the competitions array element which contains another
array.

At each iteration, check whether the winning team in the competitions array
element which contains an array with a pair of teams, check if this winning team
exists in the HashTable as a property key. If it does not exist as a key, then
add it to the HashTable and assign it to a value of 3. If it does exist then 
using addition, add 3 to the existing value.

Also, at each iteration check whether the bestScore is less than the current
winning team value. If the bestScore is less, than update it's value to be the
current property key name representing the winning team.

Return the name of the team with the highest score.


Sudo:

Create HashTable and initialize it with a property key bestScore. Then assign it
a value of 0.
Create a bestScore variable and assign it an empty string "".

Create a for loop and iterate through the results array.
  Create a variable winner.
  Create a conditional that checks value at each iteration to see if it is 0.
    If it is true, assign 1 to winner to represent the winner being the awayTeam
    which is at index 1.
    
    Else, assign 0 to winner to represent the winner being the the homeTeam
    which is at index 0.

  Create a conditional that checks the bestScore value property in the scores 
  HashTable to see if it is less than the current winning team value.
    If it is true, assign the current team name to bestScore.

Return the bestScore


Edge Case:

The competitions array can contain only one pair of teams. A team can be a
single character.

*/

// Tournament Winner
// Inputs : competitions, results
// Edge : May only have one pair of teams, each team can be a single character

const tourCompArr = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
];

const tourResultsArr = [0, 0, 1];

const tournamentWinner = (competitions, results) => {
  let bestScore = "";
  let scores = {[bestScore]: 0};

  for (let i = 0; i < results.length; i++) {
    let winner;
    if (results[i] === 0) {
      winner = 1;
    } else {
      winner = 0;
    }

    if (!scores.hasOwnProperty(competitions[i][winner])) {
      scores[competitions[i][winner]] = 3;
    } else {
      scores[competitions[i][winner]] += 3;
    }

    if (scores[bestScore] < scores[competitions[i][winner]]) {
      bestScore = competitions[i][winner];
    }
  }

  console.log("\n\nTournament Winner : O(n) time complexity: O(k) space complexity\n");
  return bestScore;
}

// Test
console.log(tournamentWinner(tourCompArr, tourResultsArr));
