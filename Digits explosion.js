/*
DESCRIPTION:

Given a string made of digits [0-9], return a string where each 
digit is repeated a number of times equals to its value.

Examples
explode("312")
should return :

"333122"
explode("102269")
should return :

"12222666666999999999"
*/

// My solution:

function explode(s) {
    let result = ""
    for (let i = 0; i < s.length; i++){
      result += s[i].repeat(Number(s[i]));
    }
    return result;
  }

// Two more effective solutions (not mine):
// 1:

function explode(s) {
    return s.split("").map((e) => e.repeat(+e)).join("");
  }

// 2:

const explode = s => s.replace(/\d/g, d => d.repeat(d));