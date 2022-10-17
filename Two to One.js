/*
DESCRIPTION:

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, 
he longest possible, containing distinct letters - each taken only once - coming from s1 
or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// My solution:

function longest(s1, s2) {
    return [...s1, ...s2].sort().filter(function(x, n, s) {return s.indexOf(x) == n}).join('');
  }

// Solution with sets (not mine):

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')