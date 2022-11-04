/*
DESCRIPTION:

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

// My solution (bear with me, I know it´s hideous):

unction isSortedAndHow(array) {
    let sorted = array.slice().sort((a, b) => a - b);
    let reversed = sorted.slice().reverse();
    return JSON.stringify(array) === JSON.stringify(sorted) ? "yes, ascending" : JSON.stringify(array) === JSON.stringify(reversed) ? "yes, descending" : "no";
  }

// A more effective approach (not mine):

function isSortedAndHow(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
           arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
  }