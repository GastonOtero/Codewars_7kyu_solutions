/*
DESCRIPTION:

Find the total sum of internal angles (in degrees) in an n-sided simple 
polygon. N will be greater than 2.
*/

// My solution:

function angle(n) {
    return n === 3 ? 180 : (n - 2) * 180;
  }

// Turns out you don't even need the ternary:

function angle(n) {
    return (n - 2) * 180;
  }