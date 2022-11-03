/*
DESCRIPTION:

Your task is to write function factorial.
*/

// My solution:

function factorial(n){
    return n === 1 || n === 0 ? 1 : n * factorial(n - 1);
  }