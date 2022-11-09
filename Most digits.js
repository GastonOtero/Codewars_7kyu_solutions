/*
DESCRIPTION:

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return 
the first one in the array.
*/

// My solution:

function findLongest(array){
    let lengths = array.map(x => x.toString().length);
    let longest = Math.max(...lengths);
    return array[lengths.indexOf(longest)];
  }