/*
Caesar Cipher Encryptor:
  Given a non-empty string of lowercase letters and a non-negative integer 
  representing a key, write a function that returns a new string obtained by
  shifting every letter in the input string by k positions in the alphabet,
  where k is the key.

  Note that letters should 'wrap' around the alphabet; in other words, the 
  letter 'z' shifted by one returns the letter 'a'.

Sample Input:
  string = 'xyz'
  key = 2

Sample Output:
  'zab'

*/


const caesarCipherEncryptor = (string, key) => {

}


// 1st Attempt, solved on my own!
const caesarCipherEncryptor = (string, key) => {
  let array = string.split('');
  let chars = 'abcdefghijklmnopqrstuvwxyz'.split('');

  array.forEach((char, i) => {
    let idx = chars.indexOf(char);
    let newIdx = (idx + key) % chars.length;
    array[i] = chars[newIdx];
  })

  return array.join('');
};


// After explanation
// O(N) Time | O(N) Space
const getNewLetter = (letter, key) => {
  const newLetterCode = letter.charCodeAt() + key;
  return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122));
}

const caesarCipherEncryptor = (string, key) => {
  const newLetters = [];
  const newKey = key % 26;

  for (const char of string) {
    newLetters.push(getNewLetter(char, newKey));
  }

  return newLetters.join('');
}

// O(N) Time | O(N) Space
const getNewLetter = (letter, key, alphabet) => {
  let newLetterCode = alphabet.indexOf(letter) + key;
  return newLetterCode <= 25 ? alphabet[newLetterCode] : alphabet[newLetterCode % 26];
}

const caesarCipherEncryptor = (string, key) => {
  let newLetters = [];
  let newKey = key % 26;
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for (let char of string) {
    newLetters.push(getNewLetter(char, newKey, alphabet));
  }

  return newLetters.join('');
}