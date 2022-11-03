/*
DESCRIPTION:

Your task is to remove all duplicate words from a string, leaving only single (first) 
words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

// My solution:

function removeDuplicateWords (s) {
    let arrayString = s.split(' ');
    let setString = new Set(arrayString);
    return Array.from(setString).join(' ')
  }