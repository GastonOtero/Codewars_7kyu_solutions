/*
DESCRIPTION:

In this Kata, you will be given a string that may have mixed uppercase 
and lowercase letters and your task is to convert that string to either 
lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, 
convert the string to lowercase.

For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the 
"D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the 
"e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/

// My solution (behold, the nested ternaries from hell):

function solve(s){
    let lower = s.match(/[a-z]/g);
    let upper = s.match(/[A-Z]/g);
    return lower.length == s.length || upper.length == s.length ? s : lower.length >= upper.length ? s.toLowerCase() : s.toUpperCase(); 
}

// A smarter approach (not mine):

const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()