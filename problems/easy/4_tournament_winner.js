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

/*
Date: 11/14/2021
Solution: Algo Experts Version
Time Complexity: O(n) time : O(k) space


Concept:
Use a CONSTANT to make the code more readable and take advantage of the 
JavaScript libary's forEach Array method. 

Loop through the competitions array using each iteration index value to keep
track of the elements in the results array. Then decompose the competitions 
element which also contains an array to get the first and second elements 'home',
and 'away'.

Create a conditional that indentifies the winning team and assigns the proper
index value accordingly. Note, this could be also made into a separate function.

Use the function updateScores(par1, par2, par3) created that takes in three parameters, 'team', 'points', and
'scores' to check, if the winning team has been assigned the the scores data
structure HashTable or not. If it has not, assign it the number 3 to handle the
edge case of single competitions. If it has, then using addition add 3 to the 
existing value.

Create a conditional to check to see, if the best team is less than the 
current winning team. If it is less, assign the winning team name to the best
team.

Return the best team name.

Define the function created above


Sudo:

Create CONSTANT and assign it the value of 1

Define a function with two parameters, 'competitions', 'results'.
  Create a variable bestTeam and assign it an empty string ''.
  Create a scores data structure and initialize it with the property of bestTeam
  and assign it the value of 0.

  Iterate through competitions using forEach((competition, idx)) in order to
  also get access to the index value.
    Use the iteration index value to keep track of the results element. Then
    assign it to the result variable
    Decompose the competition element to get access to the first and second
    element 'home' and 'away'.

    Create the variable winning team.
    Create a conditional that checks if result equals the CONSTANT.
      If it is true, assign winning team to home.

      else, assign winning team to away.
      
    Run the function updateScores(winningTeam, 3, scores).

    Create a conditional that checks if the bestTeam property value in the 
    scores HashTable data structure is less than the current winning team.
      If it is true, then assign the current winning team name to the bestTeam.

  Return best Team


Define updateScores that takes in three parameters, 'team', 'points', and
'scores'
  Create a conditional that checks, if the scores data structure HashTable does
  not have the property key name 'team'.
    If this is true, add that property key name to the scores HashTable and
    assign it the value of 3 to account for the edge case that their might only
    be 1 competition.

    else, use addition to add 3 to the existing property value.


Edge Case:

There can be only a single competition and teams can have only one character for
their names.

*/

HOME_TEAM_WON = 1;

const tournamentWinnerAE = (competitions, results) => {
  let bestTeam = '';
  const scores = {[bestTeam]: 0};

  competitions.forEach((competition, idx) => {
    const result = results[idx];
    const [home, away] = competition;

    let winning;
    if (result === HOME_TEAM_WON) {
      winning = home;
    } else {
      winning = away;
    }

    updateScores(winning, 3, scores);

    if (scores[bestTeam] < scores[winning]) {
      bestTeam = winning;
    }
  });

  console.log("\n\nTournament Winner Algo Experts : O(n) time complexity: O(k) space complexity\n")
  return bestTeam;
}

// Helper function
const updateScores = (team, points, scores) => {
  if (!scores.hasOwnProperty(team)) {
    scores[team] = 3;
  } else {
    scores[team] += points;
  }
}

// Test 
console.log(tournamentWinnerAE(tourCompArr, tourResultsArr));