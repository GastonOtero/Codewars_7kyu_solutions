/*
DESCRIPTION:

Complete the function/method so that it returns the url with anything after the 
anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

// My solution:

function removeUrlAnchor(url){
    let ind = url.indexOf(url.match(/#/));
    if (ind >= 0) {
      return url.slice(0, ind);
    } 
    return url;
  }